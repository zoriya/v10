import { computed, peek } from "../../core/signals/primitives.js";
import { defineBehavior } from "../../core/composition/create-composition.js";
import { createMachineReactor } from "../../core/reactors/create-machine-reactor.js";
import { isResolvedPresentation } from "../../media/types/index.js";
import { getTracksByType } from "../../media/utils/tracks.js";
import { getCdnId } from "../../media/utils/cdn.js";
import { DEFAULT_BANDWIDTH_CONFIG, getBandwidthEstimate } from "../../network/bandwidth-estimator.js";
import { DEFAULT_QUALITY_CONFIG, resolutionArea } from "../../media/abr/quality-selection.js";
import { matchesPartialTrack, pickTextTrackFromTracks } from "../../media/primitives/select-tracks.js";
//#region src/playback/behaviors/track-switching.ts
/**
* **Per-type track selection as a rule chain.** While a presentation is
* resolved, owns that type's `selected{Video,Audio,Text}TrackId` signal: pick a
* default, react to user intent and algorithmic ranking, and clear it on src
* unload.
*
* Selection runs in two stages. First a **hard-constraints pre-pass**
* (`applyConstraints`) prunes the unplayable from the candidate set — the
* failed-CDN constraint (`excludeFailedCdns`, failover cooldown) and the
* capability constraint (`excludeUnplayableTracks`, codec support). Then a small
* ordered chain of rules (`applyRules`) picks among the survivors. Each constraint/rule reads the signals it needs at apply
* time, so the effect subscribes to exactly what was consulted. The chain is
* three rules, most authoritative first:
*
*   1. **user intent** — a soft filter on `user*TrackSelection`: narrow to the
*      partial-track match; an empty match falls through to the full set.
*   2. **active CDN** — a soft filter on `cdnPriority` (`preferActiveCdn`):
*      narrow to the highest-priority CDN that still has tracks; an empty match
*      falls through. Shared by video and audio, so every type stays on one CDN
*      (`deriveCdnPriority` owns the list). No-op for non-redundant sources.
*   3. **ranking** — the terminal sort: `rankByBandwidth`, shared by video and
*      audio. Fitting tracks (within the throughput threshold) first, highest
*      bitrate first; over-throughput tracks after, least-over first. Hysteresis
*      via boosting the current track's sort weight by `upgradeMargin`.
*
* The composer's early-bail (one survivor → stop) is load-bearing: a user
* selection that narrows to a single track is the pick without the ranker
* running, so the bandwidth estimate is never read and the effect doesn't
* re-fire on bandwidth while that choice holds.
*
* Lifecycle: `'presentation-unresolved'` ↔ `'presentation-resolved'`. The
* resolved state owns the signal; its entry-returned cleanup clears it on exit
* (canonical cleanup-binds-to-setup per `reactors.md`).
*
* The pick is the chain's result mapped to a slot value by `resolveSelection`
* (default: the head, `applyRules(...)[0]`). Each variant supplies its
* **constraints + rule chain (+ optional resolveSelection)** via config;
* `setupTrackSwitching` owns only the lifecycle and runs what it's given. Video
* and audio run constraints `[excludeFailedCdns, excludeUnplayableTracks]` then
* rules `[filterByUserSelection, preferActiveCdn, rankByBandwidth]` and take the
* head; `switchVideoTrack` also accepts ABR tuning config, `switchAudioTrack`
* takes none. `switchTextTrack` differs — selection is *optional* (captions are
* opt-in / off-able), so it runs `[excludeFailedCdns]` + `[preferActiveCdn]` and
* supplies a text terminal (`pickResolvedTextTrack`) that resolves standing user
* intent (`userTextTrackSelection`, incl. `'off'`) and may yield no selection.
* (The active-CDN *scope* is the sticky-pick half of multi-CDN; the failed-CDN
* *constraint* is the failover half — prune the cooled-down CDN, the scope falls
* to the next.)
*
* When the pre-pass prunes a type's candidates to empty, the behavior leaves any
* prior pick in place and makes no new pick; the late `createSourceBuffer` check
* stays as the structural backstop for an unplayable rendition reaching the
* pipeline. Surfacing "nothing playable" as observable state is deferred until a
* consumer (error mapping) needs it.
*
* Deferred: audio's preferred-language / default-track selection as standing
* soft-filter rules (previously the empty-slot picker, dropped in the move to
* the rule chain).
*/
/** Default initial-bandwidth value before bandwidth measurements arrive. */
const DEFAULT_INITIAL_BANDWIDTH = 5e6;
/**
* Apply rules to a candidate list in order; the pick is the first survivor.
* Two responsibilities the rules don't carry: a rule that returns nothing is
* skipped (fall-through — a preference never empties the set), and once one
* survivor remains the chain stops (early-bail — later rules, including the
* bandwidth ranker, never run, so the effect doesn't subscribe to their
* signals while the choice is fixed).
*
* @param rules - Rules to apply, most authoritative first
* @param tracks - Candidate tracks
* @param deps - The behavior's `{ state, context, config }`, passed through to each rule
* @returns The surviving candidates, pick first
*/
function applyRules(rules, tracks, deps) {
	let current = tracks;
	for (const rule of rules) {
		const remaining = rule(current, deps);
		if (remaining.length === 0) continue;
		current = remaining;
		if (current.length === 1) break;
	}
	return current;
}
/**
* Apply hard constraints to a candidate list — the pre-pass that runs before the
* rule chain. A constraint shares a rule's signature but its exclusion is
* *hard*: it removes the unplayable (a codec the environment can't decode, a CDN
* in failover cooldown) and a removed track is never attempted. Unlike
* `applyRules`, this never skips an empty result and never early-bails — every
* constraint always applies, and an empty survivor set is a real outcome
* ("nothing playable here"), not a fall-through. Because each constraint only
* removes, the order they run in can't change the result.
*
* @param constraints - Constraints to apply (pooled, order-independent)
* @param tracks - Candidate tracks
* @param deps - The behavior's `{ state, context, config }`, passed to each constraint
* @returns The playable survivors (possibly empty)
*/
function applyConstraints(constraints, tracks, deps) {
	let current = tracks;
	for (const constraint of constraints) current = constraint(current, deps);
	return current;
}
/**
* User intent — a soft filter. Narrows to tracks matching the partial-track
* selection in `user*TrackSelection`; an empty match falls through (the
* composer skips it) to the unfiltered set — e.g. a stale id from a previous
* source.
*/
function filterByUserSelection(tracks, { state, config }) {
	const key = config.userSelectionKey;
	if (!key) return tracks;
	const filter = state[key]?.get();
	return filter ? tracks.filter((track) => matchesPartialTrack(track, filter)) : tracks;
}
/**
* Failed-CDN constraint — a *hard* filter (constraints pre-pass), shared by
* video and audio. Removes tracks served from a CDN currently in failover
* cooldown (`failedCdns`, written by the failover monitor). Removed tracks are never
* attempted; the scope then narrows to the next surviving CDN in `cdnPriority`,
* and snaps back to the primary once it leaves cooldown.
*
* Passes everything through when there's no `failedCdns` signal/value. When it
* prunes *every* track (all CDNs cooled down), the empty result is preserved
* (per `applyConstraints`) — "nothing playable," which clears the selection (no
* pick); a later CDN recovery refills the candidate set and re-picks.
*/
function excludeFailedCdns(tracks, { state, config }) {
	const failed = state.failedCdns?.get();
	if (!failed?.length) return tracks;
	const getCdnId$1 = config.getCdnId ?? getCdnId;
	const failedSet = new Set(failed);
	return tracks.filter((track) => !failedSet.has(getCdnId$1(track.url)));
}
/**
* Capability constraint — a *hard* filter (constraints pre-pass), shared by
* video and audio. Removes renditions this environment can't decode, probed via
* the injected `canPlayTrack` (codec → `MediaSource.isTypeSupported`). Moving
* the check here — before selection — means an unplayable variant (e.g. HEVC on
* a browser without HEVC) is pruned upstream and never picked, instead of
* surviving into the pipeline to fail late at `createSourceBuffer`. That late
* throw stays as a defensive structural guarantee; with this constraint it
* should rarely fire.
*
* Passes everything through when there's no `canPlayTrack` probe (a composition
* that didn't wire it, or DOM-free tests). When it prunes *every* track (no
* decodable rendition), the empty result is preserved (per `applyConstraints`)
* — "nothing playable," so the behavior clears the selection (no pick) and the
* late `createSourceBuffer` check stays as the backstop.
*/
function excludeUnplayableTracks(tracks, { config }) {
	const canPlay = config.canPlayTrack;
	if (!canPlay) return tracks;
	return tracks.filter((track) => canPlay(track));
}
/**
* Active-CDN scope — a soft filter, shared by video and audio. Narrows to the
* highest-priority CDN in `cdnPriority` (owned by `deriveCdnPriority`) that
* still has tracks, so every track type stays on one CDN. A redundant-streams
* source lists the same renditions on multiple hosts; this keeps the pick on one
* host rather than letting the ranker drift across them.
*
* "Active" is derived, not stored: constraints run before the rule chain, so a
* failed CDN's tracks are already pruned by the time this runs — "first CDN with
* survivors" *is* the active CDN, and it falls through to the next on failover
* (and snaps back to the primary when it recovers). Content steering reorders
* `cdnPriority`; this rule just honors the order.
*
* Soft-filter semantics: passes through when there's no `cdnPriority` signal/value
* (no preference) or when nothing matches (`applyRules` skips an empty result).
* Non-redundant sources have one CDN, so the narrow is a no-op.
*
* The CDN-id derivation defaults to origin-based `getCdnId`, overridable via the
* `getCdnId` config — it must match the one `deriveCdnPriority` used to build
* `cdnPriority`, or no track's CDN would ever equal an entry.
*/
function preferActiveCdn(tracks, { state, config }) {
	const cdnPriority = state.cdnPriority?.get();
	if (!cdnPriority?.length) return tracks;
	const getCdnId$2 = config.getCdnId ?? getCdnId;
	for (const cdn of cdnPriority) {
		const tracksUsingCdn = tracks.filter((track) => getCdnId$2(track.url) === cdn);
		if (tracksUsingCdn.length) return tracksUsingCdn;
	}
	return tracks;
}
/**
* Bandwidth ranking — the terminal sort, shared by video and audio. Orders by
* the throughput estimate: tracks within the bandwidth threshold first
* (fitting), highest bitrate first; then over-threshold tracks, least-over
* first. The head is the best-quality track that fits, falling back to the
* smallest over-throughput track when nothing fits.
*
* Hysteresis without temporal state: the current track's effective bitrate is
* boosted by `upgradeMargin` in the fitting sort, so a higher track only
* outranks it once it clears `current.bitrate * upgradeMargin` (no flapping on
* marginal bandwidth gains). Downgrades fall out for free — a current track
* over the threshold isn't in the fitting set to be boosted, so the best fit (a
* downgrade) wins immediately. Equal-bitrate tracks break by resolution (higher
* `width × height` first), so an equal-bitrate ladder never picks a lower-
* quality rendition by manifest order; audio tracks carry no dimensions, so
* they area-compare equal and a stable sort keeps their candidate order (e.g.
* same-bitrate language variants). Early-bail skips this rule when a prior one
* narrowed to a single track, so the estimate is neither read nor subscribed
* while that holds.
*/
function rankByBandwidth(tracks, { state, config }) {
	const safetyMargin = config.quality?.safetyMargin ?? DEFAULT_QUALITY_CONFIG.safetyMargin;
	const upgradeMargin = config.quality?.upgradeMargin ?? DEFAULT_QUALITY_CONFIG.upgradeMargin;
	const initialBandwidth = config.initialBandwidth ?? 5e6;
	const bandwidthConfig = {
		...DEFAULT_BANDWIDTH_CONFIG,
		...config.bandwidth
	};
	if (!state.bandwidthState) console.debug("[track-switching] rankByBandwidth: no bandwidthState signal in composition; ranking on initialBandwidth");
	const threshold = getBandwidthEstimate(state.bandwidthState?.get(), initialBandwidth, bandwidthConfig) * safetyMargin;
	const currentId = state[config.selectionKey].get();
	const bitrate = (track) => track.bandwidth ?? 0;
	const rank = (track) => track.id === currentId ? bitrate(track) * upgradeMargin : bitrate(track);
	const fitting = tracks.filter((track) => bitrate(track) <= threshold).sort((a, b) => rank(b) - rank(a) || resolutionArea(b) - resolutionArea(a));
	const over = tracks.filter((track) => bitrate(track) > threshold).sort((a, b) => bitrate(a) - bitrate(b) || resolutionArea(b) - resolutionArea(a));
	return [...fitting, ...over];
}
/**
* Default final pick: the chain head. `applyRules` never narrows to nothing and
* early-bails to a single survivor, so video and audio always converge to a
* track and the head is the pick.
*/
function selectChainHead(candidates) {
	return candidates[0].id;
}
/**
* Terminal pick for text — the `resolveSelection` the text variant supplies.
* Resolves the standing `userTextTrackSelection` intent against the chain's
* survivors (already CDN-failover-pruned and active-CDN-scoped):
*
*   - `'off'` → no selection (clear the slot). Sticky through re-evaluation, so a
*     live refresh or failover re-run can't re-assert a default.
*   - explicit `Partial<TextTrack>` → narrow to the match (language-based). A
*     stale pick whose match is gone (e.g. the language dropped on a source
*     change) falls through to the default policy.
*   - auto (`undefined`) → the opt-in default policy (`preferredSubtitleLanguage`
*     → `DEFAULT=YES + AUTOSELECT=YES` → none), shared with `pickTextTrack`.
*
* Returning `undefined` is a real outcome (captions are opt-in), which is why the
* text variant relies on `setupTrackSwitching`'s no-selection seam.
*/
function pickResolvedTextTrack(candidates, { state, config }) {
	const intent = state.userTextTrackSelection?.get();
	if (intent === "off") return void 0;
	if (intent) {
		const matched = candidates.filter((track) => matchesPartialTrack(track, intent));
		if (matched.length) return matched[0].id;
	}
	return pickTextTrackFromTracks(candidates, config);
}
function setupTrackSwitching(deps) {
	const { state, config } = deps;
	const { selectionKey, getTracks, rules, resolveSelection = selectChainHead } = config;
	const derivedStateSignal = computed(() => isResolvedPresentation(state.presentation.get()) ? "presentation-resolved" : "presentation-unresolved");
	const candidateSet = computed(() => {
		const presentation = state.presentation.get();
		if (!isResolvedPresentation(presentation)) return [];
		return applyConstraints(config.constraints ?? [], getTracks(presentation), deps);
	}, { equals: (a, b) => a.length === b.length && a.every((track) => b.some((other) => other.id === track.id)) });
	return createMachineReactor({
		initial: "presentation-unresolved",
		monitor: () => derivedStateSignal.get(),
		states: {
			"presentation-unresolved": {},
			"presentation-resolved": {
				entry: () => () => state[selectionKey].set(void 0),
				effects: [() => {
					const tracks = candidateSet.get();
					if (!tracks.length) {
						const presentation = peek(state.presentation);
						if (isResolvedPresentation(presentation) && getTracks(presentation).length > 0) {
							console.error(`[track-switching] every ${selectionKey} candidate was filtered out by constraints; clearing selection`);
							state[selectionKey].set(void 0);
						}
						return;
					}
					const candidates = applyRules(rules, tracks, deps);
					if (!candidates.length) {
						console.error("[track-switching] applyRules returned no candidates");
						return;
					}
					state[selectionKey].set(resolveSelection(candidates, deps));
				}]
			}
		}
	});
}
/**
* Manage `selectedVideoTrackId`: pick a default on src load, dynamically
* adjust based on bandwidth, clear on src unload. Honors
* `userVideoTrackSelection` as a partial-track constraint on candidates;
* short-circuits ABR when the constraint narrows to a single track.
*
* @example
* const reactor = switchVideoTrack.setup({ state });
*/
const switchVideoTrack = defineBehavior({
	stateKeys: ["presentation", "selectedVideoTrackId"],
	contextKeys: [],
	setup: ({ state, config, ...otherProps }) => setupTrackSwitching({
		...otherProps,
		state,
		config: {
			...config,
			selectionKey: "selectedVideoTrackId",
			userSelectionKey: "userVideoTrackSelection",
			getTracks: (presentation) => getTracksByType(presentation, "video"),
			constraints: [excludeFailedCdns, excludeUnplayableTracks],
			rules: [
				filterByUserSelection,
				preferActiveCdn,
				rankByBandwidth
			]
		}
	})
});
/**
* Manage `selectedAudioTrackId`: pick a default on src load, narrow by
* `userAudioTrackSelection` filter, re-pick on filter change, clear on
* src unload.
*
* Mid-stream flush on language switch is handled by the segment-loader's
* `planTasks` (see `playback/actors/dom/segment-loader.ts`) — not this
* behavior. Same split as the video pipeline: slot owner writes; loader
* orchestrates segment + flush plans.
*
* @example
* const reactor = switchAudioTrack.setup({ state });
*/
const switchAudioTrack = defineBehavior({
	stateKeys: ["presentation", "selectedAudioTrackId"],
	contextKeys: [],
	setup: ({ state, config, ...otherProps }) => setupTrackSwitching({
		...otherProps,
		state,
		config: {
			...config,
			selectionKey: "selectedAudioTrackId",
			userSelectionKey: "userAudioTrackSelection",
			getTracks: (presentation) => getTracksByType(presentation, "audio"),
			constraints: [excludeFailedCdns, excludeUnplayableTracks],
			rules: [
				filterByUserSelection,
				preferActiveCdn,
				rankByBandwidth
			]
		}
	})
});
/**
* Manage `selectedTextTrackId` as the single-writer **output** of standing user
* intent (`userTextTrackSelection`) resolved against the playable, CDN-scoped
* text renditions: clear on src unload; re-resolve when a CDN fails or recovers.
*
* Unlike video/audio, the selection is *optional* — captions are opt-in and the
* user can turn them off — so the chain skips the bandwidth ranker and the shared
* user-selection filter, and supplies a text-specific terminal
* (`pickResolvedTextTrack`) that may resolve to no-selection via
* `setupTrackSwitching`'s `resolveSelection` seam. Constraints are failed-CDN only
* (`excludeUnplayableTracks`/`canPlayTrack` is MSE-based — the wrong probe for
* text, whose playability is SPF-parser support); the active-CDN scope co-locates
* captions with the surviving CDN on failover.
*
* @example
* const reactor = switchTextTrack.setup({ state, config: { preferredSubtitleLanguage: 'en' } });
*/
const switchTextTrack = defineBehavior({
	stateKeys: ["presentation", "selectedTextTrackId"],
	contextKeys: [],
	setup: ({ state, config, ...otherProps }) => setupTrackSwitching({
		...otherProps,
		state,
		config: {
			...config,
			selectionKey: "selectedTextTrackId",
			getTracks: (presentation) => getTracksByType(presentation, "text"),
			constraints: [excludeFailedCdns],
			rules: [preferActiveCdn],
			resolveSelection: pickResolvedTextTrack
		}
	})
});
//#endregion
export { DEFAULT_INITIAL_BANDWIDTH, applyConstraints, applyRules, setupTrackSwitching, switchAudioTrack, switchTextTrack, switchVideoTrack };

//# sourceMappingURL=track-switching.js.map
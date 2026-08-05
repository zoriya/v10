import { update } from "../../core/signals/primitives.js";
import { createMachineReactor } from "../../core/reactors/create-machine-reactor.js";
import { isResolvedPresentation } from "../../media/types/index.js";
import { findTrackById } from "../../media/utils/tracks.js";
//#region src/playback/behaviors/establish-start-media-time.ts
/**
* A single type's own media-timeline origin:
* `baseMediaDecodeTime/timescale − segmentStartTime` (the `segmentStartTime` term
* makes it the stream origin even when the first loaded segment isn't the 0th).
* `undefined` until timescale + baseMediaDecodeTime + segmentStartTime are all present.
*/
function ownOrigin(data) {
	const { timescale, baseMediaDecodeTime, segmentStartTime } = data ?? {};
	return timescale != null && baseMediaDecodeTime != null && segmentStartTime != null ? baseMediaDecodeTime / timescale - segmentStartTime : void 0;
}
/** Snap a below-threshold (incl. negative) origin to `0` so it isn't relocated. */
function thresholdOrigin(origin) {
	return origin < 1 ? 0 : origin;
}
/**
* The **default** — relocate the whole presentation by one shared origin: the `min`
* across the *selected* A/V tracks' own origins, denormalized onto every type. This
* single reduce subsumes the "per-type" and "shared" tiers:
* - **aligned A/V** — `min` equals each origin (they're equal), so it matches per-type;
* - **skewed A/V** (e.g. Apple's 44ms audio-lead) — `min` keeps every track's earliest
*   DTS ≥ 0 (relocating by ≤ each own origin never drives one negative) *and* preserves
*   the real skew (per-type would flatten it, desyncing A/V);
* - **single type / muxed** — `min` of the one origin is that origin.
*
* Returns `undefined` for every type until all *selected* types have a complete origin
* (the shared-`min` barrier). Which types must contribute is read from `ctx` (the
* selected v/a ids); with no selection context it coordinates across whatever types
* have data. A shared origin below {@link NEAR_ZERO_ORIGIN_THRESHOLD} is returned as `0`
* (native — ordinary ~0-PTS VOD isn't relocated).
*/
const deriveSharedMinStartMediaTime = (containerData, ctx) => {
	const contributingTypes = [];
	if (ctx.selectedVideoTrackId != null) contributingTypes.push("video");
	if (ctx.selectedAudioTrackId != null) contributingTypes.push("audio");
	const origins = (contributingTypes.length > 0 ? contributingTypes : Object.keys(containerData)).map((type) => ownOrigin(containerData[type]));
	if (origins.length === 0 || origins.some((origin) => origin === void 0)) return {};
	const shared = thresholdOrigin(Math.min(...origins));
	const out = {};
	for (const type of Object.keys(containerData)) out[type] = shared;
	return out;
};
/**
* Coordination-axis *off* — each type relocates by its own origin, independently. Not
* the default: it flattens real A/V skew (see {@link deriveSharedMinStartMediaTime}).
* Kept as an opt-in for compositions that know their A/V is aligned and want to skip
* the shared-`min` barrier (each type stamps as soon as its own origin is discovered).
*/
const derivePerTypeStartMediaTime = (containerData) => {
	const out = {};
	for (const [type, data] of Object.entries(containerData)) {
		const origin = ownOrigin(data);
		out[type] = origin === void 0 ? void 0 : thresholdOrigin(origin);
	}
	return out;
};
/** Stamp the derived per-track `startMediaTime` onto the model (idempotent — same reference when nothing moved). */
function stampTracks(presentation, startMediaTimes) {
	let changed = false;
	const selectionSets = presentation.selectionSets.map((selectionSet) => ({
		...selectionSet,
		switchingSets: selectionSet.switchingSets.map((switchingSet) => ({
			...switchingSet,
			tracks: switchingSet.tracks.map((track) => {
				const startMediaTime = startMediaTimes[track.type];
				if (startMediaTime === void 0 || track.startMediaTime === startMediaTime) return track;
				changed = true;
				return {
					...track,
					startMediaTime
				};
			})
		}))
	}));
	return changed ? {
		...presentation,
		selectionSets
	} : presentation;
}
function establishStartMediaTimeSetup({ state, config = {} }) {
	const derive = config.deriveStartMediaTime ?? deriveSharedMinStartMediaTime;
	const selectionContext = () => ({
		selectedVideoTrackId: state.selectedVideoTrackId?.get(),
		selectedAudioTrackId: state.selectedAudioTrackId?.get()
	});
	/** Established once the selected A/V tracks (whichever exist) carry `startMediaTime`. */
	const established = () => {
		const presentation = state.presentation.get();
		if (!isResolvedPresentation(presentation)) return false;
		const ids = [state.selectedVideoTrackId?.get(), state.selectedAudioTrackId?.get()].filter((id) => id !== void 0);
		return ids.length > 0 && ids.every((id) => findTrackById(presentation, id)?.startMediaTime !== void 0);
	};
	return createMachineReactor({
		initial: "inactive",
		monitor: () => {
			if (!isResolvedPresentation(state.presentation.get())) return "inactive";
			return established() ? "established" : "monitoring";
		},
		states: {
			inactive: { entry: () => state.mediaContainerData.set(void 0) },
			monitoring: { effects: () => {
				const containerData = state.mediaContainerData.get();
				if (!containerData) return;
				const startMediaTimes = derive(containerData, selectionContext());
				update(state.presentation, (current) => stampTracks(current, startMediaTimes));
			} },
			established: {}
		}
	});
}
const establishStartMediaTime = {
	stateKeys: ["presentation", "mediaContainerData"],
	contextKeys: [],
	setup: establishStartMediaTimeSetup
};
//#endregion
export { derivePerTypeStartMediaTime, deriveSharedMinStartMediaTime, establishStartMediaTime };

//# sourceMappingURL=establish-start-media-time.js.map
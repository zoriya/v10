import { computed } from "../../core/signals/primitives.js";
import { defineBehavior } from "../../core/composition/create-composition.js";
import { createMachineReactor } from "../../core/reactors/create-machine-reactor.js";
import { isResolvedPresentation } from "../../media/types/index.js";
import { AUDIO_TYPE_CONFIG, VIDEO_TYPE_CONFIG } from "../primitives/track-types.js";
import { pickAudioTrack, pickFirstTrackId } from "../../media/primitives/select-tracks.js";
//#region src/playback/behaviors/select-tracks.ts
/**
* **Default audio/video track selection on src load / unselect on src unload.**
* When a presentation is resolved, sets `selectedVideoTrackId` /
* `selectedAudioTrackId` to a per-type-picker default if no selection already
* exists. When the presentation is unset/reset (transitions back to unresolved),
* clears the selection so a stale id from the previous source doesn't persist.
*
* Lifecycle-driven: each transition fires its work once. Does not police the
* selection between transitions; external writes (user picks, ABR, programmatic
* filter-driven re-picks) are left alone.
*
* Picker is config-driven: each per-type export wires a sensible default
* (`pickAudioTrack` for audio — three-tier language-aware; `pickFirstTrackId`
* for video) and the caller can supply their own via `config.picker` for custom
* selection logic. The behavior's `config` is forwarded to the picker as its
* second argument, so options like `preferredAudioLanguage` reach the picker
* without an intermediate wrapping layer.
*
* Compose `selectVideoTrack` for the simple "pick a default video track"
* behavior, or `switchVideoTrack` (`./track-switching.ts`) for the
* ABR-driven variant. Compose `selectAudioTrack` for the simple default
* pick, or `switchAudioTrack` (`./track-switching.ts`) for the
* filter-reactive + mid-stream-flush slot-owner variant — when audio-abr
* lands, `switchAudioTrack` extends into `switchAudioQuality`. Compose
* only one per type — they're alternatives, not stackable (each writes
* the same `selected*TrackId` slot). The simple variants tree-shake out
* the heavier machinery (bandwidth estimator, quality selection, flush
* orchestration).
*
* Text selection has no simple variant here — it's owned by `switchTextTrack`
* (`./track-switching.ts`), which resolves standing `userTextTrackSelection`
* intent against the constrained, CDN-scoped renditions.
*/
function setupTrackSelection({ state, config: { selectedKey, picker, pickerConfig } }) {
	const derivedStateSignal = computed(() => isResolvedPresentation(state.presentation.get()) ? "presentation-resolved" : "presentation-unresolved");
	return createMachineReactor({
		initial: "presentation-unresolved",
		monitor: () => derivedStateSignal.get(),
		states: {
			"presentation-unresolved": {},
			"presentation-resolved": { entry: () => {
				if (!state[selectedKey].get()) {
					const id = picker(state.presentation.get(), pickerConfig);
					if (id) state[selectedKey].set(id);
				}
				return () => state[selectedKey].set(void 0);
			} }
		}
	});
}
/** Default video picker: first track in the video selection set. */
const defaultVideoPicker = (presentation) => pickFirstTrackId(presentation, "video");
/**
* Select a video track when a presentation loads. Clears the selection on
* src unload.
*
* This is the simple, non-ABR counterpart to `switchVideoTrack` — compose
* one or the other, not both (both write `selectedVideoTrackId`). Composing
* `selectVideoTrack` alone tree-shakes out the ABR code path
* (bandwidth-estimator, quality-selection); use it for sources without
* meaningful quality variants, test setups, or players that intentionally
* pin a quality.
*
* @example
* const reactor = selectVideoTrack.setup({ state });
*/
const selectVideoTrack = defineBehavior({
	stateKeys: ["presentation", "selectedVideoTrackId"],
	contextKeys: [],
	setup: ({ state, config }) => setupTrackSelection({
		state,
		config: {
			selectedKey: VIDEO_TYPE_CONFIG.selectedKey,
			picker: config?.picker ?? defaultVideoPicker,
			pickerConfig: config
		}
	})
});
defineBehavior({
	stateKeys: ["presentation", "selectedAudioTrackId"],
	contextKeys: [],
	setup: ({ state, config }) => setupTrackSelection({
		state,
		config: {
			selectedKey: AUDIO_TYPE_CONFIG.selectedKey,
			picker: config?.picker ?? pickAudioTrack,
			pickerConfig: config
		}
	})
});
//#endregion
export { selectVideoTrack };

//# sourceMappingURL=select-tracks.js.map
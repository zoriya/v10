import { createComposition } from "../../../core/composition/create-composition.js";
import { makeShareSignals } from "../../../core/composition/share-signals.js";
import { loadVideoSegments } from "../../behaviors/dom/load-segments.js";
import { trackCurrentTime } from "../../behaviors/dom/track-current-time.js";
import { parseMultivariantPlaylist } from "../../../media/hls/parse-multivariant.js";
import { getResolvedSelectedTrackDuration } from "../../../media/utils/track-selection.js";
import { calculatePresentationDuration } from "../../behaviors/calculate-presentation-duration.js";
import { endOfStream } from "../../behaviors/dom/end-of-stream.js";
import { setupVideoBufferActors } from "../../behaviors/dom/setup-buffer-actors.js";
import { setupMediaSource } from "../../behaviors/dom/setup-mediasource.js";
import { updateMediaSourceDuration } from "../../behaviors/dom/update-mediasource-duration.js";
import { resolvePresentation } from "../../behaviors/resolve-presentation.js";
import { resolveVideoTrack } from "../../behaviors/resolve-track.js";
import { pickHighestResolutionVideoTrack } from "../../../media/primitives/select-tracks.js";
import { selectVideoTrack } from "../../behaviors/select-tracks.js";
//#region src/playback/engines/background-video/engine.ts
const shareSignals = makeShareSignals();
/**
* Create a background-video playback engine.
*
* Subtractive composition over the HLS engine baseline:
* audio-side, text-side, ABR-driven, preload-monitoring, and play/seek
* load-trigger behaviors are removed. `selectVideoTrack` (with a
* max-resolution picker by default) replaces `switchVideoQuality`, pinning
* a single rendition for the session. The initial state seeds
* `loadActivated: true` so the composition behaves as if preload has
* already been activated — appropriate for ambient / hero / GIF-replacement
* surfaces that should start loading the moment a src is set.
*
* Native `loop` / `muted` / `autoplay` are adapter concerns and live on
* `BackgroundVideoMediaElement` rather than the engine.
*
* @example
* ```ts
* let signals: BackgroundVideoEngineSignals;
* const engine = createBackgroundVideoEngine({
*   onSignalsReady: (refs) => {
*     signals = refs;
*   },
* });
*
* signals.context.mediaElement.set(videoEl);
* signals.state.presentation.set({ url: 'https://example.com/stream.m3u8' });
*
* await engine.destroy();
* ```
*/
function createBackgroundVideoEngine(config = {}) {
	const finalConfig = {
		...config,
		picker: config.picker ?? pickHighestResolutionVideoTrack,
		parsePresentation: config.parsePresentation ?? parseMultivariantPlaylist,
		resolveDuration: getResolvedSelectedTrackDuration
	};
	return createComposition([
		resolvePresentation,
		calculatePresentationDuration,
		selectVideoTrack,
		resolveVideoTrack,
		loadVideoSegments,
		setupMediaSource,
		updateMediaSourceDuration,
		setupVideoBufferActors,
		trackCurrentTime,
		endOfStream,
		shareSignals
	], {
		config: finalConfig,
		initialState: { loadActivated: true }
	});
}
//#endregion
export { createBackgroundVideoEngine };

//# sourceMappingURL=engine.js.map
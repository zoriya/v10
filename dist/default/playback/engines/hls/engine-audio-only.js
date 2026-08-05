import { createComposition } from "../../../core/composition/create-composition.js";
import { makeShareSignals } from "../../../core/composition/share-signals.js";
import { loadAudioSegments } from "../../behaviors/dom/load-segments.js";
import { trackCurrentTime } from "../../behaviors/dom/track-current-time.js";
import { trackLoadTriggers } from "../../behaviors/dom/track-load-triggers.js";
import { deriveSharedMinStartMediaTime, establishStartMediaTime } from "../../behaviors/establish-start-media-time.js";
import { attachMediaSourceAsSourceElement } from "../../../media/dom/mse/mediasource-setup.js";
import { canPlayTrack } from "../../../media/dom/capabilities.js";
import { parseMultivariantPlaylist } from "../../../media/hls/parse-multivariant.js";
import { getResolvedSelectedTrackDuration } from "../../../media/utils/track-selection.js";
import { calculatePresentationDuration } from "../../behaviors/calculate-presentation-duration.js";
import { deriveCdnPriority } from "../../behaviors/derive-cdn-priority.js";
import { setupAirPlay } from "../../behaviors/dom/airplay.js";
import { applyStartPosition } from "../../behaviors/dom/apply-start-position.js";
import { endOfStream } from "../../behaviors/dom/end-of-stream.js";
import { recoverEndStall } from "../../behaviors/dom/recover-end-stall.js";
import { setupAudioBufferActors } from "../../behaviors/dom/setup-buffer-actors.js";
import { setupMediaSource } from "../../behaviors/dom/setup-mediasource.js";
import { updateMediaSourceDuration } from "../../behaviors/dom/update-mediasource-duration.js";
import { resolvePresentation } from "../../behaviors/resolve-presentation.js";
import { resolveAudioTrack } from "../../behaviors/resolve-track.js";
import { setupFailoverMonitor } from "../../behaviors/setup-failover-monitor.js";
import { syncPreload } from "../../behaviors/sync-preload.js";
import { switchAudioTrack } from "../../behaviors/track-switching.js";
import { relocationPipelinesFor } from "../../primitives/relocation-pipelines.js";
//#region src/playback/engines/hls/engine-audio-only.ts
const shareSignals = makeShareSignals(["userAudioTrackSelection", "disableRemotePlayback"]);
/**
* Create an audio-only HLS playback engine.
*
* Subtractive composition variant of `createSimpleHlsEngine`: omits
* video-side behaviors (`resolveVideoTrack`, `switchVideoTrack`,
* `setupVideoBufferActors`, `loadVideoSegments`) and text-track behaviors
* (`switchTextTrack`, `resolveTextTrack`, `syncTextTracks`,
* `setupTextTrackActors`, `loadTextTrackSegments`). The remaining audio
* pipeline composes unchanged.
*
* Handles both truly audio-only HLS sources (no video stream-inf) and
* mixed-AV HLS sources where the audio rendition is selected and video /
* subtitle renditions are ignored at composition time. The variant decision
* is encoded by adapter choice; this engine does not branch on source
* shape.
*
* @example
* ```ts
* let signals: SimpleHlsAudioOnlyEngineSignals;
* const engine = createHlsAudioOnlyEngine({
*   preferredAudioLanguage: 'en',
*   onSignalsReady: (refs) => {
*     signals = refs;
*   },
* });
*
* signals.context.mediaElement.set(audioEl);
* signals.state.presentation.set({ url: 'https://example.com/stream.m3u8' });
* ```
*/
function createHlsAudioOnlyEngine(config = {}) {
	const deriveStartMediaTime = config.deriveStartMediaTime ?? deriveSharedMinStartMediaTime;
	const finalConfig = {
		...config,
		deriveStartMediaTime,
		attachMediaSource: attachMediaSourceAsSourceElement,
		canPlayTrack: config.canPlayTrack ?? canPlayTrack,
		resolveDuration: config.resolveDuration ?? getResolvedSelectedTrackDuration,
		parsePresentation: config.parsePresentation ?? parseMultivariantPlaylist,
		audioMessagePipelines: relocationPipelinesFor("audio", deriveStartMediaTime)
	};
	return createComposition([
		syncPreload,
		trackLoadTriggers,
		resolvePresentation,
		deriveCdnPriority,
		setupFailoverMonitor,
		switchAudioTrack,
		resolveAudioTrack,
		calculatePresentationDuration,
		setupMediaSource,
		updateMediaSourceDuration,
		establishStartMediaTime,
		setupAudioBufferActors,
		setupAirPlay,
		trackCurrentTime,
		applyStartPosition,
		loadAudioSegments,
		endOfStream,
		recoverEndStall,
		shareSignals
	], { config: finalConfig });
}
//#endregion
export { createHlsAudioOnlyEngine };

//# sourceMappingURL=engine-audio-only.js.map
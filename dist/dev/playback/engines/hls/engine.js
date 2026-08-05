import { createComposition } from "../../../core/composition/create-composition.js";
import { makeShareSignals } from "../../../core/composition/share-signals.js";
import { resolveVttSegment } from "../../../media/dom/text/resolve-vtt-segment.js";
import { loadAudioSegments, loadTextTrackSegments, loadVideoSegments } from "../../behaviors/dom/load-segments.js";
import { setupTextTrackActors } from "../../behaviors/dom/setup-text-track-actors.js";
import { trackCurrentTime } from "../../behaviors/dom/track-current-time.js";
import { trackLoadTriggers } from "../../behaviors/dom/track-load-triggers.js";
import { deriveSharedMinStartMediaTime, establishStartMediaTime } from "../../behaviors/establish-start-media-time.js";
import { attachMediaSourceAsSourceElement } from "../../../media/dom/mse/mediasource-setup.js";
import { canPlayTrack } from "../../../media/dom/capabilities.js";
import { addSubtitlesTracksToMedia, getShowingSubtitlesTrackFromMedia, removeAllSubtitlesTracksFromMedia } from "../../../media/dom/text/text-track-slots.js";
import { parseMultivariantPlaylist } from "../../../media/hls/parse-multivariant.js";
import { getResolvedSelectedTrackDuration } from "../../../media/utils/track-selection.js";
import { calculatePresentationDuration } from "../../behaviors/calculate-presentation-duration.js";
import { deriveCdnPriority } from "../../behaviors/derive-cdn-priority.js";
import { setupAirPlay } from "../../behaviors/dom/airplay.js";
import { applyStartPosition } from "../../behaviors/dom/apply-start-position.js";
import { endOfStream } from "../../behaviors/dom/end-of-stream.js";
import { recoverEndStall } from "../../behaviors/dom/recover-end-stall.js";
import { setupAudioBufferActors, setupVideoBufferActors } from "../../behaviors/dom/setup-buffer-actors.js";
import { setupMediaSource } from "../../behaviors/dom/setup-mediasource.js";
import { syncTextTracks } from "../../behaviors/dom/sync-text-tracks.js";
import { updateMediaSourceDuration } from "../../behaviors/dom/update-mediasource-duration.js";
import { resolvePresentation } from "../../behaviors/resolve-presentation.js";
import { resolveAudioTrack, resolveTextTrack, resolveVideoTrack } from "../../behaviors/resolve-track.js";
import { setupFailoverMonitor } from "../../behaviors/setup-failover-monitor.js";
import { syncPreload } from "../../behaviors/sync-preload.js";
import { switchAudioTrack, switchTextTrack, switchVideoTrack } from "../../behaviors/track-switching.js";
import { relocatingTextPipelines, relocationPipelinesFor } from "../../primitives/relocation-pipelines.js";
//#region src/playback/engines/hls/engine.ts
/**
* Generic `shareSignals` instantiated against the HLS engine's full state
* and context — captures composition signal refs into the consumer's
* `onSignalsReady` callback at setup time, and materializes input slots that no
* composed behavior produces: `user*TrackSelection` (track-switching only reads
* them). `failedCdns` is owned by `setupFailoverMonitor`, so it's already
* materialized and reachable on the `onSignalsReady` refs without being listed
* here.
*/
const shareSignals = makeShareSignals([
	"userVideoTrackSelection",
	"userAudioTrackSelection",
	"userTextTrackSelection",
	"disableRemotePlayback"
]);
/**
* Create an HLS playback engine.
*
* Composes SPF behaviors into a reactive pipeline for HLS playback over MSE:
* manifest resolution, track selection, ABR, segment loading, and
* end-of-stream coordination.
*
* @example
* ```ts
* let signals: SimpleHlsEngineSignals;
* const engine = createSimpleHlsEngine({
*   initialBandwidth: 2_000_000,
*   preferredAudioLanguage: 'en',
*   onSignalsReady: (refs) => {
*     signals = refs;
*   },
* });
*
* signals.context.mediaElement.set(videoEl);
* signals.state.presentation.set({ url: 'https://example.com/stream.m3u8' });
*
* videoEl.play();
*
* await engine.destroy();
* ```
*/
function createSimpleHlsEngine(config = {}) {
	const deriveStartMediaTime = config.deriveStartMediaTime ?? deriveSharedMinStartMediaTime;
	const finalConfig = {
		...config,
		deriveStartMediaTime,
		attachMediaSource: attachMediaSourceAsSourceElement,
		canPlayTrack: config.canPlayTrack ?? canPlayTrack,
		resolveTextTrackSegment: config.resolveTextTrackSegment ?? resolveVttSegment,
		textMessagePipelines: relocatingTextPipelines,
		resolveDuration: config.resolveDuration ?? getResolvedSelectedTrackDuration,
		parsePresentation: config.parsePresentation ?? parseMultivariantPlaylist,
		addSubtitlesTracksToMedia: config.addSubtitlesTracksToMedia ?? addSubtitlesTracksToMedia,
		getShowingSubtitlesTrackFromMedia: config.getShowingSubtitlesTrackFromMedia ?? getShowingSubtitlesTrackFromMedia,
		removeAllSubtitlesTracksFromMedia: config.removeAllSubtitlesTracksFromMedia ?? removeAllSubtitlesTracksFromMedia,
		videoMessagePipelines: relocationPipelinesFor("video", deriveStartMediaTime),
		audioMessagePipelines: relocationPipelinesFor("audio", deriveStartMediaTime)
	};
	return createComposition([
		syncPreload,
		trackLoadTriggers,
		resolvePresentation,
		deriveCdnPriority,
		setupFailoverMonitor,
		resolveVideoTrack,
		resolveAudioTrack,
		resolveTextTrack,
		calculatePresentationDuration,
		setupMediaSource,
		updateMediaSourceDuration,
		establishStartMediaTime,
		setupVideoBufferActors,
		setupAudioBufferActors,
		setupAirPlay,
		trackCurrentTime,
		applyStartPosition,
		switchVideoTrack,
		switchAudioTrack,
		switchTextTrack,
		loadVideoSegments,
		loadAudioSegments,
		endOfStream,
		recoverEndStall,
		syncTextTracks,
		setupTextTrackActors,
		loadTextTrackSegments,
		shareSignals
	], {
		config: finalConfig,
		initialState: { bandwidthState: {
			fastEstimate: 0,
			fastTotalWeight: 0,
			slowEstimate: 0,
			slowTotalWeight: 0,
			bytesSampled: 0
		} }
	});
}
//#endregion
export { createSimpleHlsEngine };

//# sourceMappingURL=engine.js.map
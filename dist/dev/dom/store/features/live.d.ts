import { PlayerFeature } from "../../player.js";
import "../../../dom.js";
import { MediaLiveState } from "@videojs/media";
//#region src/dom/store/features/live.d.ts
/**
 * Player feature exposing `liveEdgeStart` and `targetLiveWindow` in store
 * state for media that implements `MediaLiveCapability` (currently
 * `HlsJsMedia` and its delegates).
 *
 * - `liveEdgeStart` — presentation time marking the start of the Live Edge
 *   Window. Playing at the live edge when `currentTime >= liveEdgeStart`.
 *   `NaN` when the stream isn't live or the value is unknown.
 * - `targetLiveWindow` — `0` for standard latency live, `Infinity` for DVR,
 *   `NaN` for on-demand or unknown.
 *
 * Included by the {@link liveVideoFeatures} and {@link liveAudioFeatures}
 * presets; apps can also compose it into a custom preset.
 *
 * @see https://github.com/video-dev/media-ui-extensions/blob/main/proposals/0007-live-edge.md
 */
declare const liveFeature: PlayerFeature<MediaLiveState>;
//#endregion
export { liveFeature };
//# sourceMappingURL=live.d.ts.map
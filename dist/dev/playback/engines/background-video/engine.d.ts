import { MaybeResolvedPresentation } from "../../../media/types/index.js";
import { Composition, ContextSignals, StateSignals } from "../../../core/composition/create-composition.js";
import { ShareSignalsConfig } from "../../../core/composition/share-signals.js";
import { SourceBufferActor } from "../../actors/dom/source-buffer.js";
import { SegmentLoaderActor } from "../../actors/dom/segment-loader.js";
import { TrackPicker } from "../../../media/primitives/select-tracks.js";
import { ParsePresentation } from "../../behaviors/resolve-presentation.js";
import { SelectVideoTrackConfig } from "../../behaviors/select-tracks.js";
//#region src/playback/engines/background-video/engine.d.ts
/**
 * State shape for the background-video playback engine.
 *
 * Narrower than `SimpleHlsEngineState`: audio/text track slots are absent
 * because their selection/resolution behaviors are subtracted. `bandwidthState`
 * is present because `setupVideoBufferActors` declares it and `loadVideoSegments`
 * samples into it (wasted work in this variant — a Phase 3 alt-impl will skip
 * sampling).
 */
interface BackgroundVideoEngineState {
  /**
   * The presentation being played. A caller writes `{ url }`;
   * `resolvePresentation` parses the manifest and populates the rest.
   */
  presentation?: MaybeResolvedPresentation;
  preload?: 'auto' | 'metadata' | 'none';
  selectedVideoTrackId?: string;
  loadActivated?: boolean;
}
/**
 * Context shape for the background-video engine.
 */
interface BackgroundVideoEngineContext {
  mediaElement?: HTMLMediaElement | undefined;
  mediaSource?: MediaSource;
  videoBufferActor?: SourceBufferActor;
  videoSegmentLoaderActor?: SegmentLoaderActor;
}
/**
 * The composition signal refs handed to `onSignalsReady` callers — the
 * canonical way to drive the engine externally (writes) or observe its
 * state (reads) without touching `composition.state` / `composition.context`
 * directly.
 */
type BackgroundVideoEngineSignals = {
  state: StateSignals<BackgroundVideoEngineState>;
  context: ContextSignals<BackgroundVideoEngineContext>;
};
/**
 * Configuration for the background-video engine.
 *
 * Each option is consumed by the appropriate behavior — the engine itself
 * has no config beyond what its behaviors read. Compared to
 * `SimpleHlsEngineConfig`, audio/text/ABR/bandwidth/quality knobs are
 * dropped: the variant subtracts the behaviors that read them.
 */
interface BackgroundVideoEngineConfig extends ShareSignalsConfig<BackgroundVideoEngineState, BackgroundVideoEngineContext> {
  /**
   * Track picker handed to `selectVideoTrack`. Default:
   * `pickHighestResolutionVideoTrack` — picks the highest-resolution variant on
   * presentation resolve and pins it for the session. Override for
   * mobile-aware or content-aware caps.
   *
   * Adapters (e.g. `BackgroundVideoMediaElement`) install their own
   * picker; this default applies when the engine is constructed directly.
   */
  picker?: TrackPicker<SelectVideoTrackConfig>;
  /**
   * Manifest parser handed to `resolvePresentation`. Defaults to the HLS
   * multivariant-playlist parser.
   */
  parsePresentation?: ParsePresentation;
}
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
declare function createBackgroundVideoEngine(config?: BackgroundVideoEngineConfig): Composition<BackgroundVideoEngineState, BackgroundVideoEngineContext>;
//#endregion
export { BackgroundVideoEngineConfig, BackgroundVideoEngineContext, BackgroundVideoEngineSignals, BackgroundVideoEngineState, createBackgroundVideoEngine };
//# sourceMappingURL=engine.d.ts.map
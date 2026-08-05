import { AudioTrack, CanPlayTrack, MaybeResolvedPresentation, MediaContainerData } from "../../../media/types/index.js";
import { Composition, ContextSignals, StateSignals } from "../../../core/composition/create-composition.js";
import { ShareSignalsConfig } from "../../../core/composition/share-signals.js";
import { BackBufferConfig } from "../../../media/buffer/back-buffer.js";
import { ForwardBufferConfig } from "../../../media/buffer/forward-buffer.js";
import { SourceBufferActor } from "../../actors/dom/source-buffer.js";
import { SegmentLoaderActor } from "../../actors/dom/segment-loader.js";
import { ParsePresentation } from "../../behaviors/resolve-presentation.js";
import { DeriveStartMediaTime } from "../../primitives/derive-start-media-time.js";
import "../../behaviors/establish-start-media-time.js";
import { GetCdnId } from "../../../media/utils/cdn.js";
import { PresentationDurationResolver } from "../../behaviors/calculate-presentation-duration.js";
import { FailoverMonitorConfig } from "../../behaviors/setup-failover-monitor.js";
//#region src/playback/engines/hls/engine-audio-only.d.ts
/**
 * State shape for the audio-only HLS playback engine.
 *
 * Subset of `SimpleHlsEngineState` covering only the slots written and read
 * by audio-side behaviors. Video and text-track slots are absent —
 * subtractive composition removes the behaviors that declare them.
 */
interface SimpleHlsAudioOnlyEngineState {
  presentation?: MaybeResolvedPresentation;
  preload?: 'auto' | 'metadata' | 'none';
  selectedAudioTrackId?: string;
  mediaContainerData?: Record<string, MediaContainerData>;
  /**
   * Consumer-driven constraint narrowing the audio candidate set. Sibling
   * of `userVideoTrackSelection` in the default engine. Partial-track
   * shape — `{ language: 'es' }`, `{ id: 'audio-en' }`, etc.
   * `selectAudioTrack` reads this and re-picks when it changes.
   * Multi-language-audio Tier 2 programmatic-write path.
   */
  userAudioTrackSelection?: Partial<AudioTrack>;
  /**
   * The CDNs the source is served from, in manifest priority order (mirrors
   * HLS content steering's `PATHWAY-PRIORITY`). Owned by `deriveCdnPriority`,
   * read by `track-switching`'s `preferActiveCdn` scope. Only meaningful for
   * redundant-stream sources; a single-CDN source has one entry.
   */
  cdnPriority?: string[];
  /**
   * CDN ids currently in failover cooldown — read by `track-switching`'s
   * `excludeFailedCdns` constraint, which prunes their tracks so the active-CDN
   * scope falls to the next CDN. Empty / absent means all CDNs are eligible.
   */
  failedCdns?: string[];
  currentTime?: number;
  loadActivated?: boolean;
  /**
   * One-shot command: start the current source at this position
   * (presentation-timeline seconds). Written by consumers or by
   * `setupAirPlay`'s session-end snapshot; consumed (cleared) by
   * `applyStartPosition` once the element seeks. See
   * `behaviors/dom/apply-start-position.ts`.
   */
  startPosition?: number;
  /**
   * Intent-level loading policy: initiate no new loading work while `true`.
   * Written by `setupAirPlay` (the only behavior declaring the key) while a
   * remote-playback session owns presentation; observed by `loadAudioSegments`
   * (parks in `'dormant'`) and by `setupMediaSource` (a pending rebuild
   * waits). See `SegmentLoadingState['loadingSuspended']`.
   */
  loadingSuspended?: boolean;
  /**
   * Author intent for the AirPlay/remote-playback picker, written by the media
   * adapter's `disableRemotePlayback` IDL property. `true` is an explicit
   * opt-out: `setupAirPlay` reads it at attach and sets nothing up, leaving the
   * element's remote playback disabled. Distinct from the underlying media
   * element's own `disableRemotePlayback`, which stays programmatically managed
   * (ManagedMediaSource / AirPlay).
   */
  disableRemotePlayback?: boolean;
}
/**
 * Context shape for the audio-only HLS playback engine.
 *
 * Subset of `SimpleHlsEngineContext` covering only the platform objects and
 * actor refs managed by audio-side behaviors.
 */
interface SimpleHlsAudioOnlyEngineContext {
  mediaElement?: HTMLMediaElement | undefined;
  mediaSource?: MediaSource;
  audioBufferActor?: SourceBufferActor;
  audioSegmentLoaderActor?: SegmentLoaderActor;
}
type SimpleHlsAudioOnlyEngineSignals = {
  state: StateSignals<SimpleHlsAudioOnlyEngineState>;
  context: ContextSignals<SimpleHlsAudioOnlyEngineContext>;
};
/**
 * Configuration for the audio-only HLS playback engine.
 *
 * Subset of `SimpleHlsEngineConfig` — video-quality, bandwidth-estimator,
 * and text-track config fields are omitted (no behavior consumes them).
 */
interface SimpleHlsAudioOnlyEngineConfig extends ShareSignalsConfig<SimpleHlsAudioOnlyEngineState, SimpleHlsAudioOnlyEngineContext> {
  preferredAudioLanguage?: string;
  /**
   * Codec capability probe read by `track-switching`'s `excludeUnplayableTracks`
   * constraint. Defaults to the `MediaSource.isTypeSupported`-backed
   * `canPlayTrack`; override to force-exclude a codec. Mirrors the default
   * engine — without it, capability probing (and TS / raw-AAC detection) would
   * be inert for audio-only playback.
   */
  canPlayTrack?: CanPlayTrack;
  resolveDuration?: PresentationDurationResolver;
  parsePresentation?: ParsePresentation;
  forwardBuffer?: Partial<ForwardBufferConfig>;
  backBuffer?: Partial<BackBufferConfig>;
  /** Multi-CDN failover monitor tuning. Defaults: `DEFAULT_FAILOVER_MONITOR_CONFIG`. */
  failover?: Partial<FailoverMonitorConfig>;
  /**
   * Derive a CDN grouping key from a track URL (used by `cdnPriority`, the
   * failover trip, and the track-switching CDN rules — one function read by all).
   * Defaults to the URL origin; override to key on e.g. Mux's `cdn=` param.
   */
  getCdnId?: GetCdnId;
  /** Non-zero-PTS relocation (spike): the reduce seam (tier knob); defaults to per-track own. */
  deriveStartMediaTime?: DeriveStartMediaTime;
}
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
declare function createHlsAudioOnlyEngine(config?: SimpleHlsAudioOnlyEngineConfig): Composition<SimpleHlsAudioOnlyEngineState, SimpleHlsAudioOnlyEngineContext>;
//#endregion
export { SimpleHlsAudioOnlyEngineConfig, SimpleHlsAudioOnlyEngineContext, SimpleHlsAudioOnlyEngineSignals, SimpleHlsAudioOnlyEngineState, createHlsAudioOnlyEngine };
//# sourceMappingURL=engine-audio-only.d.ts.map
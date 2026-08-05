import { AudioTrack, CanPlayTrack, MaybeResolvedPresentation, MediaContainerData, TextTrack, VideoTrack } from "../../../media/types/index.js";
import { Composition, ContextSignals, StateSignals } from "../../../core/composition/create-composition.js";
import { ShareSignalsConfig } from "../../../core/composition/share-signals.js";
import { BackBufferConfig } from "../../../media/buffer/back-buffer.js";
import { ForwardBufferConfig } from "../../../media/buffer/forward-buffer.js";
import { SourceBufferActor } from "../../actors/dom/source-buffer.js";
import { SegmentLoaderActor } from "../../actors/dom/segment-loader.js";
import { TextTrackSegmentResolver } from "../../primitives/text-segment-load-pipeline.js";
import { TextTracksActor } from "../../actors/text-tracks.js";
import { TextTrackSegmentLoaderActor } from "../../actors/text-track-segment-loader.js";
import { ParsePresentation } from "../../behaviors/resolve-presentation.js";
import { DeriveStartMediaTime } from "../../primitives/derive-start-media-time.js";
import "../../behaviors/establish-start-media-time.js";
import { QualityConfig } from "../../../media/abr/quality-selection.js";
import { addSubtitlesTracksToMedia, getShowingSubtitlesTrackFromMedia, removeAllSubtitlesTracksFromMedia } from "../../../media/dom/text/text-track-slots.js";
import { GetCdnId } from "../../../media/utils/cdn.js";
import { BandwidthConfig, BandwidthState } from "../../../network/bandwidth-estimator.js";
import "../../actors/dom/text-tracks.js";
import { PresentationDurationResolver } from "../../behaviors/calculate-presentation-duration.js";
import { FailoverMonitorConfig } from "../../behaviors/setup-failover-monitor.js";
//#region src/playback/engines/hls/engine.d.ts
/**
 * State shape for the HLS playback engine.
 *
 * This is the union of all state required by the behaviors composed into
 * the HLS engine. Each behavior declares its own state interface; this
 * type satisfies all of them.
 */
interface SimpleHlsEngineState {
  /**
   * The presentation being played. A caller writes `{ url }`;
   * `resolvePresentation` parses the manifest and populates the rest.
   */
  presentation?: MaybeResolvedPresentation;
  preload?: 'auto' | 'metadata' | 'none';
  selectedVideoTrackId?: string;
  selectedAudioTrackId?: string;
  selectedTextTrackId?: string;
  bandwidthState?: BandwidthState;
  mediaContainerData?: Record<string, MediaContainerData>;
  userVideoTrackSelection?: Partial<VideoTrack>;
  /**
   * Consumer-driven constraint narrowing the audio candidate set. Sibling
   * of `userVideoTrackSelection`. Partial-track shape — `{ language: 'es' }`,
   * `{ id: 'audio-en' }`, etc. `selectAudioTrack` reads this and re-picks
   * when it changes. Multi-language-audio Tier 2 programmatic-write path.
   */
  userAudioTrackSelection?: Partial<AudioTrack>;
  /**
   * Consumer-driven *intent* for text selection, resolved into
   * `selectedTextTrackId` by `switchTextTrack`. A language-based partial
   * (`{ language: 'es' }`) selects captions, `'off'` disables them, and absence
   * means auto (the engine's `preferredSubtitleLanguage` / DEFAULT-track policy).
   * Also the write path for the DOM caption UI (via `syncTextTracks`); unlike the
   * resolved id it persists across source changes (sticky preference).
   */
  userTextTrackSelection?: Partial<TextTrack> | 'off';
  /**
   * The CDNs the source is served from (track-URL origins), in manifest
   * priority order — most-preferred first (mirrors HLS content steering's
   * `PATHWAY-PRIORITY`). Owned by `deriveCdnPriority`, read by
   * `track-switching`'s `preferActiveCdn` scope, which narrows to the
   * highest-priority CDN with surviving tracks so video / audio / text stay on
   * one host. Only meaningful for redundant-stream sources; a single-CDN source
   * has one entry.
   */
  cdnPriority?: string[];
  /**
   * CDN ids (origins) currently in failover cooldown — written by the CDN
   * monitor when a host fails too often, read by `track-switching`'s
   * `excludeFailedCdns` hard constraint, which prunes their tracks so the
   * active-CDN scope falls to the next CDN in `cdnPriority`. Empty / absent
   * means all CDNs are eligible.
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
   * remote-playback session owns presentation; observed by the
   * `loadXSegments` dispatchers (park in `'dormant'`) and by
   * `setupMediaSource` (a pending rebuild waits). See
   * `SegmentLoadingState['loadingSuspended']`.
   */
  loadingSuspended?: boolean;
  /**
   * Author intent for the AirPlay/remote-playback picker, written by the media
   * adapter's `disableRemotePlayback` IDL property. `true` is an explicit
   * opt-out: `setupAirPlay` reads it at attach and sets nothing up, leaving the
   * element's remote playback disabled. Distinct from the underlying
   * `<video>.disableRemotePlayback`, which stays programmatically managed
   * (ManagedMediaSource / AirPlay).
   */
  disableRemotePlayback?: boolean;
}
/**
 * Context shape for the HLS playback engine.
 *
 * Platform objects and actor references managed by HLS behaviors.
 */
interface SimpleHlsEngineContext {
  mediaElement?: HTMLMediaElement | undefined;
  mediaSource?: MediaSource;
  videoBufferActor?: SourceBufferActor;
  audioBufferActor?: SourceBufferActor;
  videoSegmentLoaderActor?: SegmentLoaderActor;
  audioSegmentLoaderActor?: SegmentLoaderActor;
  textTracksActor?: TextTracksActor;
  textTrackSegmentLoaderActor?: TextTrackSegmentLoaderActor;
}
/**
 * The composition signal refs handed to `onSignalsReady` callers — the
 * canonical way to drive the engine externally (writes) or observe its
 * state (reads) without touching `composition.state` / `composition.context`
 * directly.
 */
type SimpleHlsEngineSignals = {
  state: StateSignals<SimpleHlsEngineState>;
  context: ContextSignals<SimpleHlsEngineContext>;
};
/**
 * Configuration for the HLS playback engine.
 *
 * Each option is consumed by the appropriate behavior — the engine itself
 * has no config beyond what its behaviors read.
 */
interface SimpleHlsEngineConfig extends ShareSignalsConfig<SimpleHlsEngineState, SimpleHlsEngineContext> {
  /**
   * Bandwidth estimate in bps to use before enough samples have been
   * collected. Default: `DEFAULT_INITIAL_BANDWIDTH` (5 Mbps).
   */
  initialBandwidth?: number;
  /**
   * Codec capability probe injected into `track-switching`'s
   * `excludeUnplayableTracks` constraint — drops renditions the environment
   * can't decode before selection. Defaults to the `MediaSource.isTypeSupported`
   * -backed `canPlayTrack`; supply your own to override (e.g. force-exclude a
   * codec).
   */
  canPlayTrack?: CanPlayTrack;
  preferredAudioLanguage?: string;
  preferredSubtitleLanguage?: string;
  includeForcedTracks?: boolean;
  enableDefaultTrack?: boolean;
  /**
   * Resolver that turns a text-track segment fetch into VTT cues.
   * Defaults to the DOM-bound `resolveVttSegment` resolver, which uses an
   * offscreen `<track>` element to parse WebVTT.
   */
  resolveTextTrackSegment?: TextTrackSegmentResolver<VTTCue>;
  /**
   * Resolver for `presentation.duration`. Defaults to picking the first
   * resolved selected track's duration (video preferred, audio fallback) —
   * appropriate for VoD and audio-only. Live engines should supply a
   * resolver that returns `Number.POSITIVE_INFINITY` once the presentation
   * is established as live; downstream `updateMediaSourceDuration` propagates
   * that value to `mediaSource.duration` per the MSE spec.
   */
  resolveDuration?: PresentationDurationResolver;
  /**
   * Manifest parser handed to `resolvePresentation`. Defaults to the HLS
   * multivariant-playlist parser; supply your own for alternate format
   * support without forking the engine.
   */
  parsePresentation?: ParsePresentation;
  /**
   * Allocate SPF-owned text-track slots on the media element. Defaults to
   * the standard `<track>`-element implementation in
   * `media/dom/text/text-track-slots`.
   */
  addSubtitlesTracksToMedia?: typeof addSubtitlesTracksToMedia;
  /**
   * Return the SPF-owned subtitle/caption `TextTrack` currently in showing
   * mode. Defaults to the standard selector-based implementation in
   * `media/dom/text/text-track-slots`.
   */
  getShowingSubtitlesTrackFromMedia?: typeof getShowingSubtitlesTrackFromMedia;
  /**
   * Evict all SPF-owned text-track slots from the media element. Defaults to
   * the standard selector-based implementation in
   * `media/dom/text/text-track-slots`.
   */
  removeAllSubtitlesTracksFromMedia?: typeof removeAllSubtitlesTracksFromMedia;
  /**
   * Forward-buffer tuning. `bufferDuration` controls how far ahead of the
   * playhead segments are loaded (and where forward-flush kicks in).
   * Defaults: see `DEFAULT_FORWARD_BUFFER_CONFIG` (30 seconds). Threaded to
   * segment-loader actors (v/a + text) at construction time and to
   * `loadXSegments` dispatchers for the load-message range.
   */
  forwardBuffer?: Partial<ForwardBufferConfig>;
  /**
   * Back-buffer tuning. `keepSegments` controls how many segments stay
   * behind the playhead before eviction. Defaults: see
   * `DEFAULT_BACK_BUFFER_CONFIG` (2 segments). Threaded to the v/a
   * segment-loader actor only (text tracks don't use back-buffer eviction).
   */
  backBuffer?: Partial<BackBufferConfig>;
  /**
   * Bandwidth-estimator tuning. Overrides any field of `BandwidthConfig`
   * (`fastHalfLife`, `slowHalfLife`, `minTotalBytes`, `minBytes`,
   * `minDuration`). `bandwidth.minTotalBytes` supersedes the flat
   * `minTotalBytes` field above. Defaults: see `DEFAULT_BANDWIDTH_CONFIG`.
   */
  bandwidth?: Partial<BandwidthConfig>;
  /**
   * Quality-selection tuning. `safetyMargin` is the bandwidth-headroom
   * multiplier used by `selectQuality`; `upgradeMargin` is the hysteresis
   * ratio gating ABR upgrades. Defaults: `DEFAULT_QUALITY_CONFIG` (0.85 / 1.15).
   */
  quality?: Partial<QualityConfig>;
  /**
   * Multi-CDN failover monitor tuning. `cooldownMs` is how long a CDN stays
   * excluded after a failed fetch trips it. Defaults:
   * `DEFAULT_FAILOVER_MONITOR_CONFIG` (300s). Only meaningful for redundant-stream
   * sources.
   */
  failover?: Partial<FailoverMonitorConfig>;
  /**
   * How to derive a CDN grouping key from a track URL — used to build
   * `cdnPriority`, to record the failover trip in `failedCdns`, and by the
   * track-switching CDN scope + failover constraint. One function, read by all of
   * them, so the keys stay comparable. Defaults to the URL origin; override to
   * key on something else (e.g. Mux's `cdn=` query param).
   */
  getCdnId?: GetCdnId;
  /**
   * Non-zero-PTS relocation (spike): the reduce seam consumed by the
   * `establishStartMediaTime` reactor. Defaults to per-track own origin (Tier 1);
   * a Tier-2 variant returns the shared `min` across selected A/V. Relocation is
   * composed into the standard engine below — see the marked block — so this only
   * needs setting to swap the tier policy. See
   * `internal/design/spf/presentation-timeline-model.md`.
   */
  deriveStartMediaTime?: DeriveStartMediaTime;
  /**
   * Proximity window (seconds) for the `recoverEndStall` behavior — how close the
   * playhead must be to the reachable buffered end for a `waiting` to be treated as the
   * end-of-stream freeze and nudged to `ended`. Defaults to `0.2`. See
   * `behaviors/dom/recover-end-stall`.
   */
  endStallNudgeWindow?: number;
}
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
declare function createSimpleHlsEngine(config?: SimpleHlsEngineConfig): Composition<SimpleHlsEngineState, SimpleHlsEngineContext>;
//#endregion
export { SimpleHlsEngineConfig, SimpleHlsEngineContext, SimpleHlsEngineSignals, SimpleHlsEngineState, createSimpleHlsEngine };
//# sourceMappingURL=engine.d.ts.map
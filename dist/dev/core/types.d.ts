//#region src/core/types.d.ts
interface EventLike<Detail = void> {
  readonly type: string;
  readonly timeStamp: number;
  readonly detail?: Detail;
}
interface EventTargetLike<Events extends { [K in keyof Events]: EventLike }> {
  addEventListener<K extends keyof Events & string>(type: K, listener: (event: Events[K]) => void, options?: {
    signal?: AbortSignal;
  }): void;
  removeEventListener<K extends keyof Events & string>(type: K, listener: (event: Events[K]) => void): void;
  dispatchEvent(event: EventLike): boolean;
}
declare function TypedEventTarget<Events extends { [K in keyof Events]: EventLike }>(): {
  new (): EventTargetLike<Events>;
};
type MediaFeatureAvailability = 'available' | 'unavailable' | 'unsupported';
interface MediaControlsCapability {
  controls: boolean;
}
interface MediaPlaybackEvents {
  play: EventLike;
  playing: EventLike;
  waiting: EventLike;
}
interface MediaPlaybackCapability {
  play(): Promise<void>;
}
interface MediaAutoplayCapability {
  autoplay: boolean;
}
interface MediaPauseEvents {
  pause: EventLike;
  ended: EventLike;
}
interface MediaPauseCapability {
  pause(): void;
  readonly paused: boolean;
  readonly ended: boolean;
}
interface MediaSeekEvents {
  timeupdate: EventLike;
  durationchange: EventLike;
  seeking: EventLike;
  seeked: EventLike;
  loadedmetadata: EventLike;
}
interface MediaSeekCapability {
  currentTime: number;
  loop: boolean;
  readonly duration: number;
  readonly seeking: boolean;
}
type MediaPreloadType = '' | 'none' | 'metadata' | 'auto';
declare const MediaReadyState: {
  readonly HAVE_NOTHING: 0;
  readonly HAVE_METADATA: 1;
  readonly HAVE_CURRENT_DATA: 2;
  readonly HAVE_FUTURE_DATA: 3;
  readonly HAVE_ENOUGH_DATA: 4;
};
type MediaReadyStateValue = (typeof MediaReadyState)[keyof typeof MediaReadyState];
interface MediaSourceEvents {
  loadstart: EventLike;
  emptied: EventLike;
  canplay: EventLike;
  canplaythrough: EventLike;
  loadeddata: EventLike;
  abort: EventLike;
  stalled: EventLike;
  suspend: EventLike;
}
/** Result of {@link MediaSourceCapability.canPlayType}. */
type CanPlayTypeResult = '' | 'maybe' | 'probably';
interface MediaSourceCapability {
  src: string;
  readonly currentSrc: string;
  readonly readyState: MediaReadyStateValue | number;
  preload: MediaPreloadType;
  crossOrigin: string | null;
  load(): Promise<void> | void;
  canPlayType(type: string): CanPlayTypeResult;
}
interface MediaVolumeEvents {
  volumechange: EventLike;
}
interface MediaVolumeCapability {
  volume: number;
  muted: boolean;
  defaultMuted: boolean;
}
interface MediaPlaybackRateEvents {
  ratechange: EventLike;
}
interface MediaPlaybackRateCapability {
  playbackRate: number;
  defaultPlaybackRate: number;
}
interface TimeRangeLike {
  readonly length: number;
  start(index: number): number;
  end(index: number): number;
}
interface MediaBufferEvents {
  progress: EventLike;
}
interface MediaBufferCapability {
  readonly buffered: TimeRangeLike;
  readonly seekable: TimeRangeLike;
}
interface MediaPlayedCapability {
  readonly played: TimeRangeLike;
}
interface ErrorLike {
  readonly code: number;
  readonly message: string;
}
interface MediaErrorEvents {
  error: EventLike;
}
interface MediaErrorCapability {
  readonly error: ErrorLike | null;
}
interface TextCueLike {
  readonly startTime: number;
  readonly endTime: number;
  readonly text?: string;
}
interface TextCueListLike {
  readonly length: number;
  [Symbol.iterator](): Iterator<TextCueLike>;
  getCueById?(id: string): TextCueLike | null;
}
/**
 * The kind of text track.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/kind
 */
type TextTrackKind = 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
interface TextTrackLike {
  readonly kind: string;
  readonly label: string;
  readonly language: string;
  readonly id: string;
  readonly src?: string;
  mode: 'showing' | 'disabled' | 'hidden';
  readonly cues: TextCueListLike | null;
  addCue?(cue: TextCueLike): void;
}
interface TextTrackListEvents {
  addtrack: EventLike;
  removetrack: EventLike;
  change: EventLike;
}
interface TextTrackListLike extends EventTargetLike<TextTrackListEvents> {
  readonly length: number;
  readonly [index: number]: TextTrackLike;
  [Symbol.iterator](): Iterator<TextTrackLike>;
  getTrackById?(id: string): TextTrackLike | null;
}
interface MediaTextTrackCapability {
  readonly textTracks: TextTrackListLike;
  addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrackLike;
}
interface MediaTrackEventLike<Track> extends EventLike {
  readonly track: Track;
}
interface MediaTrackListEvents<Track> {
  addtrack: MediaTrackEventLike<Track>;
  removetrack: MediaTrackEventLike<Track>;
  change: EventLike;
}
interface AudioTrackLike {
  id: string | undefined;
  readonly kind: string | undefined;
  readonly label: string;
  readonly language: string;
  enabled: boolean;
  addRendition(src: string, codec?: string | undefined, bitrate?: number | undefined): AudioRenditionLike;
  removeRendition(rendition: AudioRenditionLike): void;
}
interface AudioTrackListLike extends EventTargetLike<MediaTrackListEvents<AudioTrackLike>> {
  readonly length: number;
  readonly [index: number]: AudioTrackLike;
  [Symbol.iterator](): Iterator<AudioTrackLike>;
  getTrackById(id: string): AudioTrackLike | null;
}
interface VideoTrackLike {
  id: string | undefined;
  readonly kind: string | undefined;
  readonly label: string;
  readonly language: string;
  selected: boolean;
  addRendition(src: string, width?: number | undefined, height?: number | undefined, codec?: string | undefined, bitrate?: number | undefined, frameRate?: number | undefined): VideoRenditionLike;
  removeRendition(rendition: VideoRenditionLike): void;
}
interface VideoTrackListLike extends EventTargetLike<MediaTrackListEvents<VideoTrackLike>> {
  readonly length: number;
  readonly [index: number]: VideoTrackLike;
  [Symbol.iterator](): Iterator<VideoTrackLike>;
  getTrackById(id: string): VideoTrackLike | null;
  readonly selectedIndex: number;
}
interface MediaAudioTrackCapability {
  readonly audioTracks: AudioTrackListLike;
  addAudioTrack(kind: string, label?: string, language?: string): AudioTrackLike;
  removeAudioTrack(track: AudioTrackLike): void;
}
interface MediaVideoTrackCapability {
  readonly videoTracks: VideoTrackListLike;
  addVideoTrack(kind: string, label?: string, language?: string): VideoTrackLike;
  removeVideoTrack(track: VideoTrackLike): void;
}
interface RenditionEventLike<Rendition> extends EventLike {
  readonly rendition: Rendition;
}
interface RenditionListEvents<Rendition> {
  addrendition: RenditionEventLike<Rendition>;
  removerendition: RenditionEventLike<Rendition>;
  change: EventLike;
}
interface AudioRenditionLike {
  id: string | undefined;
  readonly bitrate: number | undefined;
  readonly codec: string | undefined;
  selected: boolean;
}
interface AudioRenditionListLike extends EventTargetLike<RenditionListEvents<AudioRenditionLike>> {
  readonly length: number;
  readonly [index: number]: AudioRenditionLike;
  [Symbol.iterator](): Iterator<AudioRenditionLike>;
  getRenditionById(id: string): AudioRenditionLike | null;
  selectedIndex: number;
}
interface VideoRenditionLike {
  id: string | undefined;
  readonly width: number | undefined;
  readonly height: number | undefined;
  readonly bitrate: number | undefined;
  readonly frameRate: number | undefined;
  readonly codec: string | undefined;
  selected: boolean;
  active?: boolean | undefined;
}
interface VideoRenditionListEvents extends RenditionListEvents<VideoRenditionLike> {
  activechange: EventLike;
}
interface VideoRenditionListLike extends EventTargetLike<VideoRenditionListEvents> {
  readonly length: number;
  readonly [index: number]: VideoRenditionLike;
  [Symbol.iterator](): Iterator<VideoRenditionLike>;
  getRenditionById(id: string): VideoRenditionLike | null;
  selectedIndex: number;
}
interface MediaAudioRenditionCapability {
  readonly audioRenditions: AudioRenditionListLike;
}
interface MediaVideoRenditionCapability {
  readonly videoRenditions: VideoRenditionListLike;
}
interface MediaFullscreenCapability {
  readonly isFullscreen: boolean;
  requestFullscreen(): Promise<unknown>;
  exitFullscreen(): Promise<unknown>;
}
interface MediaPictureInPictureEvents {
  enterpictureinpicture: EventLike;
  leavepictureinpicture: EventLike;
}
interface MediaPictureInPictureCapability {
  readonly isPictureInPicture: boolean;
  disablePictureInPicture: boolean;
  requestPictureInPicture(): Promise<unknown>;
  exitPictureInPicture(): Promise<unknown>;
}
/**
 * Canonical values for {@link MediaStreamType}.
 *
 * - `ON_DEMAND` — a finite-duration asset (VOD). Scrubbing is generally
 *   supported across the full timeline.
 * - `LIVE` — a live or DVR stream. The seekable window may slide as new
 *   segments are published, and `duration` is typically `Infinity`.
 * - `UNKNOWN` — the stream type has not been determined yet (no source,
 *   or metadata has not loaded).
 */
declare const MediaStreamTypes: {
  readonly ON_DEMAND: 'on-demand';
  readonly LIVE: 'live';
  readonly UNKNOWN: 'unknown';
};
type MediaStreamType = (typeof MediaStreamTypes)[keyof typeof MediaStreamTypes];
interface MediaStreamTypeEvents {
  streamtypechange: EventLike;
}
interface MediaStreamTypeCapability {
  streamType: MediaStreamType;
}
interface MediaLiveEvents {
  targetlivewindowchange: EventLike;
}
interface MediaLiveCapability {
  /**
   * Presentation time marking the start of the Live Edge Window. Playing at
   * the live edge when `currentTime >= liveEdgeStart`. `NaN` when the stream
   * isn't live or the value is unknown.
   *
   * Derived — no dedicated change event; re-read when `seekable`,
   * `targetLiveWindow`, or `streamType` change.
   *
   * @see https://github.com/video-dev/media-ui-extensions/blob/main/proposals/0007-live-edge.md
   */
  readonly liveEdgeStart: number;
  /**
   * Offset representing the seekable range size for live content. `0` for
   * standard latency live, `Infinity` for DVR, `NaN` for on-demand or
   * unknown. Fires `targetlivewindowchange` when the value changes.
   */
  readonly targetLiveWindow: number;
}
interface RemotePlaybackEvents {
  connecting: EventLike;
  connect: EventLike;
  disconnect: EventLike;
}
interface RemotePlaybackLike extends EventTargetLike<RemotePlaybackEvents> {
  readonly state: 'connecting' | 'connected' | 'disconnected';
  prompt(): Promise<void>;
  watchAvailability(callback: (available: boolean) => void): Promise<number>;
  cancelWatchAvailability(id?: number): Promise<void>;
}
interface MediaRemotePlaybackCapability {
  readonly remote: RemotePlaybackLike;
  disableRemotePlayback: boolean;
}
interface MediaPlaysInlineCapability {
  playsInline: boolean;
}
interface MediaPosterCapability {
  poster: string;
}
interface MediaVideoDimensionsEvents {
  resize: EventLike;
}
interface MediaVideoDimensionsCapability {
  readonly videoWidth: number;
  readonly videoHeight: number;
}
interface MediaConfigCapability {
  config: Record<string, unknown>;
}
interface MediaEvents extends MediaPlaybackEvents {}
interface Media<Events extends { [K in keyof Events]: EventLike } = MediaEvents> extends MediaPlaybackCapability, EventTargetLike<Events> {}
interface MediaFullEvents extends MediaEvents, MediaPauseEvents, MediaSeekEvents, MediaSourceEvents, MediaVolumeEvents, MediaPlaybackRateEvents, MediaBufferEvents, MediaErrorEvents, TextTrackListEvents, MediaStreamTypeEvents, MediaLiveEvents {}
interface MediaFull<Events extends { [K in keyof Events]: EventLike } = MediaFullEvents> extends Media<Events>, MediaPauseCapability, MediaSeekCapability, MediaSourceCapability, MediaVolumeCapability, MediaPlaybackRateCapability, MediaBufferCapability, MediaPlayedCapability, MediaErrorCapability, MediaTextTrackCapability, MediaStreamTypeCapability, MediaLiveCapability, MediaRemotePlaybackCapability, MediaControlsCapability, MediaAutoplayCapability, MediaConfigCapability {}
interface VideoEvents extends MediaFullEvents, MediaPictureInPictureEvents, MediaVideoDimensionsEvents {}
interface Video extends MediaFull<VideoEvents>, MediaPlaysInlineCapability, MediaPosterCapability, MediaFullscreenCapability, MediaPictureInPictureCapability, MediaVideoDimensionsCapability {}
interface AudioEvents extends MediaFullEvents {}
interface Audio extends MediaFull<AudioEvents> {}
interface MediaTargetLike extends MediaPlaybackCapability, MediaPauseCapability, MediaSeekCapability, MediaSourceCapability, MediaVolumeCapability, MediaPlaybackRateCapability, MediaBufferCapability, MediaPlayedCapability, MediaErrorCapability, MediaTextTrackCapability, MediaRemotePlaybackCapability, MediaControlsCapability, MediaAutoplayCapability, Partial<MediaLiveCapability>, Partial<MediaStreamTypeCapability>, Partial<MediaConfigCapability> {
  title: string;
}
interface VideoTargetLike extends MediaTargetLike, MediaPosterCapability, MediaPlaysInlineCapability, MediaVideoDimensionsCapability {
  disablePictureInPicture: boolean;
  requestPictureInPicture(): Promise<unknown>;
  requestFullscreen(): Promise<unknown>;
}
interface MediaEngineHost<Engine = unknown, Target = unknown> {
  readonly engine: Engine | null;
  attach?(target: Target): void;
  detach?(): void;
  destroy(): void;
}
//#endregion
export { Audio, AudioEvents, AudioRenditionLike, AudioRenditionListLike, AudioTrackLike, AudioTrackListLike, CanPlayTypeResult, ErrorLike, EventLike, EventTargetLike, Media, MediaAudioRenditionCapability, MediaAudioTrackCapability, MediaAutoplayCapability, MediaBufferCapability, MediaBufferEvents, MediaConfigCapability, MediaControlsCapability, MediaEngineHost, MediaErrorCapability, MediaErrorEvents, MediaEvents, MediaFeatureAvailability, MediaFull, MediaFullEvents, MediaFullscreenCapability, MediaLiveCapability, MediaLiveEvents, MediaPauseCapability, MediaPauseEvents, MediaPictureInPictureCapability, MediaPictureInPictureEvents, MediaPlaybackCapability, MediaPlaybackEvents, MediaPlaybackRateCapability, MediaPlaybackRateEvents, MediaPlayedCapability, MediaPlaysInlineCapability, MediaPosterCapability, MediaPreloadType, MediaReadyStateValue, MediaRemotePlaybackCapability, MediaSeekCapability, MediaSeekEvents, MediaSourceCapability, MediaSourceEvents, MediaStreamType, MediaStreamTypeCapability, MediaStreamTypeEvents, MediaStreamTypes, MediaTargetLike, MediaTextTrackCapability, MediaVideoDimensionsCapability, MediaVideoDimensionsEvents, MediaVideoRenditionCapability, MediaVideoTrackCapability, MediaVolumeCapability, MediaVolumeEvents, RemotePlaybackEvents, RemotePlaybackLike, TextCueLike, TextCueListLike, TextTrackKind, TextTrackLike, TextTrackListEvents, TextTrackListLike, TimeRangeLike, TypedEventTarget, Video, VideoEvents, VideoRenditionLike, VideoRenditionListLike, VideoTargetLike, VideoTrackLike, VideoTrackListLike };
//# sourceMappingURL=types.d.ts.map
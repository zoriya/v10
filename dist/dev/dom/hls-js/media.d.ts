import { AudioRenditionListLike, AudioTrackListLike, ErrorLike, MediaStreamType, VideoRenditionListLike, VideoTrackListLike } from "../../core/types.js";
import { MediaError } from "../../core/media-error.js";
import { MediaConfig } from "../media-host/media-host.js";
import { HTMLVideoElementHost } from "../video-host/video-host.js";
import Hls$1, { HlsConfig } from "hls.js";

//#region src/dom/hls-js/media.d.ts
type PreloadType = '' | 'none' | 'metadata' | 'auto';
type PlaybackType = (typeof PlaybackTypes)[keyof typeof PlaybackTypes];
type SourceType = (typeof ContentTypes)[keyof typeof ContentTypes];
type StreamType = MediaStreamType;
declare const PlaybackTypes: {
  MSE: string;
  NATIVE: string;
};
declare const ContentTypes: {
  M3U8: string;
  MP4: string;
};
declare const StreamTypes: {
  readonly ON_DEMAND: 'on-demand';
  readonly LIVE: 'live';
  readonly UNKNOWN: 'unknown';
};
interface HlsMediaProps {
  src: string;
  preload: PreloadType;
  streamType: StreamType;
  config?: HlsMediaConfig;
}
interface HlsMediaConfig extends MediaConfig {
  preferPlayback?: PlaybackType | undefined;
  contentType?: SourceType | undefined;
  hlsJs?: Partial<HlsConfig>;
}
declare const hlsMediaDefaultProps: HlsMediaProps;
/**
 * @fires streamtypechange - Fired when the detected stream type changes. Read `streamType` for the new value.
 * @fires targetlivewindowchange - Fired when the target live window changes. Read `targetLiveWindow` for the new value.
 */
declare class HlsJsMedia extends HTMLVideoElementHost implements HlsMediaProps {
  #private;
  constructor();
  attach(target: HTMLVideoElement): void;
  detach(): void;
  destroy(): void;
  /**
   * Underlying playback engine — the hls.js `Hls` instance when playing via
   * MSE, otherwise `null`. An advanced escape hatch for direct engine access;
   * normal playback is driven through this element's own properties and methods.
   */
  get engine(): Hls$1 | null;
  /**
   * Playback configuration: a preferred playback path, an explicit content
   * type, and options forwarded to hls.js. Reassigning reloads the engine when
   * an engine-relevant option changes.
   */
  get config(): HlsMediaConfig;
  set config(config: HlsMediaConfig);
  get error(): (ErrorLike & MediaError) | null;
  /** Populated only while the hls.js (MSE) engine is active; otherwise `undefined`. */
  get videoTracks(): VideoTrackListLike | undefined;
  /** Populated only while the hls.js (MSE) engine is active; otherwise `undefined`. */
  get audioTracks(): AudioTrackListLike | undefined;
  /** Selectable quality levels, populated only while the hls.js (MSE) engine is active; otherwise `undefined`. */
  get videoRenditions(): VideoRenditionListLike | undefined;
  /** Selectable audio variants, populated only while the hls.js (MSE) engine is active; otherwise `undefined`. */
  get audioRenditions(): AudioRenditionListLike | undefined;
  get src(): string;
  set src(src: string);
  /** Preload type (`'none'` / `'metadata'` / `'auto'`). */
  get preload(): PreloadType;
  set preload(value: PreloadType);
  /** Current stream type (`'on-demand'` / `'live'` / `'unknown'`). */
  get streamType(): StreamType;
  set streamType(value: StreamType);
  /**
   * Presentation time marking the start of the Live Edge Window.
   *
   * Derived from the delegate on every read; `NaN` when no delegate is
   * attached or the stream is not live.
   */
  get liveEdgeStart(): number;
  /**
   * Seekable range size for live content. `0` for standard live, `Infinity`
   * for DVR, `NaN` for on-demand or unknown. Fires `targetlivewindowchange`
   * when the value changes (bridged from the delegate).
   */
  get targetLiveWindow(): number;
  load(): Promise<void>;
}
//#endregion
export { ContentTypes, Hls$1 as Hls, HlsJsMedia, HlsMediaConfig, HlsMediaProps, PlaybackType, PlaybackTypes, PreloadType, SourceType, StreamType, StreamTypes, hlsMediaDefaultProps };
//# sourceMappingURL=media.d.ts.map
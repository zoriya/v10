import { MediaStreamType } from "../../core/types.js";
import { MediaError } from "../../core/media-error.js";
import { HTMLVideoElementHost } from "../video-host/video-host.js";
import * as _$_videojs_utils_types0 from "@videojs/utils/types";

//#region src/dom/native-hls/media.d.ts
type PreloadType = '' | 'none' | 'metadata' | 'auto';
type StreamType = MediaStreamType;
declare const StreamTypes: {
  readonly ON_DEMAND: 'on-demand';
  readonly LIVE: 'live';
  readonly UNKNOWN: 'unknown';
};
interface NativeHlsMediaProps {
  src: string;
  preload: PreloadType;
  streamType: StreamType;
}
declare const nativeHlsMediaDefaultProps: NativeHlsMediaProps;
declare class NativeHlsMediaBase extends HTMLVideoElementHost implements Omit<NativeHlsMediaProps, 'streamType'> {
  #private;
  /**
   * Underlying playback engine — always `null`. Native HLS has no JS engine;
   * the browser handles playback directly.
   */
  get engine(): null;
  get src(): string;
  set src(src: string);
  /** Preload type (`'none'` / `'metadata'` / `'auto'`). */
  get preload(): PreloadType;
  set preload(value: PreloadType);
  attach(target: HTMLVideoElement): void;
}
declare const NativeHlsMedia_base: typeof NativeHlsMediaBase & _$_videojs_utils_types0.Constructor<{
  readonly error: MediaError | null;
}> & _$_videojs_utils_types0.Constructor<{
  streamType: MediaStreamType;
}> & _$_videojs_utils_types0.Constructor<{
  readonly liveEdgeStart: number;
  readonly targetLiveWindow: number;
}>;
declare class NativeHlsMedia extends NativeHlsMedia_base {}
//#endregion
export { NativeHlsMedia, NativeHlsMediaProps, PreloadType, StreamType, StreamTypes, nativeHlsMediaDefaultProps };
//# sourceMappingURL=media.d.ts.map
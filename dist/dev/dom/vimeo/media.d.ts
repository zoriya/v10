import { ErrorLike, MediaPreloadType, TextTrackListLike, TimeRangeLike, Video } from "../../core/types.js";
import { MediaPlayedRangesAPI } from "../media-played-ranges/media-played-ranges.js";
import VimeoPlayer, { VimeoEmbedParameters, default as VimeoPlayerApi } from "@vimeo/player";
import * as _$_videojs_utils_types0 from "@videojs/utils/types";

//#region src/dom/vimeo/media.d.ts
/** Public Vimeo embed configuration. Forwarded to `@vimeo/player`. */
interface VimeoConfig extends VimeoEmbedParameters {
  referrerPolicy?: ReferrerPolicy;
}
/** Parsed pieces of a Vimeo source URL. */
interface VimeoSource {
  id: number;
  /** `'video'` for regular clips, `'event'` for live events. */
  kind: 'video' | 'event';
  /** Unlisted-video / event hash (the `h` parameter). */
  hash: string | null;
}
interface VimeoMediaProps {
  src: string;
  autoplay: boolean;
  defaultMuted: boolean;
  muted: boolean;
  loop: boolean;
  controls: boolean;
  playsInline: boolean;
  preload: MediaPreloadType;
  poster: string;
  config: VimeoConfig;
}
declare const vimeoMediaDefaultProps: VimeoMediaProps;
declare const VimeoMediaBase: _$_videojs_utils_types0.MixinReturn<{
  new (): EventTarget;
  prototype: EventTarget;
}, MediaPlayedRangesAPI>;
declare class VimeoMedia extends VimeoMediaBase implements Partial<Video> {
  #private;
  static PLAYER_SOFTWARE_NAME: string;
  /** Underlying `@vimeo/player` instance (null before attach). */
  get engine(): VimeoPlayer | null;
  get target(): HTMLIFrameElement | null;
  /** Bind the iframe hosting the embed, creating a `@vimeo/player` instance. */
  attach(target: HTMLIFrameElement | null): void;
  detach(): void;
  destroy(): void;
  get src(): string;
  set src(value: string);
  get currentSrc(): string;
  get readyState(): number;
  /** Reload the current source via Vimeo's `loadVideo`; no-op until `attach()`. */
  load(): Promise<void>;
  get paused(): boolean;
  get ended(): boolean;
  get seeking(): boolean;
  play(): Promise<void>;
  pause(): void;
  get currentTime(): number;
  set currentTime(value: number);
  get duration(): number;
  get volume(): number;
  set volume(value: number);
  get muted(): boolean;
  set muted(value: boolean);
  get playbackRate(): number;
  set playbackRate(value: number);
  get autoplay(): boolean;
  set autoplay(value: boolean);
  get defaultMuted(): boolean;
  set defaultMuted(value: boolean);
  get loop(): boolean;
  set loop(value: boolean);
  get controls(): boolean;
  set controls(value: boolean);
  get playsInline(): boolean;
  set playsInline(value: boolean);
  get preload(): MediaPreloadType;
  set preload(value: MediaPreloadType);
  get poster(): string;
  set poster(value: string);
  get config(): Record<string, unknown>;
  set config(value: Record<string, unknown>);
  get buffered(): TimeRangeLike;
  get seekable(): TimeRangeLike;
  get error(): ErrorLike | null;
  get textTracks(): TextTrackListLike;
  get videoWidth(): number;
  get videoHeight(): number;
  get isFullscreen(): boolean;
  requestFullscreen(): Promise<void>;
  exitFullscreen(): Promise<void>;
  get isPictureInPicture(): boolean;
  get disablePictureInPicture(): boolean;
  set disablePictureInPicture(value: boolean);
  requestPictureInPicture(): Promise<void>;
  exitPictureInPicture(): Promise<void>;
}
/** Extract a Vimeo video id from a numeric id, vimeo.com URL, or player URL. */
declare function parseVimeoVideoId(src: string): number | null;
/**
 * Parse a Vimeo source string. Recognizes numeric ids, `vimeo.com/<id>`,
 * `vimeo.com/video/<id>`, `player.vimeo.com/video/<id>`, `vimeo.com/event/<id>`
 * (live events), and unlisted/event hashes via `?h=` or a `/<hash>` segment.
 */
declare function parseVimeoSource(src: string): VimeoSource | null;
/** Build the iframe `src` URL for an initial Vimeo embed from the given props. */
declare function buildVimeoIframeSrc(src: string, props?: Partial<VimeoMediaProps>): string;
//#endregion
export { VimeoConfig, VimeoMedia, VimeoMediaProps, type VimeoPlayerApi, VimeoSource, buildVimeoIframeSrc, parseVimeoSource, parseVimeoVideoId, vimeoMediaDefaultProps };
//# sourceMappingURL=media.d.ts.map
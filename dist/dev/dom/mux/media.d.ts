import { HlsJsMedia } from "../hls-js/media.js";
import { MuxSource } from "./utils.js";

//#region src/dom/mux/media.d.ts
interface MuxMediaProps {
  src: string;
  source: MuxSource | null;
  thumbnail: string;
  storyboard: string;
}
declare const muxMediaDefaultProps: MuxMediaProps;
/**
 * @fires sourcechange - Fired when `source` changes, either directly or by parsing a new `src`. Read `source` for the new value.
 */
declare class MuxMedia extends HlsJsMedia implements MuxMediaProps {
  #private;
  /**
   * Media source URL. Setting a Mux stream URL
   * (`https://stream.mux.com/<playback-id>.m3u8?...`) extracts the playback ID
   * and query params into `source`; other URLs pass through unchanged.
   */
  get src(): string;
  set src(value: string);
  /**
   * Structured Mux source. Setting it derives `src` from the playback ID,
   * custom domain, and `playback` params (appended as `snake_case` query
   * params). A `playback.token` replaces all other params — signed URLs bake
   * them into the token.
   */
  get source(): MuxSource | null;
  set source(value: MuxSource | null);
  /** Thumbnail image URL. Falls back to one derived from `source`. */
  get thumbnail(): string;
  set thumbnail(value: string);
  /** Storyboard (thumbnail sprite) VTT URL. Falls back to one derived from `source`. */
  get storyboard(): string;
  set storyboard(value: string);
}
//#endregion
export { MuxMedia, MuxMediaProps, muxMediaDefaultProps };
//# sourceMappingURL=media.d.ts.map
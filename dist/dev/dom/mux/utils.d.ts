//#region src/dom/mux/utils.d.ts
declare const MUX_VIDEO_DOMAIN = "mux.com";
type MuxResolution = '270p' | '360p' | '480p' | '540p' | '720p' | '1080p' | '1440p' | '2160p';
type MuxRenditionOrder = 'desc';
type MuxThumbnailExt = 'webp' | 'jpg' | 'png';
type MuxThumbnailFitMode = 'preserve' | 'stretch' | 'crop' | 'smartcrop' | 'pad';
/**
 * Playback modifiers appended to the stream URL as `snake_case` query params
 * (e.g. `assetStartTime` → `asset_start_time`). A signed playback `token`
 * replaces every other param — they must be baked into the signing token.
 */
interface MuxPlaybackParams {
  token?: string | undefined;
  /** Maximum resolution of renditions included in the manifest. */
  maxResolution?: MuxResolution | undefined;
  /** Minimum resolution of renditions included in the manifest. */
  minResolution?: MuxResolution | undefined;
  /** Logic to order renditions in the HLS manifest. */
  renditionOrder?: MuxRenditionOrder | undefined;
  /** Start time for instant-clipping assets, as an epoch integer compared to the stream's program date time. */
  programStartTime?: number | undefined;
  /** End time for instant-clipping assets, as an epoch integer compared to the stream's program date time. */
  programEndTime?: number | undefined;
  /** Relative start time of the asset (in seconds) when using the instant clipping feature. */
  assetStartTime?: number | undefined;
  /** Relative end time of the asset (in seconds) when using the instant clipping feature. */
  assetEndTime?: number | undefined;
  /** Include HLS redundant streams in the manifest. */
  redundantStreams?: boolean | undefined;
  /** Add support for timeline hover previews on Roku devices. */
  rokuTrickPlay?: boolean | undefined;
  /** Default subtitles/captions language (BCP 47 compliant language code). */
  defaultSubtitlesLang?: string | undefined;
  /** Omit `EXT-X-PROGRAM-DATE-TIME` tags from HLS manifests for assets from live streams. */
  excludePdt?: boolean | undefined;
  [param: string]: string | number | boolean | undefined;
}
interface MuxThumbnailParams {
  token?: string | undefined;
  /** Image format used in the URL path (`thumbnail.<ext>`). Defaults to `webp`. */
  ext?: MuxThumbnailExt | undefined;
  /** Video time (in seconds) the image is pulled from. Defaults to the middle of the video. */
  time?: number | undefined;
  /** Width of the thumbnail (in pixels). Defaults to the width of the original video. */
  width?: number | undefined;
  /** Height of the thumbnail (in pixels). Defaults to the height of the original video. */
  height?: number | undefined;
  /** Rotate the image clockwise by the given number of degrees. */
  rotate?: number | undefined;
  /** How to fit the thumbnail within the specified width + height. */
  fitMode?: MuxThumbnailFitMode | undefined;
  /** Flip the image top-bottom after performing all other transformations. */
  flipV?: boolean | undefined;
  /** Flip the image left-right after performing all other transformations. */
  flipH?: boolean | undefined;
  /** Thumbnail time for instant-clipping assets, as an epoch integer compared to the stream's program date time. */
  programTime?: number | undefined;
  /** Pull the latest thumbnail from an ongoing live stream. */
  latest?: boolean | undefined;
  [param: string]: string | number | boolean | undefined;
}
interface MuxStoryboardParams {
  token?: string | undefined;
  /** Image format of the storyboard tiles referenced by the VTT. Defaults to `webp`. */
  format?: MuxThumbnailExt | undefined;
  [param: string]: string | number | undefined;
}
interface MuxDrmParams {
  token?: string | undefined;
}
interface MuxSource {
  playbackId: string;
  customDomain?: string | undefined;
  playback?: MuxPlaybackParams | undefined;
  thumbnail?: MuxThumbnailParams | MuxThumbnailParams[] | undefined;
  storyboard?: MuxStoryboardParams | undefined;
  drm?: MuxDrmParams | undefined;
}
/**
 * Serialize params to a query string (`?a=1&b=2`), mapping camelCase keys to
 * `snake_case` and skipping nullish values. A `token` replaces every other
 * param — signed URLs bake all modifiers into the token itself.
 */
declare function createMuxQuery(params?: Record<string, unknown>): string;
/** Build the Mux HLS stream URL for a source. */
declare function createMuxVideoURL(source?: MuxSource | null): string | undefined;
/**
 * Parse a Mux stream URL (`https://stream.<domain>/<playback-id>.m3u8?...`)
 * into a `MuxSource`, mapping `snake_case` query params back to camelCase
 * playback params. Returns `undefined` for non-Mux URLs.
 */
declare function parseMuxVideoURL(src: string): MuxSource | undefined;
/**
 * Structural equality for Mux sources. Compares nested playback / thumbnail /
 * storyboard / drm params, treating keys explicitly set to `undefined` as absent.
 */
declare function isSameMuxSource(a?: MuxSource | null, b?: MuxSource | null): boolean;
/**
 * Build the thumbnail image URL for a source. Uses the first entry when
 * `source.thumbnail` is an array, unless explicit `params` are given.
 */
declare function createMuxThumbnailURL(source?: MuxSource | null, params?: MuxThumbnailParams): string | undefined;
/** Build the storyboard (thumbnail sprite) VTT URL for a source. */
declare function createMuxStoryboardURL(source?: MuxSource | null): string | undefined;
type MuxJWT = {
  sub: string;
  aud: 'v' | 't' | 'g' | 's' | 'd';
  exp: number;
};
//#endregion
export { MUX_VIDEO_DOMAIN, MuxDrmParams, MuxJWT, MuxPlaybackParams, MuxRenditionOrder, MuxResolution, MuxSource, MuxStoryboardParams, MuxThumbnailExt, MuxThumbnailFitMode, MuxThumbnailParams, createMuxQuery, createMuxStoryboardURL, createMuxThumbnailURL, createMuxVideoURL, isSameMuxSource, parseMuxVideoURL };
//# sourceMappingURL=utils.d.ts.map
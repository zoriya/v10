import { isNil } from "@videojs/utils/predicate";
import { deepEqual } from "@videojs/utils/object";
import { camelCase, snakeCase } from "@videojs/utils/string";
import { parseJwt } from "@videojs/utils/jwt";
//#region src/dom/mux/utils.ts
const MUX_VIDEO_DOMAIN = "mux.com";
/**
* Serialize params to a query string (`?a=1&b=2`), mapping camelCase keys to
* `snake_case` and skipping nullish values. A `token` replaces every other
* param — signed URLs bake all modifiers into the token itself.
*/
function createMuxQuery(params = {}) {
	const { token, ...rest } = params;
	if (token) return `?${new URLSearchParams({ token: String(token) })}`;
	const search = new URLSearchParams();
	for (const [key, value] of Object.entries(rest)) if (!isNil(value)) search.set(snakeCase(key), String(value));
	const query = search.toString();
	return query ? `?${query}` : "";
}
/** Build the Mux HLS stream URL for a source. */
function createMuxVideoURL(source) {
	if (!source?.playbackId) return void 0;
	const { playbackId, customDomain = MUX_VIDEO_DOMAIN, playback } = source;
	return `https://stream.${customDomain}/${playbackId}.m3u8${createMuxQuery(playback)}`;
}
/**
* Parse a Mux stream URL (`https://stream.<domain>/<playback-id>.m3u8?...`)
* into a `MuxSource`, mapping `snake_case` query params back to camelCase
* playback params. Returns `undefined` for non-Mux URLs.
*/
function parseMuxVideoURL(src) {
	if (!src) return void 0;
	let url;
	try {
		url = new URL(src);
	} catch {
		return;
	}
	const [, domain] = url.hostname.match(/^stream\.(.+)$/) ?? [];
	const [, playbackId] = url.pathname.match(/^\/([^/]+)\.m3u8$/) ?? [];
	if (!domain || !playbackId) return void 0;
	const source = { playbackId };
	if (domain !== "mux.com") source.customDomain = domain;
	const playback = {};
	for (const [key, value] of url.searchParams) playback[camelCase(key)] = key === "token" ? value : parseMuxParamValue(value);
	if (Object.keys(playback).length > 0) source.playback = playback;
	return source;
}
/**
* Structural equality for Mux sources. Compares nested playback / thumbnail /
* storyboard / drm params, treating keys explicitly set to `undefined` as absent.
*/
function isSameMuxSource(a, b) {
	return deepEqual(a ?? null, b ?? null);
}
/**
* Coerce a query param string back to the boolean/number types declared on
* `MuxPlaybackParams`. Numbers only convert when the string round-trips exactly
* (so `1080p`, `007`, and JWTs stay strings).
*/
function parseMuxParamValue(value) {
	if (value === "true") return true;
	if (value === "false") return false;
	if (value !== "" && String(Number(value)) === value) return Number(value);
	return value;
}
/**
* Build the thumbnail image URL for a source. Uses the first entry when
* `source.thumbnail` is an array, unless explicit `params` are given.
*/
function createMuxThumbnailURL(source, params) {
	if (!source?.playbackId) return void 0;
	const { playbackId, customDomain = MUX_VIDEO_DOMAIN, thumbnail, playback } = source;
	const { ext = "webp", token, ...query } = params ?? (Array.isArray(thumbnail) ? thumbnail[0] : thumbnail) ?? {};
	if (token && parseJwt(token)?.aud !== "t") return void 0;
	if (!token && playback?.token) return void 0;
	return `https://image.${customDomain}/${playbackId}/thumbnail.${ext}${createMuxQuery({
		token,
		...query
	})}`;
}
/** Build the storyboard (thumbnail sprite) VTT URL for a source. */
function createMuxStoryboardURL(source) {
	if (!source?.playbackId) return void 0;
	const { playbackId, customDomain = MUX_VIDEO_DOMAIN, storyboard, playback } = source;
	const { token, ...query } = storyboard ?? {};
	if (token && parseJwt(token)?.aud !== "s") return void 0;
	if (!token && playback?.token) return void 0;
	return `https://image.${customDomain}/${playbackId}/storyboard.vtt${createMuxQuery({
		token,
		format: "webp",
		...query
	})}`;
}
//#endregion
export { MUX_VIDEO_DOMAIN, createMuxQuery, createMuxStoryboardURL, createMuxThumbnailURL, createMuxVideoURL, isSameMuxSource, parseMuxVideoURL };

//# sourceMappingURL=utils.js.map
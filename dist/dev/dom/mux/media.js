import { HlsJsMedia } from "../hls-js/media.js";
import { createMuxStoryboardURL, createMuxThumbnailURL, createMuxVideoURL, isSameMuxSource, parseMuxVideoURL } from "./utils.js";
//#region src/dom/mux/media.ts
const muxMediaDefaultProps = {
	src: "",
	source: null,
	thumbnail: "",
	storyboard: ""
};
/**
* @fires sourcechange - Fired when `source` changes, either directly or by parsing a new `src`. Read `source` for the new value.
*/
var MuxMedia = class extends HlsJsMedia {
	#source = muxMediaDefaultProps.source;
	#thumbnail = muxMediaDefaultProps.thumbnail;
	#storyboard = muxMediaDefaultProps.storyboard;
	/**
	* Media source URL. Setting a Mux stream URL
	* (`https://stream.mux.com/<playback-id>.m3u8?...`) extracts the playback ID
	* and query params into `source`; other URLs pass through unchanged.
	*/
	get src() {
		return super.src;
	}
	set src(value) {
		if (super.src === value) return;
		const source = parseMuxVideoURL(value) ?? null;
		const changed = !isSameMuxSource(this.#source, source);
		this.#source = source;
		super.src = value;
		if (changed) this.dispatchEvent(new Event("sourcechange"));
	}
	/**
	* Structured Mux source. Setting it derives `src` from the playback ID,
	* custom domain, and `playback` params (appended as `snake_case` query
	* params). A `playback.token` replaces all other params — signed URLs bake
	* them into the token.
	*/
	get source() {
		return this.#source;
	}
	set source(value) {
		if (isSameMuxSource(this.#source, value)) return;
		this.#source = value;
		const src = createMuxVideoURL(value) ?? "";
		if (super.src !== src) super.src = src;
		this.dispatchEvent(new Event("sourcechange"));
	}
	/** Thumbnail image URL. Falls back to one derived from `source`. */
	get thumbnail() {
		return this.#thumbnail || (createMuxThumbnailURL(this.#source) ?? "");
	}
	set thumbnail(value) {
		this.#thumbnail = value;
	}
	/** Storyboard (thumbnail sprite) VTT URL. Falls back to one derived from `source`. */
	get storyboard() {
		return this.#storyboard || (createMuxStoryboardURL(this.#source) ?? "");
	}
	set storyboard(value) {
		this.#storyboard = value;
	}
};
//#endregion
export { MuxMedia, muxMediaDefaultProps };

//# sourceMappingURL=media.js.map
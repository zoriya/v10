import { MediaStreamTypes } from "../../core/types.js";
import { HTMLVideoElementHost } from "../video-host/video-host.js";
import { NativeHlsMediaErrorsMixin } from "./errors.js";
import { NativeHlsMediaLiveMixin } from "./live.js";
import { NativeHlsMediaStreamTypeMixin } from "./stream-type.js";
//#region src/dom/native-hls/media.ts
const StreamTypes = MediaStreamTypes;
const nativeHlsMediaDefaultProps = {
	src: "",
	preload: "metadata",
	streamType: MediaStreamTypes.UNKNOWN
};
var NativeHlsMediaBase = class extends HTMLVideoElementHost {
	#src = nativeHlsMediaDefaultProps.src;
	#preload = nativeHlsMediaDefaultProps.preload;
	/**
	* Underlying playback engine — always `null`. Native HLS has no JS engine;
	* the browser handles playback directly.
	*/
	get engine() {
		return null;
	}
	get src() {
		return this.#src;
	}
	set src(src) {
		this.#src = src;
		if (this.target) this.target.src = src;
	}
	/** Preload type (`'none'` / `'metadata'` / `'auto'`). */
	get preload() {
		return this.#preload;
	}
	set preload(value) {
		this.#preload = value;
		if (this.target) this.target.preload = value;
	}
	attach(target) {
		super.attach(target);
		if (this.preload !== target.preload) target.preload = this.preload;
		if (this.src) target.src = this.src;
	}
};
var NativeHlsMedia = class extends NativeHlsMediaLiveMixin(NativeHlsMediaStreamTypeMixin(NativeHlsMediaErrorsMixin(NativeHlsMediaBase))) {};
//#endregion
export { NativeHlsMedia, StreamTypes, nativeHlsMediaDefaultProps };

//# sourceMappingURL=media.js.map
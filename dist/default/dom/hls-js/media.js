import { MediaStreamTypes } from "../../core/types.js";
import { HTMLVideoElementHost } from "../video-host/video-host.js";
import { bridgeEvents } from "../../core/bridge-events.js";
import { NativeHlsMedia } from "../native-hls/media.js";
import { HlsJsOnlyMedia } from "./hls-js-only.js";
import { shallowEqual } from "@videojs/utils/object";
import Hls$1 from "hls.js";
//#region src/dom/hls-js/media.ts
const PlaybackTypes = {
	MSE: "mse",
	NATIVE: "native"
};
const ContentTypes = {
	M3U8: "application/vnd.apple.mpegurl",
	MP4: "video/mp4"
};
const StreamTypes = MediaStreamTypes;
const hlsMediaDefaultProps = {
	src: "",
	preload: "metadata",
	streamType: MediaStreamTypes.UNKNOWN,
	config: {}
};
var HlsMediaEvent = class extends Event {};
/**
* @fires streamtypechange - Fired when the detected stream type changes. Read `streamType` for the new value.
* @fires targetlivewindowchange - Fired when the target live window changes. Read `targetLiveWindow` for the new value.
*/
var HlsJsMedia = class extends HTMLVideoElementHost {
	#delegate = null;
	#mediaElement = null;
	#src = hlsMediaDefaultProps.src;
	#preload = hlsMediaDefaultProps.preload;
	#streamType = hlsMediaDefaultProps.streamType;
	#isUserStreamType = false;
	#loadRequested;
	#prevEngineConfigKey;
	constructor() {
		super();
		this.addEventListener("loadstart", this.#stopTargetLoadStartEvent);
	}
	attach(target) {
		this.#mediaElement = target;
		super.attach(target);
		this.#delegate?.attach(target);
	}
	detach() {
		this.#delegate?.detach();
		super.detach();
		this.#mediaElement = null;
	}
	destroy() {
		this.detach();
		this.#engineDestroy();
		super.destroy();
		this.removeEventListener("loadstart", this.#stopTargetLoadStartEvent);
	}
	/**
	* Underlying playback engine — the hls.js `Hls` instance when playing via
	* MSE, otherwise `null`. An advanced escape hatch for direct engine access;
	* normal playback is driven through this element's own properties and methods.
	*/
	get engine() {
		return this.#delegate?.engine ?? null;
	}
	/**
	* Playback configuration: a preferred playback path, an explicit content
	* type, and options forwarded to hls.js. Reassigning reloads the engine when
	* an engine-relevant option changes.
	*/
	get config() {
		return super.config;
	}
	set config(config) {
		super.config = config;
		if (this.#shouldEngineUpdate(this.#engineConfigKey())) this.#requestLoad();
	}
	get error() {
		return this.#delegate?.error ?? null;
	}
	/** Populated only while the hls.js (MSE) engine is active; otherwise `undefined`. */
	get videoTracks() {
		return this.#delegate instanceof HlsJsOnlyMedia ? this.#delegate.videoTracks : void 0;
	}
	/** Populated only while the hls.js (MSE) engine is active; otherwise `undefined`. */
	get audioTracks() {
		return this.#delegate instanceof HlsJsOnlyMedia ? this.#delegate.audioTracks : void 0;
	}
	/** Selectable quality levels, populated only while the hls.js (MSE) engine is active; otherwise `undefined`. */
	get videoRenditions() {
		return this.#delegate instanceof HlsJsOnlyMedia ? this.#delegate.videoRenditions : void 0;
	}
	/** Selectable audio variants, populated only while the hls.js (MSE) engine is active; otherwise `undefined`. */
	get audioRenditions() {
		return this.#delegate instanceof HlsJsOnlyMedia ? this.#delegate.audioRenditions : void 0;
	}
	get src() {
		return this.#src;
	}
	set src(src) {
		this.#src = src;
		this.#requestLoad();
	}
	/** Preload type (`'none'` / `'metadata'` / `'auto'`). */
	get preload() {
		return this.#preload;
	}
	set preload(value) {
		this.#preload = value;
		if (this.#delegate) this.#delegate.preload = value;
	}
	/** Current stream type (`'on-demand'` / `'live'` / `'unknown'`). */
	get streamType() {
		return this.#delegate?.streamType ?? this.#streamType;
	}
	set streamType(value) {
		this.#isUserStreamType = value !== StreamTypes.UNKNOWN;
		if (this.#delegate) {
			this.#delegate.streamType = value;
			this.#streamType = this.#delegate.streamType;
			return;
		}
		if (this.#streamType === value) return;
		this.#streamType = value;
		this.dispatchEvent(new HlsMediaEvent("streamtypechange"));
	}
	/**
	* Presentation time marking the start of the Live Edge Window.
	*
	* Derived from the delegate on every read; `NaN` when no delegate is
	* attached or the stream is not live.
	*/
	get liveEdgeStart() {
		return this.#delegate?.liveEdgeStart ?? NaN;
	}
	/**
	* Seekable range size for live content. `0` for standard live, `Infinity`
	* for DVR, `NaN` for on-demand or unknown. Fires `targetlivewindowchange`
	* when the value changes (bridged from the delegate).
	*/
	get targetLiveWindow() {
		return this.#delegate?.targetLiveWindow ?? NaN;
	}
	async load() {
		this.#loadRequested = null;
		if (this.remote.state === "connected") {
			this.dispatchEvent(new HlsMediaEvent("loadstart"));
			return super.load();
		}
		if (this.#shouldEngineUpdate(this.#engineConfigKey())) {
			this.#engineDestroy();
			this.#prevEngineConfigKey = this.#engineConfigKey();
			const contentType = this.config.contentType ?? inferContentType(this.#src);
			const useMse = Hls$1.isSupported() && contentType === ContentTypes.M3U8 && this.config.preferPlayback !== PlaybackTypes.NATIVE;
			this.#delegate = useMse ? new HlsJsOnlyMedia({ config: { ...this.config?.hlsJs } }) : new NativeHlsMedia();
			bridgeEvents(this.#delegate, this);
			if (this.#isUserStreamType) this.#delegate.streamType = this.#streamType;
			this.#delegate.preload = this.preload;
			if (this.#mediaElement) this.#delegate.attach(this.#mediaElement);
		}
		if (this.#delegate) {
			this.dispatchEvent(new HlsMediaEvent("loadstart"));
			this.#delegate.src = this.#src;
		}
	}
	#stopTargetLoadStartEvent = (event) => {
		if (!(event instanceof HlsMediaEvent)) event.stopImmediatePropagation();
	};
	async #requestLoad() {
		if (this.#loadRequested) return;
		await (this.#loadRequested = Promise.resolve());
		this.#loadRequested = null;
		this.load();
	}
	#shouldEngineUpdate(nextEngineConfigKey) {
		return !shallowEqual(this.#prevEngineConfigKey, nextEngineConfigKey);
	}
	#engineConfigKey() {
		return {
			...this.config.hlsJs,
			preferPlayback: this.config.preferPlayback,
			contentType: this.config.contentType ?? inferContentType(this.#src)
		};
	}
	#engineDestroy() {
		this.#delegate?.destroy();
		this.#delegate = null;
		this.#prevEngineConfigKey = null;
		this.#loadRequested = null;
		if (!this.#isUserStreamType) this.#streamType = StreamTypes.UNKNOWN;
	}
};
function inferContentType(src) {
	if ((src.split(/[?#]/)[0] ?? "").endsWith(".mp4")) return ContentTypes.MP4;
	return ContentTypes.M3U8;
}
//#endregion
export { ContentTypes, Hls$1 as Hls, HlsJsMedia, PlaybackTypes, StreamTypes, hlsMediaDefaultProps };

//# sourceMappingURL=media.js.map
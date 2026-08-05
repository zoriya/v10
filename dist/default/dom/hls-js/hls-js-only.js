import { HTMLVideoElementHost } from "../video-host/video-host.js";
import { MediaTracksMixin } from "../../core/media-tracks/mixin.js";
import { HlsJsMediaAirPlayMixin } from "./airplay-bridge.js";
import { HlsJsMediaErrorsMixin } from "./errors.js";
import { HlsJsMediaLiveMixin } from "./live.js";
import { HlsJsMediaMediaTracksMixin } from "./media-tracks.js";
import { HlsJsMediaMetadataTracksMixin } from "./metadata-tracks.js";
import { HlsJsMediaPreloadMixin } from "./preload.js";
import { HlsJsMediaStreamTypeMixin } from "./stream-type.js";
import { HlsJsMediaTextTracksMixin } from "./text-tracks.js";
import Hls from "hls.js";
//#region src/dom/hls-js/hls-js-only.ts
const defaultHlsConfig = {
	backBufferLength: 30,
	renderTextTracksNatively: false,
	liveDurationInfinity: true,
	capLevelToPlayerSize: true,
	capLevelOnFPSDrop: true,
	autoStartLoad: false
};
var HlsJsOnlyMediaBase = class extends HTMLVideoElementHost {
	#engine = null;
	constructor(params) {
		super();
		this.#engine = new Hls({
			...defaultHlsConfig,
			...params.config
		});
	}
	get engine() {
		return this.#engine;
	}
	get src() {
		return this.#engine?.url ?? "";
	}
	set src(src) {
		this.#engine?.loadSource(src);
	}
	attach(target) {
		super.attach(target);
		this.#engine?.attachMedia(target);
	}
	detach() {
		this.#engine?.detachMedia();
		super.detach();
	}
	destroy() {
		this.detach();
		this.#engine?.destroy();
		this.#engine = null;
	}
};
const HlsJsOnlyMediaComposed = HlsJsMediaAirPlayMixin(HlsJsMediaPreloadMixin(HlsJsMediaLiveMixin(HlsJsMediaStreamTypeMixin(HlsJsMediaMediaTracksMixin(HlsJsMediaMetadataTracksMixin(HlsJsMediaTextTracksMixin(HlsJsMediaErrorsMixin(MediaTracksMixin(HlsJsOnlyMediaBase)))))))));
var HlsJsOnlyMedia = class extends HlsJsOnlyMediaComposed {};
//#endregion
export { HlsJsOnlyMedia };

//# sourceMappingURL=hls-js-only.js.map
import { HTMLVideoElementHost } from "../video-host/video-host.js";
import { MediaTracksMixin } from "../../core/media-tracks/mixin.js";
import * as dashjs from "dashjs";
//#region src/dom/dash/media.ts
const dashMediaDefaultProps = { src: "" };
const DashMediaBase = MediaTracksMixin(HTMLVideoElementHost);
var DashMedia = class extends DashMediaBase {
	#engine;
	#src = dashMediaDefaultProps.src;
	constructor() {
		super();
		this.#engine = dashjs.MediaPlayer().create();
		this.#engine.initialize(void 0, void 0, false);
	}
	attach(target) {
		super.attach(target);
		this.#engine.attachView(target);
	}
	detach() {
		super.detach();
		this.#engine.attachView(null);
	}
	destroy() {
		this.detach();
		this.#engine.destroy();
		super.destroy();
	}
	/**
	* Underlying playback engine — the dash.js `MediaPlayerClass` instance. An
	* advanced escape hatch for direct engine access; normal playback is driven
	* through this element's own properties and methods.
	*/
	get engine() {
		return this.#engine;
	}
	get src() {
		return this.#src;
	}
	set src(src) {
		this.#src = src;
		this.#engine.attachSource(src);
	}
};
//#endregion
export { DashMedia, dashMediaDefaultProps };

//# sourceMappingURL=media.js.map
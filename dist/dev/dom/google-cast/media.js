import { requiresCastFramework } from "./utils.js";
import { GoogleCastProvider } from "./google-cast-provider.js";
//#region src/dom/google-cast/media.ts
const googleCastDefaultProps = {
	src: void 0,
	contentType: void 0,
	streamType: void 0,
	receiver: void 0,
	customData: void 0
};
var GoogleCast = class {
	#src;
	#contentType;
	#streamType;
	#receiver;
	#customData;
	#media = null;
	#provider = null;
	#override = null;
	constructor(props = {}) {
		Object.assign(this, props);
	}
	setMedia(host) {
		if (!requiresCastFramework()) return;
		this.#media = host;
		if (!this.#provider) {
			this.#provider = new GoogleCastProvider(this);
			this.#provider.remote.addEventListener("connect", this.#onStateChange);
			this.#provider.remote.addEventListener("disconnect", this.#onStateChange);
			this.#override = this.#createRemoteOverride();
		}
	}
	attach(target) {
		this.#provider?.attach(target);
	}
	detach() {
		this.#provider?.detach();
	}
	destroy() {
		this.#provider?.destroy();
		this.#provider = null;
		this.#media = null;
	}
	#onStateChange = () => {
		if (!this.#provider) return;
		if (this.#provider.remote.state === "connected") this.#override = this.#provider;
		else this.#override = this.#createRemoteOverride();
	};
	#createRemoteOverride() {
		const provider = this.#provider;
		return { get remote() {
			return provider.remote;
		} };
	}
	get targetOverride() {
		return this.#override;
	}
	/** Source URL loaded on the Cast receiver. Falls back to a `<source>` child, `src`, then `currentSrc`. */
	get src() {
		return this.#src ?? this.#media?.querySelector("source")?.src ?? this.#media?.src ?? this.#media?.currentSrc ?? "";
	}
	set src(value) {
		if (this.#src === value) return;
		this.#src = value;
		this.#load();
	}
	/** MIME type of the Cast source. When unset, the receiver infers it from the URL. */
	get contentType() {
		return this.#contentType;
	}
	set contentType(value) {
		if (this.#contentType === value) return;
		this.#contentType = value;
		this.#load();
	}
	/** Stream type used on the Cast receiver. Falls back to the host's `streamType` if it exposes one. */
	get streamType() {
		return this.#streamType ?? this.#media?.streamType;
	}
	set streamType(value) {
		if (this.#streamType === value) return;
		this.#streamType = value;
		this.#load();
	}
	/** Cast receiver application ID. Read on session start; falls back to the layer's default. */
	get receiver() {
		return this.#receiver;
	}
	set receiver(value) {
		if (this.#receiver === value) return;
		this.#receiver = value;
		this.#load();
	}
	/** Custom data sent to the Cast receiver with the load request. */
	get customData() {
		return this.#customData;
	}
	set customData(value) {
		if (this.#customData === value) return;
		this.#customData = value;
		this.#load();
	}
	#load() {
		if (this.#media?.remote.state === "connected") this.#media.load();
	}
};
//#endregion
export { GoogleCast, googleCastDefaultProps };

//# sourceMappingURL=media.js.map
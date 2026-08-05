import { InvalidStateError, NotFoundError } from "./utils.js";
//#region src/dom/google-cast/remote-playback.ts
let callbackIdCount = 0;
/**
* Implementation of the W3C [`RemotePlayback`](https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback)
* interface backed by Google Cast.
*
* Surfaced via `host.remote` while the {@link GoogleCastProvider} is in the
* provider chain. The public API must strictly conform to the W3C spec:
*
* - Properties: `state`
* - Methods: `watchAvailability`, `cancelWatchAvailability`, `prompt`
* - Events: `connecting`, `connect`, `disconnect`
*
* Internal state mutations are pushed by {@link GoogleCastProvider} through
* private callbacks registered via `provider.bindHooks(...)` in the constructor —
* do not add public methods or properties that aren't part of the spec.
*/
var RemotePlayback = class extends EventTarget {
	#provider;
	#state = "disconnected";
	#available = false;
	#callbacks = /* @__PURE__ */ new Map();
	constructor(provider) {
		super();
		this.#provider = provider;
		provider.bindHooks({
			setState: (next) => this.#setState(next),
			setAvailable: (available) => this.#setAvailable(available)
		});
	}
	get state() {
		return this.#state;
	}
	async watchAvailability(callback) {
		this.#assertEnabled();
		const id = ++callbackIdCount;
		this.#callbacks.set(id, callback);
		queueMicrotask(() => callback(this.#provider.hasDevicesAvailable()));
		return id;
	}
	async cancelWatchAvailability(callbackId) {
		this.#assertEnabled();
		if (callbackId === void 0) {
			this.#callbacks.clear();
			return;
		}
		if (!this.#callbacks.delete(callbackId)) throw new NotFoundError(`Callback not found for id ${callbackId}.`);
	}
	async prompt() {
		this.#assertEnabled();
		await this.#provider.requestCastSession();
	}
	#assertEnabled() {
		if (this.#provider.target?.disableRemotePlayback) throw new InvalidStateError("disableRemotePlayback attribute is present.");
	}
	#setState(next) {
		if (this.#state === next) return;
		this.#state = next;
		if (next === "connecting") this.dispatchEvent(new Event("connecting"));
		else if (next === "connected") this.dispatchEvent(new Event("connect"));
		else this.dispatchEvent(new Event("disconnect"));
	}
	#setAvailable(available) {
		if (this.#available === available) return;
		this.#available = available;
		for (const callback of this.#callbacks.values()) callback(available);
	}
};
//#endregion
export { RemotePlayback };

//# sourceMappingURL=remote-playback.js.map
import { createHlsAudioOnlyEngine } from "./engine-audio-only.js";
//#region src/playback/engines/hls/adapter-audio-only.ts
const simpleHlsAudioOnlyMediaDefaultProps = {
	src: "",
	preload: "",
	disableRemotePlayback: false
};
/**
* Mixin that adds SPF audio-only HLS playback to any base class.
*
* Parallel to `SimpleHlsMediaMixin` with one substantive difference: the
* underlying engine is the audio-only variant (`createHlsAudioOnlyEngine`),
* which omits video and text-track behaviors. The src / preload /
* disableRemotePlayback / play() contract per the WHATWG HTML spec is identical
* to the default adapter.
*
* Selecting this adapter is the variant decision: instantiating
* `SimpleHlsAudioOnlyMediaElement` opts the consumer into audio-only
* delivery even when the source is a mixed-AV HLS manifest.
*
* @example
* class SimpleHlsAudioOnlyMedia extends SimpleHlsAudioOnlyMediaMixin(HTMLVideoElementHost) {}
*
* const media = new SimpleHlsAudioOnlyMedia();
* media.attach(document.querySelector('video'));
* media.src = 'https://stream.mux.com/abc123.m3u8';
*/
function SimpleHlsAudioOnlyMediaMixin(BaseClass) {
	class SimpleHlsAudioOnlyMediaImpl extends BaseClass {
		#engine;
		#config;
		#signals;
		#preload = simpleHlsAudioOnlyMediaDefaultProps.preload;
		#disableRemotePlayback = simpleHlsAudioOnlyMediaDefaultProps.disableRemotePlayback;
		/** Pending loadstart listener from a deferred play() retry, if any. */
		#loadstartListener = null;
		constructor(...args) {
			super(...args);
			const { config } = args?.[0] ?? {};
			this.#config = config;
			this.#engine = this.#createEngine();
		}
		/**
		* Underlying playback engine — the low-level SPF reactive composition that
		* drives playback. An advanced escape hatch for direct engine access;
		* normal playback is driven through this element's own properties and
		* methods.
		*/
		get engine() {
			return this.#engine;
		}
		attach(mediaElement) {
			super.attach?.(mediaElement);
			this.#signals.context.mediaElement.set(mediaElement);
		}
		detach() {
			this.#cancelPendingPlay();
			this.#signals.context.mediaElement.set(void 0);
			super.detach?.();
		}
		destroy() {
			this.#cancelPendingPlay();
			this.#engine.destroy();
		}
		/** Preload type (`'none'` / `'metadata'` / `'auto'`). */
		get preload() {
			return this.#preload;
		}
		set preload(value) {
			this.#preload = value;
			if (value) this.#signals.state.preload.set(value);
		}
		get disableRemotePlayback() {
			return this.#disableRemotePlayback;
		}
		set disableRemotePlayback(value) {
			this.#disableRemotePlayback = value;
			this.#signals.state.disableRemotePlayback.set(value);
		}
		get src() {
			return this.#signals.state.presentation.get()?.url ?? "";
		}
		set src(value) {
			this.#cancelPendingPlay();
			this.#signals.state.presentation.set(value ? { url: value } : void 0);
		}
		play() {
			const mediaElement = this.#signals.context.mediaElement.get();
			if (!mediaElement) return Promise.reject(/* @__PURE__ */ new Error("SimpleHlsAudioOnlyMediaElement: no media element attached"));
			this.#signals.state.loadActivated.set(true);
			return mediaElement.play().catch((err) => {
				if (this.src) return new Promise((resolve, reject) => {
					const listener = () => {
						this.#loadstartListener = null;
						mediaElement.play().then(resolve, reject);
					};
					this.#loadstartListener = listener;
					mediaElement.addEventListener("loadstart", listener, { once: true });
				});
				throw err;
			});
		}
		#createEngine() {
			return createHlsAudioOnlyEngine({
				...this.#config,
				onSignalsReady: (signals) => {
					this.#signals = signals;
				}
			});
		}
		#cancelPendingPlay() {
			if (!this.#loadstartListener) return;
			this.#signals.context.mediaElement.get()?.removeEventListener("loadstart", this.#loadstartListener);
			this.#loadstartListener = null;
		}
	}
	return SimpleHlsAudioOnlyMediaImpl;
}
/** Standalone SPF audio-only media adapter with no base class. */
var SimpleHlsAudioOnlyMediaElement = class extends SimpleHlsAudioOnlyMediaMixin(class {}) {};
//#endregion
export { SimpleHlsAudioOnlyMediaElement, SimpleHlsAudioOnlyMediaMixin, simpleHlsAudioOnlyMediaDefaultProps };

//# sourceMappingURL=adapter-audio-only.js.map
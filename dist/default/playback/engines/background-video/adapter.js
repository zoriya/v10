import { maxResolutionToPixelArea, pickTrackUnderPixelArea } from "../../../media/primitives/select-tracks.js";
import { createBackgroundVideoEngine } from "./engine.js";
//#region src/playback/engines/background-video/adapter.ts
const backgroundVideoMediaDefaultProps = {
	src: "",
	preload: "auto",
	loop: true,
	muted: true,
	autoplay: true,
	maxResolution: void 0
};
/**
* Mixin that adds the background-video SPF playback engine to any
* base class.
*
* Implements the WHATWG HTML media element contract (`src`, `preload`,
* `loop`, `muted`, `autoplay`, `play()`) so it can be dropped in anywhere a
* media element API is expected. Compared to `SimpleHlsMediaMixin`, this
* variant:
*
* - exposes `loop`, `muted`, and `autoplay` as adapter-owned native
*   passthroughs, all defaulting to `true` — the use case is silent
*   autoplay-looping video, so muted + autoplay satisfy browser autoplay
*   policies and loop is the defining behavior;
* - drives the underlying engine with the background-video
*   composition (single-rendition, video-only, autoplay-from-construction).
*
* A new engine is created on every src assignment — this fully tears down
* all state, SourceBuffers, and in-flight requests from the previous
* source before the next one begins. The media element reference is
* preserved across src changes and re-applied to the new engine
* automatically.
*
* @example
* class BackgroundVideoMedia extends BackgroundVideoMediaMixin(HTMLVideoElementHost) {}
*
* const media = new BackgroundVideoMedia();
* media.attach(document.querySelector('video'));
* media.src = 'https://stream.mux.com/abc123.m3u8';
* media.play();
*/
function BackgroundVideoMediaMixin(BaseClass) {
	class BackgroundVideoMediaImpl extends BaseClass {
		#engine;
		#config;
		#signals;
		#preload = backgroundVideoMediaDefaultProps.preload;
		#loop = backgroundVideoMediaDefaultProps.loop;
		#muted = backgroundVideoMediaDefaultProps.muted;
		#autoplay = backgroundVideoMediaDefaultProps.autoplay;
		#maxResolution;
		/** Pending loadstart listener from a deferred play() retry, if any. */
		#loadstartListener = null;
		constructor(...args) {
			super(...args);
			const { config } = args?.[0] ?? {};
			this.#config = config;
			this.#maxResolution = config?.maxResolution;
			this.#engine = this.#createEngine();
		}
		get engine() {
			return this.#engine;
		}
		attach(mediaElement) {
			super.attach?.(mediaElement);
			mediaElement.loop = this.#loop;
			mediaElement.muted = this.#muted;
			mediaElement.autoplay = this.#autoplay;
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
		get preload() {
			return this.#preload;
		}
		set preload(_value) {}
		get loop() {
			return this.#loop;
		}
		set loop(_value) {}
		get muted() {
			return this.#muted;
		}
		set muted(_value) {}
		get autoplay() {
			return this.#autoplay;
		}
		set autoplay(_value) {}
		get maxResolution() {
			return this.#maxResolution;
		}
		/**
		* Set the cap. Accepts `"720p"` / `"1080p"` etc., a bare number
		* (interpreted as pixel area), or `undefined` to clear. Unrecognized
		* values are treated as no cap.
		*/
		set maxResolution(value) {
			if (value === this.#maxResolution) return;
			this.#maxResolution = value;
		}
		get src() {
			return this.#signals.state.presentation.get()?.url ?? "";
		}
		set src(value) {
			this.#cancelPendingPlay();
			if (value) this.#signals.state.presentation.set({ url: value });
			else this.#signals.state.presentation.set(void 0);
		}
		async play() {
			const mediaElement = this.#signals.context.mediaElement.get();
			if (!mediaElement) return Promise.reject(/* @__PURE__ */ new Error("BackgroundVideoMediaElement: no media element attached"));
			try {
				return await mediaElement.play();
			} catch (err) {
				if (this.src) return new Promise((resolve, reject) => {
					const listener = () => {
						this.#loadstartListener = null;
						mediaElement.play().then(resolve, reject);
					};
					this.#loadstartListener = listener;
					mediaElement.addEventListener("loadstart", listener, { once: true });
				});
				throw err;
			}
		}
		#createEngine() {
			const adapterPicker = (presentation) => {
				return pickTrackUnderPixelArea((presentation.selectionSets?.find((s) => s.type === "video"))?.switchingSets[0]?.tracks ?? [], maxResolutionToPixelArea(this.#maxResolution))?.id;
			};
			return createBackgroundVideoEngine({
				picker: adapterPicker,
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
	return BackgroundVideoMediaImpl;
}
/** Standalone SPF background-video adapter with no base class. */
var BackgroundVideoMediaElement = class extends BackgroundVideoMediaMixin(class {}) {};
//#endregion
export { BackgroundVideoMediaElement, BackgroundVideoMediaMixin, backgroundVideoMediaDefaultProps };

//# sourceMappingURL=adapter.js.map
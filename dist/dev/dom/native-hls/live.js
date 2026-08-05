import { getStreamInfoFromSrc, looksLikeM3u8 } from "./m3u8-utils.js";
//#region src/dom/native-hls/live.ts
/**
* @fires targetlivewindowchange - Fired when the target live window changes. Read `targetLiveWindow` for the new value.
*/
function NativeHlsMediaLiveMixin(BaseClass) {
	class NativeHlsMediaLive extends BaseClass {
		#targetLiveWindow = NaN;
		#liveEdgeStartOffset;
		#disconnect = null;
		#currentSrc = "";
		/**
		* Seekable range size for live content. `0` for standard live, `Infinity`
		* for DVR, `NaN` for on-demand or unknown.
		*/
		get targetLiveWindow() {
			return this.#targetLiveWindow;
		}
		/**
		* Presentation time marking the start of the Live Edge Window. Derived on
		* each read from the current `seekable.end` and cached offset; `NaN` when
		* the stream is not live or the offset is unavailable.
		*/
		get liveEdgeStart() {
			if (this.#liveEdgeStartOffset === void 0) return NaN;
			const target = this.target;
			if (!target) return NaN;
			const { seekable, buffered } = target;
			const ranges = seekable.length ? seekable : buffered;
			if (!ranges.length) return NaN;
			return ranges.end(ranges.length - 1) - this.#liveEdgeStartOffset;
		}
		attach(target) {
			super.attach(target);
			this.#init(target);
		}
		detach() {
			this.#destroy();
			super.detach?.();
		}
		destroy() {
			this.#destroy();
			super.destroy?.();
		}
		#destroy() {
			this.#disconnect?.abort();
			this.#disconnect = null;
			this.#currentSrc = "";
			this.#liveEdgeStartOffset = void 0;
			this.#setTargetLiveWindow(NaN);
		}
		#init(target) {
			this.#destroy();
			this.#disconnect = new AbortController();
			const { signal } = this.#disconnect;
			target.addEventListener("loadstart", () => this.#refresh(target), { signal });
			target.addEventListener("emptied", () => {
				this.#currentSrc = "";
				this.#liveEdgeStartOffset = void 0;
				this.#setTargetLiveWindow(NaN);
			}, { signal });
			if (target.currentSrc || target.src) this.#refresh(target);
		}
		async #refresh(target) {
			const src = target.currentSrc || target.src;
			if (!src || !looksLikeM3u8(src) || src === this.#currentSrc) return;
			this.#currentSrc = src;
			this.#liveEdgeStartOffset = void 0;
			this.#setTargetLiveWindow(NaN);
			const signal = this.#disconnect?.signal;
			try {
				const info = await getStreamInfoFromSrc(src, signal);
				if (signal?.aborted) return;
				if ((target.currentSrc || target.src) !== src) return;
				this.#liveEdgeStartOffset = info.liveEdgeStartOffset;
				this.#setTargetLiveWindow(info.targetLiveWindow);
			} catch {}
		}
		#setTargetLiveWindow(value) {
			if (Object.is(this.#targetLiveWindow, value)) return;
			this.#targetLiveWindow = value;
			this.dispatchEvent(new Event("targetlivewindowchange"));
		}
	}
	return NativeHlsMediaLive;
}
//#endregion
export { NativeHlsMediaLiveMixin };

//# sourceMappingURL=live.js.map
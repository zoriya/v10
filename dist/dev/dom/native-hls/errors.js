import { MediaError } from "../../core/media-error.js";
//#region src/dom/native-hls/errors.ts
function NativeHlsMediaErrorsMixin(BaseClass) {
	class NativeHlsMediaErrors extends BaseClass {
		#disconnect = null;
		#error = null;
		get error() {
			return this.#error;
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
			this.#error = null;
		}
		#init(target) {
			this.#destroy();
			this.#disconnect = new AbortController();
			const signal = this.#disconnect.signal;
			target.addEventListener("error", (event) => {
				event.stopImmediatePropagation();
				const native = target.error;
				if (!native) return;
				const code = native.code;
				const error = new MediaError(code >= MediaError.MEDIA_ERR_ABORTED && code <= MediaError.MEDIA_ERR_ENCRYPTED ? void 0 : native.message, code, true);
				this.#error = error;
				this.dispatchEvent(new ErrorEvent("error", {
					error,
					message: error.message
				}));
			}, {
				signal,
				capture: true
			});
			target.addEventListener("emptied", () => {
				this.#error = null;
			}, { signal });
		}
	}
	return NativeHlsMediaErrors;
}
//#endregion
export { NativeHlsMediaErrorsMixin };

//# sourceMappingURL=errors.js.map
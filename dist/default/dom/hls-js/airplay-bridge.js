import { isWebKitAirPlayCapable, listen } from "@videojs/utils/dom";
import Hls from "hls.js";
//#region src/dom/hls-js/airplay-bridge.ts
/**
* Adds an AirPlay-capable fallback `<source>` to the attached video element so
* Safari can hand the original HLS manifest off to AirPlay receivers while
* local playback continues through hls.js (MSE).
* When wireless-target changes, suspends hls.js loading so we don't double-fetch
* alongside the AirPlay receiver.
*
* Implements the WebKit-recommended pattern:
* https://webkit.org/blog/15036/how-to-use-media-source-extensions-with-airplay/
*
* No-op on non-WebKit platforms (Chromium, Firefox).
*/
function HlsJsMediaAirPlayMixin(BaseClass) {
	class HlsJsMediaAirPlay extends BaseClass {
		#sourceEl = null;
		#disconnect = null;
		constructor(...args) {
			super(...args);
			this.engine?.on(Hls.Events.MEDIA_ATTACHED, () => this.#init());
			this.engine?.on(Hls.Events.MEDIA_DETACHED, () => this.#destroy());
			this.engine?.on(Hls.Events.DESTROYING, () => this.#destroy());
			this.engine?.on(Hls.Events.MANIFEST_LOADING, (_event, data) => {
				if (this.#sourceEl) this.#sourceEl.src = data.url;
			});
		}
		#init() {
			this.#destroy();
			const target = this.target;
			if (!target || !isWebKitAirPlayCapable(target)) return;
			target.disableRemotePlayback = false;
			this.#attachSource(target);
			this.#setupLoadControl(target);
		}
		#attachSource(target) {
			this.#sourceEl = document.createElement("source");
			this.#sourceEl.type = "application/x-mpegURL";
			this.#sourceEl.src = this.engine?.url ?? "";
			target.append(this.#sourceEl);
		}
		#setupLoadControl(target) {
			const sync = () => {
				if (target.webkitCurrentPlaybackTargetIsWireless) this.engine?.stopLoad();
			};
			this.#disconnect = new AbortController();
			listen(target, "webkitcurrentplaybacktargetiswirelesschanged", sync, { signal: this.#disconnect.signal });
			sync();
		}
		#destroy() {
			this.#disconnect?.abort();
			this.#disconnect = null;
			this.#sourceEl?.remove();
			this.#sourceEl = null;
		}
	}
	return HlsJsMediaAirPlay;
}
//#endregion
export { HlsJsMediaAirPlayMixin };

//# sourceMappingURL=airplay-bridge.js.map
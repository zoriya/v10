import { getMediaProp, setMediaProp } from "../utils/media-components.js";
import { HTMLMediaElementHost } from "../media-host/media-host.js";
import { isFunction } from "@videojs/utils/predicate";
//#region src/dom/video-host/video-host.ts
var HTMLVideoElementHost = class extends HTMLMediaElementHost {
	get poster() {
		return getMediaProp(this, "poster") ?? "";
	}
	set poster(value) {
		setMediaProp(this, "poster", value);
	}
	get playsInline() {
		return getMediaProp(this, "playsInline") ?? false;
	}
	set playsInline(value) {
		setMediaProp(this, "playsInline", value);
	}
	get videoWidth() {
		return getMediaProp(this, "videoWidth") ?? 0;
	}
	get videoHeight() {
		return getMediaProp(this, "videoHeight") ?? 0;
	}
	get disablePictureInPicture() {
		return getMediaProp(this, "disablePictureInPicture") ?? false;
	}
	set disablePictureInPicture(value) {
		setMediaProp(this, "disablePictureInPicture", value);
	}
	get webkitCurrentPlaybackTargetIsWireless() {
		return this.target?.webkitCurrentPlaybackTargetIsWireless;
	}
	get webkitPresentationMode() {
		return this.target?.webkitPresentationMode;
	}
	get webkitSetPresentationMode() {
		const target = this.target;
		const fn = target?.webkitSetPresentationMode;
		return isFunction(fn) ? fn.bind(target) : void 0;
	}
	get isPictureInPicture() {
		const el = this.target;
		return !!el && globalThis.document?.pictureInPictureElement === el || this.webkitPresentationMode === "picture-in-picture";
	}
	get isFullscreen() {
		const el = this.target;
		if (!el) return false;
		if (this.webkitPresentationMode === "fullscreen") return true;
		const doc = globalThis.document;
		return doc?.fullscreenElement === el || doc?.webkitFullscreenElement === el;
	}
	async requestPictureInPicture() {
		if (!this.target) return Promise.reject();
		return this.target.requestPictureInPicture();
	}
	async exitPictureInPicture() {
		if (!this.target) return Promise.reject();
		return globalThis.document?.exitPictureInPicture();
	}
	requestFullscreen() {
		if (!this.target) return Promise.reject();
		return this.target.requestFullscreen();
	}
	exitFullscreen() {
		if (!this.target) return Promise.reject();
		return globalThis.document?.exitFullscreen();
	}
};
//#endregion
export { HTMLVideoElementHost };

//# sourceMappingURL=video-host.js.map
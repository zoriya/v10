import { definePlayerFeature } from "../../feature.js";
import { isFullscreen } from "../../presentation/fullscreen.js";
import { createScreenOrientationLock } from "../../presentation/orientation.js";
import { listen } from "@videojs/utils/dom";
//#region src/dom/store/features/orientation-lock.ts
const orientationLockFeature = definePlayerFeature({
	name: "orientationLock",
	state: () => ({}),
	attach({ target, signal }, config) {
		const { media, container } = target;
		const orientationLock = createScreenOrientationLock({ type: config.type });
		let wasFullscreen = false;
		const sync = () => {
			const fullscreen = isFullscreen(container, media);
			if (!wasFullscreen && fullscreen) orientationLock.lock();
			else if (wasFullscreen && !fullscreen) orientationLock.unlock();
			wasFullscreen = fullscreen;
		};
		sync();
		listen(document, "fullscreenchange", sync, { signal });
		listen(document, "webkitfullscreenchange", sync, { signal });
		if ("webkitPresentationMode" in media) listen(media, "webkitpresentationmodechanged", sync, { signal });
		signal.addEventListener("abort", () => orientationLock.unlock(), { once: true });
	}
}, { type: "landscape" });
//#endregion
export { orientationLockFeature };

//# sourceMappingURL=orientation-lock.js.map
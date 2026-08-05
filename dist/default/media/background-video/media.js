"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useMediaAttach } from "../../player/context.js";
import { forwardRef, useCallback } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/media/background-video/media.tsx
const BackgroundVideo = forwardRef(function BackgroundVideo({ children, ...props }, ref) {
	const setMedia = useMediaAttach();
	return /* @__PURE__ */ jsx("video", {
		ref: useComposedRefs(ref, useCallback((el) => {
			setMedia?.(el);
		}, [setMedia])),
		muted: true,
		autoPlay: true,
		loop: true,
		playsInline: true,
		disableRemotePlayback: true,
		disablePictureInPicture: true,
		...props,
		children
	});
});
//#endregion
export { BackgroundVideo };

//# sourceMappingURL=media.js.map
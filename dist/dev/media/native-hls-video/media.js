"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useAttachMedia } from "../../utils/use-attach-media.js";
import { useMediaInstance } from "../../utils/use-media-instance.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { NativeHlsMedia, nativeHlsMediaDefaultProps } from "@videojs/media/dom/native-hls";
//#region src/media/native-hls-video/media.tsx
const NativeHlsVideo = forwardRef(function NativeHlsVideo({ children, ...props }, ref) {
	const media = useMediaInstance(NativeHlsMedia);
	return /* @__PURE__ */ jsx("video", {
		ref: useComposedRefs(useAttachMedia(media), ref),
		...useSyncProps(media, props, nativeHlsMediaDefaultProps),
		children
	});
});
//#endregion
export { NativeHlsVideo };

//# sourceMappingURL=media.js.map
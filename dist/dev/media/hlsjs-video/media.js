"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useAttachMedia } from "../../utils/use-attach-media.js";
import { useMediaInstance } from "../../utils/use-media-instance.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { HlsJsMedia, hlsMediaDefaultProps } from "@videojs/media/dom/hls-js";
//#region src/media/hlsjs-video/media.tsx
const HlsJsVideo = forwardRef(function HlsJsVideo({ children, ...props }, ref) {
	const media = useMediaInstance(HlsJsMedia);
	return /* @__PURE__ */ jsx("video", {
		ref: useComposedRefs(useAttachMedia(media), ref),
		...useSyncProps(media, props, hlsMediaDefaultProps),
		children
	});
});
//#endregion
export { HlsJsVideo };

//# sourceMappingURL=media.js.map
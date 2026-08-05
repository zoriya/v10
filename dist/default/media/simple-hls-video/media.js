"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useAttachMedia } from "../../utils/use-attach-media.js";
import { useMediaInstance } from "../../utils/use-media-instance.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { simpleHlsMediaDefaultProps } from "@videojs/spf/hls";
import { SimpleHlsMedia } from "@videojs/media/dom/simple-hls";
//#region src/media/simple-hls-video/media.tsx
const SimpleHlsVideo = forwardRef(function SimpleHlsVideo({ children, ...props }, ref) {
	const media = useMediaInstance(SimpleHlsMedia);
	return /* @__PURE__ */ jsx("video", {
		ref: useComposedRefs(useAttachMedia(media), ref),
		...useSyncProps(media, props, simpleHlsMediaDefaultProps),
		children
	});
});
//#endregion
export { SimpleHlsVideo };

//# sourceMappingURL=media.js.map
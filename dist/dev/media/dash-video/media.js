"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useAttachMedia } from "../../utils/use-attach-media.js";
import { useMediaInstance } from "../../utils/use-media-instance.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { DashMedia, dashMediaDefaultProps } from "@videojs/media/dom/dash";
//#region src/media/dash-video/media.tsx
const DashVideo = forwardRef(function DashVideo({ children, ...props }, ref) {
	const media = useMediaInstance(DashMedia);
	return /* @__PURE__ */ jsx("video", {
		ref: useComposedRefs(useAttachMedia(media), ref),
		...useSyncProps(media, props, dashMediaDefaultProps),
		children
	});
});
//#endregion
export { DashVideo };

//# sourceMappingURL=media.js.map
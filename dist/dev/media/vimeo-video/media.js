"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useMediaInstance } from "../../utils/use-media-instance.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { useAttachIframe } from "../../utils/use-attach-iframe.js";
import { forwardRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { VimeoMedia, buildVimeoIframeSrc, vimeoMediaDefaultProps } from "@videojs/media/dom/vimeo";
//#region src/media/vimeo-video/media.tsx
const VimeoVideo = forwardRef(function VimeoVideo({ children, ...rawProps }, ref) {
	const media = useMediaInstance(VimeoMedia);
	const props = { ...rawProps };
	const composedRef = useComposedRefs(useAttachIframe(media), ref);
	const [initialSrc] = useState(() => buildVimeoIframeSrc(props.src ?? "", {
		...vimeoMediaDefaultProps,
		...props
	}));
	const iframeProps = useSyncProps(media, props, vimeoMediaDefaultProps);
	return /* @__PURE__ */ jsx("iframe", {
		title: "Vimeo video player",
		src: initialSrc,
		"data-cross-origin-frame": true,
		allow: "accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture",
		allowFullScreen: true,
		frameBorder: 0,
		width: "100%",
		height: "100%",
		referrerPolicy: props.config?.referrerPolicy,
		...iframeProps,
		ref: composedRef,
		children
	});
});
//#endregion
export { VimeoVideo };

//# sourceMappingURL=media.js.map
"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useAttachMedia } from "../../utils/use-attach-media.js";
import { useMediaInstance } from "../../utils/use-media-instance.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { forwardRef, useCallback, useSyncExternalStore } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { StreamTypes, hlsMediaDefaultProps } from "@videojs/media/dom/hls-js";
import { MuxMedia, muxMediaDefaultProps } from "@videojs/media/dom/mux";
//#region src/media/mux-video/media.tsx
const muxVideoDefaultProps = {
	...hlsMediaDefaultProps,
	...muxMediaDefaultProps
};
const MuxVideo = forwardRef(function MuxVideo({ children, ...props }, ref) {
	const media = useMediaInstance(MuxMedia);
	return /* @__PURE__ */ jsxs("video", {
		ref: useComposedRefs(useAttachMedia(media), ref),
		...useSyncProps(media, props, muxVideoDefaultProps),
		children: [/* @__PURE__ */ jsx(MuxStoryboard, { media }), children]
	});
});
function MuxStoryboard({ media }) {
	const subscribe = useCallback((onChange) => {
		let cancelled = false;
		let scheduled = false;
		const notify = () => {
			if (scheduled) return;
			scheduled = true;
			queueMicrotask(() => {
				scheduled = false;
				if (!cancelled) onChange();
			});
		};
		media.addEventListener("streamtypechange", notify);
		media.addEventListener("sourcechange", notify);
		return () => {
			cancelled = true;
			media.removeEventListener("streamtypechange", notify);
			media.removeEventListener("sourcechange", notify);
		};
	}, [media]);
	const getSnapshot = () => media.streamType === StreamTypes.LIVE ? "" : media.storyboard;
	const src = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
	if (!src) return null;
	return /* @__PURE__ */ jsx("track", {
		kind: "metadata",
		label: "thumbnails",
		src,
		default: true
	});
}
//#endregion
export { MuxVideo };

//# sourceMappingURL=media.js.map
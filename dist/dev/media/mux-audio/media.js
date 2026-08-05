"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useAttachMedia } from "../../utils/use-attach-media.js";
import { useMediaInstance } from "../../utils/use-media-instance.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { hlsMediaDefaultProps } from "@videojs/media/dom/hls-js";
import { MuxMedia, muxMediaDefaultProps } from "@videojs/media/dom/mux";
//#region src/media/mux-audio/media.tsx
const muxAudioDefaultProps = {
	...hlsMediaDefaultProps,
	...muxMediaDefaultProps
};
const MuxAudio = forwardRef(function MuxAudio({ children, ...props }, ref) {
	const media = useMediaInstance(MuxMedia);
	return /* @__PURE__ */ jsx("audio", {
		ref: useComposedRefs(useAttachMedia(media), ref),
		...useSyncProps(media, props, muxAudioDefaultProps),
		children
	});
});
//#endregion
export { MuxAudio };

//# sourceMappingURL=media.js.map
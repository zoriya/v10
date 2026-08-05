"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { useAttachMedia } from "../../utils/use-attach-media.js";
import { useMediaInstance } from "../../utils/use-media-instance.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { SimpleHlsAudioOnlyMedia } from "@videojs/media/dom/simple-hls-audio-only";
import { simpleHlsAudioOnlyMediaDefaultProps } from "@videojs/spf/hls";
//#region src/media/simple-hls-audio-only/media.tsx
const SimpleHlsAudioOnly = forwardRef(function SimpleHlsAudioOnly({ children, ...props }, ref) {
	const media = useMediaInstance(SimpleHlsAudioOnlyMedia);
	return /* @__PURE__ */ jsx("audio", {
		ref: useComposedRefs(useAttachMedia(media), ref),
		...useSyncProps(media, props, simpleHlsAudioOnlyMediaDefaultProps),
		children
	});
});
//#endregion
export { SimpleHlsAudioOnly };

//# sourceMappingURL=media.js.map
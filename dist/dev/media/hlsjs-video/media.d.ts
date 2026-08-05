import { ReactNode, VideoHTMLAttributes } from "react";
import { HlsMediaProps } from "@videojs/media/dom/hls-js";
//#region src/media/hlsjs-video/media.d.ts
interface HlsJsVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, keyof HlsMediaProps>, Partial<HlsMediaProps> {
  children?: ReactNode;
}
declare const HlsJsVideo: import("react").ForwardRefExoticComponent<HlsJsVideoProps & import("react").RefAttributes<HTMLVideoElement>>;
declare namespace HlsJsVideo {
  type Props = HlsJsVideoProps;
}
//#endregion
export { HlsJsVideo, HlsJsVideoProps };
//# sourceMappingURL=media.d.ts.map
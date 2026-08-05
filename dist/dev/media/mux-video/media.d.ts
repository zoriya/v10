import { ReactNode, VideoHTMLAttributes } from "react";
import { HlsMediaProps } from "@videojs/media/dom/hls-js";
import { MuxMediaProps } from "@videojs/media/dom/mux";
//#region src/media/mux-video/media.d.ts
interface MuxVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, keyof HlsMediaProps | keyof MuxMediaProps>, Partial<HlsMediaProps>, Partial<MuxMediaProps> {
  children?: ReactNode;
}
declare const MuxVideo: import("react").ForwardRefExoticComponent<MuxVideoProps & import("react").RefAttributes<HTMLVideoElement>>;
declare namespace MuxVideo {
  type Props = MuxVideoProps;
}
//#endregion
export { MuxVideo, MuxVideoProps };
//# sourceMappingURL=media.d.ts.map
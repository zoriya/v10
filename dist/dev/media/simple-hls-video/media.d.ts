import { ReactNode, VideoHTMLAttributes } from "react";
import { SimpleHlsMediaProps } from "@videojs/spf/hls";
//#region src/media/simple-hls-video/media.d.ts
interface SimpleHlsVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, keyof SimpleHlsMediaProps>, Partial<SimpleHlsMediaProps> {
  children?: ReactNode;
}
declare const SimpleHlsVideo: import("react").ForwardRefExoticComponent<SimpleHlsVideoProps & import("react").RefAttributes<HTMLVideoElement>>;
declare namespace SimpleHlsVideo {
  type Props = SimpleHlsVideoProps;
}
//#endregion
export { SimpleHlsVideo, SimpleHlsVideoProps };
//# sourceMappingURL=media.d.ts.map
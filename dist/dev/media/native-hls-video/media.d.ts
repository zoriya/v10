import { ReactNode, VideoHTMLAttributes } from "react";
import { NativeHlsMediaProps } from "@videojs/media/dom/native-hls";
//#region src/media/native-hls-video/media.d.ts
interface NativeHlsVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, keyof NativeHlsMediaProps>, Partial<NativeHlsMediaProps> {
  children?: ReactNode;
}
declare const NativeHlsVideo: import("react").ForwardRefExoticComponent<NativeHlsVideoProps & import("react").RefAttributes<HTMLVideoElement>>;
declare namespace NativeHlsVideo {
  type Props = NativeHlsVideoProps;
}
//#endregion
export { NativeHlsVideo, NativeHlsVideoProps };
//# sourceMappingURL=media.d.ts.map
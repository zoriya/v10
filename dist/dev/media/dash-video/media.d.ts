import { ReactNode, VideoHTMLAttributes } from "react";
import { DashMediaProps } from "@videojs/media/dom/dash";
//#region src/media/dash-video/media.d.ts
interface DashVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, keyof DashMediaProps>, Partial<DashMediaProps> {
  children?: ReactNode;
}
declare const DashVideo: import("react").ForwardRefExoticComponent<DashVideoProps & import("react").RefAttributes<HTMLVideoElement>>;
declare namespace DashVideo {
  type Props = DashVideoProps;
}
//#endregion
export { DashVideo, DashVideoProps };
//# sourceMappingURL=media.d.ts.map
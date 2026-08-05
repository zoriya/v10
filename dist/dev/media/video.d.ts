import { VideoHTMLAttributes } from "react";
//#region src/media/video.d.ts
interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {}
declare const Video: import("react").ForwardRefExoticComponent<VideoProps & import("react").RefAttributes<HTMLVideoElement>>;
declare namespace Video {
  type Props = VideoProps;
}
//#endregion
export { Video, VideoProps };
//# sourceMappingURL=video.d.ts.map
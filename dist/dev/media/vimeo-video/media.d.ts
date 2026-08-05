import { ReactNode } from "react";
import { VimeoMediaProps } from "@videojs/media/dom/vimeo";
//#region src/media/vimeo-video/media.d.ts
interface VimeoVideoProps extends Partial<VimeoMediaProps> {
  children?: ReactNode;
}
declare const VimeoVideo: import("react").ForwardRefExoticComponent<VimeoVideoProps & import("react").RefAttributes<HTMLIFrameElement>>;
declare namespace VimeoVideo {
  type Props = VimeoVideoProps;
}
//#endregion
export { VimeoVideo, VimeoVideoProps };
//# sourceMappingURL=media.d.ts.map
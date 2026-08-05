import { ThumbnailProps } from "../thumbnail/thumbnail.js";
import { ThumbnailCore } from "@videojs/core";
//#region src/ui/slider/slider-thumbnail.d.ts
interface SliderThumbnailProps extends Omit<ThumbnailProps, 'time'> {}
declare const SliderThumbnail: import("react").ForwardRefExoticComponent<Omit<SliderThumbnailProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace SliderThumbnail {
  type Props = SliderThumbnailProps;
  type State = ThumbnailCore.State;
}
//#endregion
export { SliderThumbnail, SliderThumbnailProps };
//# sourceMappingURL=slider-thumbnail.d.ts.map
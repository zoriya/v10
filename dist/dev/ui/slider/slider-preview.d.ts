import { UIComponentProps } from "../../utils/types.js";
import { SliderPreviewOverflow } from "@videojs/core/dom";
import { SliderState } from "@videojs/core";
//#region src/ui/slider/slider-preview.d.ts
interface SliderPreviewProps extends UIComponentProps<'div', SliderState> {
  /** How the preview handles the slider boundaries. `'clamp'` keeps the preview within bounds, `'visible'` allows it to extend beyond the edges. */
  overflow?: SliderPreviewOverflow | undefined;
}
/** Positioning container for preview content that tracks the pointer along the slider. */
declare const SliderPreview: import("react").ForwardRefExoticComponent<Omit<SliderPreviewProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace SliderPreview {
  type Props = SliderPreviewProps;
}
//#endregion
export { SliderPreview, SliderPreviewProps };
//# sourceMappingURL=slider-preview.d.ts.map
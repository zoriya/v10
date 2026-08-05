import { UIComponentProps } from "../../utils/types.js";
import { SliderState } from "@videojs/core";
//#region src/ui/slider/slider-thumb.d.ts
interface SliderThumbProps extends UIComponentProps<'div', SliderState> {}
/** Draggable handle for setting the slider value. Receives focus and handles keyboard interaction. */
declare const SliderThumb: import("react").ForwardRefExoticComponent<Omit<SliderThumbProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace SliderThumb {
  type Props = SliderThumbProps;
}
//#endregion
export { SliderThumb, SliderThumbProps };
//# sourceMappingURL=slider-thumb.d.ts.map
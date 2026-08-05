import { UIComponentProps } from "../../utils/types.js";
import { SliderState } from "@videojs/core";
//#region src/ui/slider/slider-fill.d.ts
interface SliderFillProps extends UIComponentProps<'div', SliderState> {}
/** Displays the filled portion from start to the current value. */
declare const SliderFill: import("react").ForwardRefExoticComponent<SliderFillProps>;
declare namespace SliderFill {
  type Props = SliderFillProps;
}
//#endregion
export { SliderFill, SliderFillProps };
//# sourceMappingURL=slider-fill.d.ts.map
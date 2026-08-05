import { UIComponentProps } from "../../utils/types.js";
import { TimeSliderCore } from "@videojs/core";
//#region src/ui/time-slider/time-slider-root.d.ts
interface TimeSliderRootProps extends UIComponentProps<'div', TimeSliderCore.State>, TimeSliderCore.Props {
  onDragStart?: (() => void) | undefined;
  onDragEnd?: (() => void) | undefined;
}
declare const TimeSliderRoot: import("react").ForwardRefExoticComponent<Omit<TimeSliderRootProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace TimeSliderRoot {
  type Props = TimeSliderRootProps;
  type State = TimeSliderCore.State;
}
//#endregion
export { TimeSliderRoot, TimeSliderRootProps };
//# sourceMappingURL=time-slider-root.d.ts.map
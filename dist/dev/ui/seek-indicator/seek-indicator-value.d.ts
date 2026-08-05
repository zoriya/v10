import { UIComponentProps } from "../../utils/types.js";
import { SeekIndicatorCore } from "@videojs/core";
//#region src/ui/seek-indicator/seek-indicator-value.d.ts
interface SeekIndicatorValueProps extends UIComponentProps<'div', SeekIndicatorCore.State> {}
declare const SeekIndicatorValue: import("react").ForwardRefExoticComponent<Omit<SeekIndicatorValueProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace SeekIndicatorValue {
  type Props = SeekIndicatorValueProps;
}
//#endregion
export { SeekIndicatorValue, SeekIndicatorValueProps };
//# sourceMappingURL=seek-indicator-value.d.ts.map
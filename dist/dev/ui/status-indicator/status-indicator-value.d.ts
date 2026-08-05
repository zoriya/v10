import { UIComponentProps } from "../../utils/types.js";
import { StatusIndicatorCore } from "@videojs/core";
//#region src/ui/status-indicator/status-indicator-value.d.ts
interface StatusIndicatorValueProps extends UIComponentProps<'span', StatusIndicatorCore.State> {}
declare const StatusIndicatorValue: import("react").ForwardRefExoticComponent<Omit<StatusIndicatorValueProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
declare namespace StatusIndicatorValue {
  type Props = StatusIndicatorValueProps;
}
//#endregion
export { StatusIndicatorValue, StatusIndicatorValueProps };
//# sourceMappingURL=status-indicator-value.d.ts.map
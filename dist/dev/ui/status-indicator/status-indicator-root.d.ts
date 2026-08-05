import { UIComponentProps } from "../../utils/types.js";
import { StatusIndicatorCore } from "@videojs/core";
//#region src/ui/status-indicator/status-indicator-root.d.ts
interface StatusIndicatorRootProps extends UIComponentProps<'div', StatusIndicatorCore.State>, Omit<StatusIndicatorCore.Props, 'labels'> {}
declare const StatusIndicatorRoot: import("react").ForwardRefExoticComponent<Omit<StatusIndicatorRootProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace StatusIndicatorRoot {
  type Props = StatusIndicatorRootProps;
  type State = StatusIndicatorCore.State;
}
//#endregion
export { StatusIndicatorRoot, StatusIndicatorRootProps };
//# sourceMappingURL=status-indicator-root.d.ts.map
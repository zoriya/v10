import { UIComponentProps } from "../../utils/types.js";
import { SeekIndicatorCore } from "@videojs/core";
//#region src/ui/seek-indicator/seek-indicator-root.d.ts
interface SeekIndicatorRootProps extends UIComponentProps<'div', SeekIndicatorCore.State>, SeekIndicatorCore.Props {}
declare const SeekIndicatorRoot: import("react").ForwardRefExoticComponent<Omit<SeekIndicatorRootProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace SeekIndicatorRoot {
  type Props = SeekIndicatorRootProps;
  type State = SeekIndicatorCore.State;
}
//#endregion
export { SeekIndicatorRoot, SeekIndicatorRootProps };
//# sourceMappingURL=seek-indicator-root.d.ts.map
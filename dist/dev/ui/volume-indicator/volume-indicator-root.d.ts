import { UIComponentProps } from "../../utils/types.js";
import { VolumeIndicatorCore } from "@videojs/core";
//#region src/ui/volume-indicator/volume-indicator-root.d.ts
interface VolumeIndicatorRootProps extends UIComponentProps<'div', VolumeIndicatorCore.State>, Omit<VolumeIndicatorCore.Props, 'labels'> {}
declare const VolumeIndicatorRoot: import("react").ForwardRefExoticComponent<Omit<VolumeIndicatorRootProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace VolumeIndicatorRoot {
  type Props = VolumeIndicatorRootProps;
  type State = VolumeIndicatorCore.State;
}
//#endregion
export { VolumeIndicatorRoot, VolumeIndicatorRootProps };
//# sourceMappingURL=volume-indicator-root.d.ts.map
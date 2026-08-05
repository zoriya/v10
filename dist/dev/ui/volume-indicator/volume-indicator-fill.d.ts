import { UIComponentProps } from "../../utils/types.js";
import { VolumeIndicatorCore } from "@videojs/core";
//#region src/ui/volume-indicator/volume-indicator-fill.d.ts
interface VolumeIndicatorFillProps extends UIComponentProps<'div', VolumeIndicatorCore.State> {}
declare const VolumeIndicatorFill: import("react").ForwardRefExoticComponent<Omit<VolumeIndicatorFillProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace VolumeIndicatorFill {
  type Props = VolumeIndicatorFillProps;
}
//#endregion
export { VolumeIndicatorFill, VolumeIndicatorFillProps };
//# sourceMappingURL=volume-indicator-fill.d.ts.map
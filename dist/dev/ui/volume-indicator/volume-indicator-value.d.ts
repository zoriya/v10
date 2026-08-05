import { UIComponentProps } from "../../utils/types.js";
import { VolumeIndicatorCore } from "@videojs/core";
//#region src/ui/volume-indicator/volume-indicator-value.d.ts
interface VolumeIndicatorValueProps extends UIComponentProps<'span', VolumeIndicatorCore.State> {}
declare const VolumeIndicatorValue: import("react").ForwardRefExoticComponent<Omit<VolumeIndicatorValueProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
declare namespace VolumeIndicatorValue {
  type Props = VolumeIndicatorValueProps;
}
//#endregion
export { VolumeIndicatorValue, VolumeIndicatorValueProps };
//# sourceMappingURL=volume-indicator-value.d.ts.map
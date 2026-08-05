import { UIComponentProps } from "../../utils/types.js";
import { VolumeSliderCore } from "@videojs/core";
//#region src/ui/volume-slider/volume-slider-root.d.ts
interface VolumeSliderRootProps extends UIComponentProps<'div', VolumeSliderCore.State>, VolumeSliderCore.Props {
  onDragStart?: (() => void) | undefined;
  onDragEnd?: (() => void) | undefined;
}
declare const VolumeSliderRoot: import("react").ForwardRefExoticComponent<Omit<VolumeSliderRootProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace VolumeSliderRoot {
  type Props = VolumeSliderRootProps;
  type State = VolumeSliderCore.State;
}
//#endregion
export { VolumeSliderRoot, VolumeSliderRootProps };
//# sourceMappingURL=volume-slider-root.d.ts.map
import { IndicatorCoreProps, IndicatorLifecycleState } from "./indicator-lifecycle.js";
import { IndicatorVolumeLevel, InputActionEvent, InputIndicatorLabels, MediaSnapshot } from "./status.js";
//#region src/core/ui/input-feedback/volume-indicator-core.d.ts
interface VolumeIndicatorProps extends IndicatorCoreProps {
  labels?: Partial<InputIndicatorLabels> | undefined;
}
interface VolumeIndicatorState extends IndicatorLifecycleState {
  level: IndicatorVolumeLevel | null;
  value: string | null;
  fill: string | null;
  min: boolean;
  max: boolean;
}
declare class VolumeIndicatorCore {
  #private;
  readonly state: import("@videojs/store").WritableState<VolumeIndicatorState>;
  setProps(props: VolumeIndicatorProps): void;
  destroy(): void;
  close(): void;
  processEvent(event: InputActionEvent, snapshot: MediaSnapshot): boolean;
}
declare namespace VolumeIndicatorCore {
  type Props = VolumeIndicatorProps;
  type State = VolumeIndicatorState;
}
//#endregion
export { VolumeIndicatorCore, VolumeIndicatorProps, VolumeIndicatorState };
//# sourceMappingURL=volume-indicator-core.d.ts.map
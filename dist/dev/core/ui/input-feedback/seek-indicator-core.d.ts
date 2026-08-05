import { IndicatorCoreProps, IndicatorLifecycleState } from "./indicator-lifecycle.js";
import { IndicatorDirection, InputActionEvent, MediaSnapshot } from "./status.js";
//#region src/core/ui/input-feedback/seek-indicator-core.d.ts
interface SeekIndicatorProps extends IndicatorCoreProps {}
interface SeekIndicatorState extends IndicatorLifecycleState {
  direction: IndicatorDirection | null;
  count: number;
  seekTotal: number;
  value: string | null;
  currentTime: string;
}
declare class SeekIndicatorCore {
  #private;
  readonly state: import("@videojs/store").WritableState<SeekIndicatorState>;
  setProps(props: SeekIndicatorProps): void;
  destroy(): void;
  close(): void;
  processEvent(event: InputActionEvent, snapshot: MediaSnapshot): boolean;
}
declare namespace SeekIndicatorCore {
  type Props = SeekIndicatorProps;
  type State = SeekIndicatorState;
}
//#endregion
export { SeekIndicatorCore, SeekIndicatorProps, SeekIndicatorState };
//# sourceMappingURL=seek-indicator-core.d.ts.map
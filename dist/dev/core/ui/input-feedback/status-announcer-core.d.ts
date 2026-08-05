import { IndicatorCoreProps } from "./indicator-lifecycle.js";
import { MediaSnapshot, StatusAnnouncerLabels } from "./status.js";
//#region src/core/ui/input-feedback/status-announcer-core.d.ts
interface StatusAnnouncerProps extends IndicatorCoreProps {
  labels?: Partial<StatusAnnouncerLabels> | undefined;
  shouldAnnounceSeek?: ((snapshot: MediaSnapshot) => boolean) | undefined;
  shouldAnnounceVolume?: ((snapshot: MediaSnapshot) => boolean) | undefined;
}
interface StatusAnnouncerState {
  label: string | null;
}
declare class StatusAnnouncerCore {
  #private;
  readonly state: import("@videojs/store").WritableState<StatusAnnouncerState>;
  setProps(props: StatusAnnouncerProps): void;
  resetSnapshot(): void;
  destroy(): void;
  processSnapshot(snapshot: MediaSnapshot): boolean;
}
declare namespace StatusAnnouncerCore {
  type Props = StatusAnnouncerProps;
  type State = StatusAnnouncerState;
}
//#endregion
export { StatusAnnouncerCore, StatusAnnouncerProps, StatusAnnouncerState };
//# sourceMappingURL=status-announcer-core.d.ts.map
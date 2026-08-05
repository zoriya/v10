import { UIComponentProps } from "../../utils/types.js";
import { StatusAnnouncerCore } from "@videojs/core";
//#region src/ui/status-announcer/status-announcer.d.ts
interface StatusAnnouncerProps extends UIComponentProps<'div', StatusAnnouncerCore.State>, Pick<StatusAnnouncerCore.Props, 'closeDelay' | 'labels'> {}
declare const StatusAnnouncer: import("react").ForwardRefExoticComponent<Omit<StatusAnnouncerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace StatusAnnouncer {
  type Props = StatusAnnouncerProps;
  type State = StatusAnnouncerCore.State;
}
//#endregion
export { StatusAnnouncer, StatusAnnouncerProps };
//# sourceMappingURL=status-announcer.d.ts.map
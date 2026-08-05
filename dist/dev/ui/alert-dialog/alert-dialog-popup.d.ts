import { UIComponentProps } from "../../utils/types.js";
import { AlertDialogCore } from "@videojs/core";
//#region src/ui/alert-dialog/alert-dialog-popup.d.ts
interface AlertDialogPopupProps extends UIComponentProps<'div', AlertDialogCore.State> {}
declare const AlertDialogPopup: import("react").ForwardRefExoticComponent<Omit<AlertDialogPopupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace AlertDialogPopup {
  type Props = AlertDialogPopupProps;
  type State = AlertDialogCore.State;
}
//#endregion
export { AlertDialogPopup, AlertDialogPopupProps };
//# sourceMappingURL=alert-dialog-popup.d.ts.map
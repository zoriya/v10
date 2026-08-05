import { UIComponentProps } from "../../utils/types.js";
import { AlertDialogCore } from "@videojs/core";
//#region src/ui/alert-dialog/alert-dialog-close.d.ts
interface AlertDialogCloseProps extends UIComponentProps<'button', AlertDialogCore.State> {}
declare const AlertDialogClose: import("react").ForwardRefExoticComponent<Omit<AlertDialogCloseProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace AlertDialogClose {
  type Props = AlertDialogCloseProps;
  type State = AlertDialogCore.State;
}
//#endregion
export { AlertDialogClose, AlertDialogCloseProps };
//# sourceMappingURL=alert-dialog-close.d.ts.map
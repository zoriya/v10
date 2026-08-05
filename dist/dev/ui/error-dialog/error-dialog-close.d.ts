import { UIComponentProps } from "../../utils/types.js";
import { AlertDialogCore } from "@videojs/core";
//#region src/ui/error-dialog/error-dialog-close.d.ts
interface ErrorDialogCloseProps extends UIComponentProps<'button', AlertDialogCore.State> {}
declare const ErrorDialogClose: import("react").ForwardRefExoticComponent<Omit<ErrorDialogCloseProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace ErrorDialogClose {
  type Props = ErrorDialogCloseProps;
  type State = AlertDialogCore.State;
}
//#endregion
export { ErrorDialogClose, ErrorDialogCloseProps };
//# sourceMappingURL=error-dialog-close.d.ts.map
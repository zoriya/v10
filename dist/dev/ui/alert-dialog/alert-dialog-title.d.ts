import { UIComponentProps } from "../../utils/types.js";
import { AlertDialogCore } from "@videojs/core";
//#region src/ui/alert-dialog/alert-dialog-title.d.ts
interface AlertDialogTitleProps extends UIComponentProps<'h2', AlertDialogCore.State> {}
declare const AlertDialogTitle: import("react").ForwardRefExoticComponent<AlertDialogTitleProps>;
declare namespace AlertDialogTitle {
  type Props = AlertDialogTitleProps;
  type State = AlertDialogCore.State;
}
//#endregion
export { AlertDialogTitle, AlertDialogTitleProps };
//# sourceMappingURL=alert-dialog-title.d.ts.map
import { UIComponentProps } from "../../utils/types.js";
import { AlertDialogCore } from "@videojs/core";
//#region src/ui/alert-dialog/alert-dialog-description.d.ts
interface AlertDialogDescriptionProps extends UIComponentProps<'p', AlertDialogCore.State> {}
declare const AlertDialogDescription: import("react").ForwardRefExoticComponent<AlertDialogDescriptionProps>;
declare namespace AlertDialogDescription {
  type Props = AlertDialogDescriptionProps;
  type State = AlertDialogCore.State;
}
//#endregion
export { AlertDialogDescription, AlertDialogDescriptionProps };
//# sourceMappingURL=alert-dialog-description.d.ts.map
import { UIComponentProps } from "../../utils/types.js";
import { AlertDialogCore } from "@videojs/core";
//#region src/ui/error-dialog/error-dialog-description.d.ts
interface ErrorDialogDescriptionProps extends UIComponentProps<'p', AlertDialogCore.State> {}
declare const ErrorDialogDescription: import("react").ForwardRefExoticComponent<Omit<ErrorDialogDescriptionProps, "ref"> & import("react").RefAttributes<HTMLParagraphElement>>;
declare namespace ErrorDialogDescription {
  type Props = ErrorDialogDescriptionProps;
  type State = AlertDialogCore.State;
}
//#endregion
export { ErrorDialogDescription, ErrorDialogDescriptionProps };
//# sourceMappingURL=error-dialog-description.d.ts.map
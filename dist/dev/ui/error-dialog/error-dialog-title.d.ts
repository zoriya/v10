import { UIComponentProps } from "../../utils/types.js";
import { AlertDialogCore } from "@videojs/core";
//#region src/ui/error-dialog/error-dialog-title.d.ts
interface ErrorDialogTitleProps extends UIComponentProps<'h2', AlertDialogCore.State> {}
declare const ErrorDialogTitle: import("react").ForwardRefExoticComponent<Omit<ErrorDialogTitleProps, "ref"> & import("react").RefAttributes<HTMLHeadingElement>>;
declare namespace ErrorDialogTitle {
  type Props = ErrorDialogTitleProps;
  type State = AlertDialogCore.State;
}
//#endregion
export { ErrorDialogTitle, ErrorDialogTitleProps };
//# sourceMappingURL=error-dialog-title.d.ts.map
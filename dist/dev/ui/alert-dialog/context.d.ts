import { AlertDialogApi } from "@videojs/core/dom";
import { AlertDialogCore, StateAttrMap as StateAttrMap$1 } from "@videojs/core";
//#region src/ui/alert-dialog/context.d.ts
interface AlertDialogContextValue {
  core: AlertDialogCore;
  dialog: AlertDialogApi;
  state: AlertDialogCore.State;
  stateAttrMap: StateAttrMap$1<AlertDialogCore.State>;
}
declare function useAlertDialogContext(): AlertDialogContextValue;
//#endregion
export { AlertDialogContextValue, useAlertDialogContext };
//# sourceMappingURL=context.d.ts.map
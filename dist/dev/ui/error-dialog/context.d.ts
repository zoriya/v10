import { ErrorLike } from "@videojs/media";
//#region src/ui/error-dialog/context.d.ts
interface ErrorDialogContextValue {
  lastError: ErrorLike | null;
}
declare function useErrorDialogContext(): ErrorDialogContextValue;
//#endregion
export { ErrorDialogContextValue, useErrorDialogContext };
//# sourceMappingURL=context.d.ts.map
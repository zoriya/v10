import { UIComponentProps } from "../../utils/types.js";
import { CaptionsButtonCore } from "@videojs/core";
//#region src/ui/captions-button/captions-button.d.ts
interface CaptionsButtonProps extends UIComponentProps<'button', CaptionsButtonCore.State>, CaptionsButtonCore.Props {}
/** A button that toggles captions. */
declare const CaptionsButton: import("react").ForwardRefExoticComponent<CaptionsButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace CaptionsButton {
  type Props = CaptionsButtonProps;
  type State = CaptionsButtonCore.State;
}
//#endregion
export { CaptionsButton, CaptionsButtonProps };
//# sourceMappingURL=captions-button.d.ts.map
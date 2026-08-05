import { UIComponentProps } from "../../utils/types.js";
import { PiPButtonCore } from "@videojs/core";
//#region src/ui/pip-button/pip-button.d.ts
interface PiPButtonProps extends UIComponentProps<'button', PiPButtonCore.State>, PiPButtonCore.Props {}
/** A button that toggles picture-in-picture. */
declare const PiPButton: import("react").ForwardRefExoticComponent<PiPButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace PiPButton {
  type Props = PiPButtonProps;
  type State = PiPButtonCore.State;
}
//#endregion
export { PiPButton, PiPButtonProps };
//# sourceMappingURL=pip-button.d.ts.map
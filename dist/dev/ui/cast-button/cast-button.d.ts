import { UIComponentProps } from "../../utils/types.js";
import { CastButtonCore } from "@videojs/core";
//#region src/ui/cast-button/cast-button.d.ts
interface CastButtonProps extends UIComponentProps<'button', CastButtonCore.State>, CastButtonCore.Props {}
/** A button that toggles casting to a remote device. */
declare const CastButton: import("react").ForwardRefExoticComponent<CastButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace CastButton {
  type Props = CastButtonProps;
  type State = CastButtonCore.State;
}
//#endregion
export { CastButton, CastButtonProps };
//# sourceMappingURL=cast-button.d.ts.map
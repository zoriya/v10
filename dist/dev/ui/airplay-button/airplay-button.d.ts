import { UIComponentProps } from "../../utils/types.js";
import { AirPlayButtonCore } from "@videojs/core";
//#region src/ui/airplay-button/airplay-button.d.ts
interface AirPlayButtonProps extends UIComponentProps<'button', AirPlayButtonCore.State>, AirPlayButtonCore.Props {}
/** A button that toggles AirPlay to a remote device. */
declare const AirPlayButton: import("react").ForwardRefExoticComponent<AirPlayButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace AirPlayButton {
  type Props = AirPlayButtonProps;
  type State = AirPlayButtonCore.State;
}
//#endregion
export { AirPlayButton, AirPlayButtonProps };
//# sourceMappingURL=airplay-button.d.ts.map
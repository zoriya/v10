import { UIComponentProps } from "../../utils/types.js";
import { PlayButtonCore } from "@videojs/core";
//#region src/ui/play-button/play-button.d.ts
interface PlayButtonProps extends UIComponentProps<'button', PlayButtonCore.State>, PlayButtonCore.Props {}
/**
 * A button that toggles playback.
 *
 * @example
 * ```tsx
 * <PlayButton />
 *
 * <PlayButton
 *   render={(props, state) => (
 *     <button {...props}>
 *       {state.paused ? <PlayIcon /> : <PauseIcon />}
 *     </button>
 *   )}
 * />
 * ```
 */
declare const PlayButton: import("react").ForwardRefExoticComponent<PlayButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace PlayButton {
  type Props = PlayButtonProps;
  type State = PlayButtonCore.State;
}
//#endregion
export { PlayButton, PlayButtonProps };
//# sourceMappingURL=play-button.d.ts.map
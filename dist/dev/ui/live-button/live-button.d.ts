import { UIComponentProps } from "../../utils/types.js";
import { LiveButtonCore } from "@videojs/core";
//#region src/ui/live-button/live-button.d.ts
interface LiveButtonProps extends UIComponentProps<'button', LiveButtonCore.State>, LiveButtonCore.Props {}
/**
 * A button that indicates live status and seeks to the live edge when
 * pressed. Exposes `data-live` while the stream is live (or DVR) and
 * `data-live-edge` while playing at the live edge so skins can style a
 * red-dot ↔ grey-dot treatment.
 *
 * Selects from `live`, `time`, and `buffer` features and composes them
 * itself rather than going through `createMediaButton`, since the LiveButton
 * needs three feature slices to detect the live edge and seek.
 *
 * Displays the translated live badge when no children are provided.
 *
 * @example
 * ```tsx
 * <LiveButton />
 * ```
 *
 * @see https://github.com/video-dev/media-ui-extensions/blob/main/proposals/0007-live-edge.md
 */
declare const LiveButton: import("react").ForwardRefExoticComponent<Omit<LiveButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace LiveButton {
  type Props = LiveButtonProps;
  type State = LiveButtonCore.State;
}
//#endregion
export { LiveButton, LiveButtonProps };
//# sourceMappingURL=live-button.d.ts.map
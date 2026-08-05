import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaFullscreenState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/fullscreen-button/fullscreen-button-core.d.ts
interface FullscreenButtonProps {
  /** Custom label for the button. */
  label?: Text | string | ((state: FullscreenButtonState) => Text | string) | undefined;
  /** Whether the button is disabled. */
  disabled?: boolean | undefined;
}
interface FullscreenButtonState extends Pick<MediaFullscreenState, 'fullscreen'>, ButtonState {
  /** Whether fullscreen can be requested on this platform. */
  availability: MediaFullscreenState['fullscreenAvailability'];
  /** Non-interactive but still focusable (mirrors `aria-disabled`). */
  disabled: boolean;
  /** Whether the button is hidden until fullscreen is available. */
  hidden: boolean;
}
declare class FullscreenButtonCore {
  #private;
  static readonly defaultProps: NonNullableObject<FullscreenButtonProps>;
  readonly state: import("@videojs/store").WritableState<FullscreenButtonState>;
  constructor(props?: FullscreenButtonProps);
  setProps(props: FullscreenButtonProps): void;
  getLabel(state: FullscreenButtonState): Text | string;
  getAttrs(state: FullscreenButtonState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
    hidden: string | undefined;
  };
  setMedia(media: MediaFullscreenState): void;
  getState(): FullscreenButtonState;
  toggle(media: MediaFullscreenState): Promise<void>;
}
declare namespace FullscreenButtonCore {
  type Props = FullscreenButtonProps;
  type State = FullscreenButtonState;
}
//#endregion
export { FullscreenButtonCore, FullscreenButtonProps, FullscreenButtonState };
//# sourceMappingURL=fullscreen-button-core.d.ts.map
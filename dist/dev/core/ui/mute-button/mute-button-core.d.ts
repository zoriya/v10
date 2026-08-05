import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaVolumeState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/mute-button/mute-button-core.d.ts
type VolumeLevel = 'off' | 'low' | 'medium' | 'high';
interface MuteButtonProps {
  /** Custom label for the button. */
  label?: Text | string | ((state: MuteButtonState) => Text | string) | undefined;
  /** Whether the button is disabled. */
  disabled?: boolean | undefined;
}
interface MuteButtonState extends Pick<MediaVolumeState, 'muted'>, ButtonState {
  /**
   * Derived volume level:
   * - `off`: muted or volume is 0
   * - `low`: volume < 0.5
   * - `medium`: volume < 0.75
   * - `high`: volume >= 0.75
   */
  volumeLevel: VolumeLevel;
}
declare class MuteButtonCore {
  #private;
  static readonly defaultProps: NonNullableObject<MuteButtonProps>;
  readonly state: import("@videojs/store").WritableState<MuteButtonState>;
  constructor(props?: MuteButtonProps);
  setProps(props: MuteButtonProps): void;
  getLabel(state: MuteButtonState): Text | string;
  getAttrs(state: MuteButtonState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
  };
  setMedia(media: MediaVolumeState): void;
  getState(): MuteButtonState;
  toggle(media: MediaVolumeState): void;
}
declare namespace MuteButtonCore {
  type Props = MuteButtonProps;
  type State = MuteButtonState;
}
//#endregion
export { MuteButtonCore, MuteButtonProps, MuteButtonState, VolumeLevel };
//# sourceMappingURL=mute-button-core.d.ts.map
import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaTimeState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/seek-button/seek-button-core.d.ts
interface SeekButtonProps {
  /** Seconds to seek. Positive = forward, negative = backward. Default `30`. */
  seconds?: number | undefined;
  /** Custom label for the button. */
  label?: Text | string | ((state: SeekButtonState) => Text | string) | undefined;
  /** Whether the button is disabled. */
  disabled?: boolean | undefined;
}
type SeekButtonDirection = 'forward' | 'backward';
interface SeekButtonState extends ButtonState {
  /** Whether a seek is in progress. */
  seeking: boolean;
  /** Whether the button seeks forward or backward. */
  direction: SeekButtonDirection;
}
declare class SeekButtonCore {
  #private;
  static readonly defaultProps: NonNullableObject<SeekButtonProps>;
  readonly state: import("@videojs/store").WritableState<SeekButtonState>;
  constructor(props?: SeekButtonProps);
  setProps(props: SeekButtonProps): void;
  getLabel(state: SeekButtonState): Text | string;
  getLabelParams(state: SeekButtonState): {
    seconds: number;
  } | undefined;
  getAttrs(state: SeekButtonState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
  };
  setMedia(media: MediaTimeState): void;
  getState(): SeekButtonState;
  seek(media: MediaTimeState): Promise<void>;
}
declare namespace SeekButtonCore {
  type Props = SeekButtonProps;
  type State = SeekButtonState;
}
//#endregion
export { SeekButtonCore, SeekButtonDirection, SeekButtonProps, SeekButtonState };
//# sourceMappingURL=seek-button-core.d.ts.map
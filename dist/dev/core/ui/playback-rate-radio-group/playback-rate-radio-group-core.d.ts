import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaPlaybackRateState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/playback-rate-radio-group/playback-rate-radio-group-core.d.ts
interface PlaybackRateRadioGroupProps {
  /** Custom label for the options group. */
  label?: Text | string | ((state: PlaybackRateRadioGroupState) => Text | string) | undefined;
  /** Custom formatter for visible playback rate labels. */
  formatRate?: ((rate: number) => string) | undefined;
  /** Whether playback rate selection is disabled. */
  disabled?: boolean | undefined;
}
interface PlaybackRateRadioGroupState extends ButtonState {
  rate: number;
  rates: readonly number[];
  disabled: boolean;
  availability: 'available' | 'unavailable';
}
declare class PlaybackRateRadioGroupCore {
  #private;
  static readonly defaultProps: NonNullableObject<PlaybackRateRadioGroupProps>;
  readonly state: import("@videojs/store").WritableState<PlaybackRateRadioGroupState>;
  constructor(props?: PlaybackRateRadioGroupProps);
  setProps(props: PlaybackRateRadioGroupProps): void;
  getLabel(state: PlaybackRateRadioGroupState): Text | string;
  getLabelParams(state: PlaybackRateRadioGroupState): {
    rate: number;
  } | undefined;
  getRateLabel(rate: number): string;
  getRateValue(rate: number): string;
  getAttrs(state: PlaybackRateRadioGroupState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
  };
  setMedia(media: MediaPlaybackRateState): void;
  getState(): PlaybackRateRadioGroupState;
  select(media: MediaPlaybackRateState, rate: number): void;
  selectValue(media: MediaPlaybackRateState, value: string): void;
}
declare namespace PlaybackRateRadioGroupCore {
  type Props = PlaybackRateRadioGroupProps;
  type State = PlaybackRateRadioGroupState;
}
//#endregion
export { PlaybackRateRadioGroupCore, PlaybackRateRadioGroupProps, PlaybackRateRadioGroupState };
//# sourceMappingURL=playback-rate-radio-group-core.d.ts.map
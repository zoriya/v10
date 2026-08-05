import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaAudioTrack, MediaAudioTrackState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/audio-track-radio-group/audio-track-radio-group-core.d.ts
interface AudioTrackRadioGroupProps {
  /** Custom label for the options group. */
  label?: Text | string | ((state: AudioTrackRadioGroupState) => Text | string) | undefined;
  /** Custom formatter for visible track labels. */
  formatTrack?: ((track: MediaAudioTrack) => Text | string) | undefined;
  /** Whether audio track selection is disabled. */
  disabled?: boolean | undefined;
}
interface AudioTrackRadioGroupTrack {
  value: string;
  label: Text | string;
}
interface AudioTrackRadioGroupState extends ButtonState {
  tracks: readonly AudioTrackRadioGroupTrack[];
  value: string;
  disabled: boolean;
  availability: 'available' | 'unavailable';
}
declare class AudioTrackRadioGroupCore {
  #private;
  static readonly defaultProps: NonNullableObject<AudioTrackRadioGroupProps>;
  readonly state: import("@videojs/store").WritableState<AudioTrackRadioGroupState>;
  constructor(props?: AudioTrackRadioGroupProps);
  setProps(props: AudioTrackRadioGroupProps): void;
  getLabel(state: AudioTrackRadioGroupState): Text | string;
  getTrackLabel(track: MediaAudioTrack): Text | string;
  getAttrs(state: AudioTrackRadioGroupState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
  };
  setMedia(media: MediaAudioTrackState): void;
  getState(): AudioTrackRadioGroupState;
  select(media: MediaAudioTrackState, value: string): void;
  selectValue(media: MediaAudioTrackState, value: string): void;
}
declare namespace AudioTrackRadioGroupCore {
  type Props = AudioTrackRadioGroupProps;
  type State = AudioTrackRadioGroupState;
}
//#endregion
export { AudioTrackRadioGroupCore, AudioTrackRadioGroupProps, AudioTrackRadioGroupState, AudioTrackRadioGroupTrack };
//# sourceMappingURL=audio-track-radio-group-core.d.ts.map
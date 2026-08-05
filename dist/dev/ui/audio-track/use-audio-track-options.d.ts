import { AudioTrackRadioGroupCore } from "@videojs/core";
//#region src/ui/audio-track/use-audio-track-options.d.ts
interface AudioTrackOptionsProps extends AudioTrackRadioGroupCore.Props {}
interface AudioTrackOption {
  value: string;
  label: string;
  disabled: boolean;
}
interface AudioTrackOptionsResult {
  state: AudioTrackRadioGroupCore.State;
  value: string;
  options: AudioTrackOption[];
  disabled: boolean;
  setValue: (value: string) => void;
}
/**
 * Create audio track menu options from the player audio track state. Returns
 * `null` when the audio track feature is not configured.
 *
 * @param props - Optional `label`, `formatTrack`, and `disabled` overrides.
 */
declare function useAudioTrackOptions(props?: AudioTrackOptionsProps): AudioTrackOptionsResult | null;
declare namespace useAudioTrackOptions {
  type Props = AudioTrackOptionsProps;
  type Result = AudioTrackOptionsResult;
  type Option = AudioTrackOption;
}
//#endregion
export { AudioTrackOption, AudioTrackOptionsProps, AudioTrackOptionsResult, useAudioTrackOptions };
//# sourceMappingURL=use-audio-track-options.d.ts.map
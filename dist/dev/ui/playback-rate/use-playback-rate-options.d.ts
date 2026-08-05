import { PlaybackRateRadioGroupCore } from "@videojs/core";
//#region src/ui/playback-rate/use-playback-rate-options.d.ts
interface PlaybackRateOptionsProps extends PlaybackRateRadioGroupCore.Props {}
interface PlaybackRateOption {
  rate: number;
  value: string;
  label: string;
  disabled: boolean;
}
interface PlaybackRateOptionsResult {
  state: PlaybackRateRadioGroupCore.State;
  rate: number;
  value: string;
  options: PlaybackRateOption[];
  disabled: boolean;
  setRate: (rate: number) => void;
  setValue: (value: string) => void;
}
/**
 * Create playback rate menu options from the player playback rate state.
 * Returns `null` when the playback rate feature is not configured.
 *
 * @param props - Optional `label`, `formatRate`, and `disabled` overrides.
 */
declare function usePlaybackRateOptions(props?: PlaybackRateOptionsProps): PlaybackRateOptionsResult | null;
declare namespace usePlaybackRateOptions {
  type Props = PlaybackRateOptionsProps;
  type Result = PlaybackRateOptionsResult;
  type Option = PlaybackRateOption;
}
//#endregion
export { PlaybackRateOption, PlaybackRateOptionsProps, PlaybackRateOptionsResult, usePlaybackRateOptions };
//# sourceMappingURL=use-playback-rate-options.d.ts.map
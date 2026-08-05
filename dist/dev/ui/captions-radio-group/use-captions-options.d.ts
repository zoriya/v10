import { CaptionsRadioGroupCore } from "@videojs/core";
//#region src/ui/captions-radio-group/use-captions-options.d.ts
interface CaptionsOptionsProps extends CaptionsRadioGroupCore.Props {}
interface CaptionsOption {
  value: string;
  label: string;
  disabled: boolean;
}
interface CaptionsOptionsResult {
  state: CaptionsRadioGroupCore.State;
  value: string;
  options: CaptionsOption[];
  disabled: boolean;
  showMenu: boolean;
  setValue: (value: string) => void;
}
/**
 * Create captions menu options (including an `Off` option) from the player
 * text track state. Returns `null` when the text tracks feature is not
 * configured.
 *
 * @param props - Optional `label`, `formatTrack`, and `disabled` overrides.
 */
declare function useCaptionsOptions(props?: CaptionsOptionsProps): CaptionsOptionsResult | null;
declare namespace useCaptionsOptions {
  type Props = CaptionsOptionsProps;
  type Result = CaptionsOptionsResult;
  type Option = CaptionsOption;
}
//#endregion
export { CaptionsOption, CaptionsOptionsProps, CaptionsOptionsResult, useCaptionsOptions };
//# sourceMappingURL=use-captions-options.d.ts.map
import { QualityRadioGroupCore } from "@videojs/core";
//#region src/ui/quality/use-quality-options.d.ts
interface QualityOptionsProps extends QualityRadioGroupCore.Props {}
interface QualityOption {
  value: string;
  label: string;
  tier?: string | undefined;
  badge?: string | undefined;
  disabled: boolean;
}
interface QualityOptionsResult {
  state: QualityRadioGroupCore.State;
  value: string;
  options: QualityOption[];
  disabled: boolean;
  setValue: (value: string) => void;
}
/**
 * Create quality menu options (including an `Auto` option) from the player
 * video rendition state. Returns `null` when the quality feature is not
 * configured.
 *
 * @param props - Optional `label`, `formatRendition`, and `disabled` overrides.
 */
declare function useQualityOptions(props?: QualityOptionsProps): QualityOptionsResult | null;
declare namespace useQualityOptions {
  type Props = QualityOptionsProps;
  type Result = QualityOptionsResult;
  type Option = QualityOption;
}
//#endregion
export { QualityOption, QualityOptionsProps, QualityOptionsResult, useQualityOptions };
//# sourceMappingURL=use-quality-options.d.ts.map
import { UIEvent } from "@videojs/core/dom";
import { ComponentPropsWithRef, Ref } from "react";
//#region src/ui/hooks/use-button.d.ts
interface UseButtonParameters {
  displayName: string;
  onActivate: (event: UIEvent) => void;
  isDisabled: () => boolean;
}
interface UseButtonReturnValue {
  getButtonProps: (externalProps?: ComponentPropsWithRef<'button'>) => ComponentPropsWithRef<'button'>;
  buttonRef: Ref<HTMLElement>;
}
/**
 * Hook for button behavior with keyboard and pointer interaction.
 *
 * @example
 * ```tsx
 * const { getButtonProps, buttonRef } = useButton({
 *   displayName: 'PlayButton',
 *   onActivate: () => togglePlayback(),
 *   isDisabled: () => disabled,
 * });
 *
 * return useRender('button', componentProps, {
 *   state,
 *   ref: [forwardedRef, buttonRef],
 *   props: [elementProps, getButtonProps],
 * });
 * ```
 *
 * @param params - Button configuration with activation handler and disabled check.
 */
declare function useButton(params: UseButtonParameters): UseButtonReturnValue;
declare namespace useButton {
  type Parameters = UseButtonParameters;
  type ReturnValue = UseButtonReturnValue;
}
//#endregion
export { UseButtonParameters, UseButtonReturnValue, useButton };
//# sourceMappingURL=use-button.d.ts.map
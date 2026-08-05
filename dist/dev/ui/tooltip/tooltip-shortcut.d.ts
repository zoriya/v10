import { UIComponentProps } from "../../utils/types.js";
import { TooltipState } from "@videojs/core";
//#region src/ui/tooltip/tooltip-shortcut.d.ts
interface TooltipShortcutProps extends UIComponentProps<'kbd', TooltipState> {}
/** Keyboard shortcut hint; apply skin `className` (CSS: `media-tooltip__kbd`; Tailwind: `popup.tooltipShortcut`). */
declare const TooltipShortcut: import("react").ForwardRefExoticComponent<Omit<TooltipShortcutProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
declare namespace TooltipShortcut {
  type Props = TooltipShortcutProps;
  type State = TooltipState;
}
//#endregion
export { TooltipShortcut, TooltipShortcutProps };
//# sourceMappingURL=tooltip-shortcut.d.ts.map
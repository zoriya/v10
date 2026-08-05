import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-item-indicator.d.ts
interface MenuItemIndicatorProps extends UIComponentProps<'span', MenuState> {
  /** Whether the indicator is currently shown. Typically bound to the parent item's checked state. */
  checked?: boolean;
  /** When `true`, renders even when unchecked (useful for animating out). Defaults to `false`. */
  forceMount?: boolean;
}
/** Visual indicator for a checked state. Only renders when `checked` is `true` (or `forceMount` is set). */
declare const MenuItemIndicator: import("react").ForwardRefExoticComponent<Omit<MenuItemIndicatorProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
declare namespace MenuItemIndicator {
  type Props = MenuItemIndicatorProps;
  type State = MenuState;
}
//#endregion
export { MenuItemIndicator, MenuItemIndicatorProps };
//# sourceMappingURL=menu-item-indicator.d.ts.map
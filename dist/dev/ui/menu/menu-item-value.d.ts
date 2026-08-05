import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-item-value.d.ts
interface MenuItemValueProps extends UIComponentProps<'span', MenuState> {}
/** Displays the current value for a settings menu item from `Menu.Item` or `Menu.Trigger` context. */
declare const MenuItemValue: import("react").ForwardRefExoticComponent<Omit<MenuItemValueProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
declare namespace MenuItemValue {
  type Props = MenuItemValueProps;
}
//#endregion
export { MenuItemValue, MenuItemValueProps };
//# sourceMappingURL=menu-item-value.d.ts.map
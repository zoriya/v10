import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-radio-item.d.ts
interface MenuRadioItemProps extends UIComponentProps<'div', MenuState> {
  /** The value this item represents. */
  value: string;
  /** Whether the item is disabled. */
  disabled?: boolean;
}
/** A radio-style menu item. Renders a `<div>` with `role="menuitemradio"`. */
declare const MenuRadioItem: import("react").ForwardRefExoticComponent<Omit<MenuRadioItemProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace MenuRadioItem {
  type Props = MenuRadioItemProps;
  type State = MenuState;
}
//#endregion
export { MenuRadioItem, MenuRadioItemProps };
//# sourceMappingURL=menu-radio-item.d.ts.map
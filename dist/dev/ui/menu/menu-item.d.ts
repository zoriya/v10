import { UIComponentProps } from "../../utils/types.js";
import { MenuItemSettingType } from "./menu-item-type.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-item.d.ts
interface MenuItemProps extends UIComponentProps<'div', MenuState> {
  /** Called when the item is selected. */
  onSelect?: () => void;
  /** Whether the item is disabled. */
  disabled?: boolean;
  /** Setting kind for submenu triggers (`playback-rate`, `quality`, `audio-track`, or `captions`). */
  type?: MenuItemSettingType | undefined;
}
/** A single action in the menu. Renders a `<div>` with `role="menuitem"`. */
declare const MenuItem: import("react").ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace MenuItem {
  type Props = MenuItemProps;
  type State = MenuState;
}
//#endregion
export { MenuItem, MenuItemProps };
//# sourceMappingURL=menu-item.d.ts.map
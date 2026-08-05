import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-content.d.ts
interface MenuContentProps extends UIComponentProps<'div', MenuState> {}
/** Container for menu items. Positioned relative to the trigger at root level; renders in-place as a submenu panel when nested. */
declare const MenuContent: import("react").ForwardRefExoticComponent<Omit<MenuContentProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace MenuContent {
  type Props = MenuContentProps;
  type State = MenuState;
}
//#endregion
export { MenuContent, MenuContentProps };
//# sourceMappingURL=menu-content.d.ts.map
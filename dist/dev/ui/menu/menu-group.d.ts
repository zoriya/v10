import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-group.d.ts
interface MenuGroupProps extends UIComponentProps<'div', MenuState> {}
/** Groups related menu items. Renders a `<div>` with `role="group"`. */
declare const MenuGroup: import("react").ForwardRefExoticComponent<Omit<MenuGroupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace MenuGroup {
  type Props = MenuGroupProps;
  type State = MenuState;
}
//#endregion
export { MenuGroup, MenuGroupProps };
//# sourceMappingURL=menu-group.d.ts.map
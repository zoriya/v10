import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-view.d.ts
interface MenuViewProps extends UIComponentProps<'div', MenuState> {}
/** Root menu view inside the menu viewport. */
declare const MenuView: import("react").ForwardRefExoticComponent<Omit<MenuViewProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace MenuView {
  type Props = MenuViewProps;
  type State = MenuState;
}
//#endregion
export { MenuView, MenuViewProps };
//# sourceMappingURL=menu-view.d.ts.map
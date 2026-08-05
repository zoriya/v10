import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-group-label.d.ts
interface MenuGroupLabelProps extends UIComponentProps<'div', MenuState> {}
/** Non-interactive label for a group of items. Renders a `<div>`. */
declare const MenuGroupLabel: import("react").ForwardRefExoticComponent<Omit<MenuGroupLabelProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace MenuGroupLabel {
  type Props = MenuGroupLabelProps;
  type State = MenuState;
}
//#endregion
export { MenuGroupLabel, MenuGroupLabelProps };
//# sourceMappingURL=menu-group-label.d.ts.map
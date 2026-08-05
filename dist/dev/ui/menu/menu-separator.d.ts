import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-separator.d.ts
interface MenuSeparatorProps extends UIComponentProps<'div', MenuState> {}
/** Visual divider between groups of items. Renders a `<div>` with `role="separator"`. */
declare const MenuSeparator: import("react").ForwardRefExoticComponent<Omit<MenuSeparatorProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace MenuSeparator {
  type Props = MenuSeparatorProps;
  type State = MenuState;
}
//#endregion
export { MenuSeparator, MenuSeparatorProps };
//# sourceMappingURL=menu-separator.d.ts.map
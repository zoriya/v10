import { UIComponentProps } from "../../utils/types.js";
import { Text } from "@videojs/core/i18n";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-back.d.ts
interface MenuBackProps extends UIComponentProps<'button', MenuState> {
  /** Accessible label for the back button. */
  label?: Text | string;
}
/** Button that navigates back to the parent menu view. Place at the top of a submenu Content. */
declare const MenuBack: import("react").ForwardRefExoticComponent<Omit<MenuBackProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
declare namespace MenuBack {
  type Props = MenuBackProps;
  type State = MenuState;
}
//#endregion
export { MenuBack, MenuBackProps };
//# sourceMappingURL=menu-back.d.ts.map
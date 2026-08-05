import { UIComponentProps } from "../../utils/types.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-radio-group.d.ts
interface MenuRadioGroupProps extends UIComponentProps<'div', MenuState> {
  /** The currently selected value. */
  value: string;
  /** Called when the user selects a radio item. */
  onValueChange: (value: string) => void;
}
/** A group of mutually exclusive radio items. Renders a `<div>` with `role="group"`. */
declare const MenuRadioGroup: import("react").ForwardRefExoticComponent<Omit<MenuRadioGroupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace MenuRadioGroup {
  type Props = MenuRadioGroupProps;
  type State = MenuState;
}
//#endregion
export { MenuRadioGroup, MenuRadioGroupProps };
//# sourceMappingURL=menu-radio-group.d.ts.map
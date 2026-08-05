import { UIComponentProps } from "../../utils/types.js";
import { MenuItemSettingType } from "./menu-item-type.js";
import { MenuState } from "@videojs/core";
//#region src/ui/menu/menu-trigger.d.ts
interface MenuTriggerProps extends Omit<UIComponentProps<'button', MenuState>, 'type'> {
  /** Disables the trigger. */
  disabled?: boolean;
  /** Setting kind for submenu triggers (`playback-rate`, `quality`, `audio-track`, or `captions`). */
  type?: MenuItemSettingType | undefined;
}
/**
 * Button that toggles the menu visibility. At root level renders a `<button>`.
 * When inside a parent menu (as a submenu trigger), renders as a `<div role="menuitem">`
 * that pushes the submenu on click or ArrowRight.
 */
declare const MenuTrigger: import("react").ForwardRefExoticComponent<Omit<MenuTriggerProps, "ref"> & import("react").RefAttributes<HTMLButtonElement | HTMLDivElement>>;
declare namespace MenuTrigger {
  type Props = MenuTriggerProps;
  type State = MenuState;
}
//#endregion
export { MenuTrigger, MenuTriggerProps };
//# sourceMappingURL=menu-trigger.d.ts.map
import { TransitionDataAttrs } from "../transition.js";
//#region src/core/ui/menu/menu-data-attrs.ts
/** Data attributes set on the menu Content element and inherited by all children. */
const MenuDataAttrs = {
	/** Present when the menu is open. */
	open: "data-open",
	/** Rendered positioning side after collision handling. Absent on submenus. */
	side: "data-side",
	/** Popover positioning alignment. Absent on submenus. */
	align: "data-align",
	/** Present on Content when this menu is nested inside a parent menu. */
	isSubmenu: "data-submenu",
	...TransitionDataAttrs
};
//#endregion
export { MenuDataAttrs };

//# sourceMappingURL=menu-data-attrs.js.map
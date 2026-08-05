"use client";
import { renderElement } from "../../utils/use-render.js";
import { useMenuContext, useOptionalMenuItemSettingContext } from "./context.js";
import { forwardRef } from "react";
//#region src/ui/menu/menu-item-value.tsx
/** Displays the current value for a settings menu item from `Menu.Item` or `Menu.Trigger` context. */
const MenuItemValue = forwardRef(function MenuItemValue({ render, className, style, ...elementProps }, forwardedRef) {
	const { state, stateAttrMap } = useMenuContext();
	const setting = useOptionalMenuItemSettingContext();
	if (!setting) return null;
	return renderElement("span", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: forwardedRef,
		props: [{
			"aria-live": "off",
			children: setting.label
		}, elementProps]
	});
});
//#endregion
export { MenuItemValue };

//# sourceMappingURL=menu-item-value.js.map
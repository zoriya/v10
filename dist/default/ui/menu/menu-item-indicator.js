"use client";
import { renderElement } from "../../utils/use-render.js";
import { useMenuContext } from "./context.js";
import { forwardRef } from "react";
//#region src/ui/menu/menu-item-indicator.tsx
/** Visual indicator for a checked state. Only renders when `checked` is `true` (or `forceMount` is set). */
const MenuItemIndicator = forwardRef(function MenuItemIndicator({ render, className, style, checked, forceMount = false, ...elementProps }, forwardedRef) {
	const { state } = useMenuContext();
	if (!checked && !forceMount) return null;
	return renderElement("span", {
		render,
		className,
		style
	}, {
		state,
		ref: [forwardedRef],
		props: [{ "aria-hidden": true }, elementProps]
	});
});
//#endregion
export { MenuItemIndicator };

//# sourceMappingURL=menu-item-indicator.js.map
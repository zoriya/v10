"use client";
import { renderElement } from "../../utils/use-render.js";
import { useMenuContext } from "./context.js";
import { MenuGroupProvider, getMenuGroupProps } from "./use-menu-group.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/ui/menu/menu-group.tsx
/** Groups related menu items. Renders a `<div>` with `role="group"`. */
const MenuGroup = forwardRef(function MenuGroup({ render, className, style, ...elementProps }, forwardedRef) {
	const { state } = useMenuContext();
	return /* @__PURE__ */ jsx(MenuGroupProvider, { children: (labelId) => renderElement("div", {
		render,
		className,
		style
	}, {
		state,
		ref: [forwardedRef],
		props: [getMenuGroupProps(labelId, elementProps), elementProps]
	}) });
});
//#endregion
export { MenuGroup };

//# sourceMappingURL=menu-group.js.map
"use client";
import { renderElement } from "../../utils/use-render.js";
import { useMenuContext } from "./context.js";
import { getMenuRootViewAttrs } from "@videojs/core/dom";
import { forwardRef } from "react";
//#region src/ui/menu/menu-view.tsx
/** Root menu view inside the menu viewport. */
const MenuView = forwardRef(function MenuView({ render, className, style, ...elementProps }, forwardedRef) {
	const { state } = useMenuContext();
	return renderElement("div", {
		render,
		className,
		style
	}, {
		state,
		ref: [forwardedRef],
		props: [getMenuRootViewAttrs(), elementProps]
	});
});
//#endregion
export { MenuView };

//# sourceMappingURL=menu-view.js.map
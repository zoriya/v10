"use client";
import { useTranslator } from "../../i18n/context.js";
import { renderElement } from "../../utils/use-render.js";
import { useSubMenuContext } from "./context.js";
import { translateText } from "@videojs/core/i18n";
import { forwardRef, useCallback } from "react";
import { backText } from "@videojs/core/i18n/text/menu";
//#region src/ui/menu/menu-back.tsx
/** Button that navigates back to the parent menu view. Place at the top of a submenu Content. */
const MenuBack = forwardRef(function MenuBack({ render, className, style, label = backText, onClick, ...elementProps }, forwardedRef) {
	const t = useTranslator();
	const parentMenu = useSubMenuContext()?.parentMenu ?? null;
	const handleClick = useCallback((event) => {
		onClick?.(event);
		parentMenu?.pop();
	}, [onClick, parentMenu]);
	return renderElement("button", {
		render,
		className,
		style
	}, {
		state: parentMenu?.state ?? {},
		ref: forwardedRef,
		props: [{
			type: "button",
			"aria-label": translateText(label, t),
			onClick: handleClick
		}, elementProps]
	});
});
//#endregion
export { MenuBack };

//# sourceMappingURL=menu-back.js.map
"use client";
import { renderElement } from "../../utils/use-render.js";
import { useMenuContext, useMenuRadioGroupContext, useSubMenuContext } from "./context.js";
import { completeMenuItemSelection } from "@videojs/core/dom";
import { forwardRef, useCallback, useEffect, useRef } from "react";
//#region src/ui/menu/menu-radio-item.tsx
/** A radio-style menu item. Renders a `<div>` with `role="menuitemradio"`. */
const MenuRadioItem = forwardRef(function MenuRadioItem({ render, className, style, value, disabled, onClick, ...elementProps }, forwardedRef) {
	const { menu, state } = useMenuContext();
	const { value: groupValue, onValueChange } = useMenuRadioGroupContext();
	const parentMenu = useSubMenuContext()?.parentMenu.menu ?? null;
	const elementRef = useRef(null);
	const checked = groupValue === value;
	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;
		return menu.registerItem(element);
	}, [menu]);
	const handleClick = useCallback((event) => {
		if (disabled) return;
		onClick?.(event);
		onValueChange(value);
		completeMenuItemSelection(menu, parentMenu);
	}, [
		disabled,
		onClick,
		onValueChange,
		value,
		menu,
		parentMenu
	]);
	const handlePointerEnter = useCallback(() => {
		const element = elementRef.current;
		if (!element || disabled) return;
		menu.highlight(element, { focus: false });
	}, [menu, disabled]);
	return renderElement("div", {
		render,
		className,
		style
	}, {
		state,
		ref: [forwardedRef, elementRef],
		props: [{
			role: "menuitemradio",
			"aria-checked": checked,
			"aria-disabled": disabled ? true : void 0,
			onClick: handleClick,
			onPointerEnter: handlePointerEnter
		}, elementProps]
	});
});
//#endregion
export { MenuRadioItem };

//# sourceMappingURL=menu-radio-item.js.map
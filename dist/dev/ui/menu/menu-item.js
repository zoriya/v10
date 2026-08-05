"use client";
import { renderElement } from "../../utils/use-render.js";
import { useMenuContext, useOptionalMenuItemSettingContext, useSubMenuContext } from "./context.js";
import { MenuItemSettingProvider } from "./menu-item-setting-provider.js";
import { completeMenuItemSelection } from "@videojs/core/dom";
import { forwardRef, useCallback, useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/ui/menu/menu-item.tsx
/** A single action in the menu. Renders a `<div>` with `role="menuitem"`. */
const MenuItem = forwardRef(function MenuItem({ render, className, style, onSelect, disabled, type, onClick, ...elementProps }, forwardedRef) {
	const { menu, state } = useMenuContext();
	const parentMenu = useSubMenuContext()?.parentMenu.menu ?? null;
	const elementRef = useRef(null);
	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;
		return menu.registerItem(element);
	}, [menu]);
	const item = /* @__PURE__ */ jsx(MenuItemContent, {
		disabled,
		elementProps,
		onClick: useCallback((event) => {
			if (disabled) return;
			onClick?.(event);
			onSelect?.();
			completeMenuItemSelection(menu, parentMenu);
		}, [
			disabled,
			onClick,
			onSelect,
			menu,
			parentMenu
		]),
		onPointerEnter: useCallback(() => {
			const element = elementRef.current;
			if (!element || disabled) return;
			menu.highlight(element, { focus: false });
		}, [menu, disabled]),
		render,
		className,
		style,
		state,
		forwardedRef,
		elementRef
	});
	if (!type) return item;
	return /* @__PURE__ */ jsx(MenuItemSettingProvider, {
		type,
		children: item
	});
});
function MenuItemContent({ disabled, elementProps, onClick, onPointerEnter, render, className, style, state, forwardedRef, elementRef }) {
	const setting = useOptionalMenuItemSettingContext();
	const settingAttrs = setting ? { "data-availability": setting.availability } : void 0;
	return renderElement("div", {
		render,
		className,
		style
	}, {
		state,
		ref: [forwardedRef, elementRef],
		props: [{
			role: "menuitem",
			"aria-disabled": disabled ? true : void 0,
			onClick,
			onPointerEnter,
			...settingAttrs
		}, elementProps]
	});
}
//#endregion
export { MenuItem };

//# sourceMappingURL=menu-item.js.map
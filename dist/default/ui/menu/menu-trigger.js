"use client";
import { renderElement } from "../../utils/use-render.js";
import { MenuTriggerChildContextProvider, useMenuContext, useOptionalMenuItemSettingContext, useSubMenuContext } from "./context.js";
import { useSafeId } from "../../utils/use-safe-id.js";
import { MenuItemSettingProvider } from "./menu-item-setting-provider.js";
import { isMenuNavigationKey } from "@videojs/core/dom";
import { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import { supportsAnchorPositioning } from "@videojs/utils/dom";
import { jsx } from "react/jsx-runtime";
//#region src/ui/menu/menu-trigger.tsx
function toUIKeyboardEvent(event) {
	return {
		get defaultPrevented() {
			return event.defaultPrevented;
		},
		key: event.key,
		shiftKey: event.shiftKey,
		ctrlKey: event.ctrlKey,
		altKey: event.altKey,
		metaKey: event.metaKey,
		target: event.target instanceof Node ? event.target : event.currentTarget,
		currentTarget: event.currentTarget,
		preventDefault: () => event.preventDefault(),
		stopPropagation: () => event.stopPropagation()
	};
}
function preventMenuKeyDefault(event) {
	const keyboardEvent = toUIKeyboardEvent(event);
	if (event.key !== "Escape" && isMenuNavigationKey(keyboardEvent) && !event.defaultPrevented) event.preventDefault();
}
/**
* Button that toggles the menu visibility. At root level renders a `<button>`.
* When inside a parent menu (as a submenu trigger), renders as a `<div role="menuitem">`
* that pushes the submenu on click or ArrowRight.
*/
const MenuTrigger = forwardRef(function MenuTrigger({ render, className, style, disabled, type, onClick, onKeyDown, ...elementProps }, forwardedRef) {
	const { core, menu, state, anchorName, contentId } = useMenuContext();
	const subMenuCtx = useSubMenuContext();
	const isSubMenuTrigger = subMenuCtx !== null;
	const elementRef = useRef(null);
	const triggerId = useSafeId("sub-trigger");
	const parentMenu = subMenuCtx?.parentMenu ?? null;
	const parentMenuApi = parentMenu?.menu ?? null;
	const parentState = parentMenu?.state ?? state;
	const parentPush = parentMenu?.push ?? null;
	const subMenuId = subMenuCtx?.subMenuId ?? null;
	const isExpanded = isSubMenuTrigger ? parentMenu?.activeSubMenuId === subMenuId : state.open;
	useEffect(() => {
		if (!isSubMenuTrigger || !parentMenuApi) return;
		const element = elementRef.current;
		if (!element) return;
		return parentMenuApi.registerItem(element);
	}, [isSubMenuTrigger, parentMenuApi]);
	const openSubMenu = useCallback(() => {
		if (disabled || !parentPush || !subMenuId) return;
		parentPush(subMenuId, triggerId);
	}, [
		disabled,
		parentPush,
		subMenuId,
		triggerId
	]);
	const handleSubMenuClick = useCallback((event) => {
		onClick?.(event);
		openSubMenu();
	}, [onClick, openSubMenu]);
	const handleSubMenuKeyDown = useCallback((event) => {
		onKeyDown?.(event);
		if (disabled) return;
		if (event.key === "ArrowRight") {
			event.preventDefault();
			openSubMenu();
		}
	}, [
		disabled,
		onKeyDown,
		openSubMenu
	]);
	const handlePointerEnter = useCallback(() => {
		const element = elementRef.current;
		if (!element || disabled || !parentMenuApi) return;
		parentMenuApi.highlight(element, { focus: false });
	}, [disabled, parentMenuApi]);
	const triggerRef = useCallback((element) => {
		menu.setTriggerElement(element);
		if (element && supportsAnchorPositioning()) element.style.setProperty("anchor-name", `--${anchorName}`);
	}, [menu, anchorName]);
	const rootTriggerProps = useMemo(() => {
		if (!disabled) return menu.triggerProps;
		return {
			onClick: (event) => {
				event.preventDefault();
			},
			onKeyDown: (event) => {
				const keyboardEvent = toUIKeyboardEvent(event);
				if (event.key === "Enter" || event.key === " " || isMenuNavigationKey(keyboardEvent)) event.preventDefault();
			}
		};
	}, [disabled, menu.triggerProps]);
	if (isSubMenuTrigger) {
		const trigger = /* @__PURE__ */ jsx(MenuTriggerSubmenu, {
			render,
			className,
			style,
			disabled,
			elementProps,
			forwardedRef,
			elementRef,
			triggerId,
			parentState,
			isExpanded,
			onSubMenuClick: handleSubMenuClick,
			onSubMenuKeyDown: handleSubMenuKeyDown,
			onPointerEnter: handlePointerEnter
		});
		if (!type) return trigger;
		return /* @__PURE__ */ jsx(MenuItemSettingProvider, {
			type,
			children: trigger
		});
	}
	const rootTrigger = /* @__PURE__ */ jsx(MenuTriggerChildContextProvider, {
		value: true,
		children: renderElement("button", {
			render,
			className,
			style
		}, {
			state,
			ref: [forwardedRef, triggerRef],
			props: [
				{
					type: "button",
					...core.getTriggerAttrs(state, contentId)
				},
				disabled ? {
					disabled: true,
					"aria-disabled": "true"
				} : void 0,
				state.open ? { onKeyDownCapture: preventMenuKeyDefault } : void 0,
				rootTriggerProps,
				elementProps
			]
		})
	});
	if (!type) return rootTrigger;
	return /* @__PURE__ */ jsx(MenuItemSettingProvider, {
		type,
		children: rootTrigger
	});
});
function MenuTriggerSubmenu({ render, className, style, disabled, elementProps, forwardedRef, elementRef, triggerId, parentState, isExpanded, onSubMenuClick, onSubMenuKeyDown, onPointerEnter }) {
	const setting = useOptionalMenuItemSettingContext();
	const settingAttrs = setting ? { "data-availability": setting.availability } : void 0;
	return renderElement("div", {
		render,
		className,
		style
	}, {
		state: parentState,
		ref: [forwardedRef, elementRef],
		props: [{
			id: triggerId,
			role: "menuitem",
			"aria-haspopup": "menu",
			"aria-expanded": isExpanded,
			"aria-disabled": disabled ? true : void 0,
			"data-has-submenu": "",
			onClick: onSubMenuClick,
			onKeyDownCapture: preventMenuKeyDefault,
			onKeyDown: onSubMenuKeyDown,
			onPointerEnter,
			...settingAttrs
		}, elementProps]
	});
}
//#endregion
export { MenuTrigger };

//# sourceMappingURL=menu-trigger.js.map
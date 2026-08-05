"use client";
import { useOptionalContainer, useOptionalPopupGroup } from "../../player/context.js";
import { useLatestRef } from "../../utils/use-latest-ref.js";
import { useDestroy } from "../../utils/use-destroy.js";
import { MenuContextProvider, SubMenuContextProvider, useOptionalMenuContext } from "./context.js";
import { useSafeId } from "../../utils/use-safe-id.js";
import { useOptionalControlsContext } from "../controls/context.js";
import { usePositionedState } from "../hooks/use-positioned-state.js";
import { createMenu, createTransition } from "@videojs/core/dom";
import { useSnapshot } from "@videojs/store/react";
import { useEffect, useMemo, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { MenuCore, MenuDataAttrs } from "@videojs/core";
//#region src/ui/menu/menu-root.tsx
function MenuRoot({ open: controlledOpen, defaultOpen = MenuCore.defaultProps.defaultOpen, onOpenChange: onOpenChangeProp, onOpenChangeComplete: onOpenChangeCompleteProp, boundary = "container", children, ...coreProps }) {
	const parentMenu = useOptionalMenuContext();
	const controls = useOptionalControlsContext();
	const container = useOptionalContainer();
	const popupGroup = useOptionalPopupGroup();
	const isSubmenu = parentMenu !== null;
	const { side, align, closeOnEscape, closeOnOutsideClick } = coreProps;
	const [core] = useState(() => new MenuCore({
		...coreProps,
		isSubmenu
	}));
	const isControlled = controlledOpen !== void 0;
	const onOpenChangeRef = useLatestRef(onOpenChangeProp);
	const onOpenChangeCompleteRef = useLatestRef(onOpenChangeCompleteProp);
	const closeOnEscapeRef = useLatestRef(closeOnEscape);
	const closeOnOutsideClickRef = useLatestRef(closeOnOutsideClick);
	const popupGroupRef = useLatestRef(popupGroup);
	const isSubmenuRef = useLatestRef(isSubmenu);
	const [menu] = useState(() => {
		const instance = createMenu({
			transition: createTransition(),
			onOpenChange(nextOpen, details) {
				onOpenChangeRef.current?.(nextOpen, details);
			},
			onOpenChangeComplete(nextOpen) {
				onOpenChangeCompleteRef.current?.(nextOpen);
			},
			closeOnEscape: () => closeOnEscapeRef.current ?? MenuCore.defaultProps.closeOnEscape,
			closeOnOutsideClick: () => closeOnOutsideClickRef.current ?? MenuCore.defaultProps.closeOnOutsideClick,
			group: () => isSubmenuRef.current ? void 0 : popupGroupRef.current
		});
		if (!isControlled && defaultOpen) instance.open();
		return instance;
	});
	const anchorName = useSafeId();
	const contentId = useSafeId("menu");
	useEffect(() => {
		if (controlledOpen === void 0) return;
		const { active: inputOpen } = menu.input.current;
		if (controlledOpen === inputOpen) return;
		if (controlledOpen) menu.open("click");
		else menu.close("click");
	}, [controlledOpen, menu]);
	useEffect(() => {
		if (isSubmenu || controls?.state.visible !== false) return;
		menu.close("imperative-action");
	}, [
		controls?.state.visible,
		isSubmenu,
		menu
	]);
	useDestroy(menu);
	const input = useSnapshot(menu.input);
	const { state, preferredSide, setPositionedSide } = usePositionedState(useMemo(() => {
		core.setProps({
			side,
			align,
			closeOnEscape,
			closeOnOutsideClick,
			isSubmenu
		});
		core.setInput(input);
		return core.getState();
	}, [
		core,
		input,
		side,
		align,
		closeOnEscape,
		closeOnOutsideClick,
		isSubmenu
	]));
	const navigationInput = useSnapshot(menu.navigationInput);
	const topEntry = navigationInput.stack[navigationInput.stack.length - 1];
	const activeSubMenuId = topEntry?.menuId ?? null;
	const activeSubMenuTriggerId = topEntry?.triggerId ?? null;
	const navigationDirection = navigationInput.direction;
	const contextValue = useMemo(() => ({
		core,
		menu,
		state,
		preferredSide,
		setPositionedSide,
		stateAttrMap: MenuDataAttrs,
		contentId,
		anchorName,
		boundary,
		container,
		activeSubMenuId,
		activeSubMenuTriggerId,
		navigationDirection,
		push: menu.push,
		pop: menu.pop
	}), [
		core,
		menu,
		state,
		preferredSide,
		setPositionedSide,
		contentId,
		anchorName,
		boundary,
		container,
		activeSubMenuId,
		activeSubMenuTriggerId,
		navigationDirection
	]);
	const subMenuContextValue = useMemo(() => parentMenu ? {
		subMenuId: contentId,
		parentMenu
	} : null, [contentId, parentMenu]);
	if (subMenuContextValue) return /* @__PURE__ */ jsx(MenuContextProvider, {
		value: contextValue,
		children: /* @__PURE__ */ jsx(SubMenuContextProvider, {
			value: subMenuContextValue,
			children
		})
	});
	return /* @__PURE__ */ jsx(MenuContextProvider, {
		value: contextValue,
		children
	});
}
//#endregion
export { MenuRoot };

//# sourceMappingURL=menu-root.js.map
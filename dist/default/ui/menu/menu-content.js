"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { renderElement } from "../../utils/use-render.js";
import { useMenuContext, useSubMenuContext } from "./context.js";
import { createMenuViewTransition, getAnchorPositionStyle, getMenuViewTransitionAttrs, getMenuViewportAttrs, getMenuViewportElement, getPopupPositionRect, getPositionedSide, getPositioningBoundaryRect, getRootPositionOptions, isEventWithinElement, isMenuNavigationKey, observeMenuViewContent, resolveOffsets, resolvePositioningBoundary, syncMenuViewRoot, syncMenuViewTransition } from "@videojs/core/dom";
import { useSnapshot } from "@videojs/store/react";
import { forwardRef, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { supportsAnchorPositioning } from "@videojs/utils/dom";
import { PopoverCSSVars } from "@videojs/core";
import { createPortal } from "react-dom";
//#region src/ui/menu/menu-content.tsx
const POPOVER_RESET = {
	position: "fixed",
	inset: "auto",
	margin: 0
};
const menuPreventedNativeEvents = /* @__PURE__ */ new WeakSet();
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
function toUIFocusEvent(event) {
	return {
		get defaultPrevented() {
			return event.defaultPrevented;
		},
		relatedTarget: event.relatedTarget,
		preventDefault: () => event.preventDefault(),
		stopPropagation: () => event.stopPropagation()
	};
}
function preventMenuKeyDefault(event) {
	const keyboardEvent = toUIKeyboardEvent(event);
	if (event.key !== "Escape" && isMenuNavigationKey(keyboardEvent) && !event.defaultPrevented) {
		event.preventDefault();
		menuPreventedNativeEvents.add(event.nativeEvent);
	}
}
function wasDefaultPreventedByMenu(event) {
	return menuPreventedNativeEvents.has(event.nativeEvent);
}
function callKeyDownHandler(handler, event) {
	const defaultPreventedBeforeHandler = event.defaultPrevented && !wasDefaultPreventedByMenu(event);
	if (!handler) return defaultPreventedBeforeHandler;
	let defaultPreventedByHandler = false;
	const preventDefault = event.preventDefault;
	event.preventDefault = () => {
		defaultPreventedByHandler = true;
		preventDefault.call(event);
	};
	try {
		handler(event);
	} finally {
		event.preventDefault = preventDefault;
	}
	return defaultPreventedBeforeHandler || defaultPreventedByHandler;
}
/** Container for menu items. Positioned relative to the trigger at root level; renders in-place as a submenu panel when nested. */
const MenuContent = forwardRef(function MenuContent({ render, className, style, onKeyDown, onBlur, ...elementProps }, forwardedRef) {
	const { core, menu, state, preferredSide, setPositionedSide, stateAttrMap, anchorName, contentId, boundary, container, activeSubMenuId } = useMenuContext();
	const subMenuCtx = useSubMenuContext();
	const isSubmenu = state.isSubmenu;
	const parentMenu = subMenuCtx?.parentMenu ?? null;
	const subMenuId = subMenuCtx?.subMenuId ?? null;
	const isActive = isSubmenu && parentMenu !== null && subMenuId !== null ? parentMenu.activeSubMenuId === subMenuId : false;
	const [menuViewTransition] = useState(() => createMenuViewTransition({
		focusFirstItem() {
			menu.highlightFirstItem({ preventScroll: true });
		},
		restoreFocus(triggerId) {
			if (triggerId) document.getElementById(triggerId)?.focus({ preventScroll: true });
		}
	}));
	const menuViewTransitionState = useSnapshot(menuViewTransition.input);
	const menuViewElementRef = useRef(null);
	const parentContentElementRef = useRef(null);
	const activeSubMenuIdRef = useRef(activeSubMenuId);
	activeSubMenuIdRef.current = activeSubMenuId;
	useLayoutEffect(() => {
		return () => menuViewTransition.destroy();
	}, [menuViewTransition]);
	useLayoutEffect(() => {
		if (!isSubmenu) return;
		menuViewTransition.sync({
			active: isActive,
			direction: parentMenu?.navigationDirection ?? "forward",
			triggerId: parentMenu?.activeSubMenuTriggerId ?? null
		});
	}, [
		isActive,
		isSubmenu,
		parentMenu,
		menuViewTransition
	]);
	const setMenuViewElement = useCallback((element) => {
		menuViewElementRef.current = element;
		menu.setContentElement(element);
		menuViewTransition.setElement(element);
	}, [menu, menuViewTransition]);
	const handleSubMenuKeyDown = useCallback((event) => {
		const defaultPreventedByUser = callKeyDownHandler(onKeyDown, event);
		const keyboardEvent = toUIKeyboardEvent(event);
		const isNavigationKey = isMenuNavigationKey(keyboardEvent);
		menu.contentProps.onKeyDown(keyboardEvent);
		const isBackNavigationKey = event.key === "ArrowLeft" || event.key === "Escape";
		const ownsActiveSubmenu = parentMenu !== null && subMenuId !== null && parentMenu.menu.navigationInput.current.stack[parentMenu.menu.navigationInput.current.stack.length - 1]?.menuId === subMenuId;
		if (isBackNavigationKey && ownsActiveSubmenu && !defaultPreventedByUser) {
			event.preventDefault();
			parentMenu.pop();
		}
		if (isNavigationKey && (!isBackNavigationKey || ownsActiveSubmenu)) event.stopPropagation();
	}, [
		onKeyDown,
		parentMenu,
		subMenuId,
		menu
	]);
	const handleRootMenuKeyDown = useCallback((event) => {
		onKeyDown?.(event);
		const keyboardEvent = toUIKeyboardEvent(event);
		menu.contentProps.onKeyDown(keyboardEvent);
		if (event.key === "Escape") return;
		if (isMenuNavigationKey(keyboardEvent)) event.stopPropagation();
	}, [onKeyDown, menu]);
	const handleRootMenuBlur = useCallback((event) => {
		onBlur?.(event);
		menu.contentProps.onFocusOut(toUIFocusEvent(event));
	}, [onBlur, menu]);
	const internalRef = useRef(null);
	const rootComposedRef = useComposedRefs(forwardedRef, useCallback((element) => {
		if (isSubmenu) return;
		menu.setContentElement(element);
		if (element && supportsAnchorPositioning()) element.style.setProperty("position-anchor", `--${anchorName}`);
	}, [
		isSubmenu,
		menu,
		anchorName
	]), internalRef);
	const menuViewComposedRef = useComposedRefs(forwardedRef, setMenuViewElement);
	const positionOptions = useMemo(() => getRootPositionOptions(preferredSide, state.align), [preferredSide, state.align]);
	const anchorStyle = useMemo(() => {
		if (isSubmenu || !positionOptions || !supportsAnchorPositioning()) return null;
		const { positionAnchor: _, ...rest } = getAnchorPositionStyle(anchorName, positionOptions);
		return rest;
	}, [
		isSubmenu,
		anchorName,
		positionOptions
	]);
	const [position, setPosition] = useState(null);
	useLayoutEffect(() => {
		if (isSubmenu) return;
		if (!state.open) return;
		syncMenuViewRoot(internalRef.current, activeSubMenuId !== null);
		const contentElement = internalRef.current;
		if (!contentElement) return;
		return observeMenuViewContent(contentElement, () => {
			syncMenuViewRoot(contentElement, activeSubMenuId !== null);
		});
	}, [
		isSubmenu,
		state.open,
		activeSubMenuId
	]);
	useLayoutEffect(() => {
		if (!isSubmenu) return;
		const parentContentElement = parentMenu?.menu.contentElement ?? parentContentElementRef.current;
		parentContentElementRef.current = parentContentElement;
		syncMenuViewTransition(parentContentElement, menuViewElementRef.current, menuViewTransitionState);
	});
	useLayoutEffect(() => {
		if (isSubmenu) return;
		if (!state.open) {
			setPosition(null);
			return;
		}
		if (!positionOptions) {
			syncMenuViewRoot(internalRef.current, activeSubMenuIdRef.current !== null);
			return;
		}
		const rootPositionOptions = positionOptions;
		function measure() {
			const triggerElement = menu.triggerElement;
			const contentElement = internalRef.current;
			if (!triggerElement || !contentElement) return;
			const triggerRect = triggerElement.getBoundingClientRect();
			const root = contentElement.getRootNode();
			const boundaryElement = resolvePositioningBoundary(boundary, {
				container,
				root
			});
			const anchorSupported = supportsAnchorPositioning();
			let contentRect = getPopupPositionRect(contentElement, rootPositionOptions.side);
			const boundaryRect = getPositioningBoundaryRect(boundaryElement);
			const offsets = resolveOffsets(contentElement);
			let side = getPositionedSide(triggerRect, contentRect, boundaryRect, rootPositionOptions, offsets);
			let nextStyle = getAnchorPositionStyle(anchorName, {
				...rootPositionOptions,
				side
			}, triggerRect, anchorSupported ? void 0 : contentRect, boundaryRect, offsets);
			const availableWidth = nextStyle[PopoverCSSVars.availableWidth];
			syncMenuViewRoot(contentElement, activeSubMenuIdRef.current !== null, availableWidth ? { availableWidth } : void 0);
			if (!anchorSupported) {
				contentRect = getPopupPositionRect(contentElement, rootPositionOptions.side);
				side = getPositionedSide(triggerRect, contentRect, boundaryRect, rootPositionOptions, offsets);
				nextStyle = getAnchorPositionStyle(anchorName, {
					...rootPositionOptions,
					side
				}, triggerRect, contentRect, boundaryRect, offsets);
			}
			const { positionAnchor: _, ...rootStyle } = nextStyle;
			setPosition(rootStyle);
			setPositionedSide(side);
		}
		measure();
		const triggerElement = menu.triggerElement;
		const contentElement = internalRef.current;
		const boundaryElement = contentElement ? resolvePositioningBoundary(boundary, {
			container,
			root: contentElement.getRootNode()
		}) : null;
		let animationFrameId = 0;
		function reposition(event) {
			if (event && isEventWithinElement(event, internalRef.current)) return;
			cancelAnimationFrame(animationFrameId);
			animationFrameId = requestAnimationFrame(measure);
		}
		reposition();
		const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(() => reposition()) : null;
		if (triggerElement && resizeObserver) resizeObserver.observe(triggerElement);
		if (contentElement && resizeObserver) resizeObserver.observe(contentElement);
		if (boundaryElement && resizeObserver) resizeObserver.observe(boundaryElement);
		window.addEventListener("scroll", reposition, {
			capture: true,
			passive: true
		});
		window.addEventListener("resize", reposition);
		return () => {
			cancelAnimationFrame(animationFrameId);
			resizeObserver?.disconnect();
			window.removeEventListener("scroll", reposition, true);
			window.removeEventListener("resize", reposition);
		};
	}, [
		isSubmenu,
		state.open,
		anchorName,
		positionOptions,
		menu,
		boundary,
		container,
		setPositionedSide
	]);
	if (isSubmenu) {
		if (menuViewTransitionState.phase === "hidden") return null;
		const subMenuContent = renderElement("div", {
			render,
			className,
			style
		}, {
			state,
			ref: menuViewComposedRef,
			props: [{
				...getMenuViewTransitionAttrs(menuViewTransitionState),
				role: "menu",
				tabIndex: -1,
				"data-submenu": "",
				onKeyDownCapture: preventMenuKeyDefault,
				onKeyDown: handleSubMenuKeyDown,
				onBlur
			}, elementProps]
		});
		const parentViewportElement = getMenuViewportElement(parentMenu?.menu.contentElement ?? parentContentElementRef.current);
		return parentViewportElement ? createPortal(subMenuContent, parentViewportElement) : subMenuContent;
	}
	if (!state.open) return null;
	return renderElement("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: rootComposedRef,
		props: [
			{
				id: contentId,
				style: position ?? anchorStyle ?? POPOVER_RESET,
				...core.getContentAttrs(state),
				...getMenuViewportAttrs()
			},
			{
				onKeyDownCapture: preventMenuKeyDefault,
				onKeyDown: handleRootMenuKeyDown,
				onBlur: handleRootMenuBlur
			},
			elementProps
		]
	});
});
//#endregion
export { MenuContent };

//# sourceMappingURL=menu-content.js.map
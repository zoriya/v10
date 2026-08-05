"use client";
import { useComposedRefs } from "../../utils/use-composed-refs.js";
import { renderElement } from "../../utils/use-render.js";
import { usePopoverContext } from "./context.js";
import { getAnchorPositionStyle, getPopupPositionRect, getPositionedSide, getPositioningBoundaryRect, isEventWithinElement, resolveOffsets, resolvePositioningBoundary } from "@videojs/core/dom";
import { forwardRef, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { supportsAnchorPositioning } from "@videojs/utils/dom";
//#region src/ui/popover/popover-popup.tsx
const POPOVER_RESET = {
	position: "fixed",
	inset: "auto",
	margin: 0
};
/** Container for the popover content. Positioned relative to the trigger using CSS anchor positioning with a JavaScript fallback. */
const PopoverPopup = forwardRef(function PopoverPopup({ render, className, style, ...elementProps }, forwardedRef) {
	const { core, popover, state, preferredSide, setPositionedSide, stateAttrMap, anchorName, popupId, boundary, container } = usePopoverContext();
	const internalRef = useRef(null);
	const composedRef = useComposedRefs(forwardedRef, useCallback((el) => {
		popover.setPopupElement(el);
		if (el && supportsAnchorPositioning()) el.style.setProperty("position-anchor", `--${anchorName}`);
	}, [popover, anchorName]), internalRef);
	const posOpts = useMemo(() => ({
		side: preferredSide,
		align: state.align
	}), [preferredSide, state.align]);
	const anchorStyle = useMemo(() => {
		if (!supportsAnchorPositioning()) return null;
		const { positionAnchor: _, ...rest } = getAnchorPositionStyle(anchorName, posOpts);
		return rest;
	}, [anchorName, posOpts]);
	const [position, setPosition] = useState(null);
	useLayoutEffect(() => {
		if (!state.open) {
			setPosition(null);
			return;
		}
		function measure() {
			const triggerEl = popover.triggerElement;
			const popupEl = internalRef.current;
			if (!triggerEl || !popupEl) return;
			const triggerRect = triggerEl.getBoundingClientRect();
			const root = popupEl.getRootNode();
			const boundaryElement = resolvePositioningBoundary(boundary, {
				container,
				root
			});
			const popupRect = getPopupPositionRect(popupEl, posOpts.side);
			const boundaryRect = getPositioningBoundaryRect(boundaryElement);
			const offsets = resolveOffsets(popupEl);
			const side = getPositionedSide(triggerRect, popupRect, boundaryRect, posOpts, offsets);
			const { positionAnchor: _, ...nextStyle } = getAnchorPositionStyle(anchorName, {
				...posOpts,
				side
			}, triggerRect, supportsAnchorPositioning() ? void 0 : popupRect, boundaryRect, offsets);
			setPosition(nextStyle);
			setPositionedSide(side);
		}
		measure();
		const triggerEl = popover.triggerElement;
		const popupEl = internalRef.current;
		const boundaryElement = popupEl ? resolvePositioningBoundary(boundary, {
			container,
			root: popupEl.getRootNode()
		}) : null;
		let rafId = 0;
		function reposition(event) {
			if (event && isEventWithinElement(event, internalRef.current)) return;
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(measure);
		}
		reposition();
		const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(() => {
			reposition();
		}) : null;
		if (triggerEl && resizeObserver) resizeObserver.observe(triggerEl);
		if (popupEl && resizeObserver) resizeObserver.observe(popupEl);
		if (boundaryElement && resizeObserver) resizeObserver.observe(boundaryElement);
		window.addEventListener("scroll", reposition, {
			capture: true,
			passive: true
		});
		window.addEventListener("resize", reposition);
		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver?.disconnect();
			window.removeEventListener("scroll", reposition, true);
			window.removeEventListener("resize", reposition);
		};
	}, [
		state.open,
		anchorName,
		posOpts,
		popover,
		boundary,
		container,
		setPositionedSide
	]);
	const positioningStyle = position ?? anchorStyle ?? POPOVER_RESET;
	if (!state.open) return null;
	const { onFocusOut, ...restPopupProps } = popover.popupProps;
	return renderElement("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: composedRef,
		props: [
			{
				id: popupId,
				style: positioningStyle,
				...core.getPopupAttrs(state)
			},
			{
				...restPopupProps,
				onBlur: onFocusOut
			},
			elementProps
		]
	});
});
//#endregion
export { PopoverPopup };

//# sourceMappingURL=popover-popup.js.map
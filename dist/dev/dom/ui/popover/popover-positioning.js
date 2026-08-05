import { PopoverCSSVars } from "../../../core/ui/popover/popover-css-vars.js";
import { createDOMRect } from "../../utils/layout.js";
import { getPositionedSide, resolveCSSLength, supportsAnchorPositioning } from "@videojs/utils/dom";
import { clamp } from "@videojs/utils/number";
//#region src/dom/ui/popover/popover-positioning.ts
const ZERO_OFFSETS = {
	sideOffset: 0,
	alignOffset: 0,
	boundaryOffset: 0
};
const OPPOSITE_SIDE = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function formatPixels(value) {
	return `${clamp(value, 0, Infinity)}px`;
}
function shiftCrossAxis(value, boundaryStart, boundaryEnd, size) {
	const max = boundaryEnd - size;
	return max < boundaryStart ? boundaryStart : clamp(value, boundaryStart, max);
}
function getAnchorCrossAxisShift(start, end, size, boundaryStart, boundaryEnd, align, alignOffset, boundaryOffset) {
	const base = align === "start" ? start + alignOffset : align === "end" ? end + alignOffset : start + size / 2 + alignOffset;
	const desiredTranslate = align === "start" ? "0px" : align === "end" ? "-100%" : "-50%";
	return {
		base: `${base}px`,
		translate: `clamp(${boundaryStart + boundaryOffset - base}px, ${desiredTranslate}, calc(${boundaryEnd - boundaryOffset - base}px - 100%))`
	};
}
/**
* Get positioning styles for the popup element.
*
* When the browser supports CSS Anchor Positioning, returns native CSS properties
* that reference the provided CSS var names for side/align offsets — no JS offset
* values needed.
*
* When rects are provided and anchor positioning is unsupported, falls back to
* manual JS-computed positioning. The caller must resolve offset CSS vars via
* `getComputedStyle` and pass them as `offsets`.
*
* Returns camelCase keys for standard CSS properties and `--*` keys for
* custom properties — compatible with both React's `style` prop and
* `applyStyles()` from `@videojs/utils/dom`.
*/
function getAnchorPositionStyle(anchorName, opts, triggerRect, popupRect, boundaryRect, offsets, cssVars = PopoverCSSVars) {
	if (supportsAnchorPositioning()) return {
		...getAnchorPositionCSS(anchorName, opts, cssVars, triggerRect, boundaryRect, offsets),
		...triggerRect && boundaryRect ? getPositioningCSSVars(triggerRect, boundaryRect, opts, offsets, cssVars) : {}
	};
	if (triggerRect && popupRect) {
		const resolved = offsets ?? ZERO_OFFSETS;
		return {
			position: "fixed",
			margin: "0",
			...getManualPositionStyle(triggerRect, popupRect, opts, resolved, boundaryRect),
			...boundaryRect ? getPositioningCSSVars(triggerRect, boundaryRect, opts, resolved, cssVars) : {}
		};
	}
	return {};
}
/** Generate style to set on the trigger for CSS Anchor Positioning. */
function getAnchorNameStyle(anchorName) {
	if (!supportsAnchorPositioning()) return {};
	return { anchorName: `--${anchorName}` };
}
function getAnchorPositionCSS(anchorName, opts, cssVars = PopoverCSSVars, triggerRect, boundaryRect, offsets = ZERO_OFFSETS) {
	const SIDE_OFFSET_VAR = `var(${cssVars.sideOffset}, 0px)`;
	const ALIGN_OFFSET_VAR = `var(${cssVars.alignOffset}, 0px)`;
	const { side, align } = opts;
	const boundaryOffset = offsets.boundaryOffset ?? 0;
	const style = {
		positionAnchor: `--${anchorName}`,
		position: "fixed",
		inset: "auto",
		margin: "0",
		justifySelf: "normal",
		alignSelf: "normal",
		marginInlineStart: "0",
		marginBlockStart: "0",
		translate: "none"
	};
	const insetProp = OPPOSITE_SIDE[side];
	if (side === "top" || side === "bottom") {
		style[insetProp] = `calc(anchor(${side}) + ${SIDE_OFFSET_VAR})`;
		if (triggerRect && boundaryRect) {
			const { base, translate } = getAnchorCrossAxisShift(triggerRect.left, triggerRect.right, triggerRect.width, boundaryRect.left, boundaryRect.right, align, offsets.alignOffset, boundaryOffset);
			style.left = base;
			style.translate = `${translate} 0`;
			return style;
		}
		if (align === "start") style.left = `calc(anchor(left) + ${ALIGN_OFFSET_VAR})`;
		else if (align === "end") style.right = `calc(anchor(right) + ${ALIGN_OFFSET_VAR})`;
		else {
			style.justifySelf = "anchor-center";
			style.marginInlineStart = ALIGN_OFFSET_VAR;
		}
	} else {
		style[insetProp] = `calc(anchor(${side}) + ${SIDE_OFFSET_VAR})`;
		if (triggerRect && boundaryRect) {
			const { base, translate } = getAnchorCrossAxisShift(triggerRect.top, triggerRect.bottom, triggerRect.height, boundaryRect.top, boundaryRect.bottom, align, offsets.alignOffset, boundaryOffset);
			style.top = base;
			style.translate = `0 ${translate}`;
			return style;
		}
		if (align === "start") style.top = `calc(anchor(top) + ${ALIGN_OFFSET_VAR})`;
		else if (align === "end") style.bottom = `calc(anchor(bottom) + ${ALIGN_OFFSET_VAR})`;
		else {
			style.alignSelf = "anchor-center";
			style.marginBlockStart = ALIGN_OFFSET_VAR;
		}
	}
	return style;
}
/**
* Compute CSS variables for sizing constraints relative to the anchor/boundary.
*
* Accepts a `cssVars` map so the same logic works for both popover
* (`--media-popover-*`) and tooltip (`--media-tooltip-*`) namespaces.
*/
function getPositioningCSSVars(triggerRect, boundaryRect, opts, offsets = ZERO_OFFSETS, cssVars = PopoverCSSVars) {
	const vars = {};
	const { side } = opts;
	const boundaryOffset = offsets.boundaryOffset ?? 0;
	const boundaryStartX = boundaryRect.left + boundaryOffset;
	const boundaryEndX = boundaryRect.right - boundaryOffset;
	const boundaryStartY = boundaryRect.top + boundaryOffset;
	const boundaryEndY = boundaryRect.bottom - boundaryOffset;
	vars[cssVars.anchorWidth] = `${triggerRect.width}px`;
	vars[cssVars.anchorHeight] = `${triggerRect.height}px`;
	if (side === "top" || side === "bottom") {
		const sideSpace = side === "top" ? triggerRect.top - boundaryStartY : boundaryEndY - triggerRect.bottom;
		vars[cssVars.availableHeight] = formatPixels(sideSpace - offsets.sideOffset);
		vars[cssVars.availableWidth] = formatPixels(boundaryEndX - boundaryStartX);
	} else {
		const sideSpace = side === "left" ? triggerRect.left - boundaryStartX : boundaryEndX - triggerRect.right;
		vars[cssVars.availableWidth] = formatPixels(sideSpace - offsets.sideOffset);
		vars[cssVars.availableHeight] = formatPixels(boundaryEndY - boundaryStartY);
	}
	return vars;
}
/** @deprecated Use `getPositioningCSSVars` instead. */
function getPopoverCSSVars(triggerRect, boundaryRect, side) {
	const vars = {
		[PopoverCSSVars.anchorWidth]: `${triggerRect.width}px`,
		[PopoverCSSVars.anchorHeight]: `${triggerRect.height}px`
	};
	if (side === "top" || side === "bottom") {
		vars[PopoverCSSVars.availableHeight] = side === "top" ? `${triggerRect.top - boundaryRect.top}px` : `${boundaryRect.bottom - triggerRect.bottom}px`;
		vars[PopoverCSSVars.availableWidth] = `${boundaryRect.width}px`;
	} else {
		vars[PopoverCSSVars.availableWidth] = side === "left" ? `${triggerRect.left - boundaryRect.left}px` : `${boundaryRect.right - triggerRect.right}px`;
		vars[PopoverCSSVars.availableHeight] = `${boundaryRect.height}px`;
	}
	return vars;
}
/**
* Compute manual positioning when CSS Anchor Positioning is not supported.
*
* Returns inline `top`/`left` styles in **viewport coordinates** for use
* with `position: fixed` (the popup is in the top layer). All rects from
* `getBoundingClientRect()` are already viewport-relative.
*
* Offsets are resolved by the caller from CSS custom properties via
* `getComputedStyle()` and passed as `offsets`.
*/
function getManualPositionStyle(triggerRect, popupRect, opts, offsets = {
	sideOffset: 0,
	alignOffset: 0
}, boundaryRect) {
	const { side, align } = opts;
	const { sideOffset, alignOffset } = offsets;
	let top = 0;
	let bottom;
	let left = 0;
	let right;
	if (side === "top") bottom = `calc(100% - ${triggerRect.top}px + ${sideOffset}px)`;
	else if (side === "bottom") top = triggerRect.bottom + sideOffset;
	else if (side === "left") right = `calc(100% - ${triggerRect.left}px + ${sideOffset}px)`;
	else left = triggerRect.right + sideOffset;
	if (side === "top" || side === "bottom") if (align === "start") left = triggerRect.left + alignOffset;
	else if (align === "end") left = triggerRect.right - popupRect.width + alignOffset;
	else left = triggerRect.left + (triggerRect.width - popupRect.width) / 2 + alignOffset;
	else if (align === "start") top = triggerRect.top + alignOffset;
	else if (align === "end") top = triggerRect.bottom - popupRect.height + alignOffset;
	else top = triggerRect.top + (triggerRect.height - popupRect.height) / 2 + alignOffset;
	if (boundaryRect) {
		const boundaryOffset = offsets.boundaryOffset ?? 0;
		if (side === "top" || side === "bottom") left = shiftCrossAxis(left, boundaryRect.left + boundaryOffset, boundaryRect.right - boundaryOffset, popupRect.width);
		else top = shiftCrossAxis(top, boundaryRect.top + boundaryOffset, boundaryRect.bottom - boundaryOffset, popupRect.height);
	}
	return {
		top: side === "top" ? "auto" : `${top}px`,
		bottom: bottom ?? "auto",
		left: side === "left" ? "auto" : `${left}px`,
		right: right ?? "auto"
	};
}
/**
* Read positioning offset CSS custom properties from the
* popup element's computed style, returning numeric pixel values.
*/
function resolveOffsets(el, cssVars = PopoverCSSVars) {
	const computed = getComputedStyle(el);
	return {
		sideOffset: resolveCSSLength(el, computed.getPropertyValue(cssVars.sideOffset)),
		alignOffset: resolveCSSLength(el, computed.getPropertyValue(cssVars.alignOffset)),
		boundaryOffset: resolveCSSLength(el, computed.getPropertyValue(cssVars.boundaryOffset))
	};
}
/**
* Measure the popup's layout box for positioning.
*
* `getBoundingClientRect()` includes active transforms, which causes the
* fallback position to drift while opening/closing animations scale the popup.
* Using layout dimensions preserves the untransformed size, while the
* side-axis scroll dimension includes content clipped by size constraints.
*/
function getPopupPositionRect(el, side) {
	const rect = el.getBoundingClientRect();
	const width = el.offsetWidth || rect.width;
	const height = el.offsetHeight || rect.height;
	return createDOMRect(rect.left, rect.top, side === "left" || side === "right" ? Math.max(width, el.scrollWidth) : width, side === "top" || side === "bottom" ? Math.max(height, el.scrollHeight) : height);
}
//#endregion
export { getAnchorNameStyle, getAnchorPositionStyle, getManualPositionStyle, getPopoverCSSVars, getPopupPositionRect, getPositionedSide, getPositioningCSSVars, resolveOffsets };

//# sourceMappingURL=popover-positioning.js.map
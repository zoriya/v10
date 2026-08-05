"use client";
import { renderElement } from "../../utils/use-render.js";
import { useVolumeIndicatorContext } from "./context.js";
import { forwardRef } from "react";
import { isFunction } from "@videojs/utils/predicate";
import { VolumeIndicatorCSSVars } from "@videojs/core";
//#region src/ui/volume-indicator/volume-indicator-fill.tsx
const VolumeIndicatorFill = forwardRef(function VolumeIndicatorFill(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useVolumeIndicatorContext();
	return renderElement("div", {
		render,
		className,
		style: getVolumeIndicatorFillStyle(state, style)
	}, {
		state,
		ref: forwardedRef,
		props: [elementProps]
	});
});
function getVolumeIndicatorFillStyle(state, style) {
	const vars = state.fill ? { [VolumeIndicatorCSSVars.fill]: state.fill } : void 0;
	if (!vars) return style;
	if (isFunction(style)) return (nextState) => ({
		...style(nextState),
		...vars
	});
	return {
		...style,
		...vars
	};
}
//#endregion
export { VolumeIndicatorFill };

//# sourceMappingURL=volume-indicator-fill.js.map
"use client";
import { renderElement } from "../../utils/use-render.js";
import { useVolumeIndicatorContext } from "./context.js";
import { forwardRef } from "react";
import { getVolumeIndicatorDisplayValue } from "@videojs/core";
//#region src/ui/volume-indicator/volume-indicator-value.tsx
const VolumeIndicatorValue = forwardRef(function VolumeIndicatorValue(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useVolumeIndicatorContext();
	return renderElement("span", {
		render,
		className,
		style
	}, {
		state,
		ref: forwardedRef,
		props: [{ children: getVolumeIndicatorDisplayValue(state) }, elementProps]
	});
});
//#endregion
export { VolumeIndicatorValue };

//# sourceMappingURL=volume-indicator-value.js.map
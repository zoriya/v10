"use client";
import { renderElement } from "../../utils/use-render.js";
import { useSeekIndicatorContext } from "./context.js";
import { forwardRef } from "react";
import { getSeekIndicatorDisplayValue } from "@videojs/core";
//#region src/ui/seek-indicator/seek-indicator-value.tsx
const SeekIndicatorValue = forwardRef(function SeekIndicatorValue(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useSeekIndicatorContext();
	return renderElement("div", {
		render,
		className,
		style
	}, {
		state,
		ref: forwardedRef,
		props: [{ children: getSeekIndicatorDisplayValue(state) }, elementProps]
	});
});
//#endregion
export { SeekIndicatorValue };

//# sourceMappingURL=seek-indicator-value.js.map
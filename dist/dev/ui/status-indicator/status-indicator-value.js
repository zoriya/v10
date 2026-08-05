"use client";
import { renderElement } from "../../utils/use-render.js";
import { useStatusIndicatorContext } from "./context.js";
import { forwardRef } from "react";
import { getStatusIndicatorDisplayValue } from "@videojs/core";
//#region src/ui/status-indicator/status-indicator-value.tsx
const StatusIndicatorValue = forwardRef(function StatusIndicatorValue(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useStatusIndicatorContext();
	return renderElement("span", {
		render,
		className,
		style
	}, {
		state,
		ref: forwardedRef,
		props: [{ children: getStatusIndicatorDisplayValue(state) }, elementProps]
	});
});
//#endregion
export { StatusIndicatorValue };

//# sourceMappingURL=status-indicator-value.js.map
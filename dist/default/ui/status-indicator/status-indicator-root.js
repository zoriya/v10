"use client";
import { useTranslator } from "../../i18n/context.js";
import { renderElement } from "../../utils/use-render.js";
import { useInputIndicatorRoot } from "../input-indicators/use-input-indicator-root.js";
import { StatusIndicatorProvider } from "./context.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { StatusIndicatorCore, StatusIndicatorDataAttrs, createInputIndicatorLabels } from "@videojs/core";
//#region src/ui/status-indicator/status-indicator-root.tsx
const StatusIndicatorRoot = forwardRef(function StatusIndicatorRoot(componentProps, forwardedRef) {
	const { render, className, style, actions, closeDelay, ...elementProps } = componentProps;
	const { elementRef, present, state } = useInputIndicatorRoot(() => new StatusIndicatorCore(), {
		actions,
		closeDelay,
		labels: createInputIndicatorLabels(useTranslator())
	});
	if (!present) return null;
	return /* @__PURE__ */ jsx(StatusIndicatorProvider, {
		value: { state },
		children: renderElement("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: StatusIndicatorDataAttrs,
			ref: [forwardedRef, elementRef],
			props: [elementProps]
		})
	});
});
//#endregion
export { StatusIndicatorRoot };

//# sourceMappingURL=status-indicator-root.js.map
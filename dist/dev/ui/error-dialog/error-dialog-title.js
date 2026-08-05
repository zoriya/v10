"use client";
import { useTranslator } from "../../i18n/context.js";
import { renderElement } from "../../utils/use-render.js";
import { useAlertDialogContext } from "../alert-dialog/context.js";
import { translateText } from "@videojs/core/i18n";
import { forwardRef } from "react";
import { getErrorDialogTitleText } from "@videojs/core";
//#region src/ui/error-dialog/error-dialog-title.tsx
const ErrorDialogTitle = forwardRef(function ErrorDialogTitle({ render, className, style, children, ...elementProps }, forwardedRef) {
	const t = useTranslator();
	const { state, stateAttrMap } = useAlertDialogContext();
	const content = children ?? translateText(getErrorDialogTitleText(), t);
	return renderElement("h2", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: forwardedRef,
		props: [{
			id: state.titleId,
			children: content
		}, elementProps]
	});
});
//#endregion
export { ErrorDialogTitle };

//# sourceMappingURL=error-dialog-title.js.map
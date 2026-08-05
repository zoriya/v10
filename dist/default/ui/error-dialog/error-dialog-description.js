"use client";
import { useTranslator } from "../../i18n/context.js";
import { renderElement } from "../../utils/use-render.js";
import { useAlertDialogContext } from "../alert-dialog/context.js";
import { useErrorDialogContext } from "./context.js";
import { translateText } from "@videojs/core/i18n";
import { forwardRef } from "react";
import { resolveErrorDialogDescription } from "@videojs/core";
//#region src/ui/error-dialog/error-dialog-description.tsx
const ErrorDialogDescription = forwardRef(function ErrorDialogDescription({ render, className, style, children, ...elementProps }, forwardedRef) {
	const t = useTranslator();
	const { state, stateAttrMap } = useAlertDialogContext();
	const { lastError } = useErrorDialogContext();
	const description = resolveErrorDialogDescription(lastError);
	const content = children ?? translateText(description, t);
	return renderElement("p", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: forwardedRef,
		props: [{
			id: state.descriptionId,
			children: content
		}, elementProps]
	});
});
//#endregion
export { ErrorDialogDescription };

//# sourceMappingURL=error-dialog-description.js.map
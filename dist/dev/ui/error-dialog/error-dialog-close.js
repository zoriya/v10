"use client";
import { useTranslator } from "../../i18n/context.js";
import { renderElement } from "../../utils/use-render.js";
import { useAlertDialogContext } from "../alert-dialog/context.js";
import { translateText } from "@videojs/core/i18n";
import { forwardRef, useCallback } from "react";
import { getErrorDialogDismissText } from "@videojs/core";
//#region src/ui/error-dialog/error-dialog-close.tsx
const ErrorDialogClose = forwardRef(function ErrorDialogClose({ render, className, style, disabled, children, ...elementProps }, forwardedRef) {
	const t = useTranslator();
	const { dialog, state, stateAttrMap } = useAlertDialogContext();
	const handleClick = useCallback(() => {
		if (disabled) return;
		dialog.close();
	}, [dialog, disabled]);
	const content = children ?? translateText(getErrorDialogDismissText(), t);
	return renderElement("button", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: forwardedRef,
		props: [{
			type: "button",
			disabled,
			onClick: handleClick,
			children: content
		}, elementProps]
	});
});
//#endregion
export { ErrorDialogClose };

//# sourceMappingURL=error-dialog-close.js.map
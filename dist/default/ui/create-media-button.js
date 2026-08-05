"use client";
import { useTranslator } from "../i18n/context.js";
import { usePlayer } from "../player/context.js";
import { renderElement } from "../utils/use-render.js";
import { useButton } from "./hooks/use-button.js";
import { useHotkeyShortcut } from "./hotkey/use-hotkey-shortcut.js";
import { useOptionalMenuTriggerChildContext } from "./menu/context.js";
import { useOptionalTooltipContext } from "./tooltip/context.js";
import "@videojs/core/dom";
import { isText, translateText } from "@videojs/core/i18n";
import { forwardRef, useLayoutEffect, useState } from "react";
import { isUndefined } from "@videojs/utils/predicate";
//#region src/ui/create-media-button.tsx
function getLabelParams(core, state) {
	return core.getLabelParams?.(state);
}
/** Creates a media button React component from a core class and config. */
function createMediaButton(config) {
	const { displayName, core: CoreClass, stateAttrMap, selector, action, hotkeyAction, hotkeyValue, tooltipLabel, isSupported } = config;
	const corePropKeys = new Set(Object.keys(CoreClass.defaultProps));
	const Component = forwardRef(function MediaButton(componentProps, forwardedRef) {
		const { render, className, style, ...rest } = componentProps;
		const coreProps = {};
		const elementProps = {};
		for (const key of Object.keys(rest)) if (corePropKeys.has(key)) coreProps[key] = rest[key];
		else elementProps[key] = rest[key];
		const tooltipCtx = useOptionalTooltipContext();
		const menuTriggerChild = useOptionalMenuTriggerChildContext();
		const setTooltipContent = tooltipCtx?.setContent;
		const feature = usePlayer(selector);
		const shortcut = useHotkeyShortcut(hotkeyAction, hotkeyValue?.(coreProps));
		const translator = useTranslator();
		const [core] = useState(() => new CoreClass());
		if (corePropKeys.has("menuTrigger") && isUndefined(coreProps.menuTrigger)) coreProps.menuTrigger = menuTriggerChild;
		core.setProps(coreProps);
		const { getButtonProps, buttonRef } = useButton({
			displayName,
			onActivate: () => {
				Promise.resolve(action(core, feature)).catch((error) => {});
			},
			isDisabled: () => !!coreProps.disabled || !feature
		});
		if (feature) core.setMedia(feature);
		const state = feature ? core.getState() : null;
		const supported = state ? isSupported?.(state) ?? true : false;
		const label = state && supported ? translateText(core.getLabel(state), translator, getLabelParams(core, state)) : void 0;
		const tooltipText = state && supported ? tooltipLabel?.(core, state) ?? label : void 0;
		useLayoutEffect(() => {
			if (!setTooltipContent) return;
			setTooltipContent(tooltipText ? {
				label: tooltipText,
				shortcut: shortcut.shortcut
			} : void 0);
			return () => setTooltipContent(void 0);
		}, [
			setTooltipContent,
			tooltipText,
			shortcut.shortcut
		]);
		if (!feature || !state) return null;
		if (!supported) return null;
		const attrs = core.getAttrs(state);
		const ariaLabel = attrs["aria-label"];
		const resolvedAttrs = {
			...attrs,
			...isText(ariaLabel) ? { "aria-label": translateText(ariaLabel, translator, getLabelParams(core, state)) } : void 0,
			"aria-keyshortcuts": shortcut.aria
		};
		return renderElement("button", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap,
			ref: [forwardedRef, buttonRef],
			props: [
				getButtonProps(),
				resolvedAttrs,
				elementProps
			]
		});
	});
	Component.displayName = displayName;
	return Component;
}
//#endregion
export { createMediaButton };

//# sourceMappingURL=create-media-button.js.map
"use client";
import { useLocale, useTranslator } from "../../i18n/context.js";
import { useContainer, usePlayer } from "../../player/context.js";
import { useDestroy } from "../../utils/use-destroy.js";
import { renderElement } from "../../utils/use-render.js";
import { isSliderFocused, subscribeToStatusAnnouncer } from "@videojs/core/dom";
import { forwardRef, useEffect, useState, useSyncExternalStore } from "react";
import { StatusAnnouncerCore, createStatusAnnouncerLabels } from "@videojs/core";
//#region src/ui/status-announcer/status-announcer.tsx
const StatusAnnouncer = forwardRef(function StatusAnnouncer(componentProps, forwardedRef) {
	const { render, className, style, closeDelay, labels, ...elementProps } = componentProps;
	const translator = useTranslator();
	const locale = useLocale();
	const [core] = useState(() => new StatusAnnouncerCore());
	const store = usePlayer();
	const container = useContainer();
	useDestroy(core);
	core.setProps({
		closeDelay,
		labels: {
			...createStatusAnnouncerLabels(translator, locale),
			...labels
		},
		shouldAnnounceSeek: () => !container || !isSliderFocused(container),
		shouldAnnounceVolume: () => !container || !isSliderFocused(container)
	});
	useEffect(() => subscribeToStatusAnnouncer(store, core), [core, store]);
	const state = useSyncExternalStore((callback) => core.state.subscribe(callback), () => core.state.current, () => core.state.current);
	return renderElement("div", {
		render,
		className,
		style
	}, {
		state,
		ref: forwardedRef,
		props: [elementProps, {
			role: "status",
			children: state.label ?? ""
		}]
	});
});
//#endregion
export { StatusAnnouncer };

//# sourceMappingURL=status-announcer.js.map
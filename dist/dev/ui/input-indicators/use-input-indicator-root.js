"use client";
import { useDestroy } from "../../utils/use-destroy.js";
import { useIndicatorVisibility } from "./use-indicator-visibility.js";
import { useInputActionSubscription } from "./use-input-action-subscription.js";
import { useRenderedIndicatorState } from "./use-rendered-indicator-state.js";
import { useState, useSyncExternalStore } from "react";
//#region src/ui/input-indicators/use-input-indicator-root.ts
function useInputIndicatorRoot(createCore, props, options) {
	const [core] = useState(createCore);
	useDestroy(core);
	core.setProps(props);
	const showIndicator = useIndicatorVisibility(() => core.close());
	useInputActionSubscription((event, snapshot) => {
		if (core.processEvent(event, snapshot)) showIndicator();
	});
	return useRenderedIndicatorState(useSyncExternalStore((callback) => core.state.subscribe(callback), () => core.state.current, () => core.state.current), options);
}
//#endregion
export { useInputIndicatorRoot };

//# sourceMappingURL=use-input-indicator-root.js.map
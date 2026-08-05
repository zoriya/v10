"use client";
import { useContainer } from "../../player/context.js";
import { useLatestRef } from "../../utils/use-latest-ref.js";
import { createHotkey } from "@videojs/core/dom";
import { useEffect } from "react";
//#region src/ui/hotkey/use-hotkey.ts
function useHotkey(options) {
	const { keys, target = "player", repeatable = true, disabled = false } = options;
	const container = useContainer();
	const onActivateRef = useLatestRef(options.onActivate);
	useEffect(() => {
		if (!container || !keys || disabled) return;
		return createHotkey(container, {
			keys,
			target,
			repeatable,
			disabled,
			onActivate: (event, key) => onActivateRef.current(event, key)
		});
	}, [
		container,
		keys,
		target,
		repeatable,
		disabled
	]);
}
//#endregion
export { useHotkey };

//# sourceMappingURL=use-hotkey.js.map
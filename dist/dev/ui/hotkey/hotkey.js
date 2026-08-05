"use client";
import { useContainer, usePlayer } from "../../player/context.js";
import { createHotkey, isHotkeyToggleAction, resolveHotkeyAction } from "@videojs/core/dom";
import { useEffect } from "react";
//#region src/ui/hotkey/hotkey.tsx
function Hotkey({ keys, action, value, disabled, target }) {
	const store = usePlayer();
	const container = useContainer();
	useEffect(() => {
		if (!container || !keys || !action || disabled) return;
		const resolver = resolveHotkeyAction(action);
		if (!resolver) return;
		return createHotkey(container, {
			keys,
			action,
			value,
			target,
			disabled,
			repeatable: !isHotkeyToggleAction(action),
			onActivate: (_event, key) => {
				resolver({
					store,
					key,
					value
				});
			}
		});
	}, [
		container,
		store,
		keys,
		action,
		value,
		disabled,
		target
	]);
	return null;
}
/** @deprecated Use `Hotkey` instead. */
const MediaHotkey = Hotkey;
//#endregion
export { Hotkey, MediaHotkey };

//# sourceMappingURL=hotkey.js.map
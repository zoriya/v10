"use client";
import { useContainer } from "../../player/context.js";
import { getHotkeyCoordinator } from "@videojs/core/dom";
import { useEffect, useState } from "react";
//#region src/ui/hotkey/use-hotkey-shortcut.ts
function useHotkeyShortcut(action, value) {
	const container = useContainer();
	const [shortcut, setShortcut] = useState({});
	useEffect(() => {
		if (!container || !action) {
			setShortcut({});
			return;
		}
		const coordinator = getHotkeyCoordinator(container);
		const update = () => setShortcut(coordinator.getShortcut(action, value));
		update();
		return coordinator.subscribeShortcutChanges(update);
	}, [
		container,
		action,
		value
	]);
	return shortcut;
}
//#endregion
export { useHotkeyShortcut };

//# sourceMappingURL=use-hotkey-shortcut.js.map
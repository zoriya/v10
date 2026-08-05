import { isFunction } from "@videojs/utils/predicate";
//#region src/dom/presentation/orientation.ts
function createScreenOrientationLock({ type = "landscape" } = {}) {
	let locked = false;
	let desired = false;
	const releaseOrientation = () => {
		const orientation = globalThis.screen?.orientation;
		const unlock = orientation?.unlock;
		if (!isFunction(unlock)) return;
		try {
			unlock.call(orientation);
		} catch {}
	};
	return {
		async lock() {
			if (locked) return;
			desired = true;
			const orientation = globalThis.screen?.orientation;
			const lock = orientation?.lock;
			if (!isFunction(lock)) return;
			try {
				await lock.call(orientation, type);
			} catch {
				return;
			}
			if (desired) locked = true;
			else releaseOrientation();
		},
		unlock() {
			desired = false;
			if (!locked) return;
			locked = false;
			releaseOrientation();
		}
	};
}
//#endregion
export { createScreenOrientationLock };

//# sourceMappingURL=orientation.js.map
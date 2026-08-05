import { IterableWeakSet, getCastContext, loadCastFramework, onCastApiAvailable } from "./utils.js";
//#region src/dom/google-cast/registry.ts
const googleCastInstances = new IterableWeakSet();
let castFramework;
let pendingCastFramework = null;
async function ensureCastFramework() {
	if (castFramework) return castFramework;
	if (!pendingCastFramework) {
		pendingCastFramework = loadCastFramework().then(() => new Promise((resolve, reject) => {
			onCastApiAvailable(() => {
				registerCastFramework();
				if (castFramework) {
					resolve(castFramework);
					return;
				}
				reject(new DOMException("Google Cast framework is unavailable.", "NotSupportedError"));
			});
		}));
		pendingCastFramework.catch(() => {
			pendingCastFramework = null;
		});
	}
	return pendingCastFramework;
}
function registerCastFramework() {
	if (!globalThis.chrome?.cast?.isAvailable) return;
	if (!castFramework) {
		castFramework = cast.framework;
		getCastContext().addEventListener(castFramework.CastContextEventType.CAST_STATE_CHANGED, () => {
			googleCastInstances.forEach((provider) => provider.onCastStateChanged());
		});
		getCastContext().addEventListener(castFramework.CastContextEventType.SESSION_STATE_CHANGED, () => {
			googleCastInstances.forEach((provider) => provider.onSessionStateChanged());
		});
		googleCastInstances.forEach((provider) => provider.onCastFrameworkAvailable());
	}
}
//#endregion
export { castFramework, ensureCastFramework, googleCastInstances };

//# sourceMappingURL=registry.js.map
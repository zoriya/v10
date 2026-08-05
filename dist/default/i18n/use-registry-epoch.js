import { onI18nRegistryChange } from "@videojs/core/i18n";
import { useEffect, useReducer } from "react";
//#region src/i18n/use-registry-epoch.ts
function useRegistryEpoch() {
	const [epoch, invalidate] = useReducer((value) => value + 1, 0);
	useEffect(() => {
		return onI18nRegistryChange(() => invalidate());
	}, []);
	return epoch;
}
//#endregion
export { useRegistryEpoch };

//# sourceMappingURL=use-registry-epoch.js.map
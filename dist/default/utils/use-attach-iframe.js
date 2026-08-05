"use client";
import { useCallback } from "react";
//#region src/utils/use-attach-iframe.ts
function useAttachIframe(media) {
	return useCallback((element) => {
		if (element) media.attach?.(element);
		else media.detach?.();
		return () => media.detach?.();
	}, [media]);
}
//#endregion
export { useAttachIframe };

//# sourceMappingURL=use-attach-iframe.js.map
"use client";
import { useCallback } from "react";
//#region src/utils/use-attach-media.ts
function useAttachMedia(media) {
	return useCallback((element) => {
		if (element) media.attach?.(element);
		else media.detach?.();
		return () => media.detach?.();
	}, [media]);
}
//#endregion
export { useAttachMedia };

//# sourceMappingURL=use-attach-media.js.map
"use client";
import { useMediaAttach } from "../player/context.js";
import { useDestroy } from "./use-destroy.js";
import { useState } from "react";
//#region src/utils/use-media-instance.ts
/**
* Create and manage a media instance lifecycle within a player context.
*
* Instantiates the media class once, attaches it to the player on mount,
* and safely detaches on unmount using a functional updater to avoid race
* conditions when swapping media components (e.g. DashVideo → HlsJsVideo).
*
* An optional `setup` callback runs once on mount — e.g. to add media
* components via `addMediaComponent`. Components registered there are destroyed
* together with the media instance on unmount (`media.destroy()` destroys
* all of its registered components).
*/
function useMediaInstance(MediaClass, setup) {
	const [instance] = useState(() => new MediaClass());
	const setMedia = useMediaAttach();
	useDestroy(instance, () => {
		setup?.(instance);
		setMedia?.(instance);
	}, () => setMedia?.((prev) => prev === instance ? null : prev));
	return instance;
}
//#endregion
export { useMediaInstance };

//# sourceMappingURL=use-media-instance.js.map
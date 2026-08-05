"use client";
import { useMedia } from "../player/context.js";
import { useDestroy } from "./use-destroy.js";
import { useEffect, useState } from "react";
import { HTMLMediaElementHost, addMediaComponent } from "@videojs/media/dom/media-host";
//#region src/utils/use-media-component.ts
/**
* Create a media component (e.g. `GoogleCast`, `MuxData`) and register it
* with the media provided by the surrounding player context.
*
* Instantiates the component class once, registers it when a media host is
* available, follows the media when it changes, and destroys the component
* on unmount. Media that is not a media host (e.g. a plain `<video>`
* element) cannot carry media components and is ignored.
*/
function useMediaComponent(ComponentClass) {
	const media = useMedia();
	const [component] = useState(() => new ComponentClass());
	useDestroy(component);
	useEffect(() => {
		if (!(media instanceof HTMLMediaElementHost)) return;
		return addMediaComponent(media, component);
	}, [media, component]);
	return component;
}
//#endregion
export { useMediaComponent };

//# sourceMappingURL=use-media-component.js.map
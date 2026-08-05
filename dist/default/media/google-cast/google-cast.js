"use client";
import { useMediaComponent } from "../../utils/use-media-component.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { GoogleCast, googleCastDefaultProps } from "@videojs/media/dom/google-cast";
//#region src/media/google-cast/google-cast.tsx
/**
* Adds Google Cast support to the surrounding player's media.
*
* Renders nothing — place it inside the player provider as a sibling of the
* media component (e.g. `<HlsJsVideo />`) and it registers a `GoogleCast`
* media component with the active media.
*
* @example
* ```tsx
* <Player.Provider>
*   <HlsJsVideo src="https://example.com/stream.m3u8" />
*   <GoogleCast receiver="YOUR_APP_ID" />
* </Player.Provider>
* ```
*/
function GoogleCast$1(props) {
	useSyncProps(useMediaComponent(GoogleCast), props, googleCastDefaultProps);
	return null;
}
//#endregion
export { GoogleCast$1 as GoogleCast };

//# sourceMappingURL=google-cast.js.map
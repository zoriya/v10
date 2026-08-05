"use client";
import { useStore } from "@videojs/store/react";
import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/player/context.tsx
const PlayerContext = createContext(null);
const EMPTY_UNSUBSCRIBE = () => {};
const EMPTY_STORE = {
	state: {},
	subscribe: () => EMPTY_UNSUBSCRIBE
};
function PlayerContextProvider({ value, children }) {
	return /* @__PURE__ */ jsx(PlayerContext.Provider, {
		value,
		children
	});
}
/** Access the full player context value. Throws if used outside a Player Provider. */
function usePlayerContext() {
	const ctx = useContext(PlayerContext);
	if (!ctx) throw new Error("usePlayerContext must be used within a Player Provider");
	return ctx;
}
function usePlayer(selector) {
	const { store } = usePlayerContext();
	return useStore(store, selector);
}
function useOptionalPlayer(selector) {
	const ctx = useContext(PlayerContext);
	const value = useStore(ctx?.store ?? EMPTY_STORE, ctx ? selector : void 0);
	return ctx ? value : void 0;
}
/** Access the media element from within a Player Provider. */
function useMedia() {
	const { media } = usePlayerContext();
	return media;
}
/** Access the container element from within a Player Provider. */
function useContainer() {
	const { container } = usePlayerContext();
	return container;
}
/** Access the container element when a Player Provider is available. */
function useOptionalContainer() {
	return useContext(PlayerContext)?.container ?? null;
}
/** Access the interactive popup group when a Player Provider is available. */
function useOptionalPopupGroup() {
	return useContext(PlayerContext)?.popupGroup;
}
/** Access the media attach setter for connecting a media element to the player. */
function useMediaAttach() {
	return useContext(PlayerContext)?.setMedia;
}
/** Access the container attach setter for connecting a container element to the player. */
function useContainerAttach() {
	return useContext(PlayerContext)?.setContainer;
}
//#endregion
export { PlayerContextProvider, useContainer, useContainerAttach, useMedia, useMediaAttach, useOptionalContainer, useOptionalPlayer, useOptionalPopupGroup, usePlayer, usePlayerContext };

//# sourceMappingURL=context.js.map
import { MediaContainer, PopupGroup } from "@videojs/core/dom";
import { Media } from "@videojs/media";
import { UnknownState, UnknownStore } from "@videojs/store";
import { Dispatch, ReactNode, SetStateAction } from "react";
//#region src/player/context.d.ts
interface PlayerContextValue {
  store: UnknownStore;
  media: Media | null;
  setMedia: Dispatch<SetStateAction<Media | null>>;
  container: MediaContainer | null;
  setContainer: Dispatch<SetStateAction<HTMLElement | null>>;
  popupGroup?: PopupGroup;
}
/** Access the full player context value. Throws if used outside a Player Provider. */
declare function usePlayerContext(): PlayerContextValue;
/**
 * Access the player store from within a Player Provider.
 *
 * This standalone hook has no knowledge of your configured features, so it
 * returns an untyped `UnknownStore` whose state properties are typed as
 * `unknown`. For typed access, use the `usePlayer` returned by `createPlayer()`,
 * or pass a premade selector to recover the type from its return value.
 *
 * @label Without Selector
 */
declare function usePlayer(): UnknownStore;
/**
 * Select a value from the player store. Re-renders when the selected value changes.
 *
 * The selector receives `UnknownState`, so an inline selector returns `unknown`.
 * Pass a premade selector (e.g. `selectPlayback`) to get a typed result.
 *
 * @label With Selector
 * @param selector - Derives a value from the player store state.
 */
declare function usePlayer<R>(selector: (state: UnknownState) => R): R;
/**
 * Access player state when available, but return `undefined` outside Provider.
 *
 * This is useful for components that can operate without player context
 * (e.g. they accept fully explicit props as a fallback).
 */
/** @label Without Selector */
declare function useOptionalPlayer(): UnknownStore | undefined;
/** @label With Selector */
declare function useOptionalPlayer<R>(selector: (state: UnknownState) => R): R | undefined;
/** Access the media element from within a Player Provider. */
declare function useMedia(): Media | null;
/** Access the container element from within a Player Provider. */
declare function useContainer(): MediaContainer | null;
/** Access the container element when a Player Provider is available. */
declare function useOptionalContainer(): MediaContainer | null;
/** Access the media attach setter for connecting a media element to the player. */
declare function useMediaAttach(): Dispatch<SetStateAction<Media | null>> | undefined;
/** Access the container attach setter for connecting a container element to the player. */
declare function useContainerAttach(): Dispatch<SetStateAction<HTMLElement | null>> | undefined;
//#endregion
export { PlayerContextValue, useContainer, useContainerAttach, useMedia, useMediaAttach, useOptionalContainer, useOptionalPlayer, usePlayer, usePlayerContext };
//# sourceMappingURL=context.d.ts.map
import { ReactNode } from "react";
import { GoogleCastProps } from "@videojs/media/dom/google-cast";
//#region src/media/google-cast/google-cast.d.ts
type GoogleCastProps$1 = Partial<GoogleCastProps>;
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
declare function GoogleCast$1(props: GoogleCastProps$1): ReactNode;
declare namespace GoogleCast$1 {
  type Props = GoogleCastProps$1;
}
//#endregion
export { GoogleCast$1 as GoogleCast, GoogleCastProps$1 as GoogleCastProps };
//# sourceMappingURL=google-cast.d.ts.map
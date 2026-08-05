import { UIComponentProps } from "../../utils/types.js";
import { PosterCore } from "@videojs/core";
//#region src/ui/poster/poster.d.ts
interface PosterProps extends UIComponentProps<'img', PosterCore.State> {}
/**
 * Displays the video poster image. Shows before playback starts, hides after.
 *
 * @example
 * ```tsx
 * <Poster src="poster.jpg" alt="Video description" />
 *
 * <Poster
 *   src="poster.jpg"
 *   alt="Video description"
 *   className={(state) => state.visible ? 'visible' : 'hidden'}
 * />
 * ```
 */
declare const Poster: import("react").ForwardRefExoticComponent<Omit<PosterProps, "ref"> & import("react").RefAttributes<HTMLImageElement>>;
declare namespace Poster {
  type Props = PosterProps;
  type State = PosterCore.State;
}
//#endregion
export { Poster, PosterProps };
//# sourceMappingURL=poster.d.ts.map
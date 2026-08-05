import { UIComponentProps } from "../../utils/types.js";
import { ThumbnailCore, ThumbnailImage } from "@videojs/core";
//#region src/ui/thumbnail/thumbnail.d.ts
interface ThumbnailProps extends UIComponentProps<'div', ThumbnailCore.State>, ThumbnailCore.Props {
  /** Pre-parsed thumbnail images — bypasses the automatic `<track>` detection. */
  thumbnails?: ThumbnailImage[] | undefined;
}
declare const Thumbnail: import("react").ForwardRefExoticComponent<Omit<ThumbnailProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace Thumbnail {
  type Props = ThumbnailProps;
  type State = ThumbnailCore.State;
}
//#endregion
export { Thumbnail, ThumbnailProps };
//# sourceMappingURL=thumbnail.d.ts.map
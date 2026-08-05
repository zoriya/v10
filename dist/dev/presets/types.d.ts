import { RenderProp } from "../utils/types.js";
import { Poster } from "../ui/poster/poster.js";
import "../ui/poster/index.js";
import { CSSProperties, PropsWithChildren } from "react";
//#region src/presets/types.d.ts
type BaseSkinProps<T = unknown> = PropsWithChildren<T & {
  style?: CSSProperties;
  className?: string;
}>;
type BaseVideoSkinProps<T = unknown> = BaseSkinProps<T> & {
  poster?: string | RenderProp<Poster.State> | undefined;
  /** Low-resolution placeholder shown behind the poster while it loads (blur-up effect). */
  placeholder?: string | undefined;
};
//#endregion
export { BaseSkinProps, BaseVideoSkinProps };
//# sourceMappingURL=types.d.ts.map
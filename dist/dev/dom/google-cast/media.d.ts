import { MediaStreamType } from "../../core/types.js";
import { HTMLMediaElementHost, HTMLMediaTargetLike, MediaComponent } from "../media-host/media-host.js";
//#region src/dom/google-cast/media.d.ts
type MediaHost = HTMLMediaElementHost<HTMLMediaTargetLike, any>;
interface GoogleCastProps {
  /** Source URL loaded on the Cast receiver. Falls back to the host's `src` / `currentSrc`. */
  src?: string | undefined;
  /** MIME type of the Cast source. When unset, the receiver infers it from the URL. */
  contentType?: string | undefined;
  /** Stream type used on the Cast receiver. */
  streamType?: MediaStreamType | undefined;
  /** Cast receiver application ID. Defaults to Google's default media receiver. */
  receiver?: string | undefined;
  /** Custom data sent to the Cast receiver with the load request. */
  customData?: Record<string, unknown> | null | undefined;
}
declare const googleCastDefaultProps: GoogleCastProps;
declare class GoogleCast implements GoogleCastProps, MediaComponent {
  #private;
  constructor(props?: GoogleCastProps);
  setMedia(host: MediaHost): void;
  attach(target: HTMLMediaTargetLike): void;
  detach(): void;
  destroy(): void;
  get targetOverride(): Partial<HTMLMediaTargetLike> | null;
  /** Source URL loaded on the Cast receiver. Falls back to a `<source>` child, `src`, then `currentSrc`. */
  get src(): string | undefined;
  set src(value: string | undefined);
  /** MIME type of the Cast source. When unset, the receiver infers it from the URL. */
  get contentType(): string | undefined;
  set contentType(value: string | undefined);
  /** Stream type used on the Cast receiver. Falls back to the host's `streamType` if it exposes one. */
  get streamType(): MediaStreamType | undefined;
  set streamType(value: MediaStreamType | undefined);
  /** Cast receiver application ID. Read on session start; falls back to the layer's default. */
  get receiver(): string | undefined;
  set receiver(value: string | undefined);
  /** Custom data sent to the Cast receiver with the load request. */
  get customData(): Record<string, unknown> | null | undefined;
  set customData(value: Record<string, unknown> | null | undefined);
}
//#endregion
export { GoogleCast, GoogleCastProps, googleCastDefaultProps };
//# sourceMappingURL=media.d.ts.map
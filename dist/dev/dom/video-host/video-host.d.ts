import { Video, VideoEvents, VideoTargetLike } from "../../core/types.js";
import { HTMLMediaElementHost, HTMLMediaTargetLike } from "../media-host/media-host.js";
import { WebKitPresentationMode } from "@videojs/utils/dom";

//#region src/dom/video-host/video-host.d.ts
interface HTMLVideoTargetLike extends VideoTargetLike, HTMLMediaTargetLike {}
declare class HTMLVideoElementHost extends HTMLMediaElementHost<HTMLVideoTargetLike, VideoEvents> implements Video {
  get poster(): string;
  set poster(value: string);
  get playsInline(): boolean;
  set playsInline(value: boolean);
  get videoWidth(): number;
  get videoHeight(): number;
  get disablePictureInPicture(): boolean;
  set disablePictureInPicture(value: boolean);
  get webkitCurrentPlaybackTargetIsWireless(): boolean | undefined;
  get webkitPresentationMode(): WebKitPresentationMode | undefined;
  get webkitSetPresentationMode(): ((mode: WebKitPresentationMode) => void) | undefined;
  get isPictureInPicture(): boolean;
  get isFullscreen(): boolean;
  requestPictureInPicture(): Promise<unknown>;
  exitPictureInPicture(): Promise<void>;
  requestFullscreen(): Promise<unknown>;
  exitFullscreen(): Promise<void>;
}
//#endregion
export { HTMLVideoElementHost, HTMLVideoTargetLike };
//# sourceMappingURL=video-host.d.ts.map
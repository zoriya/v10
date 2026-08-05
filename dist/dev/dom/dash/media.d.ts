import { MediaEngineHost } from "../../core/types.js";
import { WithMediaTracks } from "../../core/media-tracks/mixin.js";
import { HTMLVideoElementHost } from "../video-host/video-host.js";
import * as dashjs from "dashjs";

//#region src/dom/dash/media.d.ts
interface DashMediaProps {
  src: string;
}
declare const dashMediaDefaultProps: DashMediaProps;
declare const DashMediaBase: WithMediaTracks<typeof HTMLVideoElementHost>;
declare class DashMedia extends DashMediaBase implements MediaEngineHost<dashjs.MediaPlayerClass, HTMLVideoElement>, DashMediaProps {
  #private;
  constructor();
  attach(target: HTMLVideoElement): void;
  detach(): void;
  destroy(): void;
  /**
   * Underlying playback engine — the dash.js `MediaPlayerClass` instance. An
   * advanced escape hatch for direct engine access; normal playback is driven
   * through this element's own properties and methods.
   */
  get engine(): dashjs.MediaPlayerClass;
  get src(): string;
  set src(src: string);
}
//#endregion
export { DashMedia, DashMediaProps, dashMediaDefaultProps };
//# sourceMappingURL=media.d.ts.map
import { Audio, AudioEvents } from "../../core/types.js";
import { HTMLMediaElementHost, HTMLMediaTargetLike } from "../media-host/media-host.js";
//#region src/dom/audio-host/audio-host.d.ts
declare class HTMLAudioElementHost extends HTMLMediaElementHost<HTMLMediaTargetLike, AudioEvents> implements Audio {}
//#endregion
export { HTMLAudioElementHost };
//# sourceMappingURL=audio-host.d.ts.map
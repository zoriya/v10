import { HTMLMediaElementHost, HTMLMediaTargetLike, MediaComponent, MediaComponents } from "../media-host/media-host.js";
//#region src/dom/utils/media-components.d.ts
type MediaHost<T extends HTMLMediaTargetLike = any> = HTMLMediaElementHost<T, any>;
declare function getMediaComponents(host: MediaHost): MediaComponents;
declare function addMediaComponent<T extends MediaComponent>(host: MediaHost, component: T): () => void;
declare function getMediaProp<T extends HTMLMediaTargetLike, K extends keyof T>(host: MediaHost<T>, prop: K): T[K] | undefined;
declare function setMediaProp<T extends HTMLMediaTargetLike, K extends keyof T>(host: MediaHost<T>, prop: K, value: T[K]): void;
/** Find the object that owns a media property: the first component `override` exposing it, otherwise the attached target. */
declare function getMediaOwner<T extends HTMLMediaTargetLike>(host: MediaHost<T>, prop: keyof T): Partial<T> | null;
//#endregion
export { addMediaComponent, getMediaComponents, getMediaOwner, getMediaProp, setMediaProp };
//# sourceMappingURL=media-components.d.ts.map
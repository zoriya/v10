import { CanPlayTypeResult, EventLike, MediaFull, MediaStreamType, MediaTargetLike, RemotePlaybackLike, TextTrackKind, TextTrackLike } from "../../core/types.js";
import { addMediaComponent, getMediaComponents, getMediaOwner, getMediaProp, setMediaProp } from "../utils/media-components.js";
import { EventListenerFor, EventType, QueriedElement } from "@videojs/utils/dom";

//#region src/dom/media-host/media-host.d.ts
interface HTMLMediaTargetLike extends MediaTargetLike, EventTarget {
  querySelector<E extends Element = Element>(selectors: string): E | null;
  querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E> | never[];
}
interface MediaComponent<Target extends HTMLMediaTargetLike = HTMLMediaTargetLike> {
  readonly targetOverride?: Partial<Target> | null;
  setMedia?(host: HTMLMediaElementHost<Target, any>): void;
  attach?(target: Target): void;
  detach?(): void;
  destroy?(): void;
}
interface MediaComponentConstructor<T extends MediaComponent = MediaComponent> {
  new (...args: any[]): T;
}
interface MediaComponents extends Map<MediaComponentConstructor, MediaComponent> {
  get<T extends MediaComponent>(component: MediaComponentConstructor<T>): T | undefined;
  set<T extends MediaComponent>(component: MediaComponentConstructor<T>, instance: T): this;
}
/** Host config bag for host/engine settings. Media components are configured directly. */
type MediaConfig = Record<string, unknown>;
declare class HTMLMediaElementHost<Target extends HTMLMediaTargetLike, Events extends { [K in keyof Events]: EventLike }> extends EventTarget implements MediaFull {
  #private;
  protected get target(): Target | null;
  attach(target: Target): void;
  detach(): void;
  destroy(): void;
  querySelectorAll<E extends Element = Element, S extends string = string>(selectors: S): NodeListOf<QueriedElement<S, E>> | never[];
  querySelector<E extends Element = Element, S extends string = string>(selectors: S): QueriedElement<S, E> | null;
  addEventListener<K extends EventType<Events>>(type: K, listener: EventListenerFor<Events, K>, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends EventType<Events>>(type: K, listener: EventListenerFor<Events, K>, options?: boolean | EventListenerOptions): void;
  /**
   * Current stream type (`'on-demand'`, `'live'`, or `'unknown'`). Defaults to
   * `'unknown'`; detecting hosts update it automatically, and consumers can set
   * it to override detection.
   */
  get streamType(): MediaStreamType | NonNullable<Target["streamType"]>;
  set streamType(value: MediaStreamType | NonNullable<Target["streamType"]>);
  get liveEdgeStart(): number;
  get targetLiveWindow(): number;
  get config(): MediaConfig;
  set config(value: MediaConfig);
  get title(): "" | Target["title"];
  set title(value: string | Target["title"]);
  get controls(): false | Target["controls"];
  set controls(value: boolean | Target["controls"]);
  get paused(): true | Target["paused"];
  get ended(): false | Target["ended"];
  get loop(): false | Target["loop"];
  set loop(value: boolean | Target["loop"]);
  play(): Promise<void>;
  pause(): void;
  get autoplay(): false | Target["autoplay"];
  set autoplay(value: boolean | Target["autoplay"]);
  get currentTime(): 0 | Target["currentTime"];
  set currentTime(value: number | Target["currentTime"]);
  get duration(): number;
  get seeking(): false | Target["seeking"];
  get src(): "" | Target["src"];
  set src(value: string | Target["src"]);
  get currentSrc(): "" | Target["currentSrc"];
  get readyState(): 0 | Target["readyState"];
  get preload(): "metadata" | Target["preload"];
  set preload(value: string | Target["preload"]);
  get crossOrigin(): NonNullable<Target["crossOrigin"]> | null;
  set crossOrigin(value: NonNullable<Target["crossOrigin"]> | null);
  load(): void | Promise<void> | undefined;
  canPlayType(type: string): CanPlayTypeResult;
  get volume(): 1 | Target["volume"];
  set volume(value: number | Target["volume"]);
  get muted(): false | Target["muted"];
  set muted(value: boolean | Target["muted"]);
  get defaultMuted(): false | Target["defaultMuted"];
  set defaultMuted(value: boolean | Target["defaultMuted"]);
  get playbackRate(): 1 | Target["playbackRate"];
  set playbackRate(value: number | Target["playbackRate"]);
  get defaultPlaybackRate(): 1 | Target["defaultPlaybackRate"];
  set defaultPlaybackRate(value: number | Target["defaultPlaybackRate"]);
  get buffered(): TimeRanges;
  get seekable(): TimeRanges;
  get played(): TimeRanges;
  get error(): NonNullable<Target["error"]> | null;
  get textTracks(): TextTrackList;
  addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrackLike;
  get remote(): RemotePlaybackLike;
  get disableRemotePlayback(): false | Target["disableRemotePlayback"];
  set disableRemotePlayback(value: boolean | Target["disableRemotePlayback"]);
}
//#endregion
export { HTMLMediaElementHost, HTMLMediaTargetLike, MediaComponent, MediaComponentConstructor, MediaComponents, MediaConfig };
//# sourceMappingURL=media-host.d.ts.map
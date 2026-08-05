import { Constructor } from "@videojs/utils/types";

//#region src/dom/custom-media-element/custom-media-element.d.ts
/** CSS custom property names for video elements. */
declare const VideoCSSVars: {
  /** Border radius of the video element. */readonly borderRadius: '--media-video-border-radius'; /** Object fit for the video. */
  readonly objectFit: '--media-object-fit'; /** Object position for the video. */
  readonly objectPosition: '--media-object-position'; /** Duration of the caption track transition. */
  readonly captionTrackDuration: '--media-caption-track-duration'; /** Delay before the caption track transition. */
  readonly captionTrackDelay: '--media-caption-track-delay'; /** Vertical offset of the caption track. */
  readonly captionTrackY: '--media-caption-track-y';
};
/** CSS custom property names for audio elements. */
declare const AudioCSSVars: {};
interface MediaHost extends EventTarget {
  attach(target: EventTarget | null): void;
  detach(): void;
  destroy(): void;
  /** Index signature for dynamic property forwarding (includes the host's protected `target`). */
  [key: string]: any;
}
type CustomMediaConstructor<T extends Constructor<MediaHost>> = Constructor<HTMLElement & InstanceType<T> & {
  readonly host: InstanceType<T>;
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}> & {
  properties: Record<string, {
    type: any;
    attribute?: string;
    empty?: unknown;
  }>;
  getTemplateHTML: (attrs: Record<string, string>) => string;
  shadowRootOptions: ShadowRootInit;
  readonly observedAttributes: string[];
};
declare function CustomMediaElement<T extends Constructor<MediaHost>>(tag: string, MediaHost: T): CustomMediaConstructor<T>;
//#endregion
export { AudioCSSVars, CustomMediaElement, MediaHost, VideoCSSVars };
//# sourceMappingURL=custom-media-element.d.ts.map
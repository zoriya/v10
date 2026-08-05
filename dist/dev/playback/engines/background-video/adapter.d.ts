import { Composition } from "../../../core/composition/create-composition.js";
import { BackgroundVideoEngineContext, BackgroundVideoEngineState } from "./engine.js";
import { Constructor, MixinReturn } from "@videojs/utils/types";
//#region src/playback/engines/background-video/adapter.d.ts
interface BackgroundVideoMediaProps {
  src: string;
  preload: '' | 'none' | 'metadata' | 'auto';
  loop: boolean;
  muted: boolean;
  autoplay: boolean;
  maxResolution: string | number | undefined;
}
declare const backgroundVideoMediaDefaultProps: BackgroundVideoMediaProps;
interface BackgroundVideoMediaAPI extends BackgroundVideoMediaProps {
  readonly engine: Composition<BackgroundVideoEngineState, BackgroundVideoEngineContext>;
  attach(mediaElement: HTMLMediaElement): void;
  detach(): void;
  destroy(): void;
  play(): Promise<void>;
}
/**
 * Mixin that adds the background-video SPF playback engine to any
 * base class.
 *
 * Implements the WHATWG HTML media element contract (`src`, `preload`,
 * `loop`, `muted`, `autoplay`, `play()`) so it can be dropped in anywhere a
 * media element API is expected. Compared to `SimpleHlsMediaMixin`, this
 * variant:
 *
 * - exposes `loop`, `muted`, and `autoplay` as adapter-owned native
 *   passthroughs, all defaulting to `true` — the use case is silent
 *   autoplay-looping video, so muted + autoplay satisfy browser autoplay
 *   policies and loop is the defining behavior;
 * - drives the underlying engine with the background-video
 *   composition (single-rendition, video-only, autoplay-from-construction).
 *
 * A new engine is created on every src assignment — this fully tears down
 * all state, SourceBuffers, and in-flight requests from the previous
 * source before the next one begins. The media element reference is
 * preserved across src changes and re-applied to the new engine
 * automatically.
 *
 * @example
 * class BackgroundVideoMedia extends BackgroundVideoMediaMixin(HTMLVideoElementHost) {}
 *
 * const media = new BackgroundVideoMedia();
 * media.attach(document.querySelector('video'));
 * media.src = 'https://stream.mux.com/abc123.m3u8';
 * media.play();
 */
declare function BackgroundVideoMediaMixin<Base extends Constructor<any>>(BaseClass: Base): MixinReturn<Base, BackgroundVideoMediaAPI>;
declare const BackgroundVideoMediaElement_base: MixinReturn<{
  new (): {};
}, BackgroundVideoMediaAPI>;
/** Standalone SPF background-video adapter with no base class. */
declare class BackgroundVideoMediaElement extends BackgroundVideoMediaElement_base {}
//#endregion
export { BackgroundVideoMediaAPI, BackgroundVideoMediaElement, BackgroundVideoMediaMixin, BackgroundVideoMediaProps, backgroundVideoMediaDefaultProps };
//# sourceMappingURL=adapter.d.ts.map
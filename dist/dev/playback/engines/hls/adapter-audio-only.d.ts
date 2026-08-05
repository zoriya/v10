import { Composition } from "../../../core/composition/create-composition.js";
import { SimpleHlsAudioOnlyEngineContext, SimpleHlsAudioOnlyEngineState } from "./engine-audio-only.js";
import { Constructor, MixinReturn } from "@videojs/utils/types";
//#region src/playback/engines/hls/adapter-audio-only.d.ts
interface SimpleHlsAudioOnlyMediaProps {
  src: string;
  preload: '' | 'none' | 'metadata' | 'auto';
  disableRemotePlayback: boolean;
}
declare const simpleHlsAudioOnlyMediaDefaultProps: SimpleHlsAudioOnlyMediaProps;
interface SimpleHlsAudioOnlyMediaAPI extends SimpleHlsAudioOnlyMediaProps {
  readonly engine: Composition<SimpleHlsAudioOnlyEngineState, SimpleHlsAudioOnlyEngineContext>;
  attach(mediaElement: HTMLMediaElement): void;
  detach(): void;
  destroy(): void;
  play(): Promise<void>;
}
/**
 * Mixin that adds SPF audio-only HLS playback to any base class.
 *
 * Parallel to `SimpleHlsMediaMixin` with one substantive difference: the
 * underlying engine is the audio-only variant (`createHlsAudioOnlyEngine`),
 * which omits video and text-track behaviors. The src / preload /
 * disableRemotePlayback / play() contract per the WHATWG HTML spec is identical
 * to the default adapter.
 *
 * Selecting this adapter is the variant decision: instantiating
 * `SimpleHlsAudioOnlyMediaElement` opts the consumer into audio-only
 * delivery even when the source is a mixed-AV HLS manifest.
 *
 * @example
 * class SimpleHlsAudioOnlyMedia extends SimpleHlsAudioOnlyMediaMixin(HTMLVideoElementHost) {}
 *
 * const media = new SimpleHlsAudioOnlyMedia();
 * media.attach(document.querySelector('video'));
 * media.src = 'https://stream.mux.com/abc123.m3u8';
 */
declare function SimpleHlsAudioOnlyMediaMixin<Base extends Constructor<any>>(BaseClass: Base): MixinReturn<Base, SimpleHlsAudioOnlyMediaAPI>;
declare const SimpleHlsAudioOnlyMediaElement_base: MixinReturn<{
  new (): {};
}, SimpleHlsAudioOnlyMediaAPI>;
/** Standalone SPF audio-only media adapter with no base class. */
declare class SimpleHlsAudioOnlyMediaElement extends SimpleHlsAudioOnlyMediaElement_base {}
//#endregion
export { SimpleHlsAudioOnlyMediaAPI, SimpleHlsAudioOnlyMediaElement, SimpleHlsAudioOnlyMediaMixin, SimpleHlsAudioOnlyMediaProps, simpleHlsAudioOnlyMediaDefaultProps };
//# sourceMappingURL=adapter-audio-only.d.ts.map
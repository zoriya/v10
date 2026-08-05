import { TimeRangeLike } from "../../core/types.js";
import { Constructor, MixinReturn } from "@videojs/utils/types";

//#region src/dom/media-played-ranges/media-played-ranges.d.ts
interface PlayedRange {
  start: number;
  end: number;
}
/** Surface a media host must expose for played-range tracking. */
interface MediaPlayedRangesHost extends EventTarget {
  currentTime: number;
  paused: boolean;
}
/** Public surface contributed by {@link MediaPlayedRangesMixin}. */
interface MediaPlayedRangesAPI {
  /** `TimeRanges`-like view of the ranges the user has actually played. */
  readonly played: TimeRangeLike;
  destroy(): void;
}
/**
 * Mixin that tracks played ranges for media hosts lacking a native
 * `HTMLMediaElement.played` (e.g. iframe-based embeds like Vimeo).
 *
 * Listens for standard media events the host dispatches on itself
 * (`play`, `pause`, `ended`, `seeking`, `seeked`) and derives a
 * `TimeRanges`-like `played` value from the host's `currentTime` / `paused`.
 *
 * @example
 * class VimeoMedia extends MediaPlayedRangesMixin(EventTarget) { ... }
 */
declare function MediaPlayedRangesMixin<Base extends Constructor<EventTarget & {
  destroy?(): void;
}>>(BaseClass: Base): MixinReturn<Base, MediaPlayedRangesAPI>;
//#endregion
export { MediaPlayedRangesAPI, MediaPlayedRangesHost, MediaPlayedRangesMixin, PlayedRange };
//# sourceMappingURL=media-played-ranges.d.ts.map
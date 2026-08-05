//#region src/time/format.d.ts
type TimeFormatOptions = {
  /** BCP 47 tag(s) for {@link Intl.DurationFormat}. */
  locale?: string | string[];
  /** Called only when `seconds` is negative; formats the localized remaining-time phrase for the duration body. */
  formatRemaining?: (duration: string) => string;
  /** Passed to `Intl.DurationFormat`; defaults to `"long"`. */
  style?: 'long' | 'short' | 'narrow' | 'digital';
};
/**
 * Format seconds to digital display string.
 *
 * @param seconds - Time in seconds (can be negative)
 * @param guide - Guide time (typically duration) to determine display format
 * @returns Formatted string like "1:30" or "1:05:30"
 *
 * @example
 * formatTime(90) // "1:30"
 * formatTime(3661) // "1:01:01"
 * formatTime(35, 3600) // "0:00:35" (guided by 1-hour duration)
 * formatTime(35, 600) // "00:35" (guided by 10-minute duration)
 */
declare function formatTime(seconds: number, guide?: number): string;
/**
 * Convert seconds to ISO 8601 duration for datetime attribute.
 *
 * @param seconds - Time in seconds
 * @returns ISO 8601 duration string like "PT1M30S"
 *
 * @example
 * secondsToIsoDuration(90) // "PT1M30S"
 * secondsToIsoDuration(3661) // "PT1H1M1S"
 */
declare function secondsToIsoDuration(seconds: number): string;
/**
 * Human-readable duration using {@link Intl.DurationFormat}.
 *
 * Negative `seconds` denote remaining time: the absolute value is formatted, then wrapped in a
 * localized phrase via {@link TimeFormatOptions.formatRemaining}; otherwise `{duration} remaining`.
 */
declare function formatTimeAsPhrase(seconds: number, options?: TimeFormatOptions): string;
//#endregion
export { TimeFormatOptions, formatTime, formatTimeAsPhrase, secondsToIsoDuration };
//# sourceMappingURL=format.d.ts.map
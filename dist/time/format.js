import { isNumber } from "../predicate/predicate.js";
//#region src/time/format.ts
const DurationFormat = Intl.DurationFormat;
const durationFormatters = /* @__PURE__ */ new Map();
/**
* `Intl.DurationFormat` is unavailable on Node < 23 (SSR/prerender) and pre-2024 evergreen
* browsers, so degrade gracefully per the documented browser-support fallback policy.
* Digital output stays exact; localized phrase styles fall back to English.
*/
function createFallbackFormatter(style, hoursDisplay) {
	if (style === "digital") {
		const pad = (value) => String(value).padStart(2, "0");
		return { format: (duration) => {
			const body = `${pad(duration.minutes ?? 0)}:${pad(duration.seconds ?? 0)}`;
			return hoursDisplay === "always" || duration.hours !== void 0 ? `${duration.hours ?? 0}:${body}` : body;
		} };
	}
	const units = [
		["hours", "hour"],
		["minutes", "minute"],
		["seconds", "second"]
	];
	return { format: (duration) => units.filter(([unit]) => duration[unit] !== void 0).map(([unit, label]) => {
		const value = duration[unit] ?? 0;
		return `${value} ${label}${value === 1 ? "" : "s"}`;
	}).join(", ") };
}
function localeCacheKey(locale) {
	if (locale === void 0) return "";
	return Array.isArray(locale) ? locale.join(":") : locale;
}
function isEnglishLocale(locale) {
	const tag = Array.isArray(locale) ? locale[0] : locale;
	if (!tag) return true;
	return tag === "en" || tag.startsWith("en-");
}
function getDurationFormatter(locale, style = "long", hoursDisplay) {
	const key = `${localeCacheKey(locale)}:${style}:${hoursDisplay ?? ""}`;
	let formatter = durationFormatters.get(key);
	if (!formatter) {
		if (DurationFormat) formatter = new DurationFormat(locale, hoursDisplay === void 0 ? { style } : {
			style,
			hoursDisplay
		});
		else formatter = createFallbackFormatter(style, hoursDisplay);
		durationFormatters.set(key, formatter);
	}
	return formatter;
}
function isValidTime(value) {
	return isNumber(value) && Number.isFinite(value);
}
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
function formatTime(seconds, guide) {
	if (!isValidTime(seconds)) return "0:00";
	const negative = seconds < 0;
	const totalSeconds = Math.floor(Math.abs(seconds));
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor(totalSeconds % 3600 / 60);
	const secondsPart = totalSeconds % 60;
	const guideSeconds = isValidTime(guide ?? 0) ? Math.abs(guide ?? 0) : 0;
	const guideHours = Math.floor(guideSeconds / 3600);
	const guideMinutes = Math.floor(guideSeconds / 60 % 60);
	const showHours = hours > 0 || guideHours > 0;
	const padMinutes = showHours || guideMinutes >= 10;
	const duration = showHours ? {
		hours,
		minutes,
		seconds: secondsPart
	} : {
		minutes,
		seconds: secondsPart
	};
	let body = getDurationFormatter("en", "digital", showHours ? "always" : "auto").format(duration);
	if (!padMinutes) body = body.replace(/^0(?=\d:)/, "");
	return `${negative ? "-" : ""}${body}`;
}
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
function secondsToIsoDuration(seconds) {
	if (!isValidTime(seconds)) return "PT0S";
	const positiveSeconds = Math.abs(seconds);
	const h = Math.floor(positiveSeconds / 3600);
	const m = Math.floor(positiveSeconds / 60 % 60);
	const s = Math.floor(positiveSeconds % 60);
	let duration = "PT";
	if (h > 0) duration += `${h}H`;
	if (m > 0) duration += `${m}M`;
	if (s > 0 || duration === "PT") duration += `${s}S`;
	return duration;
}
/**
* Human-readable duration using {@link Intl.DurationFormat}.
*
* Negative `seconds` denote remaining time: the absolute value is formatted, then wrapped in a
* localized phrase via {@link TimeFormatOptions.formatRemaining}; otherwise `{duration} remaining`.
*/
function formatTimeAsPhrase(seconds, options) {
	if (!isValidTime(seconds)) return "";
	const negative = seconds < 0;
	const totalSeconds = Math.floor(Math.abs(seconds));
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor(totalSeconds % 3600 / 60);
	const secondsPart = totalSeconds % 60;
	const record = {};
	if (hours > 0) record.hours = hours;
	if (minutes > 0) record.minutes = minutes;
	if (secondsPart > 0 || hours === 0 && minutes === 0) record.seconds = secondsPart;
	const body = getDurationFormatter(options?.locale, options?.style ?? "long").format(record);
	if (negative) {
		const formatRemaining = options?.formatRemaining;
		if (formatRemaining) return formatRemaining(body);
		if (isEnglishLocale(options?.locale)) return `${body} remaining`;
		return body;
	}
	return body;
}
//#endregion
export { formatTime, formatTimeAsPhrase, secondsToIsoDuration };

//# sourceMappingURL=format.js.map
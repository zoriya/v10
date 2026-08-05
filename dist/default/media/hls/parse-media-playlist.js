import { matchTag, parseByteRange, parseExtInfDuration } from "./parse-attributes.js";
import { resolveUrl } from "./resolve-url.js";
//#region src/media/hls/parse-media-playlist.ts
/** MPEG-2 Transport Stream (IANA `video/MP2T`, lowercased for `isTypeSupported`). Video + audio TS — there is no `audio/mp2t`. */
const MPEG_TS_MIME = "video/mp2t";
/** Raw ADTS AAC packed-audio (HLS `.aac` segments; IANA `audio/aac`). */
const RAW_AAC_MIME = "audio/aac";
const CONTAINER_MIME_BY_EXTENSION = {
	".ts": MPEG_TS_MIME,
	".aac": RAW_AAC_MIME
};
/** The non-fMP4 container MIMEs the parser detects — all currently treated as unplayable. */
const NON_FMP4_CONTAINER_MIMES = new Set(Object.values(CONTAINER_MIME_BY_EXTENSION));
/**
* Non-fMP4 container MIME for a (resolved, absolute) segment URL, by file
* extension, ignoring the query string. `undefined` for fMP4 / unrecognized.
*/
function containerMimeFromSegment(url) {
	if (!url) return void 0;
	let path;
	try {
		path = new URL(url).pathname.toLowerCase();
	} catch {
		path = url.toLowerCase().split("?")[0] ?? "";
	}
	const dot = path.lastIndexOf(".");
	return dot === -1 ? void 0 : CONTAINER_MIME_BY_EXTENSION[path.slice(dot)];
}
/**
* Parse HLS media playlist and resolve track with segments.
*
* Takes an unresolved track (from multivariant playlist) and media playlist text,
* returns a HAM-compliant resolved track with segments.
*
* @param text - Media playlist text content
* @param unresolved - Unresolved track from parseMultivariantPlaylist
* @returns Resolved track with segments (type inferred from input)
*/
function parseMediaPlaylist(text, unresolved) {
	const lines = text.split(/\r?\n/);
	const baseUrl = unresolved.url;
	const segments = [];
	let initSegmentUrl;
	let initSegmentByteRange;
	let currentDuration = 0;
	let currentByteRange;
	let currentTime = 0;
	let segmentIndex = 0;
	let previousByteRangeEnd;
	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#") && !trimmed.startsWith("#EXT")) continue;
		if (trimmed === "#EXTM3U" || trimmed.startsWith("#EXT-X-VERSION:") || trimmed.startsWith("#EXT-X-TARGETDURATION:") || trimmed.startsWith("#EXT-X-PLAYLIST-TYPE:") || trimmed.startsWith("#EXT-X-INDEPENDENT-SEGMENTS")) continue;
		const mapAttrs = matchTag(trimmed, "EXT-X-MAP");
		if (mapAttrs) {
			const uri = mapAttrs.get("URI");
			if (uri) {
				initSegmentUrl = resolveUrl(uri, baseUrl);
				const byteRangeStr = mapAttrs.get("BYTERANGE");
				if (byteRangeStr) initSegmentByteRange = parseByteRange(byteRangeStr, 0) ?? void 0;
			}
			continue;
		}
		if (trimmed.startsWith("#EXTINF:")) {
			currentDuration = parseExtInfDuration(trimmed.slice(8));
			continue;
		}
		if (trimmed.startsWith("#EXT-X-BYTERANGE:")) {
			currentByteRange = parseByteRange(trimmed.slice(17), previousByteRangeEnd) ?? void 0;
			continue;
		}
		if (trimmed === "#EXT-X-ENDLIST") continue;
		if (!trimmed.startsWith("#") && currentDuration > 0) {
			const segment = {
				id: `segment-${segmentIndex}`,
				url: resolveUrl(trimmed, baseUrl),
				duration: currentDuration,
				startTime: currentTime
			};
			if (currentByteRange) {
				segment.byteRange = currentByteRange;
				previousByteRangeEnd = currentByteRange.end + 1;
			} else previousByteRangeEnd = void 0;
			segments.push(segment);
			currentTime += currentDuration;
			segmentIndex++;
			currentDuration = 0;
			currentByteRange = void 0;
		}
	}
	const totalDuration = currentTime;
	const initialization = unresolved.type === "text" && !initSegmentUrl ? void 0 : initSegmentUrl ? {
		url: initSegmentUrl,
		...initSegmentByteRange ? { byteRange: initSegmentByteRange } : {}
	} : { url: "" };
	const detectedContainer = initSegmentUrl ? void 0 : containerMimeFromSegment(segments[0]?.url);
	const mimeType = unresolved.type !== "text" && detectedContainer ? detectedContainer : unresolved.mimeType;
	return {
		...unresolved,
		mimeType,
		startTime: 0,
		duration: totalDuration,
		segments,
		initialization
	};
}
//#endregion
export { MPEG_TS_MIME, NON_FMP4_CONTAINER_MIMES, RAW_AAC_MIME, parseMediaPlaylist };

//# sourceMappingURL=parse-media-playlist.js.map
//#region src/media/primitives/select-tracks.ts
/**
* Test whether a track matches a partial-track description: every present,
* defined field of `filter` equals the track's. Absent or `undefined` filter
* fields don't constrain. Used to narrow candidates by a user selection
* (`{ id }`, `{ language }`, `{ height }`, …).
*
* @param track - The track to test
* @param filter - Partial-track description; only present, defined fields constrain
* @returns `true` when the track matches every constraining field
*/
function matchesPartialTrack(track, filter) {
	for (const key in filter) {
		const filterValue = filter[key];
		if (filterValue !== void 0 && track[key] !== filterValue) return false;
	}
	return true;
}
/**
* Pick the first track of the given type from a presentation.
*
* Returns the first track in the first switching set of the matching
* selection set, or `undefined` if either is missing. POC-shaped
* default-pick — `pickVideoTrack` / `pickAudioTrack` honor bandwidth +
* language preferences and will replace this once selection callers are
* ready.
*/
function pickFirstTrackId(presentation, type) {
	return presentation.selectionSets?.find((set) => set.type === type)?.switchingSets[0]?.tracks[0]?.id;
}
/**
* Translates a "max resolution" into a total total pixel area
* for comparisons with video track resolutions with an assumed
* 16:9 ratio.
*
* Example: "720p" translates to a 921600 pixel area.
*
* Because 720 * 1280 = 720 * (720 * (16/9) ) = 921_600
*
* Accepts:
* - string with the format '{height}p'. ('720p')
* - bare number, interpreted as pixel area. (921_600)
* - anything else will translate to `+Infinity`, meaning no cap specified
*/
function maxResolutionToPixelArea(value) {
	if (value === void 0 || value === null) return Number.POSITIVE_INFINITY;
	if (typeof value === "number") return Number.isFinite(value) && value > 0 ? value : Number.POSITIVE_INFINITY;
	const match = value.trim().match(/^(\d+)p?$/i);
	if (!match) return Number.POSITIVE_INFINITY;
	const height = Number(match[1]);
	if (!(Number.isFinite(height) && height > 0)) return Number.POSITIVE_INFINITY;
	return height * height * 16 / 9;
}
/**
* Pick the track with the highest pixel area at or below `maxPixelArea`.
* Falls back to the lowest track when nothing satisfies the cap (the
* lowest of the above-cap set is the closest to the cap from above).
* Tiebreak on bandwidth. Missing dimensions are treated as area `0`.
*/
function pickTrackUnderPixelArea(tracks, maxPixelArea = Number.POSITIVE_INFINITY) {
	if (tracks.length === 0) return void 0;
	const sorted = [...tracks].sort((a, b) => (b.width ?? 0) * (b.height ?? 0) - (a.width ?? 0) * (a.height ?? 0) || (b.bandwidth ?? 0) - (a.bandwidth ?? 0));
	return sorted.find((t) => (t.width ?? 0) * (t.height ?? 0) <= maxPixelArea) ?? sorted[sorted.length - 1];
}
/**
* Pick the video track with the highest pixel area.
*
* Pair with `selectVideoTrack`; compose `switchVideoQuality` instead
* for runtime-adapted quality.
*/
function pickHighestResolutionVideoTrack(presentation) {
	const tracks = (presentation.selectionSets?.find((set) => set.type === "video"))?.switchingSets[0]?.tracks;
	if (!tracks?.length) return void 0;
	return pickTrackUnderPixelArea(tracks)?.id;
}
/**
* Pick audio track.
*
* Selection priority:
* 1. First track matching preferred language (if specified)
* 2. First default track
* 3. First audio track
*
* @param presentation - Presentation with audio tracks
* @param config - Selection configuration (preferred language)
* @returns Selected audio track ID, or undefined if no audio tracks
*/
function pickAudioTrack(presentation, config) {
	const audioSet = presentation.selectionSets?.find((set) => set.type === "audio");
	if (!audioSet || audioSet.switchingSets.length === 0) return;
	const switchingSet = audioSet.switchingSets[0];
	if (!switchingSet || switchingSet.tracks.length === 0) return;
	const tracks = switchingSet.tracks;
	if (config?.preferredAudioLanguage) {
		const languageMatch = tracks.find((track) => track.language === config.preferredAudioLanguage);
		if (languageMatch) return languageMatch.id;
	}
	const defaultTrack = tracks.find((track) => track.default === true);
	if (defaultTrack) return defaultTrack.id;
	return tracks[0]?.id;
}
/**
* Default text-track policy over an explicit candidate list (rather than a whole
* presentation): the opt-in three-tier pick `pickTextTrack` delegates to, factored
* out so a caller that has already narrowed the candidates — a constrained,
* CDN-scoped track-switching chain — applies the same policy without re-deriving
* from the presentation.
*
* Priority: `preferredSubtitleLanguage` match → `DEFAULT=YES + AUTOSELECT=YES`
* (only when `enableDefaultTrack`) → `undefined` (opt-in). FORCED tracks are
* excluded unless `includeForcedTracks` (Apple-spec: a regular track must carry
* forced content when both exist, so a forced-only track is redundant).
*/
function pickTextTrackFromTracks(tracks, config) {
	const availableTracks = config?.includeForcedTracks ? tracks : tracks.filter((track) => !track.forced);
	if (availableTracks.length === 0) return void 0;
	const { preferredSubtitleLanguage, enableDefaultTrack = false } = config ?? {};
	if (preferredSubtitleLanguage) {
		const languageMatch = availableTracks.find((track) => track.language === preferredSubtitleLanguage);
		if (languageMatch) return languageMatch.id;
	}
	if (enableDefaultTrack) {
		const defaultTrack = availableTracks.find((track) => track.default === true);
		if (defaultTrack) return defaultTrack.id;
	}
}
//#endregion
export { matchesPartialTrack, maxResolutionToPixelArea, pickAudioTrack, pickFirstTrackId, pickHighestResolutionVideoTrack, pickTextTrackFromTracks, pickTrackUnderPixelArea };

//# sourceMappingURL=select-tracks.js.map
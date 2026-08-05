//#region src/dom/text-track.ts
/** Whether a text track is a captions or subtitles track. */
function isCaptionOrSubtitleTrack(track) {
	return track.kind === "captions" || track.kind === "subtitles";
}
/** Find the `<track>` element that owns the given `TextTrack`. */
function findTrackElement(media, track) {
	if (!(media instanceof HTMLElement)) return null;
	for (const el of media.querySelectorAll("track")) if (el.track === track) return el;
	return null;
}
function getTextTrackList(media, filterPred) {
	if (!media.textTracks) return [];
	return Array.from(media.textTracks).filter(filterPred).sort(sortByKind);
}
function sortByKind(a, b) {
	return a.kind > b.kind ? 1 : a.kind < b.kind ? -1 : 0;
}
//#endregion
export { findTrackElement, getTextTrackList, isCaptionOrSubtitleTrack };

//# sourceMappingURL=text-track.js.map
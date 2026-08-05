//#region src/dom/text-track.d.ts
type CaptionOrSubtitleKind = 'captions' | 'subtitles';
/** Whether a text track is a captions or subtitles track. */
declare function isCaptionOrSubtitleTrack(track: {
  kind: string;
}): track is {
  kind: CaptionOrSubtitleKind;
};
/** Find the `<track>` element that owns the given `TextTrack`. */
declare function findTrackElement(media: EventTarget, track: unknown): HTMLTrackElement | null;
declare function getTextTrackList<Track extends {
  kind: string;
  mode: string;
}>(media: {
  textTracks?: Iterable<Track>;
}, filterPred: (textTrack: Track) => boolean): Track[];
//#endregion
export { CaptionOrSubtitleKind, findTrackElement, getTextTrackList, isCaptionOrSubtitleTrack };
//# sourceMappingURL=text-track.d.ts.map
import { findBox, iterateBoxesOfType, readFourCC, readFullBoxVersion, toDataView } from "./box.js";
//#region src/media/mp4/timestamp-origin.ts
/**
* Decode-time origin extraction from fMP4/CMAF segments.
*
* Non-zero-PTS sources encode media at a non-zero start time (an instant clip
* starting at asset second 60, an Apple bipbop asset starting at 10s, …). To
* relocate such a source onto a 0-based presentation timeline via
* `SourceBuffer.timestampOffset`, the engine needs that start time — the
* **decode-time origin** — read straight from the container:
*
* - `tfdt.baseMediaDecodeTime` (from a media segment's `moof`) — the decode
*   time of the segment's first sample, in the track's media timescale. This is
*   a DTS: relocating by `−(baseMediaDecodeTime / timescale)` lands the earliest
*   DTS at exactly 0, so a negative-DTS append failure on Chromium is impossible
*   by construction.
* - `mdhd.timescale` (from the init segment's `moov`) — ticks per second for
*   that track, needed to convert the raw tick count to seconds.
*
* ## Presumptive vs. track-selected reads
*
* The two variants share only the leaf field-readers (`mdhd` timescale, `tfdt`
* baseMediaDecodeTime) and the box walker. Everything else differs, and the
* split is deliberate so the presumptive pair is *proportionally* smaller under
* tree-shaking:
*
* - **Presumptive** — {@link readFirstMediaTimescale} / {@link readFirstBaseMediaDecodeTime}
*   read the first `mdhd` timescale and first `tfdt` baseMediaDecodeTime. There's
*   no `track_id` (nothing to match against) and no `trak`/`traf` iteration — a
*   direct `findBox` to the first leaf. Correct when the init/segment holds a
*   single media track (the common CMAF case). A caption-free platform imports
*   only this pair and tree-shakes away all the matching machinery below.
* - **Track-selected** — {@link findMediaTrack} / {@link readBaseMediaDecodeTime}.
*   `findMediaTrack` returns `{ trackId, timescale }` for the `trak` whose `hdlr`
*   handler matches; `readBaseMediaDecodeTime` takes that `trackId` and reads the
*   `traf` whose `tfhd.track_id` matches. The `track_id` is the join that ties one
*   track's timescale to the *same* track's baseMediaDecodeTime — required when a
*   source muxes CEA-608/708 captions (a `clcp` track shares the same `moov` and
*   `moof`, each track with its own timescale + baseMediaDecodeTime, so a
*   presumptive read there risks `300000 / 6000 = 50s` instead of
*   `60000 / 6000 = 10s`). This pair adds `trak`/`traf` iteration plus the handler
*   and `track_id` reads. We only ever ask for buffered media handlers
*   (`vide` / `soun`); the caption track is never selected — we read the origin,
*   not the captions (caption *rendering* is out of scope).
*
* Both raw values are returned un-divided to leave room for an edit-list (`elst`)
* presentation-time correction term if a source ever carries one — the validated
* streams do not.
*/
/**
* The `track_ID` + timescale of the `trak` whose `mdhd` handler matches
* `handlerType`, skipping a muxed `clcp` caption track. `undefined` if no
* matching track exists.
*/
function findMediaTrack(initSegment, handlerType) {
	const view = toDataView(initSegment);
	const moov = findBox(view, ["moov"]);
	if (!moov) return void 0;
	for (const trak of iterateBoxesOfType(view, "trak", moov.dataStart, moov.end)) {
		if (readTrakHandler(view, trak) !== handlerType) continue;
		const tkhd = findBox(view, ["tkhd"], trak.dataStart, trak.end);
		const mdhd = findBox(view, ["mdia", "mdhd"], trak.dataStart, trak.end);
		if (!tkhd || !mdhd) return void 0;
		return {
			trackId: view.getUint32(tkhd.dataStart + 4 + (readFullBoxVersion(view, tkhd.dataStart) === 1 ? 16 : 8)),
			timescale: readMdhdTimescale(view, mdhd)
		};
	}
}
/**
* `baseMediaDecodeTime` (in the track's media timescale) from the `traf` matching
* `trackId` (via `tfhd.track_id`) — required for muxed multi-`traf` segments.
* `undefined` if no matching `tfdt` exists.
*/
function readBaseMediaDecodeTime(mediaSegment, trackId) {
	const view = toDataView(mediaSegment);
	const moof = findBox(view, ["moof"]);
	if (!moof) return void 0;
	for (const traf of iterateBoxesOfType(view, "traf", moof.dataStart, moof.end)) {
		if (readTrafTrackId(view, traf) !== trackId) continue;
		const tfdt = findBox(view, ["tfdt"], traf.dataStart, traf.end);
		return tfdt ? readTfdtBaseMediaDecodeTime(view, tfdt) : void 0;
	}
}
/** `mdhd.timescale`: FullBox version(1)+flags(3) + dates (v0: 4+4, v1: 8+8) + timescale. */
function readMdhdTimescale(view, mdhd) {
	return view.getUint32(mdhd.dataStart + 4 + (readFullBoxVersion(view, mdhd.dataStart) === 1 ? 16 : 8));
}
/** `tfdt.baseMediaDecodeTime`: FullBox, then the value — v0: (4), v1: (8). */
function readTfdtBaseMediaDecodeTime(view, tfdt) {
	const at = tfdt.dataStart + 4;
	return readFullBoxVersion(view, tfdt.dataStart) === 1 ? Number(view.getBigUint64(at)) : view.getUint32(at);
}
/** `hdlr.handler_type` for a `trak`: FullBox version(1)+flags(3) + pre_defined(4) + handler_type(4). */
function readTrakHandler(view, trak) {
	const hdlr = findBox(view, ["mdia", "hdlr"], trak.dataStart, trak.end);
	return hdlr ? readFourCC(view, hdlr.dataStart + 8) : void 0;
}
/** `tfhd.track_id` for a `traf`: FullBox version(1)+flags(3) + track_id(4). */
function readTrafTrackId(view, traf) {
	const tfhd = findBox(view, ["tfhd"], traf.dataStart, traf.end);
	return tfhd ? view.getUint32(tfhd.dataStart + 4) : void 0;
}
//#endregion
export { findMediaTrack, readBaseMediaDecodeTime };

//# sourceMappingURL=timestamp-origin.js.map
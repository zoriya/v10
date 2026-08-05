import Hls from "hls.js";
//#region src/dom/hls-js/media-tracks.ts
function getLevelKey(level) {
	return `${level.url[0] ?? ""}|${level.width}x${level.height}|${level.videoCodec}|${level.bitrate}`;
}
/**
* Mirrors hls.js manifest levels and alternate audio into the media element's
* `videoRenditions` / `audioTracks` lists, and wires user selection back to
* `engine.nextLevel` and `engine.audioTrack`.
*
* Requires the media-tracks mixin (track-list infrastructure) to be applied
* earlier in the chain so the host exposes `addVideoTrack`, `videoRenditions`,
* and friends.
*/
function HlsJsMediaMediaTracksMixin(BaseClass) {
	class HlsJsMediaMediaTracks extends BaseClass {
		#levelIdMap = /* @__PURE__ */ new Map();
		#currentVideoTrack = null;
		constructor(...args) {
			super(...args);
			const { engine } = this;
			if (!engine) return;
			engine.on(Hls.Events.MANIFEST_PARSED, this.#onManifestParsed);
			engine.on(Hls.Events.AUDIO_TRACKS_UPDATED, this.#onAudioTracksUpdated);
			engine.on(Hls.Events.AUDIO_TRACK_SWITCHING, this.#onAudioTrackSwitched);
			engine.on(Hls.Events.AUDIO_TRACK_SWITCHED, this.#onAudioTrackSwitched);
			engine.on(Hls.Events.LEVELS_UPDATED, this.#onLevelsUpdated);
			engine.on(Hls.Events.LEVEL_SWITCHED, this.#onLevelSwitched);
			engine.once(Hls.Events.DESTROYING, this.#teardown);
			this.audioTracks.addEventListener("change", this.#switchAudioTrack);
			this.videoRenditions.addEventListener("change", this.#switchRendition);
		}
		#onManifestParsed = (_event, data) => {
			this.#removeAllMediaTracks();
			this.#levelIdMap.clear();
			const videoTrack = this.addVideoTrack("main");
			this.#currentVideoTrack = videoTrack;
			videoTrack.selected = true;
			for (const [id, level] of data.levels.entries()) {
				const rendition = videoTrack.addRendition(level.url[0] ?? "", level.width, level.height, level.videoCodec, level.bitrate);
				this.#levelIdMap.set(getLevelKey(level), `${id}`);
				rendition.id = `${id}`;
			}
		};
		#onAudioTracksUpdated = (_event, data) => {
			if (this.#audioTracksMatch(data.audioTracks)) return;
			this.#removeAudioTracks();
			for (const hlsAudioTrack of data.audioTracks) {
				const kind = hlsAudioTrack.default ? "main" : "alternative";
				const audioTrack = this.addAudioTrack(kind, hlsAudioTrack.name, hlsAudioTrack.lang);
				audioTrack.id = `${hlsAudioTrack.id}`;
			}
		};
		#onAudioTrackSwitched = (_event, data) => {
			const selectedId = `${data.id}`;
			for (const track of this.audioTracks) track.enabled = track.id === selectedId;
		};
		#audioTracksMatch(incoming) {
			const current = [...this.audioTracks];
			if (current.length !== incoming.length) return false;
			return incoming.every((hlsAudioTrack, index) => {
				const existing = current[index];
				return existing?.id === `${hlsAudioTrack.id}` && existing.label === (hlsAudioTrack.name ?? "") && existing.language === (hlsAudioTrack.lang ?? "");
			});
		}
		#switchAudioTrack = () => {
			const { engine } = this;
			if (!engine) return;
			const enabledTracks = [...this.audioTracks].filter((track) => track.enabled);
			const selectedTrack = enabledTracks.find((track) => Number(track.id) !== engine.audioTrack) ?? enabledTracks[0];
			if (!selectedTrack?.id) return;
			const audioTrackId = Number(selectedTrack.id);
			const availableIds = engine.audioTracks.map((track) => track.id);
			if (audioTrackId !== engine.audioTrack && availableIds.includes(audioTrackId)) engine.audioTrack = audioTrackId;
			for (const track of enabledTracks) if (track !== selectedTrack) track.enabled = false;
		};
		#onLevelsUpdated = (_event, data) => {
			if (!this.#currentVideoTrack) return;
			const levelIds = data.levels.map((level) => this.#levelIdMap.get(getLevelKey(level)));
			for (const rendition of this.videoRenditions) if (rendition.id && !levelIds.includes(rendition.id)) this.#currentVideoTrack.removeRendition(rendition);
		};
		#onLevelSwitched = (_event, data) => {
			const activeId = `${data.level}`;
			for (const rendition of this.videoRenditions) rendition.active = rendition.id === activeId;
		};
		#switchRendition = () => {
			const { engine } = this;
			if (!engine) return;
			const level = this.videoRenditions.selectedIndex;
			if (level !== engine.nextLevel) engine.nextLevel = level;
		};
		#teardown = () => {
			const { engine } = this;
			engine?.off(Hls.Events.MANIFEST_PARSED, this.#onManifestParsed);
			engine?.off(Hls.Events.AUDIO_TRACKS_UPDATED, this.#onAudioTracksUpdated);
			engine?.off(Hls.Events.AUDIO_TRACK_SWITCHING, this.#onAudioTrackSwitched);
			engine?.off(Hls.Events.AUDIO_TRACK_SWITCHED, this.#onAudioTrackSwitched);
			engine?.off(Hls.Events.LEVELS_UPDATED, this.#onLevelsUpdated);
			engine?.off(Hls.Events.LEVEL_SWITCHED, this.#onLevelSwitched);
			engine?.off(Hls.Events.DESTROYING, this.#teardown);
			this.audioTracks.removeEventListener("change", this.#switchAudioTrack);
			this.videoRenditions.removeEventListener("change", this.#switchRendition);
			this.#removeAllMediaTracks();
			this.#levelIdMap.clear();
			this.#currentVideoTrack = null;
		};
		#removeAllMediaTracks() {
			this.#removeVideoTracks();
			this.#removeAudioTracks();
		}
		#removeVideoTracks() {
			for (const videoTrack of this.videoTracks) this.removeVideoTrack(videoTrack);
		}
		#removeAudioTracks() {
			for (const audioTrack of this.audioTracks) this.removeAudioTrack(audioTrack);
		}
	}
	return HlsJsMediaMediaTracks;
}
//#endregion
export { HlsJsMediaMediaTracksMixin };

//# sourceMappingURL=media-tracks.js.map
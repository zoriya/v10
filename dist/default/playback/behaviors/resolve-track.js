import { computed, peek, update } from "../../core/signals/primitives.js";
import { defineBehavior } from "../../core/composition/create-composition.js";
import { ConcurrentRunner, Task } from "../../core/tasks/task.js";
import { createMachineReactor } from "../../core/reactors/create-machine-reactor.js";
import { isResolvedPresentation, isResolvedTrack } from "../../media/types/index.js";
import { applyContainerMimeType, findTrack, updateTrackInPresentation } from "../../media/utils/tracks.js";
import { AUDIO_TYPE_CONFIG, TEXT_TYPE_CONFIG, VIDEO_TYPE_CONFIG } from "../primitives/track-types.js";
import { NON_FMP4_CONTAINER_MIMES, parseMediaPlaylist } from "../../media/hls/parse-media-playlist.js";
import { fetchResolvableText } from "../../network/fetch.js";
import { failoverFetch } from "../primitives/failover-fetch.js";
//#region src/playback/behaviors/resolve-track.ts
function setupTrackResolution({ state, config: { selectedKey, findTrackToResolve, fetchResolvableText: fetchResolvableText$1 = fetchResolvableText } }) {
	const runner = new ConcurrentRunner();
	const derivedStateSignal = computed(() => isResolvedPresentation(state.presentation.get()) ? "presentation-resolved" : "presentation-unresolved");
	return createMachineReactor({
		initial: "presentation-unresolved",
		monitor: () => derivedStateSignal.get(),
		states: {
			"presentation-unresolved": {},
			"presentation-resolved": {
				entry: () => () => runner.abortAll(),
				effects: [() => {
					const presentation = peek(state.presentation);
					const trackId = state[selectedKey].get();
					if (!presentation || !trackId) return;
					const track = findTrackToResolve(presentation, trackId);
					if (!track || isResolvedTrack(track)) return;
					runner.schedule(new Task(async (signal) => {
						const mediaTrack = parseMediaPlaylist(await fetchResolvableText$1(track, { signal }), track);
						update(state.presentation, (current) => {
							if (!isResolvedPresentation(current)) return current;
							const patched = updateTrackInPresentation(current, mediaTrack);
							return NON_FMP4_CONTAINER_MIMES.has(mediaTrack.mimeType) ? applyContainerMimeType(patched, mediaTrack.type, mediaTrack.mimeType) : patched;
						});
					}, { id: track.id }));
				}]
			}
		}
	});
}
const VIDEO_TRACK_RESOLUTION_CONFIG = {
	...VIDEO_TYPE_CONFIG,
	findTrackToResolve: (presentation, trackId) => findTrack(presentation, "video", trackId)
};
const AUDIO_TRACK_RESOLUTION_CONFIG = {
	...AUDIO_TYPE_CONFIG,
	findTrackToResolve: (presentation, trackId) => findTrack(presentation, "audio", trackId)
};
const TEXT_TRACK_RESOLUTION_CONFIG = {
	...TEXT_TYPE_CONFIG,
	findTrackToResolve: (presentation, trackId) => findTrack(presentation, "text", trackId)
};
/**
* Resolve unresolved video tracks. Schedules a fetch task whenever the
* selected video track is partially resolved, parses the manifest, and
* writes the resolved track back into `state.presentation`.
*/
const resolveVideoTrack = defineBehavior({
	stateKeys: ["presentation", "selectedVideoTrackId"],
	contextKeys: [],
	setup: ({ state, config = {} }) => {
		const trackConfig = {
			...VIDEO_TRACK_RESOLUTION_CONFIG,
			...config
		};
		return setupTrackResolution({
			state,
			config: {
				...trackConfig,
				fetchResolvableText: failoverFetch(fetchResolvableText, state, trackConfig)
			}
		});
	}
});
/**
* Resolve unresolved audio tracks. Same shape as `resolveVideoTrack`,
* narrowed to audio.
*/
const resolveAudioTrack = defineBehavior({
	stateKeys: ["presentation", "selectedAudioTrackId"],
	contextKeys: [],
	setup: ({ state, config = {} }) => {
		const trackConfig = {
			...AUDIO_TRACK_RESOLUTION_CONFIG,
			...config
		};
		return setupTrackResolution({
			state,
			config: {
				...trackConfig,
				fetchResolvableText: failoverFetch(fetchResolvableText, state, trackConfig)
			}
		});
	}
});
/**
* Resolve unresolved text tracks. Same shape as `resolveVideoTrack`,
* narrowed to text.
*/
const resolveTextTrack = defineBehavior({
	stateKeys: ["presentation", "selectedTextTrackId"],
	contextKeys: [],
	setup: ({ state, config = {} }) => {
		const trackConfig = {
			...TEXT_TRACK_RESOLUTION_CONFIG,
			...config
		};
		return setupTrackResolution({
			state,
			config: {
				...trackConfig,
				fetchResolvableText: failoverFetch(fetchResolvableText, state, trackConfig)
			}
		});
	}
});
//#endregion
export { resolveAudioTrack, resolveTextTrack, resolveVideoTrack };

//# sourceMappingURL=resolve-track.js.map
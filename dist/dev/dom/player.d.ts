import { AnySlice, Slice, Store, UnionSliceState } from "@videojs/store";
import { Media, MediaAudioTrackState, MediaBufferState, MediaControlsState, MediaErrorState, MediaFullscreenState, MediaLiveState, MediaPictureInPictureState, MediaPlaybackRateState, MediaPlaybackState, MediaQualityState, MediaRemotePlaybackState, MediaSourceState, MediaTextTrackState, MediaTimeState, MediaVolumeState } from "@videojs/media";
//#region src/dom/player.d.ts
interface MediaContainer extends HTMLElement {}
interface PlayerTarget {
  media: Media;
  container: MediaContainer | null;
}
type PlayerFeature<State> = Slice<PlayerTarget, State>;
type AnyPlayerFeature = AnySlice<PlayerTarget>;
type PlayerStore<Features extends AnyPlayerFeature[] = []> = Store<PlayerTarget, UnionSliceState<Features>>;
type AnyPlayerStore = Store<PlayerTarget, object>;
type VideoFeatures = [PlayerFeature<MediaPlaybackState>, PlayerFeature<MediaPlaybackRateState>, PlayerFeature<MediaQualityState>, PlayerFeature<MediaAudioTrackState>, PlayerFeature<MediaVolumeState>, PlayerFeature<MediaTimeState>, PlayerFeature<MediaSourceState>, PlayerFeature<MediaBufferState>, PlayerFeature<MediaFullscreenState>, PlayerFeature<MediaPictureInPictureState>, PlayerFeature<MediaRemotePlaybackState>, PlayerFeature<MediaControlsState>, PlayerFeature<MediaTextTrackState>, PlayerFeature<MediaErrorState>];
type AudioFeatures = [PlayerFeature<MediaPlaybackState>, PlayerFeature<MediaPlaybackRateState>, PlayerFeature<MediaVolumeState>, PlayerFeature<MediaTimeState>, PlayerFeature<MediaSourceState>, PlayerFeature<MediaBufferState>, PlayerFeature<MediaErrorState>];
type BackgroundFeatures = [];
/**
 * Features for a live video player. Mirrors {@link VideoFeatures} but drops
 * the playback-rate feature (not meaningful for live) and adds
 * `PlayerFeature<MediaLiveState>` so the store exposes `liveEdgeStart` and
 * `targetLiveWindow`.
 */
type LiveVideoFeatures = [PlayerFeature<MediaPlaybackState>, PlayerFeature<MediaVolumeState>, PlayerFeature<MediaTimeState>, PlayerFeature<MediaSourceState>, PlayerFeature<MediaBufferState>, PlayerFeature<MediaFullscreenState>, PlayerFeature<MediaPictureInPictureState>, PlayerFeature<MediaRemotePlaybackState>, PlayerFeature<MediaControlsState>, PlayerFeature<MediaTextTrackState>, PlayerFeature<MediaErrorState>, PlayerFeature<MediaLiveState>];
/**
 * Features for a live audio player. Mirrors {@link AudioFeatures} but drops
 * the playback-rate feature (not meaningful for live) and adds
 * `PlayerFeature<MediaLiveState>` so the store exposes `liveEdgeStart` and
 * `targetLiveWindow`.
 */
type LiveAudioFeatures = [PlayerFeature<MediaPlaybackState>, PlayerFeature<MediaVolumeState>, PlayerFeature<MediaTimeState>, PlayerFeature<MediaSourceState>, PlayerFeature<MediaBufferState>, PlayerFeature<MediaErrorState>, PlayerFeature<MediaLiveState>];
type VideoPlayerStore = PlayerStore<VideoFeatures>;
type AudioPlayerStore = PlayerStore<AudioFeatures>;
type BackgroundPlayerStore = PlayerStore<BackgroundFeatures>;
type LiveVideoPlayerStore = PlayerStore<LiveVideoFeatures>;
type LiveAudioPlayerStore = PlayerStore<LiveAudioFeatures>;
//#endregion
export { AnyPlayerFeature, AnyPlayerStore, AudioFeatures, AudioPlayerStore, BackgroundFeatures, BackgroundPlayerStore, LiveAudioFeatures, LiveAudioPlayerStore, LiveVideoFeatures, LiveVideoPlayerStore, MediaContainer, PlayerFeature, PlayerStore, PlayerTarget, VideoFeatures, VideoPlayerStore };
//# sourceMappingURL=player.d.ts.map
//#region src/dom/store/selectors.d.ts
/** Select the audio track state (audioTrackList, selectAudioTrack). */
declare const selectAudioTrack: import("@videojs/store").Selector<object, import("@videojs/media").MediaAudioTrackState | undefined>;
/** Select the buffer state (buffered ranges, percent buffered). */
declare const selectBuffer: import("@videojs/store").Selector<object, import("@videojs/media").MediaBufferState | undefined>;
/** Select the controls state (controls visible, user-active). */
declare const selectControls: import("@videojs/store").Selector<object, import("@videojs/media").MediaControlsState | undefined>;
/** Select the error state (error, dismissed, dismissError). */
declare const selectError: import("@videojs/store").Selector<object, import("@videojs/media").MediaErrorState | undefined>;
/** Select the fullscreen state (fullscreen active, availability). */
declare const selectFullscreen: import("@videojs/store").Selector<object, import("@videojs/media").MediaFullscreenState | undefined>;
/** Select the live state (`liveEdgeStart`, `targetLiveWindow`). */
declare const selectLive: import("@videojs/store").Selector<object, import("@videojs/media").MediaLiveState | undefined>;
/** Select the PiP state (picture-in-picture active, availability). */
declare const selectPiP: import("@videojs/store").Selector<object, import("@videojs/media").MediaPictureInPictureState | undefined>;
/** Select the playback state (paused, ended, play, pause, toggle). */
declare const selectPlayback: import("@videojs/store").Selector<object, import("@videojs/media").MediaPlaybackState | undefined>;
/** Select the playback rate state (playbackRate, playbackRates, setPlaybackRate). */
declare const selectPlaybackRate: import("@videojs/store").Selector<object, import("@videojs/media").MediaPlaybackRateState | undefined>;
/** Select the quality state (videoRenditionList, activeVideoRendition, selectVideoRendition). */
declare const selectQuality: import("@videojs/store").Selector<object, import("@videojs/media").MediaQualityState | undefined>;
/** Select the remote playback state (remote playback connection state, availability). */
declare const selectRemotePlayback: import("@videojs/store").Selector<object, import("@videojs/media").MediaRemotePlaybackState | undefined>;
/** Select the source state (src, type). */
declare const selectSource: import("@videojs/store").Selector<object, import("@videojs/media").MediaSourceState | undefined>;
/** Select the stream type state (`'on-demand' | 'live' | 'unknown'`). */
declare const selectStreamType: import("@videojs/store").Selector<object, import("@videojs/media").MediaStreamTypeState | undefined>;
/** Select the text track state (chapters cues, thumbnail cues). */
declare const selectTextTrack: import("@videojs/store").Selector<object, import("@videojs/media").MediaTextTrackState | undefined>;
/** Select the time state (currentTime, duration, seek). */
declare const selectTime: import("@videojs/store").Selector<object, import("@videojs/media").MediaTimeState | undefined>;
/** Select the volume state (volume, muted, setVolume, setMuted). */
declare const selectVolume: import("@videojs/store").Selector<object, import("@videojs/media").MediaVolumeState | undefined>;
//#endregion
export { selectAudioTrack, selectBuffer, selectControls, selectError, selectFullscreen, selectLive, selectPiP, selectPlayback, selectPlaybackRate, selectQuality, selectRemotePlayback, selectSource, selectStreamType, selectTextTrack, selectTime, selectVolume };
//# sourceMappingURL=selectors.d.ts.map
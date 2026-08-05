//#region src/core/ui/input-feedback/status.d.ts
type InputActionSource = 'gesture' | 'hotkey';
type InputAction = 'togglePaused' | 'toggleMuted' | 'toggleFullscreen' | 'toggleSubtitles' | 'togglePictureInPicture' | 'toggleControls' | 'seekStep' | 'seekToPercent' | 'volumeStep' | 'speedUp' | 'speedDown' | (string & {});
type IndicatorDirection = 'forward' | 'backward';
type IndicatorVolumeLevel = 'off' | 'low' | 'high';
type IndicatorStatus = 'pause' | 'play' | 'volume-off' | 'volume-low' | 'volume-high' | 'captions-on' | 'captions-off' | 'fullscreen' | 'exit-fullscreen' | 'pip' | 'exit-pip';
interface InputActionEvent {
  action?: string | undefined;
  value?: number | undefined;
  source?: InputActionSource | undefined;
  key?: string | undefined;
}
interface MediaSnapshot {
  paused?: boolean | undefined;
  volume?: number | undefined;
  muted?: boolean | undefined;
  playbackRate?: number | undefined;
  fullscreen?: boolean | undefined;
  subtitlesShowing?: boolean | undefined;
  /** When false, caption toggles are unavailable and status feedback is suppressed. */
  subtitlesAvailable?: boolean | undefined;
  pip?: boolean | undefined;
  currentTime?: number | undefined;
  duration?: number | undefined;
  seeking?: boolean | undefined;
}
interface InputIndicatorLabels {
  muted: string;
  volume: string;
  captionsOn: string;
  captionsOff: string;
  paused: string;
  playing: string;
  fullscreen: string;
  exitFullscreen: string;
  pictureInPicture: string;
  exitPictureInPicture: string;
}
interface StatusAnnouncerLabels extends InputIndicatorLabels {
  volumeWithValue: (value: string) => string;
  seekedTo: (time: number) => string;
  playbackRate: (rate: string) => string;
}
interface StatusDetails {
  status: IndicatorStatus;
  label: string;
  value: string | null;
  volumeLevel: IndicatorVolumeLevel | null;
}
declare const DEFAULT_INPUT_INDICATOR_LABELS: InputIndicatorLabels;
declare const DEFAULT_STATUS_ANNOUNCER_LABELS: StatusAnnouncerLabels;
declare function isVolumeIndicatorAction(action: string | null | undefined): action is 'toggleMuted' | 'volumeStep';
declare function isSeekIndicatorAction(action: string | null | undefined): action is 'seekStep' | 'seekToPercent';
declare function deriveStatus(event: InputActionEvent, snapshot: MediaSnapshot, labels?: InputIndicatorLabels): StatusDetails | null;
declare function getVolumeLevel(volume: number): IndicatorVolumeLevel;
declare function formatVolumeValue(volume: number): string;
declare function formatPlaybackRateValue(rate: number): string;
declare function formatCurrentTime(snapshot: MediaSnapshot): string;
declare function formatSeekAnnouncerLabel(time: number, labels: StatusAnnouncerLabels): string;
declare function formatPlaybackRateAnnouncerLabel(rate: number, labels: StatusAnnouncerLabels): string;
declare function getStatusIndicatorDisplayValue(state: {
  value: string | null;
  label: string | null;
}): string;
declare function getVolumeIndicatorDisplayValue(state: {
  value: string | null;
}): string;
declare function getSeekIndicatorDisplayValue(state: {
  value: string | null;
  currentTime: string;
}): string;
declare function getSeekToPercent(event: InputActionEvent): number | null;
declare function getSeekDirection(event: InputActionEvent, snapshot: MediaSnapshot): IndicatorDirection | null;
declare function isInputActionIncluded(action: string | undefined, actions: readonly InputAction[] | undefined): boolean;
/** Predicted mute/volume after a volume-indicator action — shared by status derivation and boundary detection. */
interface VolumeActionPrediction {
  snapshotVolume: number;
  nextMuted: boolean;
  nextVolume: number;
}
declare function predictVolumeActionOutcome(event: InputActionEvent, snapshot: MediaSnapshot): VolumeActionPrediction;
/** Labels/value/level for volume actions — single source shared with `VolumeIndicatorCore`. */
declare function deriveVolumeStatus(event: InputActionEvent, snapshot: MediaSnapshot, labels?: InputIndicatorLabels, cachedPrediction?: VolumeActionPrediction): StatusDetails;
//#endregion
export { DEFAULT_INPUT_INDICATOR_LABELS, DEFAULT_STATUS_ANNOUNCER_LABELS, IndicatorDirection, IndicatorStatus, IndicatorVolumeLevel, InputAction, InputActionEvent, InputActionSource, InputIndicatorLabels, MediaSnapshot, StatusAnnouncerLabels, StatusDetails, VolumeActionPrediction, deriveStatus, deriveVolumeStatus, formatCurrentTime, formatPlaybackRateAnnouncerLabel, formatPlaybackRateValue, formatSeekAnnouncerLabel, formatVolumeValue, getSeekDirection, getSeekIndicatorDisplayValue, getSeekToPercent, getStatusIndicatorDisplayValue, getVolumeIndicatorDisplayValue, getVolumeLevel, isInputActionIncluded, isSeekIndicatorAction, isVolumeIndicatorAction, predictVolumeActionOutcome };
//# sourceMappingURL=status.d.ts.map
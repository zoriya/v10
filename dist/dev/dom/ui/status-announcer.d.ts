import { StatusAnnouncerCore } from "../../core/ui/input-feedback/status-announcer-core.js";
import { MediaSnapshotStore } from "./input-action.js";
//#region src/dom/ui/status-announcer.d.ts
interface StatusAnnouncerStore extends MediaSnapshotStore {
  readonly target: unknown | null;
  subscribe(callback: () => void): () => void;
}
declare function subscribeToStatusAnnouncer(store: StatusAnnouncerStore, core: StatusAnnouncerCore): () => void;
//#endregion
export { StatusAnnouncerStore, subscribeToStatusAnnouncer };
//# sourceMappingURL=status-announcer.d.ts.map
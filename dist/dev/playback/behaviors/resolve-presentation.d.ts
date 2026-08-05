import { MaybeResolvedPresentation, Presentation } from "../../media/types/index.js";
import "../../core/signals/primitives.js";
import "../../core/reactors/create-machine-reactor.js";
//#region src/playback/behaviors/resolve-presentation.d.ts
type ParsePresentation = (text: string, presentation: MaybeResolvedPresentation) => Presentation;
//#endregion
export { ParsePresentation };
//# sourceMappingURL=resolve-presentation.d.ts.map
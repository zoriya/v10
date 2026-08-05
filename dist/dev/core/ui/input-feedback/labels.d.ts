import { Translator } from "../../i18n/translator.js";
import "../../../i18n.js";
import { InputIndicatorLabels, StatusAnnouncerLabels } from "./status.js";
//#region src/core/ui/input-feedback/labels.d.ts
/** Maps i18n indicator keys to {@link InputIndicatorLabels} for status / volume feedback. */
declare function createInputIndicatorLabels(translator: Translator): InputIndicatorLabels;
/** Adds the parameterized labels used by status announcements. */
declare function createStatusAnnouncerLabels(translator: Translator, locale?: string): StatusAnnouncerLabels;
//#endregion
export { createInputIndicatorLabels, createStatusAnnouncerLabels };
//# sourceMappingURL=labels.d.ts.map
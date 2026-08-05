import "../../core/signals/primitives.js";
import "../../core/composition/create-composition.js";
import { DeriveStartMediaTime, DeriveStartMediaTimeContext } from "../primitives/derive-start-media-time.js";
//#region src/playback/behaviors/establish-start-media-time.d.ts
/**
 * The **default** — relocate the whole presentation by one shared origin: the `min`
 * across the *selected* A/V tracks' own origins, denormalized onto every type. This
 * single reduce subsumes the "per-type" and "shared" tiers:
 * - **aligned A/V** — `min` equals each origin (they're equal), so it matches per-type;
 * - **skewed A/V** (e.g. Apple's 44ms audio-lead) — `min` keeps every track's earliest
 *   DTS ≥ 0 (relocating by ≤ each own origin never drives one negative) *and* preserves
 *   the real skew (per-type would flatten it, desyncing A/V);
 * - **single type / muxed** — `min` of the one origin is that origin.
 *
 * Returns `undefined` for every type until all *selected* types have a complete origin
 * (the shared-`min` barrier). Which types must contribute is read from `ctx` (the
 * selected v/a ids); with no selection context it coordinates across whatever types
 * have data. A shared origin below {@link NEAR_ZERO_ORIGIN_THRESHOLD} is returned as `0`
 * (native — ordinary ~0-PTS VOD isn't relocated).
 */
declare const deriveSharedMinStartMediaTime: DeriveStartMediaTime;
/**
 * Coordination-axis *off* — each type relocates by its own origin, independently. Not
 * the default: it flattens real A/V skew (see {@link deriveSharedMinStartMediaTime}).
 * Kept as an opt-in for compositions that know their A/V is aligned and want to skip
 * the shared-`min` barrier (each type stamps as soon as its own origin is discovered).
 */
declare const derivePerTypeStartMediaTime: DeriveStartMediaTime;
//#endregion
export { type DeriveStartMediaTime, derivePerTypeStartMediaTime, deriveSharedMinStartMediaTime };
//# sourceMappingURL=establish-start-media-time.d.ts.map
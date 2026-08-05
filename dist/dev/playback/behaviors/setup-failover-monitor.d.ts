import "../../core/signals/primitives.js";
import "../../index.js";
//#region src/playback/behaviors/setup-failover-monitor.d.ts
/**
 * Failover policy: how long a CDN stays excluded after a failed fetch trips it.
 * Supplied via engine config.
 */
interface FailoverMonitorConfig {
  /** How long a tripped CDN stays excluded, in milliseconds. */
  cooldownMs: number;
}
//#endregion
export { FailoverMonitorConfig };
//# sourceMappingURL=setup-failover-monitor.d.ts.map
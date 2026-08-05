import { ConfigurablePlayerFeature } from "../../feature.js";
import { ScreenOrientationLockType } from "../../presentation/orientation.js";
import "../../../dom.js";
//#region src/dom/store/features/orientation-lock.d.ts
interface OrientationLockFeatureConfig {
  /** Screen orientation type to lock while fullscreen is active. */
  type?: ScreenOrientationLockType | undefined;
}
declare const orientationLockFeature: ConfigurablePlayerFeature<OrientationLockFeatureConfig, {}>;
//#endregion
export { OrientationLockFeatureConfig, orientationLockFeature };
//# sourceMappingURL=orientation-lock.d.ts.map
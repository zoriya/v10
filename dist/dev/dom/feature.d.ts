import { PlayerFeature, PlayerTarget } from "./player.js";
import { AttachContext, SliceConfig, StateContext } from "@videojs/store";
//#region src/dom/feature.d.ts
interface ConfigurablePlayerFeature<Config, State> extends PlayerFeature<State> {
  (config?: Config): PlayerFeature<State>;
}
interface ConfigurablePlayerFeatureConfig<Config, State> extends Omit<SliceConfig<PlayerTarget, State>, 'attach' | 'state'> {
  state: (ctx: StateContext<PlayerTarget>, config: Config) => State;
  attach?: (ctx: AttachContext<PlayerTarget, State>, config: Config) => void;
}
declare function definePlayerFeature<State>(config: SliceConfig<PlayerTarget, State>): PlayerFeature<State>;
declare function definePlayerFeature<Config, State>(config: ConfigurablePlayerFeatureConfig<Config, State>, defaultConfig: Config): ConfigurablePlayerFeature<Config, State>;
//#endregion
export { ConfigurablePlayerFeature, ConfigurablePlayerFeatureConfig, definePlayerFeature };
//# sourceMappingURL=feature.d.ts.map
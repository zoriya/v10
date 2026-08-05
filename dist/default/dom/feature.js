import { defineSlice } from "@videojs/store";
import { isUndefined } from "@videojs/utils/predicate";
//#region src/dom/feature.ts
const definePlayerSlice = defineSlice();
function definePlayerFeature(config, defaultConfig) {
	if (arguments.length === 1) return definePlayerSlice(config);
	const { name, state, attach } = config;
	const forConfig = (featureConfig) => definePlayerSlice({
		...isUndefined(name) ? {} : { name },
		state: (ctx) => state(ctx, featureConfig),
		...attach ? { attach: (ctx) => attach(ctx, featureConfig) } : {}
	});
	const defaultFeature = forConfig(defaultConfig);
	const feature = ((featureConfig) => isUndefined(featureConfig) ? defaultFeature : forConfig(featureConfig));
	feature.state = defaultFeature.state;
	if (defaultFeature.attach) feature.attach = defaultFeature.attach;
	if (!isUndefined(name)) Object.defineProperty(feature, "name", { value: name });
	return feature;
}
//#endregion
export { definePlayerFeature };

//# sourceMappingURL=feature.js.map
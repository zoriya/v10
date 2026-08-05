//#region src/dom/mux/env.ts
const getEnvPlayerVersion = () => {
	try {
		return "10.0.0-beta.26";
	} catch {}
	return "UNKNOWN";
};
const player_version = getEnvPlayerVersion();
const getPlayerVersion = () => player_version;
//#endregion
export { getPlayerVersion };

//# sourceMappingURL=env.js.map
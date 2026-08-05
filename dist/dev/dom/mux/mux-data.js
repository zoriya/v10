import { Hls } from "../hls-js/media.js";
import { getPlayerVersion } from "./env.js";
import Mux from "mux-embed";
//#region src/dom/mux/mux-data.ts
const muxDataDefaultProps = {
	MuxDataSdk: Mux,
	beaconCollectionDomain: void 0,
	debug: false,
	disableCookies: false,
	envKey: void 0,
	playerSoftwareName: void 0,
	playerSoftwareVersion: getPlayerVersion(),
	playerInitTime: void 0,
	metadata: void 0
};
const MUX_VIDEO_DOMAIN = "mux.com";
var MuxData = class {
	#MuxDataSdk = muxDataDefaultProps.MuxDataSdk;
	#pendingInitialize = null;
	#beaconCollectionDomain = muxDataDefaultProps.beaconCollectionDomain;
	#debug = muxDataDefaultProps.debug;
	#disableCookies = muxDataDefaultProps.disableCookies;
	#metadata = muxDataDefaultProps.metadata;
	#envKey = muxDataDefaultProps.envKey;
	#playerSoftwareName = muxDataDefaultProps.playerSoftwareName;
	#playerSoftwareVersion = muxDataDefaultProps.playerSoftwareVersion;
	#playerInitTime = this.#generatePlayerInitTime();
	#media = null;
	#target = null;
	constructor(props = {}) {
		Object.assign(this, props);
	}
	setMedia(media) {
		if (this.#media === media) return;
		this.#media?.removeEventListener("loadstart", this.#reinitialize);
		this.#media = media;
		this.#media.addEventListener("loadstart", this.#reinitialize);
	}
	attach(target) {
		this.#target = target;
		this.#reinitialize();
	}
	detach() {
		if (this.#target?.mux) {
			this.#target.mux.destroy();
			delete this.#target.mux;
		}
		this.#target = null;
	}
	destroy() {
		this.detach();
		this.#media?.removeEventListener("loadstart", this.#reinitialize);
		this.#media = null;
	}
	get MuxDataSdk() {
		return this.#MuxDataSdk;
	}
	set MuxDataSdk(value) {
		if (this.#MuxDataSdk === value) return;
		this.#MuxDataSdk = value;
		this.#reinitialize();
	}
	get beaconCollectionDomain() {
		return this.#beaconCollectionDomain;
	}
	set beaconCollectionDomain(value) {
		if (this.#beaconCollectionDomain === value) return;
		this.#beaconCollectionDomain = value;
		this.#reinitialize();
	}
	get debug() {
		return this.#debug;
	}
	set debug(value) {
		if (this.#debug === value) return;
		this.#debug = value;
		this.#reinitialize();
	}
	get disableCookies() {
		return this.#disableCookies;
	}
	set disableCookies(value) {
		if (this.#disableCookies === value) return;
		this.#disableCookies = value;
		this.#reinitialize();
	}
	/**
	* Mux Data environment key. Omitted from the beacon when unset, which is the
	* norm for Mux-hosted playback: the view reports the Mux playback ID as its
	* `video_id` (see {@link toVideoId}) and Mux attributes it to the owning
	* environment. Set this to monitor sources Mux doesn't host.
	*/
	get envKey() {
		return this.#envKey;
	}
	set envKey(value) {
		if (this.#envKey === value) return;
		this.#envKey = value;
		this.#target?.mux?.updateData(value ? { env_key: value } : {});
	}
	get playerSoftwareName() {
		return this.#playerSoftwareName;
	}
	set playerSoftwareName(value) {
		if (this.#playerSoftwareName === value) return;
		this.#playerSoftwareName = value;
		this.#target?.mux?.updateData(value ? { player_software_name: value } : {});
	}
	get playerSoftwareVersion() {
		return this.#playerSoftwareVersion;
	}
	set playerSoftwareVersion(value) {
		if (this.#playerSoftwareVersion === value) return;
		this.#playerSoftwareVersion = value;
		this.#target?.mux?.updateData(value ? { player_software_version: value } : {});
	}
	get playerInitTime() {
		return this.#playerInitTime;
	}
	set playerInitTime(value) {
		if (this.#playerInitTime === value) return;
		this.#playerInitTime = value;
		this.#target?.mux?.updateData(value ? { player_init_time: value } : {});
	}
	get metadata() {
		return this.#metadata;
	}
	set metadata(value) {
		if (this.#metadata === value) return;
		this.#metadata = value;
		this.#target?.mux?.updateData(value ? { ...value } : {});
	}
	#reinitialize = () => {
		if (this.#target?.mux) {
			this.#target.mux.destroy();
			delete this.#target.mux;
		}
		this.#initialize();
	};
	async #initialize() {
		if (this.#pendingInitialize) return;
		await (this.#pendingInitialize = Promise.resolve());
		this.#pendingInitialize = null;
		const target = this.#target;
		const media = this.#media;
		if (!this.MuxDataSdk || !target || !media || target.mux && !target.mux.deleted) return;
		const { debug, beaconCollectionDomain, disableCookies, envKey: env_key, playerSoftwareName: player_software_name, playerSoftwareVersion: player_software_version, playerInitTime: player_init_time, metadata = {} } = this;
		const { engine: hlsjs } = media;
		const { view_session_id = this.MuxDataSdk?.utils.generateUUID() } = metadata;
		const video_id = toVideoId({
			metadata,
			src: media.src
		});
		metadata.view_session_id = view_session_id;
		if (video_id) metadata.video_id = video_id;
		this.MuxDataSdk?.monitor(target, {
			debug,
			...beaconCollectionDomain ? { beaconCollectionDomain } : {},
			...disableCookies ? { disableCookies } : {},
			...hlsjs ? { hlsjs } : {},
			Hls,
			data: {
				...env_key ? { env_key } : {},
				...player_software_name ? { player_software_name } : {},
				...player_software_name ? { player_software: player_software_name } : {},
				...player_software_version ? { player_software_version } : {},
				...player_init_time ? { player_init_time } : {},
				...metadata
			}
		});
	}
	#generatePlayerInitTime() {
		if (!this.MuxDataSdk) return void 0;
		return this.MuxDataSdk.utils.now();
	}
};
function toVideoId(props) {
	if (props.metadata?.video_id) return props.metadata.video_id;
	if (!isMuxVideoSrc(props)) return props.src;
	return toPlaybackIdFromSrc(props.src) ?? props.src;
}
function toPlaybackIdFromSrc(src) {
	if (!src?.startsWith("https://stream.")) return void 0;
	const [playbackId] = new URL(src).pathname.slice(1).split(/\.m3u8|\//);
	return playbackId || void 0;
}
function isMuxVideoSrc({ src }) {
	if (typeof src !== "string") return false;
	const base = window?.location.href;
	return new URL(src, base).hostname.toLocaleLowerCase().includes(MUX_VIDEO_DOMAIN);
}
//#endregion
export { MuxData, muxDataDefaultProps };

//# sourceMappingURL=mux-data.js.map
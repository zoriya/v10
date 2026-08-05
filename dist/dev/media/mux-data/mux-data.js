"use client";
import { useMediaComponent } from "../../utils/use-media-component.js";
import { useSyncProps } from "../../utils/use-sync-props.js";
import { MuxData, muxDataDefaultProps } from "@videojs/media/dom/mux";
//#region src/media/mux-data/mux-data.tsx
/**
* Adds [Mux Data](https://www.mux.com/data) monitoring to the surrounding
* player's media.
*
* Renders nothing — place it inside the player provider as a sibling of the
* media component (e.g. `<MuxVideo />`) and it registers a `MuxData` media
* component with the active media.
*
* Mux-hosted playback needs no `envKey`: the view reports the Mux playback ID
* as its `video_id`, which Mux attributes to the owning environment. Set
* `envKey` to monitor sources Mux doesn't host.
*
* @example
* ```tsx
* <Player.Provider>
*   <MuxVideo source={{ playbackId: 'abc123' }} />
*   <MuxData playerSoftwareName="mux-video" />
* </Player.Provider>
* ```
*/
function MuxData$1(props) {
	const component = useMediaComponent(MuxData);
	const { MuxDataSdk, ...rest } = props;
	const sdk = "MuxDataSdk" in props ? MuxDataSdk : muxDataDefaultProps.MuxDataSdk;
	if (component.MuxDataSdk !== sdk) component.MuxDataSdk = sdk;
	useSyncProps(component, rest, muxDataDefaultProps);
	return null;
}
//#endregion
export { MuxData$1 as MuxData };

//# sourceMappingURL=mux-data.js.map
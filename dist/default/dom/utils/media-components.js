//#region src/dom/utils/media-components.ts
const componentRegistry = /* @__PURE__ */ new WeakMap();
function getMediaComponents(host) {
	let map = componentRegistry.get(host);
	if (!map) componentRegistry.set(host, map = /* @__PURE__ */ new Map());
	return map;
}
function addMediaComponent(host, component) {
	const components = getMediaComponents(host);
	const ctor = component.constructor;
	const previous = components.get(ctor);
	if (previous && previous !== component) previous.detach?.();
	components.set(ctor, component);
	component.setMedia?.(host);
	if (host.target) component.attach?.(host.target);
	return () => {
		if (components.get(ctor) === component) {
			component.detach?.();
			components.delete(ctor);
		}
	};
}
function getMediaProp(host, prop) {
	return getMediaOwner(host, prop)?.[prop];
}
function setMediaProp(host, prop, value) {
	const own = getMediaOwner(host, prop);
	if (own) own[prop] = value;
}
/** Find the object that owns a media property: the first component `override` exposing it, otherwise the attached target. */
function getMediaOwner(host, prop) {
	for (const component of getMediaComponents(host).values()) {
		const override = component.targetOverride;
		if (override?.[prop] !== void 0) return override;
	}
	return host.target;
}
//#endregion
export { addMediaComponent, getMediaComponents, getMediaOwner, getMediaProp, setMediaProp };

//# sourceMappingURL=media-components.js.map
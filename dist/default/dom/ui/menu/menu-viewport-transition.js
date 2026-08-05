import { TransitionDataAttrs } from "../../../core/ui/transition.js";
import { PopoverCSSVars } from "../../../core/ui/popover/popover-css-vars.js";
import { forceLayout } from "../../utils/layout.js";
import { resolveCSSLength } from "@videojs/utils/dom";
//#region src/dom/ui/menu/menu-viewport-transition.ts
const DEFAULT_MIN_WIDTH = 160;
const VIEW_ATTR = "data-menu-view";
const VIEW_STATE_ATTR = "data-menu-view-state";
const VIEW_ACTIVE_STATE = "active";
const VIEW_INACTIVE_STATE = "inactive";
const ROOT_VIEW_ATTR = "data-menu-root-view";
const VIEWPORT_ATTR = "data-menu-viewport";
const VIEW_LAYOUT_ATTRS = ["data-availability"];
const WIDTH_VAR = "--media-menu-width";
const HEIGHT_VAR = "--media-menu-height";
const VIEW_MEASURE_STYLE_PROPERTIES = [
	"position",
	"top",
	"right",
	"bottom",
	"left",
	"width",
	"height",
	"min-width",
	"max-width"
];
const viewportTransitionStates = /* @__PURE__ */ new WeakMap();
function getMenuViewportAttrs() {
	return { "data-menu-viewport": "" };
}
function getMenuRootViewAttrs() {
	return {
		"data-menu-root-view": "",
		"data-menu-view": ""
	};
}
function getViewportTransitionState(content) {
	let state = viewportTransitionStates.get(content);
	if (!state) {
		state = {
			pending: null,
			phaseKeys: /* @__PURE__ */ new WeakMap()
		};
		viewportTransitionStates.set(content, state);
	}
	return state;
}
function getMenuViewportElement(content) {
	if (!content) return null;
	return content.querySelector(`:scope > [${VIEWPORT_ATTR}]`) ?? content;
}
function getViewportElement(content, view) {
	const viewport = getMenuViewportElement(content);
	if (viewport && viewport !== content) return viewport;
	if (view?.parentElement && content.contains(view.parentElement)) return view.parentElement;
	return content;
}
function getRootViewElement(viewport) {
	return viewport.querySelector(`:scope > [${ROOT_VIEW_ATTR}]`);
}
function getActiveViewElement(viewport) {
	return Array.from(viewport.children).find((child) => child instanceof HTMLElement && child.hasAttribute(VIEW_ATTR) && !child.hasAttribute(ROOT_VIEW_ATTR) && !child.hidden && !child.hasAttribute(TransitionDataAttrs.transitionEnding)) ?? null;
}
function resolveMinWidth(options) {
	return options?.minWidth ?? DEFAULT_MIN_WIDTH;
}
function resolveAvailableWidth(content, options) {
	const inlineWidth = content.style.getPropertyValue(PopoverCSSVars.availableWidth);
	const value = options?.availableWidth || inlineWidth || getComputedStyle(content).getPropertyValue(PopoverCSSVars.availableWidth);
	const width = typeof value === "number" ? value : resolveCSSLength(content, value);
	return Number.isFinite(width) && width > 0 ? width : null;
}
function snapshotInlineStyle(element) {
	return VIEW_MEASURE_STYLE_PROPERTIES.map((property) => ({
		property,
		value: element.style.getPropertyValue(property),
		priority: element.style.getPropertyPriority(property)
	}));
}
function restoreInlineStyle(element, snapshot) {
	for (const { property, value, priority } of snapshot) if (value) element.style.setProperty(property, value, priority);
	else element.style.removeProperty(property);
}
function measureViews(content, views, minWidth, options) {
	const snapshots = views.map((view) => ({
		view,
		snapshot: snapshotInlineStyle(view)
	}));
	const availableWidth = resolveAvailableWidth(content, options);
	try {
		for (const { view } of snapshots) {
			view.style.setProperty("position", "absolute");
			view.style.setProperty("top", "0px");
			view.style.setProperty("right", "auto");
			view.style.setProperty("bottom", "auto");
			view.style.setProperty("left", "0px");
			view.style.setProperty("width", "max-content");
			view.style.setProperty("height", "auto");
			view.style.setProperty("min-width", `${minWidth}px`);
			view.style.setProperty("max-width", "none");
		}
		const sizes = snapshots.map(({ view }) => {
			const rect = view.getBoundingClientRect();
			const naturalWidth = Math.ceil(Math.max(minWidth, rect.width, view.scrollWidth));
			return {
				view,
				rect,
				naturalWidth,
				width: Math.ceil(availableWidth ? Math.max(minWidth, Math.min(naturalWidth, availableWidth)) : naturalWidth)
			};
		});
		const constrained = sizes.filter((size) => size.width !== size.naturalWidth);
		for (const { view, width } of constrained) {
			view.style.setProperty("width", `${width}px`);
			view.style.setProperty("max-width", `${width}px`);
		}
		for (const size of constrained) size.rect = size.view.getBoundingClientRect();
		return sizes.map((size) => ({
			width: size.width,
			height: Math.ceil(Math.max(size.rect.height, size.view.scrollHeight))
		}));
	} finally {
		for (const { view, snapshot } of snapshots) restoreInlineStyle(view, snapshot);
	}
}
function measureView(content, view, minWidth, options) {
	return measureViews(content, [view], minWidth, options)[0];
}
function setViewportSize(content, size) {
	content.style.setProperty(WIDTH_VAR, `${size.width}px`);
	content.style.setProperty(HEIGHT_VAR, `${size.height}px`);
}
function setViewState(view, state) {
	view.setAttribute(VIEW_STATE_ATTR, state);
	if (state === VIEW_ACTIVE_STATE) view.setAttribute("data-open", "");
	else view.removeAttribute("data-open");
}
function prepareEnteringView(content, rootView, entering, minWidth, availableWidth, options) {
	const [fromSize, toSize] = measureViews(content, [rootView, entering], minWidth, options);
	return {
		entering,
		availableWidth,
		fromSize,
		toSize
	};
}
function prepareEnteringTransition(content, rootView, entering, state, options) {
	const pending = prepareEnteringView(content, rootView, entering, resolveMinWidth(options), resolveAvailableWidth(content, options), options);
	state.pending = pending;
	setViewState(rootView, VIEW_ACTIVE_STATE);
	setViewportSize(content, pending.fromSize);
	forceLayout(content);
}
function startEnteringView(content, rootView, entering, state, options) {
	const minWidth = resolveMinWidth(options);
	const availableWidth = resolveAvailableWidth(content, options);
	const current = state.pending?.entering === entering && state.pending.availableWidth === availableWidth ? state.pending : prepareEnteringView(content, rootView, entering, minWidth, availableWidth, options);
	state.pending = null;
	setViewportSize(content, current.fromSize);
	forceLayout(rootView);
	setViewState(rootView, VIEW_INACTIVE_STATE);
	forceLayout(rootView);
	setViewportSize(content, current.toSize);
}
function startExitingView(content, rootView, exiting, transitionState, options) {
	transitionState.pending = null;
	const minWidth = resolveMinWidth(options);
	const [fromSize, toSize] = measureViews(content, [exiting, rootView], minWidth, options);
	setViewportSize(content, fromSize);
	setViewState(rootView, VIEW_INACTIVE_STATE);
	forceLayout(rootView);
	setViewState(rootView, VIEW_ACTIVE_STATE);
	forceLayout(rootView);
	setViewportSize(content, toSize);
}
function syncMenuViewRoot(content, hasActiveChildView, options) {
	if (!content) return;
	const viewport = getViewportElement(content);
	const rootView = getRootViewElement(viewport);
	if (!rootView) return;
	const activeView = getActiveViewElement(viewport);
	if (activeView) {
		if (rootView.getAttribute(VIEW_STATE_ATTR) === VIEW_INACTIVE_STATE) setViewportSize(content, measureView(content, activeView, resolveMinWidth(options), options));
		return;
	}
	if (hasActiveChildView) return;
	const size = measureView(content, rootView, resolveMinWidth(options), options);
	setViewState(rootView, VIEW_ACTIVE_STATE);
	setViewportSize(content, size);
}
function observeMenuViewContent(content, onChange) {
	if (typeof MutationObserver === "undefined") return () => {};
	let rafId = 0;
	function scheduleChange() {
		cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(() => {
			rafId = 0;
			onChange();
		});
	}
	const observer = new MutationObserver((records) => {
		if (records.some((record) => {
			if (record.type !== "attributes") return true;
			const name = record.attributeName;
			if (!name) return true;
			return record.oldValue !== record.target.getAttribute(name);
		})) scheduleChange();
	});
	observer.observe(content, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeOldValue: true,
		attributeFilter: VIEW_LAYOUT_ATTRS
	});
	return () => {
		cancelAnimationFrame(rafId);
		observer.disconnect();
	};
}
function syncMenuViewTransition(content, view, viewState, options) {
	if (!content || !view) return;
	const viewport = getViewportElement(content, view);
	const rootView = getRootViewElement(viewport);
	if (!rootView) return;
	const state = getViewportTransitionState(content);
	const phaseKey = `${viewState.phase}:${viewState.direction}`;
	const previousPhaseKey = state.phaseKeys.get(view);
	const shouldResyncActiveView = viewState.phase === "active" && rootView.getAttribute(VIEW_STATE_ATTR) !== VIEW_INACTIVE_STATE;
	if (previousPhaseKey === phaseKey && !shouldResyncActiveView) return;
	state.phaseKeys.set(view, phaseKey);
	if (viewState.phase === "hidden") {
		if (!previousPhaseKey || previousPhaseKey.startsWith("hidden:")) return;
		syncMenuViewRoot(content, getActiveViewElement(viewport) !== null, options);
		return;
	}
	if (viewState.phase === "entering") {
		prepareEnteringTransition(content, rootView, view, state, options);
		return;
	}
	if (viewState.phase === "active") {
		startEnteringView(content, rootView, view, state, options);
		return;
	}
	startExitingView(content, rootView, view, state, options);
}
//#endregion
export { getMenuRootViewAttrs, getMenuViewportAttrs, getMenuViewportElement, observeMenuViewContent, syncMenuViewRoot, syncMenuViewTransition };

//# sourceMappingURL=menu-viewport-transition.js.map
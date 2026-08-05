import { jsx, jsxs } from "react/jsx-runtime";
//#region ../icons/dist/react/minimal/cast-exit.js
const CastExitIcon = (props) => /* @__PURE__ */ jsxs("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 18,
	height: 18,
	fill: "none",
	"aria-hidden": "true",
	viewBox: "0 0 18 18",
	...props,
	children: [
		/* @__PURE__ */ jsx("rect", {
			width: 12,
			height: 8,
			x: 3,
			y: 5,
			fill: "currentColor",
			rx: 1
		}),
		/* @__PURE__ */ jsx("rect", {
			width: 16.5,
			height: 12.5,
			x: .75,
			y: 2.75,
			stroke: "currentColor",
			strokeWidth: 1.5,
			rx: 2.25
		}),
		/* @__PURE__ */ jsx("circle", {
			cy: 16,
			r: 7.5,
			fill: "#fff"
		}),
		/* @__PURE__ */ jsx("mask", {
			id: "a",
			width: 8,
			height: 8,
			x: 0,
			y: 8,
			maskUnits: "userSpaceOnUse",
			style: { maskType: "alpha" },
			children: /* @__PURE__ */ jsx("rect", {
				width: 8,
				height: 8,
				y: 8,
				fill: "#fff",
				rx: .5
			})
		}),
		/* @__PURE__ */ jsxs("g", {
			mask: "url(#a)",
			children: [
				/* @__PURE__ */ jsx("circle", {
					cy: 16,
					r: 3.25,
					stroke: "currentColor",
					strokeWidth: 1.5
				}),
				/* @__PURE__ */ jsx("circle", {
					cy: 16,
					r: 5.75,
					stroke: "currentColor",
					strokeWidth: 1.5
				}),
				/* @__PURE__ */ jsx("circle", {
					cy: 16,
					r: 1.5,
					fill: "currentColor"
				})
			]
		})
	]
});
//#endregion
export { CastExitIcon as default };

//# sourceMappingURL=cast-exit.js.map
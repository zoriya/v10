import { jsx, jsxs } from "react/jsx-runtime";
//#region ../icons/dist/react/minimal/cast-enter.js
const CastEnterIcon = (props) => /* @__PURE__ */ jsxs("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 18,
	height: 18,
	fill: "none",
	"aria-hidden": "true",
	viewBox: "0 0 18 18",
	...props,
	children: [
		/* @__PURE__ */ jsx("path", {
			fill: "currentColor",
			d: "M15.154 2.004A3 3 0 0 1 18 5v8l-.004.154a3 3 0 0 1-2.842 2.842L15 16H7.5q-.002-.772-.15-1.5H15a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 15 3.5H3A1.5 1.5 0 0 0 1.5 5v3.65A7.5 7.5 0 0 0 0 8.5V5a3 3 0 0 1 3-3h12z"
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
export { CastEnterIcon as default };

//# sourceMappingURL=cast-enter.js.map
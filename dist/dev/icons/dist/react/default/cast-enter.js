import { jsx, jsxs } from "react/jsx-runtime";
//#region ../icons/dist/react/default/cast-enter.js
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
			d: "M14.5 2A3.5 3.5 0 0 1 18 5.5v7l-.005.18a3.5 3.5 0 0 1-3.315 3.315L14.5 16h-7c0-.693-.096-1.363-.271-2H14.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 4h-11A1.5 1.5 0 0 0 2 5.5v3.271A7.5 7.5 0 0 0 0 8.5v-3A3.5 3.5 0 0 1 3.5 2z"
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
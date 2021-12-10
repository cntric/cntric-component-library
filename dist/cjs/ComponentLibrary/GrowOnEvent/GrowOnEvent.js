"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowOnEvent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const GrowOnEvent = ({ grow = false, style, scale = 1.05, children }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: Object.assign({ transition: "all .2s ease-in-out", transform: grow ? `scale(${scale})` : "none" }, style) }, { children: children }), void 0));
};
exports.GrowOnEvent = GrowOnEvent;

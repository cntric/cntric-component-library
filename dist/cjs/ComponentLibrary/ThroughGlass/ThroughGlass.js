"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThroughGlass = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThroughGlass = ({ glass = false, glassOpacity = ".95", style, children }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: Object.assign({ opacity: glass ? glassOpacity : "1.0" }, style) }, { children: children }), void 0));
};
exports.ThroughGlass = ThroughGlass;

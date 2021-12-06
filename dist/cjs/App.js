"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ComponentLibrary_1 = require("./ComponentLibrary");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Button" }, void 0), (0, jsx_runtime_1.jsx)(ComponentLibrary_1.Button, { children: "Hello world!" }, void 0), (0, jsx_runtime_1.jsx)("h2", { children: "Searchbar" }, void 0), (0, jsx_runtime_1.jsx)(ComponentLibrary_1.SearchbarDemo, {}, void 0)] }), void 0));
}
exports.default = App;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Searchbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("../Button");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_bootstrap_icons_1 = require("react-bootstrap-icons");
const color_1 = __importDefault(require("color"));
/**
 * @description
 */
const Searchbar = ({ primaryColor, secondaryColor, tertiaryColor, onChange, search, size, initString, style }) => {
    const [isSearching, setSearching] = (0, react_1.useState)(false);
    const handleSearch = () => __awaiter(void 0, void 0, void 0, function* () {
        setSearching(true);
        search && (yield search());
        setSearching(false);
    });
    const handleChange = (e) => onChange && onChange(e.target.value);
    const handleKeydown = (e) => {
        switch (e.key) {
            case "Enter": {
                handleSearch();
            }
        }
    };
    const [focus, setFocus] = (0, react_1.useState)(false);
    const handleFocus = () => {
        setFocus(true);
    };
    const handleBlur = () => {
        setFocus(false);
    };
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.InputGroup, Object.assign({ size: size, style: Object.assign({}, style) }, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.InputGroup.Text, Object.assign({ style: Object.assign({ borderColor: tertiaryColor, backgroundColor: focus ? (0, color_1.default)(primaryColor).lighten(1.5).hex() : secondaryColor, borderRight: "none", borderBottomRightRadius: 0, borderTopRightRadius: 0 }, style) }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_icons_1.Search, { color: focus ? primaryColor : tertiaryColor }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { className: `shadow-none`, onChange: handleChange, onKeyDown: handleKeydown, disabled: isSearching, onFocus: handleFocus, onBlur: handleBlur, autoFocus: true, size: size, style: Object.assign({ borderColor: tertiaryColor, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, backgroundColor: focus ? (0, color_1.default)(primaryColor).lighten(1.5).hex() : secondaryColor, color: focus ? primaryColor : tertiaryColor, outline: "none", borderLeft: "none" }, style), placeholder: `Search`, defaultValue: initString }, void 0), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ size: size, disabled: isSearching, loading: isSearching, action: search, label: "Search" }, { primaryColor, secondaryColor }), void 0)] }), void 0));
};
exports.Searchbar = Searchbar;

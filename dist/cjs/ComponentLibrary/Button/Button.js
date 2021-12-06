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
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const color_1 = __importDefault(require("color"));
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
/**
 * @description
 */
const Button = ({ label, primaryColor, secondaryColor, backgroundColor, children, invert = false, disabled = false, active = false, loading = false, size = undefined, action = (e) => __awaiter(void 0, void 0, void 0, function* () { return; }), onClick = (e) => { }, onMouseEnter = (e) => { }, onMouseLeave = (e) => { }, style }) => {
    const [isDisabled, setDisabled] = (0, react_1.useState)(disabled);
    const [isActive, setActive] = (0, react_1.useState)(active);
    const [isLoading, setLoading] = (0, react_1.useState)(loading);
    const [e, setE] = (0, react_1.useState)(undefined);
    (0, react_1.useEffect)(() => {
        if (isLoading) {
            action(e).then(() => {
                setDisabled(false);
                setLoading(false);
                setActive(false);
            });
        }
    });
    const invertedBackground = (0, color_1.default)(primaryColor).lighten(1 / (10 - (0, color_1.default)(primaryColor).contrast((0, color_1.default)(backgroundColor)))).hex();
    const handleClick = (e) => {
        onClick(e);
        setE(e);
        setDisabled(true);
        setLoading(true);
        setActive(true);
        setHovered(false);
    };
    const [isHovered, setHovered] = (0, react_1.useState)(false);
    const handleMouseEnter = (e) => {
        setHovered(true);
        onMouseEnter(e);
    };
    const handleMouseLeave = (e) => {
        setHovered(false);
        onMouseLeave(e);
    };
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Button, Object.assign({ onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, variant: `outline`, disabled: isDisabled || disabled, active: isActive || active, size: size, onClick: handleClick, style: Object.assign({ cursor: "pointer", transition: isHovered ? "all .1s ease-in-out" : "", display: "inline-block", color: isHovered ? secondaryColor : !invert ? primaryColor : secondaryColor, borderTop: `1px solid ${primaryColor}`, borderLeft: `1px solid ${primaryColor}`, borderBottom: `1px solid ${primaryColor}`, borderRight: `1px solid ${primaryColor}`, backgroundColor: isHovered ? primaryColor : invert ? invertedBackground : secondaryColor }, style) }, { children: [label || children, (0, jsx_runtime_1.jsx)("span", Object.assign({ style: { display: isLoading || loading ? "inline-block" : "none" } }, { children: "\u2002" }), void 0), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Spinner, { animation: "border", style: {
                    display: isLoading || loading ? "inline-block" : "none",
                    height: "15px",
                    width: "15px"
                } }, void 0)] }), void 0));
};
exports.Button = Button;

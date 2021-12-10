import { jsx as _jsx } from "react/jsx-runtime";
export const GrowOnEvent = ({ grow = false, style, scale = 1.05, children }) => {
    return (_jsx("div", { style: {
            transition: "all .2s ease-in-out",
            transform: grow ? `scale(${scale})` : "none",
            ...style
        }, children: children }, void 0));
};

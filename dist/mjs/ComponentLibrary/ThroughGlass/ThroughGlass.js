import { jsx as _jsx } from "react/jsx-runtime";
export const ThroughGlass = ({ glass = false, glassOpacity = ".95", style, children }) => {
    return (_jsx("div", { style: {
            opacity: glass ? glassOpacity : "1.0",
            ...style
        }, children: children }, void 0));
};

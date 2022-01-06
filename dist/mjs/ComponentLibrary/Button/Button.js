import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Color from "color";
import { useEffect, useState } from 'react';
import { Button as BootstrapButton, Spinner } from "react-bootstrap";
/**
 * @description
 */
export const Button = ({ label, primaryColor, secondaryColor, backgroundColor, children, invert = false, disabled = false, active = false, loading = false, size = undefined, action = async (e) => { return; }, onClick = (e) => { }, onMouseEnter = (e) => { }, onMouseLeave = (e) => { }, style }) => {
    const [isDisabled, setDisabled] = useState(disabled);
    const [isActive, setActive] = useState(active);
    const [isLoading, setLoading] = useState(loading);
    const [e, setE] = useState(undefined);
    useEffect(() => {
        if (isDisabled !== disabled)
            setDisabled(disabled);
    }, [disabled]);
    useEffect(() => {
        if (isLoading) {
            action(e).then(() => {
                setDisabled(false);
                setLoading(false);
                setActive(false);
            });
        }
    }, [isLoading]);
    const invertedBackground = Color(primaryColor).lighten(1 / (10 - Color(primaryColor).contrast(Color(backgroundColor)))).hex();
    const handleClick = (e) => {
        onClick(e);
        setE(e);
        setDisabled(true);
        setLoading(true);
        setActive(true);
        setHovered(false);
    };
    const [isHovered, setHovered] = useState(false);
    const handleMouseEnter = (e) => {
        setHovered(true);
        onMouseEnter(e);
    };
    const handleMouseLeave = (e) => {
        setHovered(false);
        onMouseLeave(e);
    };
    return (_jsxs(BootstrapButton, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, variant: `outline`, disabled: isDisabled || disabled, active: isActive || active, size: size, onClick: handleClick, style: {
            cursor: "pointer",
            transition: isHovered ? "all .1s ease-in-out" : "",
            display: "inline-block",
            position: "relative",
            color: isHovered ? secondaryColor : !invert ? primaryColor : secondaryColor,
            borderTop: `1px solid ${primaryColor}`,
            borderLeft: `1px solid ${primaryColor}`,
            borderBottom: `1px solid ${primaryColor}`,
            borderRight: `1px solid ${primaryColor}`,
            backgroundColor: isHovered ? primaryColor : invert ? invertedBackground : secondaryColor,
            ...style,
        }, children: [label || children, _jsx("span", { style: { display: isLoading || loading ? "inline-block" : "none" }, children: "\u2002" }, void 0), _jsx(Spinner, { animation: "border", style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    display: isLoading || loading ? "inline-block" : "none",
                    height: "15px",
                    width: "15px"
                } }, void 0)] }, void 0));
};

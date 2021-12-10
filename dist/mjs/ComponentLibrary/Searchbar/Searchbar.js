import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../Button";
import { useState } from 'react';
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import Color from "color";
/**
 * @description
 */
export const Searchbar = ({ primaryColor, secondaryColor, tertiaryColor, onChange, search, size, initString, style }) => {
    const [isSearching, setSearching] = useState(false);
    const handleSearch = async () => {
        setSearching(true);
        search && await search();
        setSearching(false);
    };
    const handleChange = (e) => onChange && onChange(e.target.value);
    const handleKeydown = (e) => {
        switch (e.key) {
            case "Enter": {
                handleSearch();
            }
        }
    };
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(true);
    };
    const handleBlur = () => {
        setFocus(false);
    };
    return (_jsxs(InputGroup, { size: size, style: {
            ...style
        }, children: [_jsx(InputGroup.Text, { style: {
                    borderColor: tertiaryColor,
                    backgroundColor: focus ? Color(primaryColor).lighten(1.5).hex() : secondaryColor,
                    borderRight: "none",
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                    ...style
                }, children: _jsx(Search, { color: focus ? primaryColor : tertiaryColor }, void 0) }, void 0), _jsx(Form.Control, { className: `shadow-none`, onChange: handleChange, onKeyDown: handleKeydown, disabled: isSearching, onFocus: handleFocus, onBlur: handleBlur, autoFocus: true, size: size, style: {
                    borderColor: tertiaryColor,
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,
                    backgroundColor: focus ? Color(primaryColor).lighten(1.5).hex() : secondaryColor,
                    color: focus ? primaryColor : tertiaryColor,
                    outline: "none",
                    borderLeft: "none",
                    ...style
                }, placeholder: `Search`, defaultValue: initString }, void 0), _jsx(Button, { size: size, disabled: isSearching, loading: isSearching, action: search, label: "Search", ...{ primaryColor, secondaryColor } }, void 0)] }, void 0));
};

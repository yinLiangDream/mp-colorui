import { Button, Input, ScrollView, Text, View } from "@tarojs/components";
import { pxTransform } from "@tarojs/taro";
import React, { useState } from "react";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../../lib/model";
import ClCard from "../card";
import ClSearchResult from "./searchResult";
import { classNames } from "../../lib";
import ClIcon from "../icon";
const ClSearchBar = (props) => {
    const { shape = "radius", fix = false, searchType = "button", leftIcons = [], bgColor = undefined, rightButtonColor = "white", rightTextColor = "black", placeholder = "请搜索", showLoading = false, showResult = false, result = [], autoFocus = false, clear = false, className = "", style = {}, onInput = () => { }, onClear = () => { }, onTouchResult = () => { }, onScrollToUpper = () => { }, onScrollToLower = () => { }, onBlur = () => { }, onFocus = () => { }, onSearch = () => { } } = props;
    const [showSearch, setShowSearch] = useState(false);
    const [value, setValue] = useState("");
    const onIconClick = (index) => {
        onIconClick && onIconClick(index);
    };
    const onInputSearch = (e) => {
        e.stopPropagation();
        onSearch && onSearch(value || "");
    };
    const onInputFocus = (e) => {
        onFocus && onFocus(value || "");
        setShowSearch(true);
        setValue(e.detail.value);
    };
    const onInputBlur = (e) => {
        onBlur && onBlur(value || "");
        setShowSearch(false);
        setValue(e.detail.value);
    };
    const onInputValue = (e) => {
        setValue(e.detail.value);
        onInput && onInput(e.detail.value);
    };
    const onPreventProp = (e) => {
        e.stopPropagation();
    };
    const bgColorClassName = bgColor ? BG_COLOR_LIST[bgColor] : "";
    const buttonColorClassName = rightButtonColor
        ? BG_COLOR_LIST[rightButtonColor]
        : "";
    const textColorClassName = rightTextColor
        ? TEXT_COLOR_LIST[rightTextColor]
        : "";
    const leftIconComponent = leftIcons
        ? leftIcons.map((item, index) => (React.createElement(View, { key: "key-" + index, className: `cu-avatar round cuIcon-${item}`, onClick: () => onIconClick(index) })))
        : "";
    const searchComponent = (React.createElement(View, { className: `search-form ${shape}` },
        React.createElement(Text, { className: "cuIcon-search" }),
        React.createElement(Input, { placeholder: placeholder, confirmType: "search", type: "text", onFocus: onInputFocus, onBlur: onInputBlur, focus: showSearch, adjustPosition: true, autoFocus: autoFocus, value: value, onConfirm: onInputSearch, onInput: onInputValue }),
        clear && value ? (React.createElement(View, { onClick: e => {
                e.stopPropagation();
                setValue("");
                onClear && onClear();
            } },
            React.createElement(ClIcon, { iconName: "close", size: 32, style: {
                    display: "flex",
                    alignItems: "center"
                } }))) : ("")));
    const buttonComponent = (React.createElement(View, { className: "action", onClick: onPreventProp },
        React.createElement(Button, { className: `cu-btn shadow-blur ${shape} ${buttonColorClassName} ${textColorClassName}`, onClick: onInputSearch }, "\u641C\u7D22")));
    const textComponent = (React.createElement(View, { className: "action", onClick: onPreventProp },
        React.createElement(Text, { className: `${textColorClassName}`, onClick: onInputSearch }, "\u641C\u7D22")));
    return (React.createElement(View, { style: fix ? { position: "fixed", top: "0", width: "100vw", zIndex: 10 } : "" },
        React.createElement(View, { className: classNames(`cu-bar ${bgColorClassName}`, className), style: Object.assign({ position: "relative" }, style) },
            leftIconComponent,
            searchComponent,
            searchType === "text"
                ? textComponent
                : searchType === "none"
                    ? ""
                    : buttonComponent,
            showResult ? (React.createElement(View, { style: {
                    position: "absolute",
                    width: "100%",
                    zIndex: 11,
                    top: pxTransform(100)
                } }, (result && result.length) || showLoading ? (React.createElement(ClCard, { shadow: false, bgColor: bgColor },
                React.createElement(ScrollView, { scrollY: true, style: { maxHeight: "300px" }, onScrollToLower: () => {
                        onScrollToLower && onScrollToLower();
                    }, onScrollToUpper: () => {
                        onScrollToUpper && onScrollToUpper();
                    } },
                    React.createElement(ClSearchResult, { result: result, showLoading: showLoading, onTouchResult: index => {
                            onTouchResult && onTouchResult(index);
                        } })))) : (""))) : (""))));
};
ClSearchBar.options = {
    addGlobalClass: true
};
export default ClSearchBar;
//# sourceMappingURL=index.js.map
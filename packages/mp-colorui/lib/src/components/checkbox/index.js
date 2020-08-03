import { Checkbox, CheckboxGroup, Text, View } from "@tarojs/components";
import React from 'react';
import ClCheckboxH5 from "./h5";
import { classNames, isWeApp } from "../../lib";

export default function ClCheckbox(props) {
    const colorClassName = props.color || "green";
    const type = props.type === "form" ? "form" : "";
    const shapeClassName = props.shape === "round" ? "round" : "";
    const directionClassName = props.direction === "horizontal" ? "flex" : "";
    const list = props.checkboxGroup ? props.checkboxGroup : [];
    const title = props.title;
    const checkboxComponent = list.map(item => (React.createElement(View, { className: "padding-xs", key: item.value },
        item.key ? React.createElement(Text, { className: "padding-right-sm" }, item.key) : "",
        React.createElement(Checkbox, { className: classNames([
                colorClassName,
                shapeClassName,
                {
                    more: props.more
                }
            ]), value: item.value || "", checked: item.checked, disabled: item.disabled }))));
    const formComponent = (React.createElement(View, { className: "cu-form-group" },
        React.createElement(View, { className: "title" }, title),
        React.createElement(View, { className: directionClassName }, checkboxComponent)));
    const change = e => {
        props.onChange && props.onChange(e.detail.value);
    };
    const component = !isWeApp ? (React.createElement(ClCheckboxH5, Object.assign({}, props))) : (React.createElement(CheckboxGroup, { className: `${type === "form" ? "block" : ""}`, onChange: change }, type === "form" ? (formComponent) : (React.createElement(View, { className: directionClassName }, checkboxComponent))));
    return (React.createElement(View, { className: classNames(props.className), style: Object.assign({}, props.style) }, component));
}
ClCheckbox.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
import React, { useState, useMemo } from 'react';
import { pxTransform } from "@tarojs/taro";
import classNames from "classnames";
import ClCard from "../card";
import { generateId } from "../../lib";
import ClText from "../text";
import { View } from "@tarojs/components";
import ClLayout from "../layout";
import "./index.scss";
import { BG_COLOR_LIST } from "../../lib/model";
export default function ClActionSheet(props) {
    const { type, tip, isOpened, closeWithShadow, options, cancelText, showCancel, cancelBgColor, cancelFontColor, onClick, onCancel } = props;
    const [actionsArr, setActionsArr] = useState([]);
    const [show, setShow] = useState(false);
    useMemo(() => {
        const list = options || [];
        setActionsArr(list.map((item) => {
            item.cu_action_sheet_id = generateId();
            return item;
        }));
    }, [options]);
    useMemo(() => {
        setShow(!!isOpened);
    }, [isOpened]);
    const click = (index) => {
        onClick && onClick(index);
    };
    const cancelComponent = (React.createElement(View, null,
        React.createElement(View, { onClick: e => {
                e.stopPropagation();
                onCancel && onCancel();
            }, style: {
                marginTop: pxTransform(20)
            }, className: classNames([
                {
                    cu_action_sheet_card: type === "card"
                }
            ]) },
            React.createElement(ClCard, { bgColor: cancelBgColor, type: "full", active: true },
                React.createElement(ClText, { text: cancelText, textColor: cancelFontColor, align: "center" })))));
    const tipComponent = (React.createElement(ClText, { align: "center", bgColor: "gray", textColor: "grey" },
        React.createElement(ClLayout, { padding: "xsmall", paddingDirection: "vertical" }, tip)));
    const actionsComponents = actionsArr.map((item, index) => (React.createElement(View, { onClick: click.bind(this, index), className: classNames([
            {
                cu_action_sheet_line: index !== actionsArr.length - 1
            },
            BG_COLOR_LIST[item.bgColor]
        ]), key: item.cu_action_sheet_id },
        React.createElement(ClCard, { bgColor: item.bgColor, type: "full", active: true }, item.text))));
    return (React.createElement(View, { className: classNames([
            "cu-modal bottom-modal",
            {
                show: show
            }
        ], props.className), style: Object.assign({}, props.style), onClick: e => {
            closeWithShadow && setShow(false);
            onCancel && onCancel();
            e.stopPropagation();
        } },
        React.createElement(View, { className: "cu-dialog", style: {
                maxHeight: "70vh",
                backgroundColor: `${type === "card" ? "transparent" : "#f8f8f8"}`
            }, onClick: e => {
                e.stopPropagation();
            } },
            React.createElement(View, { className: classNames([
                    {
                        cu_action_sheet_card: type === "card"
                    }
                ]) },
                tip ? tipComponent : "",
                actionsComponents),
            showCancel ? cancelComponent : "",
            React.createElement(View, { style: { height: "20px", width: "100%" } }))));
}
ClActionSheet.options = {
    addGlobalClass: true
};
ClActionSheet.defaultProps = {
    tip: "",
    isOpened: false,
    closeWithShadow: true,
    actions: [],
    cancelText: "取消",
    showCancel: false,
    cancelBgColor: "white",
    cancelFontColor: undefined,
    onClick: () => { },
    onCancel: () => { }
};
//# sourceMappingURL=index.js.map
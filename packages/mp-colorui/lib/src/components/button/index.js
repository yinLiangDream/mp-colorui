import { Button, Text, View } from "@tarojs/components";
import React from "react";
import { classNames } from "../../lib";
import { BG_COLOR_LIST, SIZE } from "../../lib/model";
export default function ClButton(props) {
    const onClick = (e) => {
        !props.disabled && props.onClick && props.onClick(e);
    };
    const onOpenSetting = (e) => {
        !props.disabled && props.onOpenSetting && props.onOpenSetting(e);
    };
    const onGetUserInfo = (e) => {
        !props.disabled && props.onGetUserInfo && props.onGetUserInfo(e);
    };
    const onContact = (e) => {
        !props.disabled && props.onContact && props.onContact(e);
    };
    const onGetPhoneNumber = (e) => {
        !props.disabled && props.onGetPhoneNumber && props.onGetPhoneNumber(e);
    };
    const onGetRealnameAuthInfo = (e) => {
        !props.disabled &&
            props.onGetRealnameAuthInfo &&
            props.onGetRealnameAuthInfo(e);
    };
    const onError = (e) => {
        !props.disabled && props.onError && props.onError(e);
    };
    const shapeClassName = props.shape || "radius";
    const sizeClassName = props.size || "normal";
    const colorClassName = props.bgColor || "blue";
    const disabledClassName = props.disabled;
    const loadingClassName = props.loading ? "cuIcon-loading iconfont-spin" : "";
    const plainClassName = props.plain;
    const plainSizeName = props.plainSize === "default" ? "line" : "lines";
    const shadowSizeName = props.shadow ? "shadow" : "";
    const buttonClassName = `cu-btn ${shapeClassName} ${SIZE[sizeClassName]} ${plainClassName ? "" : BG_COLOR_LIST[colorClassName]} ${plainClassName ? plainSizeName + "-" + colorClassName : ""} ${shadowSizeName}`;
    const normalButton = (React.createElement(Button, { "data-data": props.customData, className: classNames(`${buttonClassName} ${disabledClassName ? "disabled" : ""}`), 
        // disabled={disabledClassName}
        onClick: onClick.bind(this), openType: props.disabled ? undefined : props.openType, onOpenSetting: onOpenSetting, onGetUserInfo: onGetUserInfo, onContact: onContact, onGetPhoneNumber: onGetPhoneNumber, onGetRealnameAuthInfo: onGetRealnameAuthInfo, onError: onError, appParameter: props.appParameter, showMessageCard: props.showMessageCard, sessionFrom: props.sessionFrom, sendMessageTitle: props.sendMessageTitle, sendMessagePath: props.sendMessagePath, sendMessageImg: props.sendMessageImg, scope: props.scope, lang: props.lang },
        React.createElement(Text, { className: loadingClassName }),
        React.createElement(Text, null, props.text),
        props.children));
    const longButton = (React.createElement(View, { className: classNames("flex flex-direction", props.className), style: Object.assign({}, props.style) }, normalButton));
    return props.long ? (longButton) : (React.createElement(View, { className: classNames(props.className), style: Object.assign({ display: "inline-block" }, props.style) }, normalButton));
}
ClButton.options = {
    addGlobalClass: true
};
ClButton.defaultProps = {
    shape: "radius",
    size: "normal",
    bgColor: "blue",
    disabled: false,
    icon: undefined,
    loading: false,
    long: false,
    plain: false,
    plainSize: "default",
    shadow: true,
    openType: undefined,
    customData: {}
};
//# sourceMappingURL=index.js.map
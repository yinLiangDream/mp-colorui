import { Text, View, Image } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import { pxTransform } from "@tarojs/taro";
import { isNumber, generateId, classNames } from "../../lib";
import { BG_COLOR_LIST } from "../../lib/model";

function ClAvatar(props) {
    const [headList, setHeadList] = useState(props.headerArray);
    useEffect(() => {
        const list = props.headerArray || [];
        setHeadList(list.map((item) => {
            item.cu_avatar_id = generateId();
            return item;
        }));
    }, [props.headerArray]);
    const onClick = () => {
        props.onClick && props.onClick();
    };
    const customSize = {
        small: 48,
        normal: 64,
        large: 96,
        xlarge: 128
    };
    const width = isNumber(props.size)
        ? pxTransform(props.size)
        : pxTransform(customSize[props.size || "normal"]);
    const height = isNumber(props.size)
        ? pxTransform(props.size)
        : pxTransform(customSize[props.size || "normal"]);
    const em = isNumber(props.size)
        ? props.size / 48
        : customSize[props.size || "normal"] / 48;
    const avatarArray = headList.map((item, index) => (React.createElement(View, { key: item.cu_avatar_id || index, className: `${props.shape} ${BG_COLOR_LIST[item.bgColor || "black"]} ${props.shadow ? "shadow" : ""} cu-avatar`, style: {
            width,
            height,
            fontSize: `${em}em`
        } },
        React.createElement(Image, { className: `${props.shape}`, src: item.url, style: {
                width,
                height,
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }, mode: "aspectFill" }),
        React.createElement(Text, { className: `cuIcon-${item.icon}` }, item.text ? item.text.slice(0, 1) : ""),
        item.tag ? (React.createElement(View, { className: `cu-tag badge cuIcon-${item.tag} ${item.tagColor ? BG_COLOR_LIST[item.tagColor] : ""}` })) : (""))));
    const avatarArrayComponent = (React.createElement(View, { className: classNames("cu-avatar-group", props.className), style: Object.assign({}, props.style), onClick: () => {
            onClick();
        } }, avatarArray));
    return props.headerArray && props.headerArray.length > 1 ? (avatarArrayComponent) : (React.createElement(View, { className: classNames(props.className), style: Object.assign({}, props.style), onClick: () => {
            onClick();
        } }, avatarArray));
}
ClAvatar.options = {
    addGlobalClass: true
};
ClAvatar.defaultProps = {
    size: "normal",
    shape: "radius",
    type: "normal",
    headerArray: [],
    shadow: true
};
export default ClAvatar;
//# sourceMappingURL=index.js.map
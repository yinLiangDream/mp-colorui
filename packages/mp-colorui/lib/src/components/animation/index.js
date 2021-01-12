import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
export default function ClAnimation(props) {
    const type = props.type;
    const reverse = props.reverse ? "animation-reverse" : "";
    return (React.createElement(View, { className: classNames(`animation-${type} ${reverse}`, props.className), style: Object.assign({
            animationDelay: `${props.delay}s`,
            animationDuration: `${props.duration}s`
        }, props.style), onAnimationStart: e => {
            props.onAnimationStart && props.onAnimationStart(e);
        }, onAnimationEnd: e => {
            props.onAnimationEnd && props.onAnimationEnd(e);
        } }, props.children));
}
ClAnimation.options = {
    addGlobalClass: true
};
ClAnimation.defaultProps = {
    type: "fade",
    reverse: false,
    delay: 0,
    duration: 0.5
};
//# sourceMappingURL=index.js.map
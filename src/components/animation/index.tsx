import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { IProps } from "../../../@types/animation";

export default function ClAnimation(props: IProps) {
  const type = props.type;
  const reverse = props.reverse ? "animation-reverse" : "";
  return (
    <View
      className={classNames(`animation-${type} ${reverse}`, props.className)}
      style={Object.assign(
        {
          animationDelay: `${props.delay}s`,
          animationDuration: `${props.duration}s`
        },
        props.style
      )}
      onAnimationStart={e => {
        props.onAnimationStart && props.onAnimationStart(e);
      }}
      onAnimationEnd={e => {
        props.onAnimationEnd && props.onAnimationEnd(e);
      }}
    >
      {props.children}
    </View>
  );
}

ClAnimation.options = {
  addGlobalClass: true
};

ClAnimation.defaultProps = {
  type: "fade",
  reverse: false,
  delay: 0,
  duration: 0.5
} as IProps;

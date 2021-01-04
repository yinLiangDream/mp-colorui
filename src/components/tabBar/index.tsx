import { View, Image } from "@tarojs/components";
import React, { useState, useEffect } from "react";
import { classNames, isNumber } from "../../lib";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../../lib/model";
import { IProps } from "../../../@types/tabBar";

export default function ClTabBar(props: IProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(props.active || 0);
  }, [props.active]);

  const onClick = (index: number) => {
    setActiveIndex(index);
    props.onClick && props.onClick(index);
  };

  const colorClassName = props.bgColor
    ? BG_COLOR_LIST[props.bgColor]
    : "bg-white";
  const activeColorClassName = props.activeColor
    ? TEXT_COLOR_LIST[props.activeColor]
    : "text-blue";
  const barComponent = props.tabs.map((item, index) => (
    <View
      onClick={() => {
        onClick(index);
      }}
      key={"key-" + item.icon}
      className={`action ${item.action ? "add-action" : ""} ${
        activeIndex === index ? activeColorClassName : ""
      }`}
    >
      <View
        className={classNames([
          { "cuIcon-cu-image": item.img, [`cuIcon-${item.icon}`]: item.icon }
        ])}
      >
        {item.img ? <Image mode="aspectFit" src={item.img} /> : ""}
        {item.badge !== false ? (
          <View className="cu-tag badge">
            {isNumber(item.badge) ? item.badge : ""}
          </View>
        ) : (
          ""
        )}
      </View>
      <View>{item.title}</View>
    </View>
  ));
  return (
    <View
      className={classNames(
        [
          "cu-bar tabbar",
          {
            "safe-area": props.safeArea
          },
          colorClassName
        ],
        props.className
      )}
      style={Object.assign(
        props.fix
          ? { position: "fixed", width: "100vw", bottom: "0", zIndex: 10 }
          : {},
        props.style
      )}
    >
      {barComponent}
    </View>
  );
}

ClTabBar.options = {
  addGlobalClass: true
};

ClTabBar.defaultProps = {
  bgColor: "white",
  activeColor: "blue",
  active: 0,
  tabs: [],
  safeArea: true
} as IProps;

import { View } from "@tarojs/components";
import Taro, { useState, useEffect } from "@tarojs/taro";
import { classNames, isNumber } from "../utils";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../utils/model";
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
      key={item.icon}
      className={`action ${item.action ? "add-action" : ""} ${
        activeIndex === index ? activeColorClassName : ""
      }`}
    >
      <View
        className={`${
          item.img ? "cuIcon-cu-image" : item.icon ? "cuIcon-" + item.icon : ""
        }`}
      >
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
        `cu-bar tabbar ${colorClassName}`,
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
  tabs: []
} as IProps;

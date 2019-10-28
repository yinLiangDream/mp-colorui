import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { classNames } from "../../components/utils";
import { BG_COLOR_LIST } from "../utils/model";
import { IProps } from "../../../@types/shopBar";
import ClButton from "../button";

export default function ClShopBar(props: IProps) {
  const onClickTab = (index: number) => {
    props.onClickTab && props.onClickTab(index);
  };
  const onClickButton = (index: number) => {
    props.onClickButton && props.onClickButton(index);
  };
  const bgColorClassName = BG_COLOR_LIST[props.bgColor || "white"];
  const tabsComponent =
    props.tabs &&
    props.tabs.map((item, index) => (
      <View key={index}>
        <ClButton bgColor={props.bgColor} shadow={false} {...item.moreAction}>
          <View
            className="action"
            onClick={() => {
              onClickTab(index);
            }}
          >
            <View className={`${item.icon ? "cuIcon-" + item.icon : ""}`}>
              {item.badge !== false ? (
                <View className="cu-tag badge">
                  {item.badge === true ? "" : item.badge}
                </View>
              ) : (
                ""
              )}
            </View>
            <View>{item.title}</View>
          </View>
        </ClButton>
      </View>
    ));
  const buttonsComponent =
    props.buttons &&
    props.buttons.map((item, index) => (
      <View
        key={index}
        className={`${BG_COLOR_LIST[item.bgColor || "red"]} submit`}
        onClick={() => {
          onClickButton(index);
        }}
      >
        {item.text}
      </View>
    ));
  return (
    <View
      className={classNames(
        `cu-bar ${bgColorClassName} tabbar shop ${
          props.border ? "border" : ""
        }`,
        props.className
      )}
      style={Object.assign(
        props.fix
          ? { position: "fixed", bottom: "0", width: "100vw", zIndex: "10" }
          : {},
        props.style
      )}
    >
      {tabsComponent}
      {buttonsComponent}
    </View>
  );
}

ClShopBar.options = {
  addGlobalClass: true
};

ClShopBar.defaultProps = {
  bgColor: "white",
  tabs: [],
  buttons: [],
  border: false,
  onClickButton: () => {},
  onClickTab: () => {}
};

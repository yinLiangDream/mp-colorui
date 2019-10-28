import { View } from "@tarojs/components";
import Taro, { useState, useMemo } from "@tarojs/taro";
import { classNames } from "../../components/utils";
import { BG_COLOR_LIST } from "../utils/model";
import { IProps } from "../../../@types/shopBar";
import ClButton from "../button";
import { generateId } from "../utils/index";

import './index.scss'

export default function ClShopBar(props: IProps) {
  const [tabs, setTabs] = useState(props.tabs || []);
  const [buttons, setButtons] = useState(props.buttons || []);
  const onClickTab = (index: number) => {
    props.onClickTab && props.onClickTab(index);
  };
  const onClickButton = (index: number) => {
    props.onClickButton && props.onClickButton(index);
  };
  const bgColorClassName = BG_COLOR_LIST[props.bgColor || "white"];
  useMemo(() => {
    const initTabs = props.tabs || [];
    const tabs: any[] = initTabs.map(item => ({
      id: generateId(),
      ...item
    }));
    setTabs(tabs);
  }, [props.tabs]);
  useMemo(() => {
    const initButtons = props.buttons || [];
    const buttons: any[] = initButtons.map(item => ({
      id: generateId(),
      ...item
    }));
    setButtons(buttons);
  }, [props.buttons]);
  const tabsComponent = tabs.map((item: any, index) => (
    <View key={item.id} className='ClShopBar__tab'>
      <ClButton
        bgColor={props.bgColor}
        shadow={false}
        {...item.moreAction}
        onClick={() => {
          onClickTab(index);
        }}
      >
        <View
          className="action"
          style={{
            background: "transparent"
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
  const buttonsComponent = buttons.map((item: any, index) => (
    <View
      key={item.id}
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

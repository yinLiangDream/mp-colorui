import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { IProps } from "../../../@types/card.d";
import { BG_COLOR_LIST } from "../utils/model";

import "./index.scss";
import { classNames } from "../../components/utils";

export default function ClCard(props: IProps) {
  const typeClassName = props.type === "full" ? "no-card" : "";
  const colorClassName = props.bgColor
    ? BG_COLOR_LIST[props.bgColor]
    : "bg-white";
  return (
    <View
      className={classNames([`cu-card case ${typeClassName}`], props.className)}
      style={Object.assign({}, props.style)}
    >
      <View
        className={classNames([
          "cu-item",
          "padding",
          {
            shadow: props.shadow
          },
          colorClassName,
          {
            cu_card_active: props.active
          }
        ])}
      >
        {this.props.children}
      </View>
    </View>
  );
}

ClCard.options = {
  addGlobalClass: true
};

ClCard.defaultProps = {
  type: "card",
  bgColor: "white",
  shadow: true,
  active: false
} as IProps;

import { Text, View } from "@tarojs/components";
import { pxTransform } from "@tarojs/taro";
import React, { Component } from "react";
import { classNames } from "../../lib";
import { BG_COLOR_LIST } from "../../lib/model";
import { IProps } from "../../../@types/titleBar";

interface IState {}

export default class ClTitleBar extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };

  static defaultProps: IProps = {
    bgColor: "white",
    textColor: "green",
    type: "border-title",
    borderLong: 20,
    borderColor: "green",
    icon: "title",
    iconColor: "green",
    title: "",
    subTitle: "",
    subTitleColor: "gray"
  };

  render() {
    const textColorClassName = this.props.textColor
      ? `text-${this.props.textColor}`
      : ``;
    const borderColorClassName = this.props.borderColor
      ? BG_COLOR_LIST[this.props.borderColor]
      : "bg-green";
    const bgColorClassName = this.props.bgColor
      ? BG_COLOR_LIST[this.props.bgColor]
      : `bg-white`;
    const iconClassName = this.props.icon ? `cuIcon-${this.props.icon}` : ``;
    const iconColorClassName = this.props.iconColor
      ? `text-${this.props.iconColor}`
      : ``;
    const borderComponent = (
      <View className="action border-title justify-between">
        <View>
          <Text className={`${textColorClassName} text-bold text-xl`}>
            {this.props.title}
          </Text>
          <Text
            className={`${borderColorClassName}`}
            style={{ width: `${pxTransform(this.props.borderLong || 20)}` }}
          />
        </View>
        <View>{this.props.renderRight}</View>
      </View>
    );
    const subComponent = (
      <View className="action sub-title justify-between">
        <View>
          <Text className={`text-xl text-bold ${textColorClassName}`}>
            {this.props.title}
          </Text>
          {this.props.subTitle ? (
            <Text className={`text-${this.props.subTitleColor}`}>
              {this.props.subTitle}
            </Text>
          ) : (
            <Text className={`${borderColorClassName}`}>{}</Text>
          )}
        </View>
        <View>{this.props.renderRight}</View>
      </View>
    );
    const iconComponent = (
      <View className="action justify-between">
        <View>
          <Text className={`${iconClassName} ${iconColorClassName}`} />
          <Text className={`text-xl text-bold ${textColorClassName}`}>
            {this.props.title}
          </Text>
        </View>
        <View>{this.props.renderRight}</View>
      </View>
    );
    return (
      <View
        className={classNames(
          `${bgColorClassName} cu-bar`,
          this.props.className
        )}
        style={Object.assign({}, this.props.style)}
      >
        {this.props.type === "border-title" ? borderComponent : ""}
        {this.props.type === "sub-title" ? subComponent : ""}
        {this.props.type === "icon" ? iconComponent : ""}
      </View>
    );
  }
}

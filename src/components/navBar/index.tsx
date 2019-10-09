import { Block, Text, View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { classNames } from "../../components/utils";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../utils/model";
import { IProps } from "../../../@types/navBar";

interface IState {}

export default class ClNavBar extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps: IProps = {
    title: "",
    leftIcon: [],
    rightIcon: [],
    bgColor: "white"
  };

  onClickLeftIcon(index: number) {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon(index);
  }

  onClickRightIcon(index: number) {
    this.props.onClickRightIcon && this.props.onClickRightIcon(index);
  }

  render(): any {
    const bgColorClassName = this.props.bgColor
      ? BG_COLOR_LIST[this.props.bgColor]
      : "bg-white";
    const leftComponent =
      this.props.leftIcon &&
      this.props.leftIcon.map((item, index) => (
        <Block key={index}>
          <Text
            className={`${item.icon ? "cuIcon-" + item.icon : ""} ${
              item.color ? TEXT_COLOR_LIST[item.color] : ""
            }`}
            onClick={this.onClickLeftIcon.bind(this, index)}
          />
          <Text
            className={`${item.color ? TEXT_COLOR_LIST[item.color] : ""}`}
            onClick={this.onClickLeftIcon.bind(this, index)}
          >
            {item.text}
          </Text>
        </Block>
      ));
    const rightComponent =
      this.props.rightIcon &&
      this.props.rightIcon.map((item, index) => (
        <Block key={index}>
          <Text
            className={`${item.icon ? "cuIcon-" + item.icon : ""} ${
              item.color ? TEXT_COLOR_LIST[item.color] : ""
            }`}
            onClick={this.onClickRightIcon.bind(this, index)}
          />
        </Block>
      ));
    return (
      <View
        className={classNames(
          `cu-bar ${bgColorClassName}`,
          this.props.className
        )}
        style={Object.assign({}, this.props.style)}
      >
        <View className="action">{leftComponent}</View>
        <View className="content text-bold">{this.props.title}</View>
        <View className="action">{rightComponent}</View>
      </View>
    );
  }
}

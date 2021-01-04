import { View } from "@tarojs/components";
import React, { Component } from "react";
import { BG_COLOR_LIST, SIZE } from "../../lib/model";
import { IProps } from "../../../@types/progress";
import { classNames } from "../../lib";

interface IState {}

export default class ClProgress extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    shape: "normal",
    bgColor: "blue",
    size: "normal",
    stripe: false,
    animation: false,
    percent: 0
  } as IProps;
  render() {
    const shapeClassName = () =>
      this.props.shape
        ? this.props.shape === "normal"
          ? ""
          : this.props.shape
        : "";
    const bgColorClassName = () =>
      this.props.bgColor ? BG_COLOR_LIST[this.props.bgColor] : "bg-blue";
    const sizeClassName = () => (this.props.size ? SIZE[this.props.size] : "");
    const stripeClassName = () => (this.props.stripe ? "striped" : "");
    const animationClassName = () => (this.props.animation ? "active" : "");
    return (
      <View
        className={classNames(
          `cu-progress ${shapeClassName()} ${sizeClassName()} ${stripeClassName()} ${animationClassName()}`,
          this.props.className
        )}
        style={Object.assign({}, this.props.style)}
      >
        <View
          className={`${bgColorClassName()}`}
          style={{ width: `${this.props.percent}%` }}
        />
      </View>
    );
  }
}

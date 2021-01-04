import { Text, View } from "@tarojs/components";
import React, { Component } from "react";
import { classNames } from "../../lib";
import { TEXT_COLOR_LIST } from "../../lib/model";
import { IProps } from "../../../@types/steps";

interface IState {}

export default class ClStep extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps: IProps = {
    steps: [],
    type: "line",
    activeColor: "blue",
    step: 0,
    stepIconType: "number",
    stepTitlePosition: "bottom"
  };
  state: IState = {};

  render(): any {
    const stepTypeClassName = this.props.type === "arrow" ? "steps-arrow" : "";
    const activeColorClassName = this.props.activeColor
      ? TEXT_COLOR_LIST[this.props.activeColor]
      : "";
    const step = this.props.step || 0;
    const tabsComponents = this.props.steps.map((item, index) => (
      <View
        className={`cu-item ${step > index ? activeColorClassName : ""}`}
        key={index}
      >
        {this.props.stepTitlePosition === "top" ? item.title : ""}
        {
          <Text
            className={`${this.props.stepIconType === "number" ? "num" : ""} ${
              this.props.stepIconType === "custom" ? "cuIcon-" + item.icon : ""
            }`}
            data-index={index + 1}
          />
        }
        {this.props.stepTitlePosition === "bottom" ? item.title : ""}
      </View>
    ));
    return (
      <View
        className={classNames(
          `cu-steps ${stepTypeClassName}  ${
            this.props.stepTitlePosition === "top" ? "steps-bottom" : ""
          }`,
          this.props.className
        )}
        style={Object.assign({}, this.props.style)}
      >
        {tabsComponents}
      </View>
    );
  }
}

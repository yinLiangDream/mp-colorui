import { View } from "@tarojs/components";
import React, { Component, useState } from "react";
import { classNames } from "../../../lib";
import { IProps } from "../../../../@types/switch";

export default class ClSwitch_h5 extends Component<IProps, {}> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps: IProps = {
    title: "",
    color: "green",
    shape: "normal",
    type: "normal",
    checked: false,
    onChange: () => {}
  };
  onChange(flag) {
    this.props.onChange && this.props.onChange(flag);
  }
  render() {
    const title = this.props.title;
    const color = this.props.color || "green";
    const shapeClassName = this.props.shape !== "radius" ? "" : "radius";
    const type = this.props.type === "form" ? "form" : "normal";
    const checked = !!this.props.checked;
    const [checkedSwitch, setCheckedSwitch] = useState(checked);
    const switchComponent = (
      <View
        className={classNames([
          "h5-switch",
          color,
          {
            checked: checkedSwitch,
            disabled: this.props.disabled
          },
          this.props.className
        ])}
        style={Object.assign({}, this.props.style)}
        onClick={() => {
          if (!this.props.disabled) {
            const currentCheck = !checkedSwitch;
            setCheckedSwitch(currentCheck);
            this.onChange(currentCheck);
          }
        }}
      >
        <View className={`h5-switch-input sm ${shapeClassName}`} />
      </View>
    );
    const formSwitchComponent = (
      <View
        className={classNames("cu-form-group", this.props.className)}
        style={Object.assign({}, this.props.style)}
      >
        <View className="title">{title}</View>
        {switchComponent}
      </View>
    );
    return type === "form" ? formSwitchComponent : switchComponent;
  }
}

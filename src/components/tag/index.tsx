import { View, Text } from "@tarojs/components";
import Taro, { pxTransform } from "@tarojs/taro";
import { Component } from "react";
import { IProps } from "../../../@types/tag";

import { BG_COLOR_LIST } from "../../lib/model";
import { bgColorType } from "../../lib/types";
import { classNames } from "../../lib";

import ClIcon from "../icon";
interface IState {}

export default class ClTag extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    shape: "normal",
    size: "normal",
    tags: []
  } as IProps;
  onClick(index: number) {
    this.props.onClick && this.props.onClick(index);
  }
  render() {
    const shapeClassName = this.props.shape
      ? this.props.shape === "normal"
        ? ""
        : this.props.shape
      : "";
    const colorClassName = (color: bgColorType | undefined) => {
      return BG_COLOR_LIST[color || "blue"];
    };
    const plainClassName = (color: bgColorType | undefined) => {
      return `line-${color}`;
    };
    const sizeClassName = () => {
      if (this.props.size === "normal") return "";
      else return "sm";
    };
    const badgeClassName = (badge: boolean | undefined) =>
      badge ? "badge" : "";
    let normalComponent;
    let capsuleComponent;
    if (this.props.tags.length > 0) {
      const tag = this.props.tags[0];
      normalComponent = (
        <View
          className={classNames(
            `cu-tag ${shapeClassName} ${
              tag.plain ? plainClassName(tag.color) : colorClassName(tag.color)
            } ${sizeClassName()} ${badgeClassName(this.props.badge)}`,
            this.props.className
          )}
          style={Object.assign({ overflow: "hidden" }, this.props.style)}
        >
          {tag.icon ? (
            <ClIcon
              iconName={tag.icon}
              size={"inherit"}
              style={{
                paddingRight: pxTransform(8)
              }}
            />
          ) : (
            ""
          )}
          <Text
            style={{
              height: "inherit",
              lineHeight: pxTransform(this.props.size === "normal" ? 48 : 40)
            }}
          >
            {tag.text}
          </Text>
        </View>
      );
      this.props.tags.length > 1 &&
        (capsuleComponent = (
          <View
            className={classNames(
              `cu-capsule ${shapeClassName}  ${sizeClassName()}`,
              this.props.className
            )}
            style={Object.assign({ overflow: "hidden" }, this.props.style)}
          >
            {this.props.tags.map((tag, index) => (
              <View
                key={tag.text}
                className={`cu-tag ${
                  tag.plain
                    ? plainClassName(tag.color)
                    : colorClassName(tag.color)
                }`}
                onClick={this.onClick.bind(this, index)}
              >
                {tag.icon ? (
                  <ClIcon
                    iconName={tag.icon}
                    size={"inherit"}
                    style={{
                      paddingRight: pxTransform(8)
                    }}
                  />
                ) : (
                  ""
                )}
                <Text
                  style={{
                    height: "inherit",
                    lineHeight: pxTransform(
                      this.props.size === "normal" ? 48 : 40
                    )
                  }}
                >
                  {tag.text}
                </Text>
              </View>
            ))}
          </View>
        ));
    }
    return this.props.tags.length > 1 ? capsuleComponent : normalComponent;
  }
}

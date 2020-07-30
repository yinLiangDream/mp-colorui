import { ComponentClass } from "react";
import {
  BaseComponent,
  bgColorMoreType,
  bgColorType,
  iconType,
  lightBgColorType,
  normalSizeType
} from "./baseType";
import {IconProps} from './icon'

export interface IProps extends BaseComponent {
  /**
   * 初始化时 Button 的位置
   *
   * 默认 top: `auto`, right: `50`, bottom: `200`, left: `auto`
   */
  position?: {
    top?: number | "auto";
    right?: number | "auto";
    bottom?: number | "auto";
    left?: number | "auto";
  };
  /**
   * 点击阴影关闭
   *
   * 默认 `false`
   */
  closeWithShadow?: boolean;
  /**
   * 按钮形状
   *
   * 默认 `round`
   */
  shape?: "radius" | "round";
  /**
   * 按钮大小
   *
   * 默认 `normal`
   */
  size?: normalSizeType;
  /**
   * 是否有阴影
   *
   * 默认 `true`
   */
  shadow?: boolean;
  /**
   * 是否可移动
   *
   * 默认 `false`
   */
  move?: boolean;
  /**
   * 是否可展开
   *
   * 默认 `true`
   */
  open?: boolean;
  /**
   * 图标
   *
   * 默认 `add`
   */
  icon?: iconType | IconProps;
  /**
   * 背景色
   *
   * 默认 `blue`
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 图标色
   */
  iconColor?: bgColorType;
  /**
   * 展开方向
   *
   * 默认 `vertical`
   */
  direction?: "vertical" | "horizontal";
  /**
   * 图标点击事件
   */
  onClick?: () => void;
  /**
   * 展开后的图标点击事件
   * @param index 点击图标的下标
   */
  onActionClick?: (index: number) => void;
  /**
   * 展开按钮组
   */
  actionList?: {
    /**
     * 图标
     */
    icon?: iconType;
    /**
     * 背景色
     *
     * 默认 `blue`
     */
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    /**
     * 图标色
     */
    iconColor?: bgColorType;
  }[];
}

declare const FloatButton: ComponentClass<IProps>;

export default FloatButton;

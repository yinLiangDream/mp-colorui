import {ComponentClass} from "react";
import {bgColorMoreType, bgColorType, iconType, lightBgColorType, normalSizeType} from "./baseType";

export interface IProps {
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
  shape?: 'radius' | 'round';
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
  /**
   * 展开方向
   *
   * 默认 `vertical`
   */
  direction?: 'vertical' | 'horizontal';
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
  }[]
}

declare const FloatButton: ComponentClass<IProps>;

export default FloatButton;

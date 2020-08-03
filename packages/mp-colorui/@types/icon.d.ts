import { ComponentClass } from "react";
import {
  extendSizeType,
  bgColorType,
  iconType,
  BaseComponent
} from "./baseType";

export interface IProps extends BaseComponent {
  /**
   * 图标大小设置
   *
   * 默认值 `normal`
   *
   * 可选类型 `xsmall`, `small`, `normal`, `large`, `xlarge`, `xxlarge`, `slarge`, `xslarge` , 或者直接 Number 数值
   */
  size?: extendSizeType | number | 'inherit';
  /**
   * 图标颜色，可选类型请查看 默认色-标准色
   */
  color?: bgColorType;
  /**
   * 图标名字，可选类型请查看 Icon-iconName
   */
  iconName?: iconType | string;
  /**
   * 是否为第三方图标
   */
  other?: boolean;
}

export interface IconProps extends IProps {}
declare const Icon: ComponentClass<IconProps>;

export default Icon;

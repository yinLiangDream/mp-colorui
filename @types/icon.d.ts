import { ComponentClass } from 'react';
import { extendSizeType, bgColorType, iconType } from './baseType';

export interface IProps {
  /**
   * 图标大小设置
   *
   * 默认值 `normal`
   *
   * 可选类型 `xsmall`, `small`, `normal`, `large`, `xlarge`, `xxlarge`, `slarge`, `xslarge` , 或者直接 Number 数值
   */
  size?: extendSizeType | number;
  /**
   * 图标颜色，可选类型请查看 默认色-标准色
   */
  color?: bgColorType;
  /**
   * 图标类型，可选类型请查看 Icon-iconName
   */
  iconName?: iconType;
}

export interface IconProps extends IProps {}
declare const Icon: ComponentClass<IconProps>;

export default Icon;

import { ComponentClass } from 'react';
import { bgColorType, extendSizeType } from './baseType';

export interface IProps {
  /**
   * 分割线颜色
   *
   * 默认 `grey`
   */
  color?: bgColorType;
  /**
   * 文字大小
   *
   * 默认 `normal`
   */
  size?: extendSizeType
  children?: any;
}

declare const Divider: ComponentClass<IProps>;

export default Divider;

import { ComponentClass } from 'react';

import {
  extendSizeType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType
} from './baseType';

export interface IProps {
  /**
   * 文字大小
   *
   * 默认值 'normal'
   *
   * 可选类型 `xsmall`, `small`, `normal`, `large`, `xlarge`, `xxlarge`, `slarge`, `xslarge`
   */
  size?: extendSizeType;
  /**
   * 文字颜色，可选类型请查看 默认基本色 可选类型
   */
  textColor?: bgColorType;
  /**
   * 文字背景色，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 是否显示省略号
   *
   * 默认值 `false`
   */
  cut?: boolean;
  /**
   * 文字对齐方式
   *
   * 默认值 `left`
   *
   * 可选类型 `left`, `center`, `right`
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 特殊需求
   *
   * 默认值 ``
   *
   * 可选类型 `firstUpper`, `upper`, `lower`
   *
   * `firstUpper` 首字母大写
   *
   * `upper` 文字大写
   *
   * `lower` 文字小写
   */
  special?: 'firstUpper' | 'upper' | 'lower';
  /**
   * 文字
   */
  text?: string;
  children?: any;
}

export interface TextProps extends IProps {}
declare const Text: ComponentClass<TextProps>;

export default Text;

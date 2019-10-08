import { ComponentClass } from 'react';

import {
  extendSizeType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType, BaseComponent
} from './baseType'

export interface IProps extends BaseComponent {
  /**
   * 文字大小
   *
   * 默认值 'normal'
   *
   * 可选类型 `xsmall`, `small`, `normal`, `large`, `xlarge`, `xxlarge`, `slarge`, `xslarge`
   */
  size?: extendSizeType;
  /**
   * 行间距
   *
   * 默认值 `none`
   */
  lineSpacing?: 'none' | 'small' | 'normal' | 'large' | number;
  /**
   * 字间距
   *
   * 默认值 `none`
   */
  fontSpacing?: 'none' | 'small' | 'normal' | 'large' | number;
  /**
   * 文字颜色，可选类型请查看 默认色-标准色
   */
  textColor?: bgColorType;
  /**
   * 文字背景色，可选类型请查看 默认色
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
  /**
   * 字体粗细
   *
   * 默认值 `normal`
   */
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  children?: any;
}

export interface TextProps extends IProps {}
declare const Text: ComponentClass<TextProps>;

export default Text;

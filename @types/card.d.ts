import { ComponentClass } from 'react';

import { bgColorMoreType, bgColorType, lightBgColorType } from './baseType';

export type TTtype = 'card' | 'full';
export type TTitle = string;

export interface IProps {
  /**
   * 卡片组件类型选择
   *
   * 默认值 `card`
   *
   * 可选类型 `card`, `full`
   */
  type?: TTtype;
  /**
   * 卡片背景色设置，可选类型请查看 默认色
   *
   * 默认 `white`
   */
  bgColor?: bgColorMoreType | bgColorType | lightBgColorType;
  /**
   * 卡片阴影
   *
   * 默认 `true`
   */
  shadow?: boolean;
  children?: any;
}

declare const Card: ComponentClass<IProps>;

export default Card;

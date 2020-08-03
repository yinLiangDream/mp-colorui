import { ComponentClass } from "react";

import {
  bgColorMoreType,
  bgColorType,
  lightBgColorType,
  BaseComponent
} from "./baseType";

import { IProps as textIProps } from './text'

export type TTtype = "card" | "full";
export type TTitle = string;

export interface IProps extends BaseComponent {
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
  /**
   * 激活当前 Card
   *
   * 默认 `false`
   */
  active?: boolean;
  /**
   * 卡片标题
   */
  title?: textIProps;
  /**
   * 自定义渲染 title
   */
  renderTitle?: any;
  children?: any;
}

declare const Card: ComponentClass<IProps>;

export default Card;

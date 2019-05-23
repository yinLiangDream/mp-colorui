import { ComponentClass } from 'react';

import { IProps as iconProps } from './icon';
import { bgColorType } from './baseType';

export type TIcon = iconProps;
export type TTitle = string;
export type TShortLine = boolean;
export type TArrow = boolean;
export type TCard = boolean;
export type TTitleColor = bgColorType;
export type TOnClick = (index: number) => void;
export type TTist = {
  /**
   * 列表图标，可选类型请查看 Icon 组件
   */
  icon?: TIcon;
  /**
   * 标题颜色，可选类型请查看 默认基本色 可选类型
   */
  titleColor?: TTitleColor;
  /**
   * 是否显示箭头
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  arrow?: TArrow;
  /**
   * 标题
   */
  title?: TTitle;
  /**
   * 图片地址
   */
  imgUrl?: string;
}[];

export interface IProps {
  /**
   * 是否为短分割线
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  shortBorder?: TShortLine;
  /**
   * 是否是卡片形式
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  card?: TCard;
  /**
   * 列表每一项
   *
   * 可设置参数 `icon`, `titleColor`, `arrow`, `title`, `imgUrl`
   */
  list?: TTist;
  /**
   * 点击事件，参数 index 为第几个
   */
  onClick?: TOnClick;
}

export interface MenuListProps extends IProps {}
declare const MenuList: ComponentClass<MenuListProps>;

export default MenuList;

import { ComponentClass } from 'react';

import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType
} from './baseType';

export interface IProps {
  /**
   * 背景色，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 左侧图标组
   *
   * 每一项可设置以下参数 `icon`, `color`, `leftText`
   */
  leftIcon: {
    /**
     * 图标，可选类型请查看 icon 可选类型
     */
    icon?: iconType;
    /**
     * 图标颜色，选类型请查看 默认基本色 可选类型
     */
    color?: bgColorType;
    /**
     * 左侧文字
     */
    leftText?: string;
  }[];
  /**
   * 中间标题
   */
  title?: string;
  /**
   * 右侧图标组
   *
   * 每一项可设置以下参数 `icon`, `color`
   */
  rightIcon?: {
    /**
     * 图标，可选类型请查看 icon 可选类型
     */
    icon?: iconType;
    /**
     * 图标颜色，可选类型请查看 默认基本色 可选类型
     */
    color?: bgColorType;
  }[];
  /**
   * 点击左侧图标事件，参数 index 表示第几个图标
   */
  onClickLeftIcon?: (index: number) => void;
  /**
   * 点击右侧图标事件，参数 index 表示第几个图标
   */
  onClickRightIcon?: (index: number) => void;
}

export interface NavBarProps extends IProps {}
declare const NavBar: ComponentClass<NavBarProps>;

export default NavBar;

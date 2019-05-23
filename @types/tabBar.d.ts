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
   * 激活的颜色，可选类型请查看 默认基本色 可选类型
   */
  activeColor?: bgColorType;
  /**
   * 激活的下标
   *
   * 默认值 0
   */
  active?: number;
  /**
   * 是否固定在底部
   *
   * 默认值 `false`
   */
  fix?: boolean;
  /**
   * 每一项 tab 内容
   *
   * 每一项可设置参数 `badge`, `icon`, `img`, `title`, `action`
   */
  tabs: {
    /**
     * 右上角提示
     */
    badge?: number | boolean;
    /**
     * 图标，可选类型请查看 icon 可选类型
     */
    icon?: iconType;
    /**
     * 图片 url
     */
    img?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 是否为突出操作
     *
     * 默认值 `false`
     */
    action?: boolean;
  }[];
  /**
   * 每一项的点击事件
   */
  onClick?: (index: number) => void;
}

export interface TabBarProps extends IProps {}
declare const TabBar: ComponentClass<TabBarProps>;

export default TabBar;

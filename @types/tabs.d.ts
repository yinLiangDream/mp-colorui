import { ComponentClass } from 'react';

import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType
} from './baseType';

export interface IProps {
  /**
   * tabs类型选择
   *
   * 默认值 `default`
   *
   * 可选参数 `center`, `verb`, `default`
   */
  type?: 'center' | 'verb' | 'default';
  /**
   * 背景色，可选类型请查看 默认色
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 激活的颜色，可选类型请查看 默认色-标准色
   */
  activeColor?: bgColorType;
  /**
   * 激活的下标
   *
   * 默认值 0
   */
  active?: number;
  /**
   * tab 数组
   *
   * 每一项可以设置以下参数 `text`, `icon`
   */
  tabs: {
    /**
     * 标题
     */
    text: string;
    /**
     * 图标，可选类型请查看 Icon-iconName
     */
    icon?: iconType;
    /**
     * 标签唯一标识符
     */
    id: string;
  }[];
  /**
   * 点击事件
   */
  onClick?: (index: number) => void;
  /**
   * 是否可以拖动内容移动 tab
   */
  touchMove?: boolean;
  children?: any;
}

export interface TabsProps extends IProps {}
declare const Tabs: ComponentClass<TabsProps>;

export default Tabs;

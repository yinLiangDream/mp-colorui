import { ComponentClass } from 'react';

import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType, BaseComponent
} from './baseType'

export type TTimes = {
  /**
   * 节点
   */
  node?: String;
  /**
   * 时间
   */
  time?: String;
  /**
   * 标题
   */
  title?: String;
  /**
   * 包含的内容
   */
  content?: String[];
  /**
   * 背景色，可选类型请查看 默认色
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 图标颜色，可选类型请查看 默认色-标准色
   */
  iconColor?: bgColorType;
  /**
   * 图标，可选类型请查看 Icon-iconName
   */
  icon?: iconType;
};

export interface IProps extends BaseComponent {
  /**
   * 时间轴数组
   *
   * 每一项可设置以下参数 `content`, `bgColor`, `iconColor`, `icon`
   */
  times?: TTimes[];
}

export interface TimelineProps extends IProps {}
declare const Timeline: ComponentClass<TimelineProps>;

export default Timeline;

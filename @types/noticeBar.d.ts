import { ComponentClass } from "react";

import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType
} from "./baseType";

export interface IProps {
  /**
   * 背景色
   *
   * 默认 `light-yellow`
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 是否单行
   *
   * 默认 `false`
   */
  single?: boolean;
  /**
   * 内容滚动
   *
   * 默认 `false`
   */
  marquee?: boolean;
  /**
   * 滚动速度
   */
  speed?: number;
  /**
   * 显示查看更多
   */
  showMore?: boolean;
  /**
   * 查看详情文本
   */
  moreText?: string;
  /**
   * 图标
   */
  icon?: iconType;
  /**
   * 关闭按钮
   *
   * 默认 `false`
   */
  close?: boolean;
  /**
   * 文字信息
   */
  text?: string;
  /**
   * 点击关闭触发
   */
  onClose?: () => void;
  /**
   * 点击更多触发
   */
  onMore?: () => void;
}

declare const NoticeBar: ComponentClass<IProps>;

export default NoticeBar;

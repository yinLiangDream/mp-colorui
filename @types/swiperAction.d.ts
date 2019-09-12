import { ComponentClass } from 'react';
import { bgColorType, bgColorMoreType, lightBgColorType } from './baseType';

export interface IProps {
  /**
   * 是否开启
   *
   * 默认 `false`
   */
  show?: boolean;
  /**
   * 是否禁止滑动
   *
   * 默认 `false`
   */
  disabled?: boolean;
  /**
   * 点击选项时,是否自动关闭
   *
   * 默认 `false`
   */
  autoClose?: boolean;
  /**
   * 展示的选项数组
   */
  options?: {
    /**
     * 按钮背景色
     *
     * 默认 `white`
     */
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType | string;
    /**
     * 文字内容
     */
    text?: string;
  }[];
  /**
   * 方向
   *
   * 默认 `right`
   */
  direction?: 'right' | 'left';
  /**
   * 点击按钮事件
   */
  onClick?: (index: number) => void;
  /**
   * 打开时触发
   */
  onOpened?: () => void;
  /**
   * 关闭时触发
   */
  onClose?: () => void;
  children?: any
}

declare const SwiperAction: ComponentClass<IProps>;

export default SwiperAction;

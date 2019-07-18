import { ComponentClass } from 'react';
import { bgColorType, bgColorMoreType, lightBgColorType } from './baseType';

export interface IProps {
  /**
   * 类型，custom 下可自定义背景色
   *
   * 可选类型 `success`, `error`, `warn`, `info`, `custom`
   *
   * 默认 `info`
   */
  type: 'success' | 'error' | 'warn' | 'info' | 'custom';
  /**
   * 背景色
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 提示消息
   */
  message?: string;
  /**
   * 是否展示
   */
  show?: boolean;
  /**
   * 持续时间
   *
   * 默认 `3`
   */
  duration?: number;
  /**
   * 关闭事件
   */
  onClose?: () => void;
}

export const Message: ComponentClass<IProps>;

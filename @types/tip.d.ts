import { ComponentClass, ReactNode } from 'react'
import { bgColorType, bgColorMoreType, lightBgColorType, BaseComponent } from './baseType'

export interface IProps extends BaseComponent {
  /**
   * 是否显示
   */
  show?: boolean;
  /**
   * 提示方向
   */
  direction?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * 背景色
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  children?: any;
  /**
   * 提示消息
   */
  message?: string;
  /**
   * 触发方式
   * `click` 点击触发
   * `touch` 触摸触发
   */
  mode?: 'click' | 'touch'
  /**
   * 自定义提示
   */
  renderMessage?: any;
  /**
   * 提示框宽度
   *
   *  默认值 `100`
   */
  width?: number;
  /**
   * `click` / `touch` 触发时触发此函数
   */
  onChange?: (show: boolean) => void;
}

declare const Tip: ComponentClass<IProps>

export default Tip

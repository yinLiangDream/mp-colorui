import { ComponentClass } from 'react';
import { BaseComponent } from './baseType'

export interface IProps extends BaseComponent {
  /**
   * 是否打开
   *
   * 默认值 `false`
   */
  show?: boolean;
  /**
   * 点击阴影关闭
   *
   * 默认 `false`
   */
  closeWithShadow?: boolean;
  /**
   * 关闭按钮位置
   *
   * 默认 `bottom`
   */
  closeBtnPosition?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  children?: any;
  /**
   * 点击幕帘事件
   */
  onClick?: () => void
  /**
   * 点击关闭事件
   */
  onClose?: () => void
}

declare const Curtain: ComponentClass<IProps>;

export default Curtain;

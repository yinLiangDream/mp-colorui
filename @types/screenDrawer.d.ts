import { ComponentClass } from 'react';

export interface IProps {
  /**
   * 显示 screenDrawer
   *
   * 默认值 `false`
   */
  show?: boolean;
  /**
   * 点击返回小箭头触发
   */
  onHide?: () => void;
}

declare const ScreenDrawer: ComponentClass<IProps>;

export default ScreenDrawer;

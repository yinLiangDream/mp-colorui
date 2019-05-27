import { ComponentClass } from 'react';

export type TDirection = 'left' | 'right' | 'bottom';

export interface IProps {
  /**
   * 是否显示
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  show?: boolean;
  /**
   * 抽屉方向
   *
   * 默认值 `bottom`
   *
   * 可选类型 `left`, `right`, `bottom`
   */
  direction?: TDirection;
  children?: any;
  /**
   * 点击阴影关闭
   *
   * 默认值 `true`
   */
  closeWithShadow?: boolean;
  /**
   * 点击阴影取消事件
   */
  onCancel?: () => void;
}

export interface DrawerProps extends IProps {}
declare const Drawer: ComponentClass<DrawerProps>;

export default Drawer;

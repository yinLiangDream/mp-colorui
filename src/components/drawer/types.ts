import { ReactNode } from 'react';

export type TDirection = 'left' | 'right' | 'bottom';

export type TChildren = ReactNode;

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
  children?: TChildren;
}

import { ComponentClass } from 'react';

export interface IProps {
  /**
   * 分为多少列
   *
   * 默认值 `3`
   */
  col: number;
  /**
   * 类型，目前仅为一种选项
   *
   * 默认值 `normal`
   *
   * 可选类型 `square`, `normal`
   */
  mode?: 'square';
  children?: any;
}

declare const Grid: ComponentClass<IProps>;

export default Grid;

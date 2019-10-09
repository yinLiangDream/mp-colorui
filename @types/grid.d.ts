import { ComponentClass } from 'react'
import { BaseComponent } from './baseType'

export interface IProps extends BaseComponent {
  /**
   * 分为多少列
   *
   * 默认值 `3`
   */
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * 类型
   *
   * 默认值 `normal`
   *
   * 可选类型 `square`, `normal`
   */
  mode?: 'normal' | 'square';
  children?: any;
}

declare const Grid: ComponentClass<IProps>

export default Grid

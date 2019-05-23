import { ComponentClass } from 'react';

type flexSelectionType = {
  /**
   * 水平方向排列方式
   *
   * 默认值 `start`
   *
   * 可选参数 `start`, `end`, `center`, `between`, `around`
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  /**
   * 垂直方向排列方式
   *
   * 默认值 `start`
   *
   * 可选参数 `start`, `center`, `end`
   */
  align?: 'start' | 'center' | 'end';
  /**
   * 是否换行
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  warp?: boolean;
};

type gridSelectionType = {
  /**
   * 分为多少列
   */
  col: number;
  /**
   * 类型，目前仅为一种选项
   *
   * 默认值 `square`
   *
   * 可选类型 `square`
   */
  mode?: 'square';
};

type direction =
  | 'around'
  | 'horizontal'
  | 'vertical'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';
type distance = 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge';

type baseSelectionType = {
  /**
   * 浮动方向， 默认不浮动
   *
   * 可选参数 `left`, `right`
   */
  float?: 'left' | 'right';
  /**
   * padding 距离，默认没有 padding
   *
   * 可选参数 `xsmall`, `small`, `normal`, `large`, `xlarge`
   */
  padding?: distance;
  /**
   * padding 方向
   *
   * 可选参数 `around`, `horizontal`, `vertical`, `left`, `right`, `top`, `bottom`
   */
  paddingDirection?: direction;
  /**
   * margin 距离，默认没有 margin
   *
   * 可选参数 `xsmall`, `small`, `normal`, `large`, `xlarge`
   */
  margin?: distance;
  /**
   * margin 方向
   *
   * 可选参数 `around`, `horizontal`, `vertical`, `left`, `right`, `top`, `bottom`
   */
  marginDirection?: direction;
};
export interface IProps {
  /**
   * 布局类型，可选类型 flex, grid, normal
   *
   * 默认值：`normal`
   *
   * flex: 浮动布局
   *
   * grid: 栅格布局
   *
   * normal: 正常布局
   */
  type?: 'flex' | 'grid' | 'normal';
  /**
   * type 为 flex 时的额外参数设置
   *
   * 可设置参数 `justify`, `align`, `wrap`
   */
  flexSelection?: flexSelectionType;
  /**
   * type 为 grid 时的额外参数设置
   *
   * 可设置参数 `col`, `mode`
   */
  gridSelection?: gridSelectionType;
  /**
   * type 为 normal 时的额外参数设置
   *
   * 可设置参数 `float`, `padding`, `paddingDirection`, `margin`, `marginDirection`
   */
  baseSelection?: baseSelectionType;
}

export interface LayoutProps extends IProps {}
declare const Layout: ComponentClass<LayoutProps>;

export default Layout;

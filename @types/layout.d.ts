import { ComponentClass } from 'react';

type direction =
  | 'around'
  | 'horizontal'
  | 'vertical'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';
type distance = 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge';

export interface IProps {
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
}

export interface LayoutProps extends IProps {}
declare const Layout: ComponentClass<LayoutProps>;

export default Layout;

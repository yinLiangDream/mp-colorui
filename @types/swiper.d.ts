import { ComponentClass } from 'react';

export type TType = 'screen' | 'card';
export type TDot = 'square' | 'round';
export type TOnClick = (index: number) => void;
export type TList = {
  type?: 'image' | 'video';
  url?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  showPlayBtn?: boolean;
  controls?: boolean;
  title?: string;
  poster?: string;
};

export interface IProps {
  /**
   * 轮播图类型
   *
   * 默认值 `card`
   *
   * 可选参数 `card`, `screen`
   */
  type?: TType;
  /**
   * 每个点的形状
   *
   * 默认值 `square`
   *
   * 可选类型 `square`, `round`
   */
  dot?: TDot;
  /**
   * 滑动动画时长
   *
   * 默认值 500
   */
  duration?: number;
  /**
   * 每一项
   *
   * 每一项可设置以下参数 `type`, `url`, `autoplay`, `loop`, `muted`, `showPlayBtn`, `controls`, `title`, `poster`
   */
  list?: TList[];
  /**
   * 点击事件
   */
  onClick?: TOnClick;
  /**
   * 是否显示面板指示点
   *
   * 默认值 `false`
   *
   * 可选类型 `false`, `true`
   */
  indicatorDots?: boolean;
  /**
   * 指示点颜色，16 进制色彩
   *
   * 例如：#000000，rgba(0, 0, 0, .3)
   */
  indicatorColor?: string;
  /**
   * 当前选中的指示点颜色，16 进制色彩
   * 例如：#000000，rgba(0, 0, 0, .3)
   */
  indicatorActiveColor?: string;
  /**
   * 自动切换时间间隔
   *
   * 默认值： 5000
   */
  interval?: number;
  /**
   * 是否采用衔接滑动
   *
   * 默认值 `false`
   */
  circular?: boolean;
  /**
   * 滑动时触发
   */
  onChange?: (index: number) => void;
}

export interface SwiperProps extends IProps {}
declare const Swiper: ComponentClass<SwiperProps>;

export default Swiper;

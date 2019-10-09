import { ComponentClass } from 'react';
import { BaseComponent } from './baseType'

export type TType = 'screen' | 'card';
export type TDot = 'square' | 'round';
export type TOnClick = (index: number) => void;
export type TList = {
  /**
   * 类型
   *
   * 默认值 `image`
   *
   * 可选参数 `image`, `video`
   */
  type?: 'image' | 'video';
  /**
   * 图片、视频的地址
   */
  url?: string;
  /**
   * 是否自动播放（video 有效）
   */
  autoplay?: boolean;
  /**
   * 循环播放（video 有效）
   */
  loop?: boolean;
  /**
   * 是否静音播放（video 有效）
   */
  muted?: boolean;
  /**
   * 是否显示视频底部控制栏的播放按钮（video 有效）
   */
  showPlayBtn?: boolean;
  /**
   * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）（video 有效）
   */
  controls?: boolean;
  /**
   * 视频的标题，全屏时在顶部展示（video 有效）
   */
  title?: string;
  /**
   * 视频封面的图片网络资源地址或云文件ID（video 有效）
   */
  poster?: string;
};

export interface IProps extends BaseComponent {
  /**
   * 轮播图类型
   *
   * 默认值 `card`
   *
   * 可选参数 `card`, `screen`
   */
  type?: TType;
  /**
   * 是否自动轮播
   *
   * 默认值 `false`
   */
  autoplay?: boolean;
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

import { bgColorType, bgColorMoreType, lightBgColorType } from '../utils/types';

export interface IProps {
  /**
   * 进度条形状
   *
   * 默认值 `normal`
   *
   * 可选类型 `normal`, `radius`, `round`
   */
  shape?: 'normal' | 'radius' | 'round';
  /**
   * 进度条背景色，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 进度条大小设置
   *
   * 默认值 `normal`
   *
   * 可选类型 `small`, `normal`, `xsmall`
   */
  size?: 'small' | 'normal' | 'xsmall';
  /**
   * 进度条条纹
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  stripe?: boolean;
  /**
   * 进度条动画
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  animation?: boolean;
  /**
   * 进度条百分比
   */
  percent?: number;
}

import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType
} from '../utils/types';

export type TTimes = {
  /**
   * 包含的内容
   */
  content?: any;
  /**
   * 背景色，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 图标颜色，可选类型请查看 默认基本色 可选类型
   */
  iconColor?: bgColorType;
  /**
   * 图标，可选类型请查看 icon 可选类型
   */
  icon?: iconType;
};

export interface IProps {
  /**
   * 时间轴数组
   *
   * 每一项可设置以下参数 `content`, `bgColor`, `iconColor`, `icon`
   */
  times?: TTimes[];
}

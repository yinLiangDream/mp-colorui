import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType
} from '../utils/types';

export interface IProps {
  /**
   * 标题栏背景色，可选类型请查看 默认背景色 可选类型
   */
  barColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 文字颜色，可选类型请查看 默认基本色 可选类型
   */
  textColor?: bgColorType;
  /**
   * 子标题类型
   *
   * 默认值 `border-title`
   *
   * 可选类型 `border-title`, `sub-title`, `icon`
   */
  type?: 'border-title' | 'sub-title' | 'icon';
  /**
   * 仅 type 为 sub-title时设置，子标题
   */
  subTitle?: string;
  /**
   * 子标题颜色，可选类型请查看 默认基本色 可选类型
   */
  subTitleColor?: bgColorType;
  /**
   * 仅 type 为 border-title 时设置，子边线，可选类型请查看 默认背景色 可选类型
   */
  borderColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 子边线长度
   *
   * 默认值 `20`
   */
  borderLong?: number;
  /**
   * 仅 type 为 icon 时设置，图标，可选类型请查看 icon 可选类型
   */
  icon?: iconType;
  /**
   * 图标颜色，可选类型请查看 默认基本色 可选类型
   */
  iconColor?: bgColorType;
  /**
   * 标题
   */
  title?: string;
}

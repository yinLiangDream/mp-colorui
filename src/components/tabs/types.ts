import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType
} from '../utils/types';

export interface IProps {
  /**
   * tabs类型选择
   *
   * 默认值 `default`
   *
   * 可选参数 `center`, `verb`, `default`
   */
  type?: 'center' | 'verb' | 'default';
  /**
   * 背景色，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 激活的颜色，可选类型请查看 默认基本色 可选类型
   */
  activeColor?: bgColorType;
  /**
   * 激活的下标
   *
   * 默认值 0
   */
  active?: number;
  /**
   * tab 数组
   *
   * 每一项可以设置以下参数 `text`, `icon`
   */
  tabs: {
    /**
     * 标题
     */
    text?: string;
    /**
     * 图标，可选类型请查看 icon 可选类型
     */
    icon?: iconType;
  }[];
  onClick?: (index: number) => void;
}

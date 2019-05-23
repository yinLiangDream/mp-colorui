import { ComponentClass } from 'react';

import {
  bgColorType,
  lightBgColorType,
  bgColorMoreType,
  iconType
} from './baseType';

export interface IProps {
  /**
   * 背景色，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorType | lightBgColorType | bgColorMoreType;
  /**
   * 是否固定在底部
   *
   * 默认值 `false`
   *
   * 可选类型 `false`, `true`
   */
  fix?: boolean;
  /**
   * 是否显示分割线
   *
   * 默认值 `false`
   *
   * 可选类型 `false`, `true`
   */
  border?: boolean;
  /**
   * 每一项 tab
   *
   * 每一项可设置参数 `badge`, `icon`, `img`, `title`
   */
  tabs?: {
    /**
     * 右上角提示圆点
     */
    badge?: number | boolean;
    /**
     * 图标，可选类型请查看 icon 可选类型
     */
    icon?: iconType;
    /**
     * 图片地址
     */
    img?: string;
    /**
     * 标题
     */
    title?: string;
  }[];
  /**
   * 右侧按钮组
   *
   * 每一项可设置参数 `text`, `bgColor`
   */
  buttons?: {
    /**
     * 按钮文字
     */
    text?: string;
    /**
     * 按钮颜色，可选类型请查看 默认背景色 可选类型
     */
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  }[];
  /**
   * 每个 tab 点击事件， 参数 index 为每一项的下标
   */
  onClickTab?: (index: number) => void;
  /**
   * 每个按钮的点击事件，参数 index 为每一项的下标
   */
  onClickButton?: (index: number) => void;
}

export interface ShopBarProps extends IProps {}
declare const ShopBar: ComponentClass<ShopBarProps>;

export default ShopBar;

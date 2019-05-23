import { ComponentClass } from 'react';

import { bgColorType, iconType } from './baseType';

export interface IProps {
  /**
   * tag 形状
   *
   * 默认值 `normal`
   *
   * 可选参数 `normal`, `round`, `radius`
   */
  shape?: 'normal' | 'round' | 'radius';
  /**
   * tag 大小设置
   *
   * 默认值 `normal`
   *
   * 可选参数 `small`, `normla`
   */
  size?: 'small' | 'normal';
  /**
   * 是否可以点击
   *
   * 默认值 `false`
   */
  canTouch?: boolean;
  /**
   * 点击事件
   */
  onClick?: (index: number) => void;
  /**
   * 该标签是否显示为角标位置
   *
   * 默认值 `false`
   */
  badge?: boolean;
  /**
   * tag 数组
   *
   * 每一项可以设置以下参数 `color`, `plain`, `icon`, `text`, `disabled`
   */
  tags: {
    /**
     * 标签颜色，可选类型请查看 默认基本色 可选类型
     */
    color?: bgColorType;
    /**
     * 是否镂空
     *
     * 默认值 `false`
     */
    plain?: boolean;
    /**
     * 图标，可选类型请查看 icon 可选类型
     */
    icon?: iconType;
    /**
     * 标题
     */
    text?: string;
    /**
     * 是否禁止点击
     *
     * 默认值 `false`
     */
    disabled?: boolean;
  }[];
}

export interface TagProps extends IProps {}
declare const Tag: ComponentClass<TagProps>;

export default Tag;

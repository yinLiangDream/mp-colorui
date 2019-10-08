import { ComponentClass } from 'react';

import { BaseComponent, bgColorType, iconType } from './baseType'

export interface IProps extends BaseComponent {
  /**
   * 步骤条形状
   *
   * 默认值 `line`
   *
   * 可选参数 `arrow`, `line`
   */
  type?: 'arrow' | 'line';
  /**
   * 激活的颜色，可选类型请查看 默认色-标准色
   *
   * 默认 `blue`
   */
  activeColor?: bgColorType;
  /**
   * 默认激活第几步
   */
  step?: number;
  /**
   * 每一步的样式，可自定义
   *
   * 默认值 `number`
   *
   * 可选参数 `custom`, `number`, `space`
   */
  stepIconType?: 'custom' | 'number' | 'space';
  /**
   * 每一步提示文字位置
   *
   * 默认值 `bottom`
   *
   * 可选参数 `top`, `bottom`
   */
  stepTitlePosition?: 'top' | 'bottom';
  /**
   * 每一步的设置
   *
   * 每一项可设置以下参数 `title`, `icon`
   */
  steps: {
    /**
     * 每一步提示文字
     */
    title?: string;
    /**
     * 每一步的图标，可选类型请查看 Icon-iconName
     */
    icon?: iconType;
  }[];
}

export interface StepsProps extends IProps {}
declare const Steps: ComponentClass<StepsProps>;

export default Steps;

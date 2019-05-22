import { bgColorType } from '../utils/types';

export type TType = 'normal' | 'form';
export type TShape = 'normal' | 'round';
export type TColor = bgColorType;
export type TDirection = 'vertical' | 'horizontal';

export type TCheckboxGroup = {
  /**
   * 是否选中
   *
   * 默认值 `false`
   *
   * 可选值 `true`, `false`
   */
  checked?: boolean;
  /**
   * 复选框的 key 设置，显示于复选框外
   */
  key?: string;
  /**
   * 复选框的 value 设置，该参数为选中时的参数
   */
  value?: string;
}[];

export type TOnChange = (value: string[]) => void;

export interface IProps {
  /**
   * form 类型下，复选框标题设置
   */
  title?: string;
  /**
   * 复选框类型选择
   *
   * 默认值 `normal`
   *
   * 可选类型 `normal`, `form`
   */
  type?: TType;
  /**
   * 复选框形状设置
   *
   * 默认值 `normal`
   *
   * 可选类型 `normal`, `round`
   */
  shape?: TShape;
  /**
   * 复选框选中色设置，可选类型请查看 默认基本色 可选类型
   *
   * 默认值 `green`
   */
  color?: TColor;
  /**
   * 复选框排列类型
   *
   * 默认值 `vertical`
   *
   * 可选类型 `vertical`, `horizontal`
   */
  direction?: TDirection;
  /**
   * 复选框每一项设置
   */
  checkboxGroup?: TCheckboxGroup;
  /**
   * 选择改变时触发
   *
   * 可设置以下参数 `checked`, `key`, `value`
   */
  onChange?: TOnChange;
}

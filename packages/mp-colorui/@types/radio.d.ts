import { ComponentClass } from "react";

import { BaseComponent, bgColorType } from "./baseType";

export type TType = "normal" | "form" | "list";
export type TShape = "normal" | "radio";
export type TTitle = string;
export type TColor = bgColorType;
export type TList = {
  /**
   * 选项框的显示标题
   */
  key?: string;
  /**
   * 选中的时的传递的值
   */
  value?: string;
}[];
export type TRadioDirection = "vertical" | "horizontal";

export type TOnChange = (value: any) => void;

export interface IProps extends BaseComponent {
  /**
   * 单选框类型
   *
   * 默认值 `normal`
   *
   * 可选类型 `normal`, `form`
   */
  type?: TType;
  /**
   * 单选框方向
   *
   * 默认值 `vertical`
   *
   * 可选类型 `vertical`, `horizontal`
   */
  direction?: TRadioDirection;
  /**
   * 单选框形状
   *
   * 默认值 `normal`
   *
   * 可选类型 `normal`, `radio`
   */
  shape?: TShape;
  /**
   *  type 为 form 时的标题
   */
  title?: TTitle;
  /**
   * 选中颜色，可选类型请查看 默认色-标准色
   */
  color?: TColor;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 默认选中的 value
   */
  checkedValue?: string;
  /**
   * 单选框组
   *
   * 每一项可设置以下参数 `key`, `value`
   */
  radioGroup?: TList;
  /**
   * 选项发生改变事件
   */
  onChange?: TOnChange;
}

export interface RadioProps extends IProps {}
declare const Radio: ComponentClass<RadioProps>;

export default Radio;

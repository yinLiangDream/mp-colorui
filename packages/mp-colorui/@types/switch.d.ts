import { ComponentClass } from "react";

import { BaseComponent, bgColorType } from "./baseType";

export type TType = "normal" | "form";
export type TColor = bgColorType;
export type TTitle = string;
export type TShape = "normal" | "radius";
export type TOnChange = (flag: boolean) => void;

export interface IProps extends BaseComponent {
  /**
   * switch 类型
   *
   * 默认值 `normal`
   *
   * 可选参数 `normal`, `form`
   */
  type?: TType;
  /**
   * 标题
   */
  title?: TTitle;
  /**
   * 形状
   *
   * 默认值 `normal`
   *
   * 可选参数 `normal`, `radius`
   */
  shape?: TShape;
  /**
   * 选中颜色，可选类型请查看 默认色-标准色
   *
   * 默认 `green`
   */
  color?: TColor;
  /**
   * 改变选中状态时触发
   */
  onChange?: TOnChange;
  /**
   * 是否选中
   *
   * 默认值 `false`
   */
  checked?: boolean;
  /**
   * 禁用
   *
   * 默认值 `false`
   */
  disabled?: boolean;
}

export interface SwitchProps extends IProps {}
declare const Switch: ComponentClass<SwitchProps>;

export default Switch;

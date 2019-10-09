import { ComponentClass } from "react";
import { BaseComponent } from "./baseType";

export interface IProps extends BaseComponent {
  /**
   * 水平方向排列方式
   *
   * 默认值 `start`
   *
   * 可选参数 `start`, `end`, `center`, `between`, `around`
   */
  justify?: "start" | "end" | "center" | "between" | "around";
  /**
   * 垂直方向排列方式
   *
   * 默认值 `start`
   *
   * 可选参数 `start`, `center`, `end`
   */
  align?: "start" | "center" | "end";
  /**
   * 是否换行
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  wrap?: boolean;
  /**
   * 水平还是垂直布局
   *
   * 默认值 `row`
   *
   * 可选类型 `row` | `column` | `row-reverse` | `column-reverse`
   */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  children?: any;
}

declare const Flex: ComponentClass<IProps>;

export default Flex;

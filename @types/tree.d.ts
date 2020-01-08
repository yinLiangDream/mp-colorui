import { ComponentClass } from "react";

import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType,
  BaseComponent
} from "./baseType";

type data = {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  children?: children;
  open?: boolean;
}[];

type children = data[];

export interface IProps extends BaseComponent {
  /**
   * tree 所需数据
   */
  data?: data;
  /**
   * 是否显示 check 框
   */
  showCheck?: boolean;
  /**
   * 选中颜色
   */
  color?: bgColorType;
  /**
   * 选中状态发生改变时触发
   */
  onCheckedChange?: ([]) => void;
  /**
   * 展开或者收缩时发生改变
   */
  onOpenChange?: ({ }) => void;
}

declare const Tree: ComponentClass<IProps>;

export default Tree;

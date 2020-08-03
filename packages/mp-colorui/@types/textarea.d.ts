import { ComponentClass } from "react";

import {
  BaseComponent,
  bgColorMoreType,
  bgColorType,
  lightBgColorType
} from "./baseType";

export interface IProps extends BaseComponent {
  /**
   * 显示阴影，默认 false
   */
  shadow?: boolean;
  /**
   * 输入域背景色，默认 white
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 默认初始化的值
   */
  value?: string;
  /**
   * 最大长度，0 即为不限制，默认为 0
   */
  maxLength?: number;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 是否禁用，默认 false
   */
  disabled?: boolean;
  /**
   * 自动聚焦，默认值 false
   */
  autoFocus?: boolean;
  /**
   * 获取焦点，默认 false
   */
  focus?: boolean;
  /**
   * 键盘显示完成按钮，默认 false
   */
  showConfirmBar?: boolean;
  /**
   * 右下角显示字数/最大长度，若无最大长度限制，则只显示字数
   */
  showLengthTip?: boolean;
  /**
   * 输入框高度
   */
  height?: number;
  /**
   * 超出最大长度不允许输入，默认 false
   */
  overMaxForbidden?: boolean;
  /**
   * 输入变化时触发
   * @param {string} value
   */
  onChange?: (value: string) => void;
  /**
   * 获取焦点触发
   * @param {string} value
   */
  onFocus?: (value: string) => void;
  /**
   * 失去焦点触发
   * @param {string} value
   */
  onBlur?: (value: string) => void;
  /**
   * 点击完成触发
   * @param {string} value
   */
  onConfirm?: (value: string) => void;
  /**
   * 行数变换时触发
   * @param {{height: number; heightRpx: number; lineCount: number}} detail
   */
  onLineChange?: (detail: {
    height: number;
    heightRpx: number;
    lineCount: number;
  }) => void;
}

declare const Textarea: ComponentClass<IProps>;

export default Textarea;

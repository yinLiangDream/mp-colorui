import { ComponentClass } from "react";

import { IProps as IButton } from "./button";
import { IProps as IIcon } from "./icon";
import { BaseComponent } from "./baseType";

export type TValue = string;
export type TPlaceholder = string;
export type TType = "text" | "number" | "password" | "idcard" | "digit";
export type TTitle = string;
export type TMaxLength = number;
export type TDisabled = boolean;
export type TAdjustPosition = boolean;
export type TIcon = IIcon;
export type TButton = IButton;
export type TImage = string;

export type TOnChange = (str: string) => void;
export type TOnFocus = (str: string) => void;
export type TOnBlur = (str: string) => void;
export type TOnIconClick = (e: any) => void;
export type TOnImageClick = (e: any) => void;

export interface IProps extends BaseComponent {
  /**
   * 自动聚焦
   *
   * 默认值 `false`
   */
  autoFocus?: boolean;
  /**
   * 标题宽度
   *
   * 默认 `none`
   */
  titleWidth?: number | "auto";
  /**
   * 对齐方式
   *
   * 默认值 `none`
   */
  align?: "left" | "right" | "center" | "none";
  /**
   * 表现形式
   *
   * 默认值 `normal`
   */
  pattern?: "normal" | "material";
  /**
   * 输入框默认值，不同于 defaultValue，
   * 该值在每次渲染的时候都会进行初始化，所以要避免在 onChange 事件里修改该值
   */
  value?: TValue;
  /**
   * 输入框初始值，不同于 value，该值只会初始化一次
   */
  defaultValue?: TValue;
  /**
   * 输入框占位符
   */
  placeholder?: TPlaceholder;
  /**
   * 输入框类型
   *
   * 默认值 `text`
   *
   * 可选类型 `text`, `number`, `password`, `idcard`, `digit`
   */
  type?: TType;
  /**
   * 输入框标题
   */
  title?: TTitle;
  /**
   * 最大输入长度
   *
   * 默认值 -1
   */
  maxLength?: TMaxLength;
  /**
   * 禁止输入
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  disabled?: TDisabled;
  /**
   * 键盘弹起时，是否自动上推页面
   *
   * 默认值 `true`
   *
   * 可选类型 `true`, `false`
   */
  adjustPosition?: TAdjustPosition;
  /**
   * 输入框后置icon，可选类型请查看 Icon 组件
   */
  icon?: TIcon;
  /**
   * 输入框后置icon的点击事件
   */
  onIconClick?: TOnIconClick;
  /**
   * 输入框后置按钮，可选类型请查看 Button 组件
   */
  button?: TButton;
  /**
   * 输入框后置图片 url
   */
  image?: TImage;
  /**
   * 输入框后置图片点击事件
   */
  onImageClick?: TOnImageClick;
  /**
   * 输入框内容改变时触发
   */
  onChange?: TOnChange;
  /**
   * 失去焦点时触发
   */
  onBlur?: TOnBlur;
  /**
   * 获得焦点时触发
   */
  onFocus?: TOnFocus;
  /**
   * 自定义按钮右边的内容，请传入自定义内容
   */
  renderCustomRight?: Element;
  /**
   * 是否显示清空按钮
   */
  clear?: boolean;
}

export interface InputProps extends IProps {}

declare const Input: ComponentClass<InputProps>;

export default Input;

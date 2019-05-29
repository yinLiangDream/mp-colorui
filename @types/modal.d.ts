import { ComponentClass, ReactNode } from 'react';

import { bgColorMoreType, bgColorType, lightBgColorType } from './baseType';

export type TTitle = string;
export type TClose = boolean;
export type TChildren = ReactNode;
export type TRenderTitle = ReactNode;
export type TRenderAction = ReactNode;
export type TRenderContent = ReactNode;
export type TShow = boolean;
export type TTitleBgColor = bgColorMoreType | bgColorType | lightBgColorType;
export type TActionColor = bgColorMoreType | bgColorType | lightBgColorType;
export type TActions = {
  text?: string;
  color?: bgColorType
}[];

export type TModalType = 'normal' | 'image' | 'radio' | 'checkbox';

export type normal = {
  title?: string;
  close?: boolean;
  shadowClose?: boolean;
  titleBgColor?: bgColorMoreType | bgColorType | lightBgColorType;
  buttonBgColor?: bgColorMoreType | bgColorType | lightBgColorType;
  buttons: {
    text?: string;
  }[];
};

export type image = {
  close?: boolean;
  shadowClose?: boolean;
  url?: string;
  buttonBgColor?: bgColorMoreType | bgColorType | lightBgColorType;
  buttons: {
    text?: string;
  }[];
};

export type radio = {};

export type checkbox = {};

export interface IProps {
  /**
   * 是否显示
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  show?: boolean;
  /**
   * 标题
   */
  title?: TTitle;
  /**
   * 是否显示关闭按钮
   *
   * 默认值 `true`
   *
   * 可选类型 `true`, `false`
   */
  close?: TClose;
  /**
   * 是否自定义整个 modal
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  custom?: boolean;
  /**
   * 点击阴影关闭
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  closeWithShadow?: boolean;
  children?: TChildren;
  /**
   * 标题栏背景色，可选类型请查看 默认背景色 可选类型
   */
  titleBgColor?: TTitleBgColor;
  /**
   * 操作栏颜色，可选类型请查看 默认背景色 可选类型
   */
  actionColor?: TActionColor;
  /**
   * padding 距离，默认没有 padding
   *
   * 可选参数 `xsmall`, `small`, `normal`, `large`, `xlarge`
   */
  padding?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge';
  /**
   * 操作栏操作组
   *
   * 可设置以下参数 text
   */
  actions?: TActions;
  /**
   * 自定义操作栏
   */
  renderAction?: TRenderAction;
  /**
   * 自定义标题栏
   */
  renderTitle?: TRenderTitle;
  /**
   * 操作栏点击事件
   */
  onClick?: (index: number) => void;
  /**
   * 点击 阴影 关闭事件
   */
  onCancel?: () => void;
  /**
   * 点击 关闭 关闭事件
   */
  onClose?: () => void;
}

export interface ModalProps extends IProps {}
declare const Modal: ComponentClass<ModalProps>;

export default Modal;

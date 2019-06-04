import { ComponentClass } from 'react';

import {
  bgColorType,
  lightBgColorType,
  bgColorMoreType,
  iconType
} from './baseType';

export interface IProps {
  /**
   * 按钮形状设置
   *
   * 默认值 `radius`
   *
   * 可选类型 `round`, `radius`
   *
   * `round` 圆形
   *
   * `radius` 正常
   */
  shape?: 'round' | 'radius';
  /**
   * 按钮大小设置
   *
   * 默认值 `normal`
   *
   * 可选类型 `small`, `normal`, `large`
   */
  size?: 'small' | 'normal' | 'large';
  /**
   * 按钮背景色设置，可选类型请查看 默认色
   *
   * 默认值 `blue`
   */
  bgColor?: bgColorType | lightBgColorType | bgColorMoreType;
  /**
   * 镂空设置
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  plain?: boolean;
  /**
   * 镂空边框粗细设置
   *
   * 默认值 `default`
   *
   * 可选类型 `default`, `bold`
   */
  plainSize?: 'default' | 'bold';
  /**
   * 按钮阴影设置
   *
   * 默认值 `true`
   *
   * 可选类型 `true`, `false`
   */
  shadow?: boolean;
  /**
   * 是否禁用
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  disabled?: boolean;
  /**
   * 显示加载图标
   *
   * 默认值 `false`,
   *
   * 可选类型 `true`, `false`
   */
  loading?: boolean;
  /**
   * 是否为长按钮
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  long?: boolean;
  /**
   * 按钮图标，可选类型请查看 Icon-iconName
   */
  icon?: iconType;
  /**
   * 按钮内置文字
   */
  text?: string;
  /**
   * 开放能力
   *
   * 可选类型 `contact`, `getUserInfo`, `getPhoneNumber`, `openSetting`, `feedback`, `getRealnameAuthInfo`
   */
  openType?:
    | 'contact'
    | 'getUserInfo'
    | 'getPhoneNumber'
    | 'openSetting'
    | 'feedback'
    | 'getRealnameAuthInfo';
  /**
   * 普通按钮点击事件
   * @param e any
   */
  onClick?(e: any): void;
  /**
   * open-type 为 getUserInfo 时触发
   * @param e any
   */
  onGetUserInfo?(e: any): void;
  /**
   * open-type 为 contact 时触发
   * @param e any
   */
  onContact?(e: any): void;
  /**
   * open-type 为 getPhoneNumber 时触发
   * @param e any
   */
  onGetPhoneNumber?(e: any): void;
  /**
   * open-type调用失败时触发
   * @param e any
   */
  onError?(e: any): void;
  /**
   * open-type 为 openSetting 时触发
   * @param e any
   */
  onOpenSetting?(e: any): void;
}

declare const Button: ComponentClass<IProps>;

export default Button;

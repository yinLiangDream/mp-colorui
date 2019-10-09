import { bgColorType, bgColorMoreType, lightBgColorType, BaseComponent } from './baseType'
import { ComponentClass } from 'react'

export interface IProps extends BaseComponent {
  /**
   * 出现类型
   */
  type?: 'full' | 'card';
  /**
   * 提示文字
   */
  tip?: string;
  /**
   * 是否打开
   *
   * 默认 `false`
   */
  isOpened?: boolean;
  /**
   * 点击阴影是否可以关闭
   *
   * 默认值 `true`
   */
  closeWithShadow?: boolean;
  /**
   * 动作面板数组
   */
  options?: {
    /**
     * 文字
     */
    text?: string;
    /**
     * 背景色
     */
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType | string
  }[];
  /**
   * 取消按钮的文本
   */
  cancelText?: string;
  /**
   * 是否显示取消按钮
   *
   * 默认 `false`
   */
  showCancel?: boolean;
  /**
   * 取消按钮背景色
   *
   * 默认 `white`
   */
  cancelBgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 取消按钮按钮文字颜色
   */
  cancelFontColor?: bgColorType;
  /**
   * 点击按钮事件
   */
  onClick?: (index: number) => void;
  /**
   * 点击取消触发
   */
  onCancel?: () => void;
}

declare const ActionSheet: ComponentClass<IProps>

export default ActionSheet

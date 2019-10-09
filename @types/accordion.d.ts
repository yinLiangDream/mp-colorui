import { ComponentClass } from 'react'
import { BaseComponent } from './baseType'

export interface IProps extends BaseComponent {
  /**
   * 展开速度
   */
  speed?: number;
  /**
   * 标题
   */
  title?: string;
  /**
   * 打开/关闭
   *
   * 默认值 `false`
   */
  open?: boolean;
  /**
   * 动画效果
   *
   * 默认值 `true`
   */
  animation?: boolean;
  /**
   * 卡片形式
   */
  card?: boolean;
  /**
   * 点击事件
   * @param flag
   */
  onClick?: (flag: boolean) => void;
  children?: any;
}

declare const According: ComponentClass<IProps>

export default According

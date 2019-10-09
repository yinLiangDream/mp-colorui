import { ComponentClass } from 'react';
import { BaseComponent } from './baseType'

export interface IProps extends BaseComponent {
  /**
   * prop 需要校验的 key 值
   */
  prop?: string;
  /**
   * 是否必填
   *
   * 默认 `false`
   */
  required?: boolean;
  children?: any;
}

declare const FormItem: ComponentClass<IProps>;

export default FormItem;

import { ComponentClass } from 'react';

export interface IProps {
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

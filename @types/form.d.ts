import { ComponentClass } from 'react';
import { BaseComponent } from './baseType'

export interface IProps extends BaseComponent{
  /**
   * 数据模型
   */
  model?: {};
  /**
   * 校验规则
   */
  rules?: {};
  children?: any;
}

declare const Form: ComponentClass<IProps>;

export default Form;

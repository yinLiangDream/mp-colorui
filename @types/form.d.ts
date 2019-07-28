import { ComponentClass } from 'react';

export interface IProps {
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

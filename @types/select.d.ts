import { ComponentClass } from 'react';

export type TMode = 'selector' | 'multiSelector' | 'time' | 'date' | 'region';
export type TOnChange = (e: any) => void;
export type TOnCancel = (e: any) => void;
export type TOnColumnChange = (e: any) => void;
export type TSelector = {
  /**
   * 每一项
   */
  range?: any[];
  /**
   * 若 range 每一项为 Object 类型，则此属性为对应要显示内容的 key
   */
  rangeKey?: string;
  /**
   * 默认选中的位置
   *
   * 默认值 0
   */
  value?: number;
};
export type TMultiSelector = {
  /**
   * 每一项内容
   */
  range?: any[];
  /**
   * 若 range 每一项为 Object 类型，则此属性为对应要显示内容的 key
   */
  rangeKey?: string;
  /**
   * 默认选中的位置
   *
   * 默认值 0
   */
  value?: string[];
};
export type TTime = {
  /**
   * 选中的值
   */
  value?: string;
  /**
   * 开始时间
   */
  start?: string;
  /**
   * 结束时间
   */
  end?: string;
};
export type TDate = {
  /**
   * 选中的值
   */
  value?: string;
  /**
   * 开始日期
   */
  start?: string;
  /**
   * 结束日期
   */
  end?: string;
  /**
   * 日期选择精度
   */
  fields?: 'year' | 'month' | 'day';
};
export type TRegion = {
  /**
   * 选中的值
   */
  value?: string[];
  /**
   * 可为每一列的顶部添加一个自定义的项
   */
  customItem?: string;
};

export interface IProps {
  /**
   * 标题
   */
  title?: string;
  /**
   * 是否禁止选择
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  disabled?: boolean;
  /**
   * 选择类型
   *
   * 默认值 `selector`
   *
   * 可选类型 `selector`, `multiSelector`, `time`, `date`, `region`
   */
  mode?: TMode;
  /**
   * mode 为 selector 时设置
   *
   * 可设置参数 `range`, `rangeKey`, `value`
   */
  selector?: TSelector;
  /**
   * mode 为 multiSelector 时设置
   *
   * 可设置参数 `range`, `rangeKey`, `value`
   */
  multiSelector?: TMultiSelector;
  /**
   * mode 为 time 时设置
   *
   * 可设置参数 `start`, `end`, `value`
   */
  time?: TTime;
  /**
   * mode 为 date 时设置
   *
   * 可设置参数 `start`, `end`, `value`, `fileds`
   */
  date?: TDate;
  /**
   * mode 为 region 时设置
   *
   * 可设置参数 `value`, `customItem`
   */
  region?: TRegion;
  /**
   * 选项改变时触发
   */
  onChange?: TOnChange;
  /**
   * 取消选择时触发
   */
  onCancel?: TOnCancel;
  /**
   * 多列改变时触发
   */
  onColumnChange?: TOnColumnChange;
}

export interface SelectProps extends IProps {}
declare const Select: ComponentClass<SelectProps>;

export default Select;

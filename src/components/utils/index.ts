import Taro from '@tarojs/taro'
import * as model from './model';
import rule from './rules';

const fullDate = (num: number) => {
  if (num < 10) return '0' + num;
  return num;
};

/**
 * 获取当前日期
 * @param type 单位
 */
export const getNowDate = (type: 'year' | 'day' | 'month') => {
  const date = new Date();
  const year = date.getFullYear();
  const month = fullDate(date.getMonth());
  const day = fullDate(date.getDate());
  if (type === 'year') return `${year}`;
  if (type === 'month') return `${year}-${month}`;
  if (type === 'day') return `${year}-${month}-${day}`;
  return `${year}-${month}-${day}`;
};

/**
 * 获取当前格式化时间 hh:mm
 */
export const getNowTIme = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  return `${hour}:${min}`;
};

/**
 * 判断是否为 number
 * @param obj  参数值
 */
export const isNumber = (obj: any) => {
  return typeof obj === 'number' && !isNaN(obj);
};

/**
 * 函数防抖
 * @param func 要执行的函数
 * @param wait 延迟时间
 * @returns func
 */
export const debounce = (func: Function, wait: number) => {
  let timeout: any;
  return function() {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args)
      clearTimeout(timeout)
    }, wait)
  };
};

/**
 * 函数节流
 * @param func 要执行的函数
 * @param wait 延迟时间
 * @returns func
 */
export const throttling = (func: Function, wait: number) => {
  let timeout: any;
  return function() {
    let context = this;
    let args = arguments;

    if (timeout) return;

    timeout = setTimeout(() => {
      func.apply(context, args)
      clearTimeout(timeout);
    }, wait)
  };
};

/**
 * 按照 750 作为设计时的百分比
 */
export const screenPercent = Taro.getSystemInfoSync().screenWidth / 750;

export default {
  model,
  getNowDate,
  rule
};

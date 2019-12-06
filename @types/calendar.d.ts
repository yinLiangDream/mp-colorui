import { ComponentClass } from "react";
import {
  BaseComponent,
  bgColorMoreType,
  bgColorType,
  lightBgColorType
} from "./baseType";

export interface IProps extends BaseComponent {
  /**
   * 显示周/月
   *
   * 默认 `month`
   */
  calendarType?: "week" | "month";
  /**
   * 显示模式，卡片或者全铺
   *
   * 默认 `card`
   *
   * 可选参数 `card`, `full`
   */
  showType?: "card" | "full";
  /**
   * 选中日期的颜色
   *
   * 默认颜色 `blue`
   */
  activeColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 是否显示回到今天
   *
   * 默认 `true`
   */
  backToToday?: boolean;
  /**
   * 高亮周末
   *
   * 默认 `false`
   */
  highlightWeekend?: boolean;
  /**
   * 高亮的颜色
   *
   * 默认 `blue`
   */
  highlightWeekendColor?: bgColorType;
  /**
   * 特殊的日期特殊的颜色
   *
   * 默认 `green`
   */
  specialDay?:
    | string
    | {
        date?: string;
        color?: bgColorType | lightBgColorType | bgColorMoreType;
      }[];
  /**
   * 禁止的日期
   *
   * 日期格式 XXXX-XX-XX
   *
   * 若为 XXXX-XX-XX 日期之前全部禁止，则需要写法如下 [,XXXX-XX-XX]，同理某日期之后禁止，写法为[XXXX-XX-XX,]
   * 若想某段时间段禁止，则为 [XXXX-XX-XX, XXXX-XX-XX]，日期前小后大
   */
  disabledDay?: string | string[][];
  /**
   * 某些日期提示信息
   *
   * 日期格式 XXXX-XX-XX
   */
  tipDay?: {
    date?: string;
    tipTop?: string;
    tipBottom?: string;
    tipTopColor?: bgColorType;
    tipBottomColor?: bgColorType;
  }[];
  /**
   * 显示标记
   *
   * 格式 XXXX-XX-XX 或者 {date: XXXX-XX-XX, color: 'red', num: '10'}
   */
  badge?:
    | string
    | {
        date?: string;
        color?: bgColorType;
        num?: number;
      }[];
  /**
   * 点击事件
   * @param {string} day
   */
  onClick?: (day: string) => void;
  /**
   * 切换 周/月 时触发
   * @param {string} current 当前的周/月
   */
  onChange?: (current?: string) => void;
}

declare const Calendar: ComponentClass<IProps>;

export default Calendar;

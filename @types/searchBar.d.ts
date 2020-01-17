import { ComponentClass } from "react";

import {
  iconType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  BaseComponent
} from "./baseType";

export interface IProps extends BaseComponent {
  /**
   * 搜索栏的形状
   *
   * 默认值 `radius`
   *
   * 可选类型 `radius`, `round`
   */
  shape?: "radius" | "round";
  /**
   * 占位内容
   */
  placeholder?: string;
  /**
   * 是否固定最上端
   *
   * 默认值 `false`
   *
   * 可选类型 `false`, `true`
   */
  fix?: boolean;
  /**
   * 搜索框右边显示的内容
   *
   * 默认值 `button`
   *
   * 可选参数 `button`, `text`, `none`
   */
  searchType?: "button" | "text" | "none";
  /**
   * 左边的图标组，可选类型请查看 Icon-iconName
   */
  leftIcons?: iconType[];
  /**
   * 背景色，可选类型请查看 默认色
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 右侧按钮颜色，可选类型请查看 默认色
   */
  rightButtonColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * type 为 text 时，右侧文字颜色，可选类型请查看 默认色-标准色
   */
  rightTextColor?: bgColorType;
  /**
   * 自动聚焦
   */
  autoFocus?: boolean;
  /**
   * 清空按钮
   */
  clear?: boolean;
  /**
   * 清除时触发
   */
  onClear?: () => void;
  /**
   * 图标点击事件，参数 index 为第几个图标
   */
  onIconClick?: (index: number) => void;
  /**
   * 搜索事件，参数 value 为输入的内容
   */
  onSearch?: (value: string) => void;
  /**
   * 键盘输入事件， 参数 value 为输入的内容
   */
  onInput?: (value: string) => void;
  /**
   * 聚焦事件
   * @param {string} value
   */
  onFocus?: (value: string) => void;
  /**
   * 失焦事件
   * @param {string} value
   */
  onBlur?: (value: string) => void;
  /**
   * 搜索结果滑动到底部触发
   */
  onScrollToLower?: () => void;
  /**
   * 搜索结果滑动到顶部触发
   */
  onScrollToUpper?: () => void;
  /**
   * 是否显示搜索结果
   */
  showResult?: boolean;
  /**
   * 是否显示搜索结果加载页面
   */
  showLoading?: boolean;
  /**
   * 搜索结果列表
   */
  result?: {
    title?: string;
    desc?: string;
  }[];
  /**
   * 点击搜索结果事件
   * @param {number} index
   */
  onTouchResult?: (index: number) => void;
}

export interface SearchBarProps extends IProps { }
declare const SearchBar: ComponentClass<SearchBarProps>;

export default SearchBar;

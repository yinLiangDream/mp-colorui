import {
  iconType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType
} from '../utils/types';

export interface IProps {
  /**
   * 搜索栏的形状
   *
   * 默认值 `radius`
   *
   * 可选类型 `radius`, `round`
   */
  shape?: 'radius' | 'round';
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
   * 可选参数 `button`, `text`, `none`, `list`
   */
  searchType?: 'button' | 'text' | 'none' | 'list';
  /**
   * 左边的图标组，可选类型请查看 icon 可选类型
   */
  leftIcons?: iconType[];
  /**
   * 背景色，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * 右侧按钮颜色，可选类型请查看 默认背景色 可选类型
   */
  rightButtonColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * type 为 text 时，右侧文字颜色，可选类型请查看 默认基本色 可选类型
   */
  rightTextColor?: bgColorType;
  /**
   * 图标点击事件，参数 index 为第几个图标
   */
  onIconClick?: (index: number) => void;
  /**
   * 搜索事件，参数 value 为输入的数值
   */
  onSearch?: (value: string) => void;
}

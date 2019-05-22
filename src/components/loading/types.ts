import { bgColorType, bgColorMoreType, lightBgColorType } from '../utils/types';

export interface IProps {
  /**
   * loading 类型
   *
   * 默认值 `bar`
   *
   * 可选类型 `modal`, `bar`, `line`
   */
  type?: 'modal' | 'bar' | 'line';
  /**
   * 背景色，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  /**
   * type 为 modal 时显示的文字
   */
  modalText?: string;
  /**
   * type 为 modal 时显示的图片
   */
  modelImg?: string;
  /**
   * 是否显示
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  show?: boolean;
  /**
   * type 为 line 时设置，是否加载失败
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  loadingError?: boolean;
  /**
   * type 为 line 时设置，没有更多了
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  noMore?: boolean;
}

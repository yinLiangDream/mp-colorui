import {ComponentClass} from 'react';

export interface IProps {
  /**
   * 高度
   */
  height: number;
  /**
   * 标签页
   */
  tabs: {
    name: string;
    id: string;
  }[];
  /**
   * 当前激活的标签页 Id
   */
  current?: string;
  /**
   * 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部
   */
  backTop?: boolean;
  children?: any;
}

declare const VerticalTab: ComponentClass<IProps>;

export default VerticalTab;

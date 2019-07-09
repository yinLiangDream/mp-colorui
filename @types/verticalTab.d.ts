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
  children?: any;
}

declare const VerticalTab: ComponentClass<IProps>;

export default VerticalTab;

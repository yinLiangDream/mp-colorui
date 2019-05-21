type flexSelectionType = {
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'center' | 'end';
  warp?: boolean;
};

type gridSelectionType = {
  col: number;
  mode?: 'square';
};

type direction =
  | 'around'
  | 'horizontal'
  | 'vertical'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';
type distance = 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge';

type baseSelectionType = {
  float?: 'left' | 'right';
  padding?: distance;
  paddingDirection?: direction;
  margin?: distance;
  marginDirection?: direction;
};
export interface IProps {
  /**
   * 布局类型，可选类型 flex, grid, normal
   *
   * 默认值：`normal`
   *
   * flex: 浮动布局
   *
   * grid: 栅格布局
   *
   * normal: 正常布局
   */
  type?: 'flex' | 'grid' | 'normal';
  flexSelection?: flexSelectionType;
  gridSelection?: gridSelectionType;
  baseSelection?: baseSelectionType;
}

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
  type?: 'flex' | 'grid' | 'normal';
  flexSelection?: flexSelectionType;
  gridSelection?: gridSelectionType;
  baseSelection?: baseSelectionType;
}

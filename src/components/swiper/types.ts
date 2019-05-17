export type TType = 'screen' | 'card';
export type TDot = 'square' | 'round';
export type TOnClick = (index: number) => void;
export type TList = {
  type?: 'image' | 'video';
  url?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  showPlayBtn?: boolean;
  controls?: boolean;
  title?: string;
  poster?: string;
};

export interface IProps {
  type?: TType;
  dot?: TDot;
  duration?: number;
  list?: TList[];
  onClick?: TOnClick;
  indicatorDots?: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  interval?: number;
  circular?: boolean;
  onChange?: (index: number) => void;
}

import {
  normalSizeType,
  iconType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType
} from '../utils/types';

export type TShape = 'radius' | 'round';
export type TSize = normalSizeType;
export type TBgColor = bgColorType | bgColorMoreType | lightBgColorType;
export type THeaderArray = {
  text?: string;
  tag?: iconType;
  icon?: iconType;
  url?: string;
  bgColor?: TBgColor;
  tagColor?: TBgColor;
};

export type TOnClick = (index?: number) => void;

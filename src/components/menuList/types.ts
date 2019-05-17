import { IProps as iconProps } from '../icon/types';
import { bgColorType } from '../utils/types';

export type TIcon = iconProps;
export type TTitle = string;
export type TShortLine = boolean;
export type TArrow = boolean;
export type TCard = boolean;
export type TTitleColor = bgColorType;
export type TOnClick = (index: number) => void;
export type TTist = {
  icon?: TIcon;
  titleColor?: TTitleColor;
  arrow?: TArrow;
  title?: TTitle;
  imgUrl?: string;
}[];

export interface IProps {
  shortBorder?: TShortLine;
  card?: TCard;
  list?: TTist;
  onClick?: TOnClick;
}

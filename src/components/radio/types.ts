import { bgColorType } from '../utils/types';

export type TType = 'normal' | 'form';
export type TShape = 'normal' | 'radio';
export type TTitle = string;
export type TColor = bgColorType;
export type TList = {
  key?: string;
  value?: string;
}[];
export type TRadioDirection = 'vertical' | 'horizontal';

export type TOnChange = (value: any) => void;

export interface IProps {
  type?: TType;
  direction?: TRadioDirection;
  shape?: TShape;
  title?: TTitle;
  color?: TColor;
  checkedValue?: string;
  radioGroup?: TList;
  onChange?: TOnChange;
}

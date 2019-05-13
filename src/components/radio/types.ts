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

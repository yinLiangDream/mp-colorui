import { bgColorType } from '../utils/types';

export type TType = 'normal' | 'form';
export type TShape = 'normal' | 'round';
export type TColor = bgColorType;
export type TDirection = 'vertical' | 'horizontal';

export type TCheckboxGroup = {
  checked?: boolean;
  key?: string;
  value?: string;
}[];

export type TOnChange = (value: string[]) => void;

export interface IProps {
  title?: string;
  type?: TType;
  shape?: TShape;
  color?: TColor;
  direction?: TDirection;
  checkboxGroup?: TCheckboxGroup;
  onChange?: TOnChange;
}

import { IProps as IButton } from '../button';
import { IProps as IIcon } from '../icon';

export type TValue = string;
export type TPlaceholder = string;
export type TType = 'text' | 'number' | 'password' | 'idcard' | 'digit';
export type TTitle = string;
export type TMaxLength = number;
export type TDisabled = boolean;
export type TAdjustPosition = boolean;
export type TIcon = IIcon;
export type TButton = IButton;
export type TClear = boolean;
export type TFocus = boolean;
export type TImage = string;

export type TOnChange = (str: string) => void;
export type TOnFocus = (str: string) => void;
export type TOnBlur = (str: string) => void;
export type TOnIconClick = (e: any) => void;
export type TOnImageClick = (e: any) => void;

export interface IProps {
  value?: TValue;
  placeholder?: TPlaceholder;
  type?: TType;
  title?: TTitle;
  maxLength?: TMaxLength;
  disabled?: TDisabled;
  adjustPosition?: TAdjustPosition;
  icon?: TIcon;
  onIconClick?: TOnIconClick;
  button?: TButton;
  image?: TImage;
  onImageClick?: TOnImageClick;
  onChange?: TOnChange;
  onBlur?: TOnBlur;
  onFocus?: TOnFocus;
  customRight?: Element;
}

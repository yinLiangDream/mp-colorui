import { extendSizeType, bgColorType, bgColorMoreType, lightBgColorType } from "../utils/types";

export interface IProps {
  size?: extendSizeType;
  textColor?: bgColorType;
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  cut?: boolean;
  align?: 'left' | 'center' | 'right';
  special?: 'firstUpper' | 'upper' | 'lower';
  text?: string;
}

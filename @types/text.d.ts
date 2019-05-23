import { ComponentClass } from 'react';

import {
  extendSizeType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType
} from './baseType';

export interface IProps {
  size?: extendSizeType;
  textColor?: bgColorType;
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  cut?: boolean;
  align?: 'left' | 'center' | 'right';
  special?: 'firstUpper' | 'upper' | 'lower';
  text?: string;
}

export interface TextProps extends IProps {}
declare const Text: ComponentClass<TextProps>;

export default Text;

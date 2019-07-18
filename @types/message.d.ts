import { ComponentClass } from 'react';
import { bgColorType, bgColorMoreType, lightBgColorType } from './baseType';

export interface IProps {
  type: 'success' | 'error' | 'warn' | 'info' | 'custom';
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  message?: string;
  show?: boolean;
  duration?: number;
  onClose?: () => void;
}

export const Message: ComponentClass<IProps>;

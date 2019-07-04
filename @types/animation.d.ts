import { ComponentClass } from 'react';

export interface IProps {
  type: 'fade' | 'scale-up' | 'scale-down' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' | 'shake';
  reverse?: boolean;
  children?: any;
  delay?: number;
}

declare const ClAnimation: ComponentClass<IProps>;

export default ClAnimation;

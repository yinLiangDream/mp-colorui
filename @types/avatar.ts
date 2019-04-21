import { ComponentClass } from 'react';
import {
  normalSizeType,
  iconType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType
} from 'src/components/utils/types';

export interface TimerProps {
  onClick?(index?: number): void;
  readonly shape?: 'radius' | 'round';
  readonly size?: normalSizeType;
  readonly url?: string;
  readonly text?: string;
  readonly type?: 'normal' | 'array';
  readonly tag?: iconType;
  readonly tagColor?: bgColorType | bgColorMoreType | lightBgColorType;
  readonly icon?: iconType;
  readonly bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  readonly headerArray?: {
    readonly text?: string;
    readonly tag?: iconType;
    readonly icon?: iconType;
    readonly url?: string;
    readonly bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    readonly tagColor?: bgColorType | bgColorMoreType | lightBgColorType;
  }[];
}

declare const Avatar: ComponentClass<TimerProps>;

export default Avatar;

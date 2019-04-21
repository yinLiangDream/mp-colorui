import { ComponentClass } from 'react';
import { normalSizeType, iconType, bgColorType } from 'src/components/utils/types';

export interface TimerProps {
  onClick?(index?: number): void;
  readonly shape?: 'radius' | 'round';
  readonly size?: normalSizeType;
  readonly url?: string;
  readonly text?: string;
  readonly type?: 'normal' | 'array';
  readonly tag?: iconType;
  readonly tagColor?: bgColorType;
  readonly icon?: iconType;
  readonly bgColor?: bgColorType;
  readonly headerArray?: {
    readonly text?: string;
    readonly tag?: iconType;
    readonly icon?: iconType;
    readonly url?: string;
    readonly bgColor?: bgColorType;
    readonly tagColor?: bgColorType;
  }[];
}

declare const Avatar: ComponentClass<TimerProps>;

export default Avatar;

import { ReactNode } from 'react';

export type TDirection = 'left' | 'right' | 'bottom';

export type TChildren = ReactNode;

export interface IProps {
  show?: boolean;
  direction?: TDirection;
  children?: TChildren;
}

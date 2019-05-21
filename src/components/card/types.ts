import { bgColorMoreType, bgColorType, lightBgColorType } from '../utils/types';
export type TTtype = 'card' | 'full'
export type TTitle = string

export interface IProps {
  type?: TTtype,
  bgColor?: bgColorMoreType | bgColorType | lightBgColorType
}
import { bgColorType } from '../utils/types';
export type TType = 'normal' | 'form'
export type TColor = bgColorType
export type TTitle = string
export type TShape = 'normal' | 'radius'
export type TOnChange = (flag: boolean) => void
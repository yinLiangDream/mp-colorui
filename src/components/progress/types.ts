import { bgColorType, bgColorMoreType, lightBgColorType } from "../utils/types";

export interface IProps {
  shape?: 'normal' | 'radius' | 'round';
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  size?: 'small' | 'normal' | 'xsmall';
  stripe?: boolean;
  animation?: boolean;
  percent?: number;
}

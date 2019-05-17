import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType
} from '../utils/types';

export type TTimes = {
  content?: any;
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  iconColor?: bgColorType;
  icon?: iconType;
};

export interface IProps {
  times?: TTimes[];
}

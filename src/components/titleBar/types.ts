import { bgColorType, bgColorMoreType, lightBgColorType, iconType } from "../utils/types";

export interface IProps {
  barColor?: bgColorType | bgColorMoreType | lightBgColorType;
  textColor?: bgColorType;
  type?: 'border-title' | 'sub-title' | 'icon';
  subTitle?: string;
  subTitleColor?: bgColorType;
  borderColor?: bgColorType | bgColorMoreType | lightBgColorType;
  borderLong?: number;
  icon?: iconType;
  iconColor?: bgColorType;
  text?: string;
}

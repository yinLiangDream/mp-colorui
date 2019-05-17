import { bgColorType, bgColorMoreType, lightBgColorType, iconType } from "../utils/types";

export interface IProps {
  type?: 'center' | 'verb' | 'default';
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  activeColor?: bgColorType;
  active?: number;
  tabs: {
    text?: string;
    icon?: iconType;
  }[];
  onClick?: (index: number) => void;
}

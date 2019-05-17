import { bgColorType, bgColorMoreType, lightBgColorType, iconType } from "../utils/types";

export interface IProps {
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  activeColor?: bgColorType;
  active?: number;
  fix?: boolean;
  tabs: {
    badge?: number | boolean;
    icon?: iconType;
    img?: string;
    title?: string;
    action?: boolean;
  }[];
  onClick?: (index: number) => void;
}

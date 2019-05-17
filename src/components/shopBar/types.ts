import { bgColorType, lightBgColorType, bgColorMoreType, iconType } from "../utils/types";

export interface IProps {
  bgColor?: bgColorType | lightBgColorType | bgColorMoreType;
  fix?: boolean;
  border?: boolean;
  tabs?: {
    badge?: number | boolean;
    icon?: iconType;
    img?: string;
    title?: string;
  }[];
  buttons?: {
    text?: string;
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  }[];
  onClickTab?: (index: number) => void;
  onClickButton?: (index: number) => void;
}

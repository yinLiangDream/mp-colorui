import { bgColorType, bgColorMoreType, lightBgColorType, iconType } from "../utils/types";

export interface IProps {
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  leftIcon: {
    icon?: iconType;
    color?: bgColorType;
    leftText?: string;
  }[];
  title?: string;
  rightIcon?: {
    icon?: iconType;
    color?: bgColorType;
  }[];
  onClickLeftIcon?: (index: number) => void;
  onClickRightIcon?: (index: number) => void;
}

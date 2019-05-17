import { extendSizeType, bgColorType, iconType } from "../utils/types";

export interface IProps {
  size?: extendSizeType | number;
  color?: bgColorType;
  iconName?: iconType;
}

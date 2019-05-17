import { bgColorType, iconType } from "../utils/types";

export interface IProps {
  shape?: 'normal' | 'round' | 'radius';
  size?: 'small' | 'normal';
  canTouch?: boolean;
  onClick?: (index: number) => void;
  badge?: boolean;
  tags: {
    color?: bgColorType;
    plain?: boolean;
    icon?: iconType;
    text?: string;
    disabled?: boolean;
  }[];
}

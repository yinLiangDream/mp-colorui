import { bgColorType, iconType } from "../utils/types";

export interface IProps {
  type?: 'arrow' | 'line';
  activeColor?: bgColorType;
  step?: number;
  stepIconType?: 'custom' | 'number' | 'space';
  stepTitlePosition?: 'top' | 'bottom';
  steps: {
    title?: string;
    icon?: iconType;
  }[];
}

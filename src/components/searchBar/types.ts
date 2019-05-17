import { iconType, bgColorType, bgColorMoreType, lightBgColorType } from "../utils/types";

export interface IProps {
  shape?: 'radius' | 'round';
  placeholder?: string;
  fix?: boolean;
  searchType?: 'button' | 'text' | 'none' | 'list';
  leftIcons?: iconType[];
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  rightButtonColor?: bgColorType | bgColorMoreType | lightBgColorType;
  rightTextColor?: bgColorType;
  onIconClick?: (index: number) => void;
  onSearch?: (value: string) => void;
}

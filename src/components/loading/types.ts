import { bgColorType, bgColorMoreType, lightBgColorType } from "../utils/types";

export interface IProps {
  type?: 'modal' | 'bar' | 'line';
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  modalText?: string;
  modelImg?: string;
  show?: boolean;
  loadingError?: boolean;
  noMore?: boolean;
}

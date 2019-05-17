import { bgColorType, lightBgColorType, bgColorMoreType } from "../utils/types";

export interface IProps {
  shape?: 'round' | 'radius';
  size?: 'small' | 'normal' | 'large';
  bgColor?: bgColorType | lightBgColorType | bgColorMoreType;
  plain?: boolean;
  plainSize?: 'default' | 'bold';
  shadow?: boolean;
  disabled?: boolean;
  loading?: boolean;
  long?: boolean;
  openType?:
    | 'contact'
    | 'getUserInfo'
    | 'getPhoneNumber'
    | 'openSetting'
    | 'feedback'
    | 'getRealnameAuthInfo';
  onClick?(e: any): void;
  onGetUserInfo?(e: any): void;
  onContact?(e: any): void;
  onGetPhoneNumber?(e: any): void;
  onError?(e: any): void;
  onOpenSetting?(e: any): void;
}

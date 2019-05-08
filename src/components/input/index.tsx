import Taro from '@tarojs/taro';
import {
  TValue,
  TPlaceholder,
  TType,
  TTitle,
  TMaxLength,
  TDisabled,
  TAdjustPosition,
  TIcon,
  TButton,
  TImage,
  TOnChange,
  TOnBlur,
  TOnFocus,
  TOnIconClick,
  TOnImageClick
} from './types';
import { Input, View, Image } from '@tarojs/components';
import ClIcon from '../icon/index';
import ClButton from '../button';

interface IProps {
  value?: TValue;
  placeholder?: TPlaceholder;
  type?: TType;
  title?: TTitle;
  maxLength?: TMaxLength;
  disabled?: TDisabled;
  adjustPosition?: TAdjustPosition;
  icon?: TIcon;
  onIconClick?: TOnIconClick;
  button?: TButton;
  image?: TImage;
  onImageClick?: TOnImageClick;
  onChange?: TOnChange;
  onBlur?: TOnBlur;
  onFocus?: TOnFocus;
  customRight?: Element;
}

let normalType;

function ClInput(props: IProps) {
  const onChange = (event: any) => {
    props.onChange && props.onChange(event.detail.value);
  };
  const onBlur = (event: any) => {
    props.onBlur && props.onBlur(event.detail.value);
  };
  const onFocus = (event: any) => {
    props.onFocus && props.onFocus(event.detail.value);
  };
  const onIconClick = (event: any) => {
    props.onIconClick && props.onIconClick(event);
  };
  const onImageClick = (event: any) => {
    props.onImageClick && props.onImageClick(event);
  };
  if (props.type !== 'password') {
    normalType = props.type;
  }
  const iconComponent = props.icon ? (
    <View onClick={onIconClick}>
      <ClIcon {...props.icon} />
    </View>
  ) : (
    ''
  );
  const buttonComponent = props.button ? <ClButton {...props.button} /> : '';
  const imageComponent = props.image ? (
    <View onClick={onImageClick} style={{}}>
      <Image
        src={props.image || ''}
        mode='aspectFit'
        style={{
          maxWidth: Taro.pxTransform(100),
          maxHeight: Taro.pxTransform(100)
        }}
      />
    </View>
  ) : (
    ''
  );
  const {
    title,
    placeholder,
    value,
    adjustPosition,
    type,
    maxLength,
    disabled,
    customRight
  } = props;
  return (
    <View className='cu-form-group'>
      <View className='title'>{title}</View>
      <Input
        placeholder={placeholder}
        value={value}
        onInput={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        adjustPosition={adjustPosition}
        type={normalType}
        password={type === 'password'}
        maxLength={maxLength || -1}
        disabled={disabled}
      />
      {iconComponent}
      {buttonComponent}
      {imageComponent}
      {customRight ? customRight : ''}
    </View>
  );
}

ClInput.options = {
  addGlobalClass: true
};
ClInput.defaultProps = {
  value: '',
  placeholder: '',
  type: 'text'
} as IProps;
export default ClInput;
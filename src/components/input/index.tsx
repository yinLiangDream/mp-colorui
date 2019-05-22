import { Image, Input, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import ClButton from '../button';
import ClIcon from '../icon/index';
import { IProps } from './types';

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
    renderCustomRight
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
      {renderCustomRight}
    </View>
  );
}

ClInput.options = {
  addGlobalClass: true
};
ClInput.defaultProps = {
  value: '',
  placeholder: '',
  type: 'text',
  adjustPosition: true
} as IProps;
export default ClInput;

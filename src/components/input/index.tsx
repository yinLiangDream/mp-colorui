import { Image, Input, View } from '@tarojs/components';
import Taro, { useState, pxTransform } from '@tarojs/taro';
import ClButton from '../button';
import ClIcon from '../icon/index';
import { IProps } from '../../../@types/input';

import './index.scss'

function ClInput(props: IProps) {
  let tempInput = '';
  const [focus, setFocus] = useState(false)
  const [normalType, setNormalType] = useState()
  const onChange = (event: any) => {
    tempInput = event.detail.value;
    props.onChange && props.onChange(event.detail.value);
  };
  const onBlur = (event: any) => {
    setFocus(false)
    props.onBlur && props.onBlur(event.detail.value);
  };
  const onFocus = (event: any) => {
    setFocus(true)
    props.onFocus && props.onFocus(event.detail.value);
  };
  const onIconClick = (event: any) => {
    props.onIconClick && props.onIconClick(event);
  };
  const onImageClick = (event: any) => {
    props.onImageClick && props.onImageClick(event);
  };
  if (props.type !== 'password') {
    if (props.type !== normalType) {
      setNormalType(props.type)
    }
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
  let {
    title,
    placeholder,
    value,
    adjustPosition,
    type,
    maxLength,
    disabled,
    renderCustomRight
  } = props;
  value = tempInput || value
  const titleWidth = props.titleWidth === 'auto' ? 'auto' : pxTransform(props.titleWidth || 200)
  const renderMaterialTitle = (
    <View className={`${focus ? 'materialFocus' : 'materialBlur'}`} style={{width: titleWidth}}>{title}</View>
  )
  const normalTitle = (
    <View className='title' style={{width: titleWidth}}>{title}</View>
  )
  return (
    <View className={`cu-form-group ${focus ? 'focus' : 'blur'}`} style={{position: 'relative'}}>
      {title && props.pattern === 'normal' ? normalTitle : ''}
      {title && props.pattern === 'material' ? renderMaterialTitle : ''}
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
        style={{ textAlign: props.pattern }}
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
  titleWidth: 'auto',
  align: 'left',
  pattern: 'normal',
  value: undefined,
  placeholder: '',
  type: 'text',
  adjustPosition: true
} as IProps;
export default ClInput;

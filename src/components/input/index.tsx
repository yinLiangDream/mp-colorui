import { Image, Input, View } from '@tarojs/components';
import Taro, { useState, pxTransform, useEffect, useMemo } from '@tarojs/taro'
import ClButton from '../button';
import ClIcon from '../icon/index';
import { IProps } from '../../../@types/input';

import './index.scss'
import { screenPercent } from '../../components/utils/index';

function ClInput(props: IProps) {
  const [focus, setFocus] = useState(false)
  const [normalType, setNormalType] = useState()
  const [tempInput, setTempInput] = useState('')
  const [initValue, setInitValue] = useState(props.value)
  const [inputId, setInputId] = useState(`cl-input-${+new Date()}`)
  const [materialWidth, setMaterialWidth] = useState('0px')
  const [defaultValue, setDefaultValue] = useState(props.defaultValue)
  useMemo(() => {
    if (props.defaultValue !== '' && defaultValue === '') {
      setDefaultValue(defaultValue)
    }
  }, [props.defaultValue])
  const isH5 = Taro.ENV_TYPE.WEB === Taro.getEnv()

  const onChange = (event: any) => {
    let input = event.detail.value
    setInitValue(input)
    if (props.type === 'number') {
      if (Taro.ENV_TYPE.WEB === Taro.getEnv()) {
        if (!isNaN(event.data - 0)) {
          if (event.data === null) {
            input = tempInput.slice(0, tempInput.length - 1)
          } else {
            input = tempInput + parseInt(`${event.data - 0}`)
          }
        } else {
          input = tempInput
        }
        setTempInput(input)
        setTimeout(() => {
          setInitValue(input)
        })
      } else {
        input = !isNaN(event.detail.value - 0) ? event.detail.value : null
        if (input !== null) {
          setTempInput(input)
          setInitValue(input)
        }
        else {
          setTimeout(() => {
            setInitValue(tempInput)
          })
        }
      }
    } else {
      setInitValue(input)
    }
    props.onChange && props.onChange(input);
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
  let titleWidth = props.titleWidth === 'auto' ? 'auto' : pxTransform(props.titleWidth || 200)
  useMemo(() => {
    setInitValue(value)
  }, [props.value])
  useEffect(() => {
    if (props.pattern === 'material') {
      if (isH5) {
        const content: any = document.querySelector(`#${inputId}`)
        const width = content.clientWidth
        setMaterialWidth(pxTransform(width / screenPercent))
      } else {
        const query = Taro.createSelectorQuery().in(this.$scope)
        query.select('#cl-input').fields({
          size: true
        }, (res: any) => {
          setMaterialWidth(pxTransform(res.width / screenPercent))
        }).exec()
      }
    }
  }, [props.title])
  const renderMaterialTitle = (
    <View className={`${(focus || initValue) ? 'materialFocus' : 'materialBlur'}`} style={{ width: titleWidth }} id="cl-input">{title}</View>
  )
  const renderMaterialTitle_H5 = (
    <View className={`${(focus || initValue) ? 'materialFocus' : 'materialBlur'}`} style={{ width: titleWidth }} id={inputId}>{title}</View>
  )
  const normalTitle = (
    <View className='title' style={{ width: titleWidth }}>{title}</View>
  )
  return (
    <View className={`cu-form-group ${focus ? 'focus' : 'blur'}`} style={{ position: 'relative' }}>
      {title && props.pattern === 'normal' ? normalTitle : ''}
      {title && props.pattern === 'material' ? isH5 ? renderMaterialTitle_H5 : renderMaterialTitle : ''}
      <Input
        placeholder={placeholder}
        value={defaultValue || initValue}
        onInput={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        adjustPosition={adjustPosition}
        type={normalType}
        password={type === 'password'}
        maxLength={maxLength || -1}
        disabled={disabled}
        style={{ textAlign: props.align, paddingLeft: `${props.pattern === 'material' && !(focus || initValue) ? materialWidth : 0}` }}
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
  adjustPosition: true,
  defaultValue: ''
} as IProps;
export default ClInput;

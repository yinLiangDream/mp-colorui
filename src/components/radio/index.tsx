import { Radio, RadioGroup, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import {
  TColor,
  TList,
  TOnChange,
  TShape,
  TTitle,
  TType,
  TRadioDirection
} from './types';

interface IProps {
  type?: TType;
  radioDirection?: TRadioDirection;
  shape?: TShape;
  title?: TTitle;
  color?: TColor;
  checkedValue?: string;
  list?: TList;
  onChange?: TOnChange;
}

export default function ClRadio(props: IProps) {
  const type = props.type === 'form' ? 'form' : 'normal';
  const shapeClassName = props.shape === 'radio' ? 'radio' : 'normal';
  const title = props.title ? props.title : '';
  const colorClassName = props.color ? props.color : 'green';
  const directionClassName =
    props.radioDirection === 'horizontal' ? 'flex' : '';
  const list = props.list ? props.list : [];

  const changeRadio = e => {
    props.onChange && props.onChange(e.detail.value);
  };
  const radioComponent = list.map((item, index) => (
    <View className='padding-xs'>
      <Text className='padding-right-sm'>{item.key}</Text>
      <Radio
        className={`${colorClassName} ${shapeClassName}`}
        checked={item.value === props.checkedValue}
        value={item.value || ''}
        key={item.value}
      />
    </View>
  ));
  const formRadioComponent = (
    <View className='cu-form-group'>
      <View className='title'>{title}</View>
      <View className={directionClassName}>{radioComponent}</View>
    </View>
  );
  return (
    <RadioGroup
      onChange={changeRadio}
      className={`${props.type === 'form' ? 'block' : ''}`}
    >
      {type === 'form' ? (
        formRadioComponent
      ) : (
        <View className={directionClassName}>{radioComponent}</View>
      )}
    </RadioGroup>
  );
}

ClRadio.options = {
  addGlobalClass: true
};

import { Checkbox, CheckboxGroup, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { IProps } from '../../../@types/checkbox';



export default function ClCheckbox(props: IProps) {
  const colorClassName = props.color || 'green';
  const type = props.type === 'form' ? 'form' : '';
  const shapeClassName = props.shape === 'round' ? 'round' : '';
  const directionClassName = props.direction === 'horizontal' ? 'flex' : '';
  const list = props.checkboxGroup ? props.checkboxGroup : [];
  const title = props.title;
  const checkboxComponent = list.map((item) => (
    <View className='padding-xs' key={item.value}>
      <Text className='padding-right-sm'>{item.key}</Text>
      <Checkbox
        className={`${colorClassName} ${shapeClassName}`}
        value={item.value || ''}
        checked={item.checked}
      />
    </View>
  ));
  const formComponent = (
    <View className='cu-form-group'>
      <View className='title'>{title}</View>
      <View className={directionClassName}>{checkboxComponent}</View>
    </View>
  );
  const change = e => {
    props.onChange && props.onChange(e.detail.value)
  };

  return (
    <CheckboxGroup
      className={`${type === 'form' ? 'block' : ''}`}
      onChange={change}
    >
      {type === 'form' ? formComponent : <View className={directionClassName}>{checkboxComponent}</View>}
    </CheckboxGroup>
  );
}

ClCheckbox.options = {
  addGlobalClass: true
};

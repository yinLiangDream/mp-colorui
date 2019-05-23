import { Switch, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { IProps } from '../../../@types/switch';



export default function ClSwitch(props: IProps) {
  const title = props.title;
  const color = props.color || 'green';
  const shapeClassName = props.shape !== 'radius' ? '' : 'radius';
  const type = props.type === 'form' ? 'form' : 'normal';
  const checked = !!props.checked;

  const onChange = e => {
    props.onChange && props.onChange(e.detail.value);
  };
  const switchComponent = (
    <Switch
      className={`${color} ${checked ? 'checked' : ''} ${shapeClassName} sm`}
      onChange={onChange}
    />
  );
  const formSwitchComponent = (
    <View className='cu-form-group'>
      <View className='title'>{title}</View>
      {switchComponent}
    </View>
  );
  return type === 'form' ? formSwitchComponent : switchComponent;
}

ClSwitch.options = {
  addGlobalClass: true
};

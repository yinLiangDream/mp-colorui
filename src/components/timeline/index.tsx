import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../utils/model';
import { IProps } from '../../../@types/timeline';



export default function ClTimeline(props: IProps) {
  const times = props.times || [];
  const iconColorClassName = color => (color ? TEXT_COLOR_LIST[color] : '');
  const iconClassName = icon => (icon ? `cuIcon-${icon}` : '');
  const bgColorClassName = color => (color ? BG_COLOR_LIST[color] : '');
  const items = times.map((item, index) => (
    <View
      key={index + Math.random()}
      className={`cu-item ${iconColorClassName(item.iconColor)} ${iconClassName(
        item.icon
      )}`}
    >
      <View className={`${bgColorClassName} content`}>{item.content}</View>
    </View>
  ));
  return <View className='cu-timeline'>{items}</View>;
}

ClTimeline.options = {
  addGlobalClass: true
};

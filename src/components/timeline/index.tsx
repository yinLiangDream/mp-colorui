import Taro from '@tarojs/taro';
import { TTimes } from './types';
import { View } from '@tarojs/components';
import { TEXT_COLOR_LIST, BG_COLOR_LIST } from '../utils/model';

interface IProps {
  times?: TTimes[];
}

export default function ClTimeline(props: IProps) {
  const times = props.times || [];
  const iconColorClassName = color => (color ? TEXT_COLOR_LIST[color] : '');
  const iconClassName = icon => (icon ? `icon-${icon}` : '');
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

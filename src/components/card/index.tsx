import Taro from '@tarojs/taro';
import { IProps } from './types';
import { View } from '@tarojs/components';
import { BG_COLOR_LIST } from '../utils/model';

export default function ClCard(props: IProps) {
  const typeClassName = props.type === 'full' ? 'no-card' : '';
  const colorClassName = props.bgColor ? BG_COLOR_LIST[props.bgColor] : '';
  return (
    <View className={`cu-card case ${typeClassName}`}>
      <View className={`cu-item shadow padding ${colorClassName}`}>
        {this.props.children}
      </View>
    </View>
  );
}

ClCard.options = {
  addGlobalClass: true
};

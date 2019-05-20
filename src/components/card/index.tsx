import Taro from '@tarojs/taro'
import { IProps } from './types';
import { View } from '@tarojs/components';

export default function ClCard(props: IProps) {
  const typeClassName = props.type === 'full' ? 'no-card' : ''
  return (
    <View className={`cu-card case ${typeClassName}`}>
      <View className='cu-item shadow'>
        {this.props.children}
      </View>
    </View>
  )
}

ClCard.options = {
  addGlobalClass: true
}
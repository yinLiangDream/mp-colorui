import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClLayout, ClTitleBar } from 'mp-colorui'
import MenuNavigate from '../../usedComponents/menuNavigate'

import { baseList } from '../../constant/menu'

export default function Base () {
  return (
    <View>
      <ClTitleBar title='基础' type='border-title' textColor='black' borderColor='blue'/>
      <ClLayout padding='normal' paddingDirection='vertical'>
        <MenuNavigate list={baseList}/>
      </ClLayout>
    </View>
  )
}

Base.config = {
  navigationBarTitleText: '基础'
}

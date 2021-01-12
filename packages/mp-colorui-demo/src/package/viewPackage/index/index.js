import React from 'react'
import { View } from '@tarojs/components'
import { ClLayout, ClTitleBar } from '@/mp-colorui'
import MenuNavigate from '../../../pages/components/menuNavigate'
import { viewList } from '../../../constant/menu'

export default function ViewFunc() {
  return (
    <View>
      <ClTitleBar
        title='视图'
        type='border-title'
        textColor='black'
        borderColor='blue'
      />
      <ClLayout padding='normal' paddingDirection='vertical'>
        <MenuNavigate list={viewList} name='view' />
      </ClLayout>
    </View>
  )
}

ViewFunc.config = {
  navigationBarTitleText: '视图'
}

import React from 'react'
import { View } from '@tarojs/components'
import { ClCard, ClLayout, ClTitleBar } from '@/mp-colorui'

export default function Layout() {
  return (
    <ClLayout>
      <ClTitleBar
        title='padding&margin'
        textColor='black'
        type='icon'
        subTitle='padding&margin'
        subTitleColor='shadow'
      />
      <ClCard>
        <ClLayout>
          <View className='bg-blue' style={{ height: '100%', width: '100%' }}>
            默认无任何修改
          </View>
        </ClLayout>
      </ClCard>
      <ClCard>
        <View className='bg-black'>
          <ClLayout padding='normal' paddingDirection='around'>
            <View className='bg-cyan' style={{ height: '100%', width: '100%' }}>
              上下左右黑色的内容是 padding 的距离
            </View>
          </ClLayout>
        </View>
      </ClCard>
      <ClCard>
        <View className='bg-black'>
          <ClLayout margin='normal' marginDirection='around'>
            <View className='bg-red' style={{ height: '100%', width: '100%' }}>
              上下左右内容是 margin 的距离，由于没有
              padding，所以内部整体并没有撑开
            </View>
          </ClLayout>
        </View>
      </ClCard>

      <ClTitleBar title='浮动' textColor='black' type='icon' subTitle='float' />
      <ClCard>
        <ClLayout float='right'>我是一块内容，我是右浮动</ClLayout>
        <ClLayout float='left'>我是一块内容，我是左浮动</ClLayout>
      </ClCard>
    </ClLayout>
  )
}

Layout.config = {
  navigationBarTitleText: 'Layout 基本布局'
}

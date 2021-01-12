import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClSwiperAction, ClCard, ClTitleBar } from '@/mp-colorui'

export default function SwiperAction() {
  const list = [
    {
      text: '亚古兽进化',
      bgColor: 'gradualBlue'
    },
    {
      text: '恶灵退散',
      bgColor: 'gradualRed'
    }
  ]
  return (
    <View>
      <ClTitleBar title='方向' type='icon' />
      <ClSwiperAction direction='right' options={list}>
        <ClCard bgColor='black' type='full'>
          我是内容嘤嘤嘤，向左滑动
        </ClCard>
      </ClSwiperAction>
      <ClSwiperAction direction='left' options={list}>
        <ClCard bgColor='black' type='full'>
          我是内容嘤嘤嘤，向右滑动
        </ClCard>
      </ClSwiperAction>

      <ClTitleBar title='开启' type='icon' />
      <ClSwiperAction direction='right' options={list} show>
        <ClCard bgColor='black' type='full'>
          我是内容嘤嘤嘤，向左滑动，默认开启
        </ClCard>
      </ClSwiperAction>

      <ClTitleBar title='禁止滑动' type='icon' />
      <ClSwiperAction direction='right' options={list} disabled>
        <ClCard bgColor='black' type='full'>
          我是内容嘤嘤嘤，向左滑动，禁止滑动
        </ClCard>
      </ClSwiperAction>

      <ClTitleBar title='自动关闭' type='icon' />
      <ClSwiperAction direction='right' options={list} autoClose>
        <ClCard bgColor='black' type='full'>
          我是内容嘤嘤嘤，向左滑动，自动关闭
        </ClCard>
      </ClSwiperAction>

      <ClTitleBar title='点击触发事件' type='icon' />
      <ClSwiperAction
        direction='right'
        options={list}
        onClick={index => {
          Taro.showToast({
            title: `您点击了第${index + 1}个按钮`,
            icon: 'none'
          })
        }}
      >
        <ClCard bgColor='black' type='full'>
          我是内容嘤嘤嘤，向左滑动，自动关闭
        </ClCard>
      </ClSwiperAction>

      <ClTitleBar title='开启或关闭触发' type='icon' />
      <ClSwiperAction
        direction='right'
        options={list}
        onOpened={() => {
          Taro.showToast({
            title: '打开',
            icon: 'none'
          })
        }}
        onClose={() => {
          Taro.showToast({
            title: '关闭',
            icon: 'none'
          })
        }}
      >
        <ClCard bgColor='black' type='full'>
          我是内容嘤嘤嘤，向左滑动，自动关闭
        </ClCard>
      </ClSwiperAction>
    </View>
  )
}

SwiperAction.config = {
  navigationBarTitleText: 'SwiperAction 滑动操作'
}

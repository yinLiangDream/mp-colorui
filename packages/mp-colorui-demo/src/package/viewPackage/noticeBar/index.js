import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClLayout, ClNoticeBar, ClTitleBar } from '@/mp-colorui'

export default function NoticeBar() {
  const shortText = '我是文字'
  const longText =
    '我是文字，我很长很长啊啊啊啊啊啊啊啊啊真的真的超级长啊啊啊啊啊啊啊啊啊'
  const close = () => {
    Taro.showToast({
      icon: 'none',
      title: '您点击了关闭'
    })
  }
  const showMore = () => {
    Taro.showToast({
      icon: 'none',
      title: '您点击了更多'
    })
  }
  return (
    <View>
      <ClTitleBar title='单行&多行' textColor='black' type='icon' />
      <ClLayout padding='normal' paddingDirection='bottom'>
        <ClNoticeBar text={shortText} single />
        <ClNoticeBar text={longText} single />
        <ClNoticeBar text={longText} />
      </ClLayout>
      <ClTitleBar title='滚动&速度' textColor='black' type='icon' />
      <ClLayout padding='normal' paddingDirection='bottom'>
        <ClNoticeBar text={longText} single marquee />
        <ClNoticeBar text={longText} single marquee speed={3} />
      </ClLayout>
      <ClTitleBar title='关闭' textColor='black' type='icon' />
      <ClLayout padding='normal' paddingDirection='bottom'>
        <ClNoticeBar text={shortText} single close onClose={close} />
        <ClNoticeBar text={longText} single close onClose={close} />
        <ClNoticeBar text={longText} close onClose={close} />
        <ClNoticeBar text={longText} single marquee close onClose={close} />
      </ClLayout>
      <ClTitleBar title='查看更多' textColor='black' type='icon' />
      <ClLayout padding='normal' paddingDirection='bottom'>
        <ClNoticeBar text={shortText} single showMore onMore={showMore} />
        <ClNoticeBar text={longText} single showMore onMore={showMore} />
        <ClNoticeBar text={longText} showMore onMore={showMore} />
        <ClNoticeBar
          text={longText}
          single
          marquee
          showMore
          onMore={showMore}
        />
      </ClLayout>
      <ClTitleBar title='自定义图标' textColor='black' type='icon' />
      <ClLayout padding='normal' paddingDirection='bottom'>
        <ClNoticeBar text={shortText} single icon='notice_forbid_fill' />
        <ClNoticeBar text={longText} single icon='attentionforbid' />
        <ClNoticeBar text={longText} icon='discoverfill' />
        <ClNoticeBar text={longText} single marquee icon='keyboard' />
      </ClLayout>
      <ClTitleBar title='自定义颜色' textColor='black' type='icon' />
      <ClLayout padding='normal' paddingDirection='bottom'>
        <ClNoticeBar text={shortText} single bgColor='red' />
        <ClNoticeBar text={longText} single bgColor='gradualBlue' />
        <ClNoticeBar text={longText} bgColor='light-green' />
        <ClNoticeBar text={longText} single marquee bgColor='light-cyan' />
      </ClLayout>
    </View>
  )
}

NoticeBar.config = {
  navigationBarTitleText: 'NoticeBar 通告栏'
}

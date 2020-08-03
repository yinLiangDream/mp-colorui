import React from 'react'
import { ClCard, ClLayout, ClTabBar, ClTitleBar } from 'mp-colorui'

const tabs = [
  {
    badge: true,
    icon: 'hot',
    title: '首页'
  },
  {
    badge: false,
    icon: 'info',
    title: '喵喵喵'
  },
  {
    badge: 99,
    icon: 'repeal',
    title: '嗷嗷嗷',
    action: true
  },
  {
    badge: 8,
    icon: 'weunblock',
    title: '啾啾啾'
  },
  {
    icon: 'video',
    title: '丢丢丢'
  }
]

const defaultTabs = [
  {
    badge: true,
    icon: 'hot',
    title: '首页'
  },
  {
    badge: false,
    icon: 'info',
    title: '喵喵喵'
  },
  {
    badge: 99,
    icon: 'repeal',
    title: '嗷嗷嗷'
  }
]

const imgTabs = [
  {
    badge: true,
    img:
      'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/423.jpg',
    title: '首页'
  },
  {
    badge: false,
    img:
      'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/422.jpg',
    title: '个人中心'
  },
  {
    badge: 99,
    img:
      'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/421.jpg',
    title: '设置'
  }
]

const actionTabs = JSON.parse(JSON.stringify(defaultTabs)).map(
  (item, index) => {
    index === 0 && (item.action = true)
    return item
  }
)

export default function TabBar() {
  return (
    <ClLayout>
      <ClTitleBar
        title='默认'
        textColor='black'
        type='icon'
        subTitle='default'
      />
      <ClCard>
        <ClTabBar active={1} tabs={defaultTabs} />
      </ClCard>

      <ClTitleBar
        title='背景色'
        textColor='black'
        type='icon'
        subTitle='bgColor'
      />
      <ClCard>
        <ClTabBar active={1} bgColor='light-cyan' tabs={defaultTabs} />
      </ClCard>

      <ClTitleBar
        title='激活色'
        textColor='black'
        type='icon'
        subTitle='activeColor'
      />
      <ClCard>
        <ClTabBar
          active={1}
          bgColor='light-cyan'
          activeColor='black'
          tabs={defaultTabs}
        />
      </ClCard>

      <ClTitleBar
        title='突出'
        textColor='black'
        type='icon'
        subTitle='action'
      />
      <ClCard>
        <ClTabBar
          active={1}
          bgColor='light-cyan'
          activeColor='black'
          tabs={actionTabs}
        />
      </ClCard>

      <ClTitleBar
        title='图片'
        textColor='black'
        type='icon'
        subTitle='action'
      />
      <ClCard>
        <ClTabBar active={1} tabs={imgTabs} />
      </ClCard>

      <ClLayout
        padding='large'
        paddingDirection='around'
        margin='large'
        marginDirection='around'
      />
      <ClTabBar active={1} bgColor='black' activeColor='gray' fix tabs={tabs} />
    </ClLayout>
  )
}

TabBar.config = {
  navigationBarTitleText: 'TabBar 标签栏'
}

import React from 'react'
import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClNavBar, ClTitleBar } from 'mp-colorui'

const leftIcon = [
  {
    icon: 'emoji',
    color: 'black',
    text: '左侧文字'
  }
]
const rightIcon = [
  {
    icon: 'like',
    color: 'blue'
  }
]

export default function NavBar() {
  return (
    <ClLayout>
      <ClTitleBar
        title='背景色'
        textColor='black'
        type='icon'
        subTitle='bgColor'
      />
      <ClCard>
        <ClNavBar
          leftIcon={[
            {
              icon: 'roundleftfill-copy',
              text: '返回上一页'
            }
          ]}
          bgColor='light-blue'
          title='我是标题'
          onClickLeftIcon={index => {
            Taro.navigateBack()
          }}
        />
      </ClCard>

      <ClTitleBar title='图标' textColor='black' type='icon' subTitle='icon' />
      <ClCard>
        <ClNavBar
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          title='我是标题'
          onClickLeftIcon={index => {
            Taro.showToast({
              title: leftIcon[index].icon,
              icon: 'none'
            })
          }}
          onClickRightIcon={index => {
            Taro.showToast({
              title: rightIcon[index].icon,
              icon: 'none'
            })
          }}
        />
      </ClCard>
    </ClLayout>
  )
}

NavBar.config = {
  navigationBarTitleText: 'NavBar 导航栏'
}

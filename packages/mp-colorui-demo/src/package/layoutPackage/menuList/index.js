import React from 'react'
import { ClLayout, ClMenuList, ClTitleBar } from 'mp-colorui'

const typeMenu = [
  {
    title: '第一项'
  },
  {
    title: '第二项'
  }
]

const arrowMenu = [
  {
    title: '我有箭头',
    arrow: true,
    value: '我是右侧文本'
  },
  {
    title: '我有图标',
    icon: {
      iconName: 'emoji'
    }
  },
  {
    title: '我有图片',
    imgUrl: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg'
  }
]

export default function MenuList() {
  return (
    <ClLayout>
      <ClTitleBar title='类型' textColor='black' type='icon' subTitle='type' />
      <ClLayout margin='normal' marginDirection='vertical'>
        <ClMenuList card list={typeMenu} />
      </ClLayout>
      <ClLayout margin='normal' marginDirection='vertical'>
        <ClMenuList list={typeMenu} />
      </ClLayout>

      <ClTitleBar
        title='图标&箭头'
        textColor='black'
        type='icon'
        subTitle='icon&arrow'
      />
      <ClLayout margin='normal' marginDirection='vertical'>
        <ClMenuList card list={arrowMenu} />
      </ClLayout>

      <ClTitleBar
        title='短/长分割线'
        textColor='black'
        type='icon'
        subTitle='icon&arrow'
      />
      <ClLayout margin='normal' marginDirection='vertical'>
        <ClMenuList list={typeMenu} shortBorder />
      </ClLayout>
      <ClLayout margin='normal' marginDirection='vertical'>
        <ClMenuList list={typeMenu} />
      </ClLayout>
    </ClLayout>
  )
}

MenuList.config = {
  navigationBarTitleText: 'MenuList 菜单列表'
}

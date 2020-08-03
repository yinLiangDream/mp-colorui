import React, { useState } from 'react'
import { pxTransform } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClButton, ClCard, ClDrawer, ClLayout, ClTitleBar } from 'mp-colorui'

export default function Drawer() {
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)
  const [bottom, setBottom] = useState(false)
  return (
    <ClLayout>
      <ClTitleBar
        title='方向'
        textColor='black'
        type='icon'
        subTitle='direction'
        subTitleColor='shadow'
      />
      <ClCard>
        <ClButton
          long
          onClick={() => {
            setLeft(true)
          }}
          shape='round'
        >
          我是左侧抽屉
        </ClButton>
      </ClCard>
      <ClCard>
        <ClButton
          long
          onClick={() => {
            setRight(true)
          }}
          shape='round'
        >
          我是右侧抽屉
        </ClButton>
      </ClCard>
      <ClCard>
        <ClButton
          long
          onClick={() => {
            setBottom(true)
          }}
          shape='round'
        >
          我是下侧抽屉
        </ClButton>
      </ClCard>
      <ClDrawer
        show={left}
        direction='left'
        onCancel={() => {
          setLeft(false)
        }}
      >
        我是左侧抽屉
      </ClDrawer>
      <ClDrawer
        show={right}
        direction='right'
        onCancel={() => {
          setRight(false)
        }}
      >
        我是右侧抽屉
      </ClDrawer>
      <ClDrawer
        show={bottom}
        direction='bottom'
        onCancel={() => {
          setBottom(false)
        }}
      >
        <ClCard type='full'>
          <View style={{ height: pxTransform(300) }}>我是下侧抽屉</View>
        </ClCard>
      </ClDrawer>
    </ClLayout>
  )
}

Drawer.config = {
  navigationBarTitleText: 'Drawer 抽屉'
}

import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import { ClButton, ClTitleBar, ClCard, ClFlex, ClCurtain } from 'mp-colorui'

export default function Curtain() {
  const [show, setShow] = useState(false)
  const [direction, setDirection] = useState('bottom')
  const [closeWithShadow, setCloseWithShadow] = useState(false)
  const [click, setClick] = useState(false)
  return (
    <View>
      <ClTitleBar title='位置' type='icon' />
      <ClCurtain
        show={show}
        closeBtnPosition={direction}
        onClose={() => {
          setShow(false)
          setCloseWithShadow(false)
          setClick(false)
        }}
        closeWithShadow={closeWithShadow}
        onClick={() => {
          if (click) {
            Taro.showToast({
              icon: 'none',
              title: '宫廷玉液酒'
            })
          }
        }}
      >
        <Image
          src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/v2/330.png'
          mode='aspectFit'
        />
      </ClCurtain>
      <ClCard>
        <ClFlex align='center' justify='between'>
          <ClButton
            onClick={() => {
              setShow(true)
              setDirection('top')
            }}
          >
            上
          </ClButton>
          <ClButton
            onClick={() => {
              setShow(true)
              setDirection('top-left')
            }}
          >
            上左
          </ClButton>
          <ClButton
            onClick={() => {
              setShow(true)
              setDirection('top-right')
            }}
          >
            上右
          </ClButton>
        </ClFlex>
      </ClCard>
      <ClCard>
        <ClFlex align='center' justify='between'>
          <ClButton
            onClick={() => {
              setShow(true)
              setDirection('bottom')
            }}
          >
            下
          </ClButton>
          <ClButton
            onClick={() => {
              setShow(true)
              setDirection('bottom-left')
            }}
          >
            下左
          </ClButton>
          <ClButton
            onClick={() => {
              setShow(true)
              setDirection('bottom-right')
            }}
          >
            下右
          </ClButton>
        </ClFlex>
      </ClCard>
      <ClTitleBar title='点击阴影关闭' type='icon' />
      <ClCard>
        <ClButton
          onClick={() => {
            setShow(true)
            setDirection('bottom')
            setCloseWithShadow(true)
          }}
        >
          下
        </ClButton>
      </ClCard>
      <ClTitleBar title='点击事件' type='icon' />
      <ClCard>
        <ClButton
          onClick={() => {
            setShow(true)
            setDirection('bottom')
            setClick(true)
          }}
        >
          点击图片事件
        </ClButton>
      </ClCard>
    </View>
  )
}

Curtain.config = {
  navigationBarTitleText: 'Curtain 幕帘'
}

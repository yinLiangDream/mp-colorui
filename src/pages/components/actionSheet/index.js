import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {
  ClButton,
  ClCard,
  ClTitleBar,
  ClActionSheet,
  ClFlex
} from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import { cancelCode, colorCode, typeCode } from './code'

const baselist = [
  {
    text: '分享'
  },
  {
    text: '复制'
  }
]

export default function ActionSheet () {
  const [list, setList] = useState([])
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState('full')
  const [showCancel, setShowCancel] = useState(false)
  const onClick = index => {
    Taro.showToast({
      title: `${baselist[index].text}`,
      icon: 'none'
    })
  }
  return (
    <View>
      <ClTitleBar type="icon" title="类型"/>
      <ClActionSheet
        options={list}
        isOpened={show}
        type={mode}
        showCancel={showCancel}
        onCancel={() => {
          setShow(false)
          setShowCancel(false)
        }}
        onClick={index => {
          onClick(index)
        }}
      />
      <ClCard>
        <ClFlex align="center" justify="around">
          <ClButton
            text="默认 full 模式"
            shape="round"
            onClick={() => {
              setList(
                baselist.map(item => {
                  item.bgColor = 'white'
                  return item
                })
              )
              setShow(true)
              setMode('full')
            }}
          />
          <ClButton
            text="card 模式"
            shape="round"
            onClick={() => {
              setList(
                baselist.map(item => {
                  item.bgColor = 'white'
                  return item
                })
              )
              setShow(true)
              setMode('card')
            }}
          />
        </ClFlex>
      </ClCard>
      <GenerateCode code={typeCode}/>
      <ClTitleBar type="icon" title="色彩"/>
      <ClCard>
        <ClFlex align="center" justify="around">
          <ClButton
            text="默认 full 模式，红色"
            shape="round"
            onClick={() => {
              setList(
                baselist.map((item, index) => {
                  item.bgColor = index === 0 ? 'light-olive' : 'light-red'
                  return item
                })
              )
              setShow(true)
              setMode('full')
            }}
          />
          <ClButton
            text="card 模式"
            shape="round"
            onClick={() => {
              setList(
                baselist.map((item, index) => {
                  item.bgColor = index === 0 ? 'light-olive' : 'light-red'
                  return item
                })
              )
              setShow(true)
              setMode('card')
            }}
          />
        </ClFlex>
      </ClCard>
      <GenerateCode code={colorCode}/>
      <ClTitleBar type="icon" title="取消"/>
      <ClCard>
        <ClFlex align="center" justify="around">
          <ClButton
            text="默认 full 模式，红色"
            shape="round"
            onClick={() => {
              setList(
                baselist.map((item, index) => {
                  item.bgColor = index === 0 ? 'light-olive' : 'light-red'
                  return item
                })
              )
              setShow(true)
              setMode('full')
              setShowCancel(true)
            }}
          />
          <ClButton
            text="card 模式"
            shape="round"
            onClick={() => {
              setList(
                baselist.map((item, index) => {
                  item.bgColor = index === 0 ? 'light-olive' : 'light-red'
                  return item
                })
              )
              setShow(true)
              setMode('card')
              setShowCancel(true)
            }}
          />
        </ClFlex>
      </ClCard>
      <GenerateCode code={cancelCode}/>
    </View>
  )
}
ActionSheet.config = {
  navigationBarTitleText: 'ActionSheet 动作面板'
}

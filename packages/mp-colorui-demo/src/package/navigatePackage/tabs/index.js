import React from 'react'
import { View } from '@tarojs/components'
import { ClCard, ClLayout, ClTabs, ClTitleBar } from '@/mp-colorui'

function gen(item, index) {
  return {
    text: `标签 ${index + 1}`,
    id: `id-${index}`
  }
}

const defaultTabs = [...new Array(10)].map(gen)

const verbTabs = [
  {
    text: '标签 1',
    id: 'verb-1'
  },
  {
    text: '标签 2',
    id: 'verb-2'
  },
  {
    text: '标签 3',
    id: 'verb-3'
  }
]

const iconTabs = [
  {
    text: '标签 1',
    icon: 'emoji',
    id: 'icon-1'
  },
  {
    text: '标签 2',
    icon: 'addressbook',
    id: 'icon-2'
  },
  {
    text: '标签 3',
    icon: 'discoverfill',
    id: 'icon-3'
  }
]

export default function Tabs() {
  return (
    <ClLayout>
      <ClTitleBar
        title='默认'
        textColor='black'
        type='icon'
        subTitle='default'
      />
      <ClCard>
        <ClTabs tabs={defaultTabs}>
          {defaultTabs.map(item => (
            <View key={item.id} id={item.id}>
              {item.text}
            </View>
          ))}
        </ClTabs>
      </ClCard>
      <ClTitleBar
        title='内容可拖动'
        textColor='black'
        type='icon'
        subTitle='default'
      />
      <ClCard>
        <ClTabs tabs={defaultTabs} touchMove>
          {defaultTabs.map(item => (
            <View key={item.id} id={item.id}>
              <View>{item.text}</View>
            </View>
          ))}
        </ClTabs>
      </ClCard>

      <ClTitleBar title='平分' textColor='black' type='icon' subTitle='verb' />
      <ClCard>
        <ClTabs tabs={verbTabs} type='verb'>
          {verbTabs.map(item => (
            <View key={item.id} id={item.id}>
              {item.text}
            </View>
          ))}
        </ClTabs>
      </ClCard>

      <ClTitleBar
        title='居中'
        textColor='black'
        type='icon'
        subTitle='center'
      />
      <ClCard>
        <ClTabs
          tabs={verbTabs.map(item => ({
            text: item.text,
            id: item.id + '-1'
          }))}
          type='center'
        >
          {verbTabs.map(item => (
            <View key={item.id} id={item.id + '-1'}>
              {item.text}
            </View>
          ))}
        </ClTabs>
      </ClCard>

      <ClTitleBar
        title='激活色&背景色'
        textColor='black'
        type='icon'
        subTitle='activeColor&bgColor'
      />
      <ClCard>
        <ClTabs
          tabs={verbTabs.map(item => ({
            text: item.text,
            id: item.id + '-2'
          }))}
          type='center'
          activeColor='red'
          bgColor='black'
        >
          {verbTabs.map(item => (
            <View key={item.id} id={item.id + '-2'}>
              {item.text}
            </View>
          ))}
        </ClTabs>
      </ClCard>

      <ClTitleBar
        title='带图标'
        textColor='black'
        type='icon'
        subTitle='icon'
      />
      <ClCard>
        <ClTabs tabs={iconTabs} type='center'>
          {iconTabs.map(item => (
            <View key={item.id} id={item.id}>
              {item.text}
            </View>
          ))}
        </ClTabs>
      </ClCard>
    </ClLayout>
  )
}

Tabs.config = {
  navigationBarTitleText: 'Tabs 标签页'
}

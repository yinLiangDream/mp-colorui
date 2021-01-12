import React from 'react'
import { pxTransform } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClTitleBar, ClText, ClLayout, ClFlex, ClCard } from '@/mp-colorui'

import size from '../../../constant/size'
import color from '../../../constant/color'

const sizeTip = [
  '说明文本，标签等关注度低的文字',
  '页面辅助信息，次级内容等',
  '页面默认字体',
  '页面小标题，第一层级内容显示',
  '页面大标题，用于结果页的提示信息',
  '用于金额数字等',
  '用于图标或者大数字',
  '用于特大提示'
]

export default class TextView extends React.Component {
  render() {
    const sizeComponent = size.fontSize.map((item, index) => (
      <View key={item}>
        <ClCard bgColor='grey'>
          <ClFlex align='center' justify='center'>
            <ClText text={item} size={item} />
          </ClFlex>
          <ClFlex align='center' justify='center'>
            {sizeTip[index]}
          </ClFlex>
        </ClCard>
      </View>
    ))
    const colorComponent = color.normalColor.map(item => (
      <ClCard key={item.title} bgColor='light-gray'>
        <View style={{ width: pxTransform(60) }}>
          <ClFlex justify='center' align='center'>
            <ClText textColor={item.title}>{item.title}</ClText>
          </ClFlex>
        </View>
      </ClCard>
    ))
    return (
      <ClLayout>
        <ClTitleBar
          title='文字大小'
          textColor='black'
          type='icon'
          subTitle='size'
        />
        <ClLayout padding='normal' paddingDirection='around'>
          {sizeComponent}
        </ClLayout>

        <ClTitleBar
          title='文字颜色'
          textColor='black'
          type='icon'
          subTitle='color'
        />
        <ClFlex justify='around' align='center' wrap>
          {colorComponent}
        </ClFlex>

        <ClTitleBar
          title='文字截断'
          textColor='black'
          type='icon'
          subTitle='cut'
        />
        <ClFlex>
          <ClCard bgColor='grey'>
            <View style={{ width: pxTransform(300) }}>
              <ClText cut align='left'>
                泰国、新加坡、印度尼西亚~{' '}
              </ClText>
            </View>
          </ClCard>
        </ClFlex>

        <ClTitleBar
          title='文字对齐'
          textColor='black'
          type='icon'
          subTitle='align'
        />
        <ClFlex wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClText cut align='left'>
                泰国、新加坡、印度尼西亚~{' '}
              </ClText>
            </ClCard>
            <ClCard>
              <ClText cut align='center'>
                泰国、新加坡、印度尼西亚~{' '}
              </ClText>
            </ClCard>
            <ClCard>
              <ClText cut align='right'>
                泰国、新加坡、印度尼西亚~{' '}
              </ClText>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar
          title='特殊'
          textColor='black'
          type='icon'
          subTitle='special'
        />
        <ClFlex wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClText align='center' special='firstUpper'>
                abc 首字母大写
              </ClText>
            </ClCard>
            <ClCard>
              <ClText align='center' special='upper'>
                abc 全部大写
              </ClText>
            </ClCard>
            <ClCard>
              <ClText align='center' special='lower'>
                abc 全部小写
              </ClText>
            </ClCard>
          </View>
        </ClFlex>
      </ClLayout>
    )
  }
}
TextView.config = {
  navigationBarTitleText: 'Text 文字'
}

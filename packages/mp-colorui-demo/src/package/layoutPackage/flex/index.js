import React from 'react'
import { View } from '@tarojs/components'
import { ClCard, ClFlex, ClLayout, ClTitleBar } from '@/mp-colorui'

const size = ['xs', 'sm', 'df', 'lg', 'xl']

const percent = ['sub', 'twice', 'treble']
const colors = ['blue', 'red', 'green']

const justify = ['start', 'end', 'center', 'between', 'around']
const align = ['start', 'end', 'center', 'stretch']

export default function Flex() {
  const base = size.map(cc => (
    <ClCard key={cc}>
      <ClFlex>
        <View className={`basis-${cc}`}>
          <ClCard bgColor='light-blue' type='full' shadow={false}>
            {cc}
          </ClCard>
        </View>
      </ClFlex>
    </ClCard>
  ))

  const per = percent.map((perc, index) => (
    <View key={perc} className={`flex-${perc}`}>
      <ClCard type='full' bgColor={`light-${colors[index]}`}>
        {perc}({index + 1})
      </ClCard>
    </View>
  ))

  const justifyComponent = justify.map(jus => (
    <ClCard key={jus}>
      <ClFlex justify={jus}>
        <ClCard bgColor='light-blue' shadow={false}>
          {jus}
        </ClCard>
        <ClCard bgColor='light-blue' shadow={false}>
          {jus}
        </ClCard>
      </ClFlex>
    </ClCard>
  ))

  const alignComponent = align.map(al => (
    <ClCard key={al}>
      <ClFlex align={al}>
        <View className='bg-gradual-blue padding margin'>
          <View>{al}</View>
          <View>{al}</View>
        </View>

        <View className='bg-gradual-blue padding margin'>
          <View style={{ height: '100%' }}>{al}</View>
        </View>
      </ClFlex>
    </ClCard>
  ))
  return (
    <ClLayout>
      <ClTitleBar
        title='固定尺寸'
        textColor='black'
        type='icon'
        subTitle='basis'
      />
      {base}

      <ClTitleBar
        title='比例布局'
        textColor='black'
        type='icon'
        subTitle='flex'
      />
      <ClCard>
        <ClFlex>{per}</ClFlex>
      </ClCard>

      <ClTitleBar
        title='水平对齐'
        textColor='black'
        type='icon'
        subTitle='justify'
      />
      {justifyComponent}

      <ClTitleBar
        title='垂直对齐'
        textColor='black'
        type='icon'
        subTitle='align'
      />
      {alignComponent}
    </ClLayout>
  )
}

Flex.config = {
  navigationBarTitleText: 'Flex 弹性布局'
}

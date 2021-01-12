import React from 'react'
import { ClCard, ClLayout, ClSwitch, ClTitleBar } from '@/mp-colorui'

export default function Switch() {
  return (
    <ClLayout>
      <ClTitleBar title='类型' textColor='black' type='icon' subTitle='type' />
      <ClCard>
        <ClSwitch type='normal' />
      </ClCard>
      <ClCard>
        <ClSwitch type='form' title='~(≧▽≦)/~啦啦啦' />
      </ClCard>

      <ClTitleBar title='形状' textColor='black' type='icon' subTitle='shape' />
      <ClCard>
        <ClSwitch type='form' title='~(≧▽≦)/~啦啦啦' shape='normal' />
      </ClCard>
      <ClCard>
        <ClSwitch type='form' title='~(≧▽≦)/~啦啦啦' shape='radius' />
      </ClCard>

      <ClTitleBar title='颜色' textColor='black' type='icon' subTitle='color' />
      <ClCard>
        <ClSwitch
          type='form'
          title='~(≧▽≦)/~啦啦啦'
          shape='normal'
          color='cyan'
        />
      </ClCard>
      <ClCard>
        <ClSwitch
          type='form'
          title='~(≧▽≦)/~啦啦啦'
          shape='radius'
          color='red'
        />
      </ClCard>
      <ClTitleBar title='禁用' textColor='black' type='icon' subTitle='type' />
      <ClCard>
        <ClSwitch type='normal' disabled />
      </ClCard>
    </ClLayout>
  )
}

Switch.config = {
  navigationBarTitleText: 'Switch 开关'
}

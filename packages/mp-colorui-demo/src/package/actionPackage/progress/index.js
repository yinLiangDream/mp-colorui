import React from 'react'
import { ClCard, ClLayout, ClProgress, ClTitleBar } from '@/mp-colorui'

export default function Progress() {
  return (
    <ClLayout>
      <ClTitleBar title='形状' textColor='black' type='icon' subTitle='shape' />
      <ClCard>
        <ClProgress shape='normal' percent={10} />
      </ClCard>
      <ClCard>
        <ClProgress shape='radius' percent={20} />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' percent={40} />
      </ClCard>

      <ClTitleBar
        title='背景色'
        textColor='black'
        type='icon'
        subTitle='bgColor'
      />
      <ClCard>
        <ClProgress shape='round' percent={20} bgColor='red' />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' percent={40} bgColor='light-red' />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' percent={80} bgColor='gradualRed' />
      </ClCard>

      <ClTitleBar
        title='纹理'
        textColor='black'
        type='icon'
        subTitle='stripe'
      />
      <ClCard>
        <ClProgress shape='round' stripe percent={20} bgColor='red' />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' stripe percent={40} bgColor='light-red' />
      </ClCard>

      <ClTitleBar
        title='动画'
        textColor='black'
        type='icon'
        subTitle='animation'
      />
      <ClCard>
        <ClProgress animation shape='round' stripe percent={20} bgColor='red' />
      </ClCard>
      <ClCard>
        <ClProgress
          animation
          shape='round'
          stripe
          percent={40}
          bgColor='light-red'
        />
      </ClCard>

      <ClTitleBar title='大小' textColor='black' type='icon' subTitle='size' />
      <ClCard>
        <ClProgress shape='round' size='xsmall' percent={20} bgColor='red' />
      </ClCard>
      <ClCard>
        <ClProgress
          shape='round'
          size='small'
          percent={40}
          bgColor='light-red'
        />
      </ClCard>
      <ClCard>
        <ClProgress
          shape='round'
          size='normal'
          percent={80}
          bgColor='gradualRed'
        />
      </ClCard>
    </ClLayout>
  )
}

Progress.config = {
  navigationBarTitleText: 'Progress 进度条'
}

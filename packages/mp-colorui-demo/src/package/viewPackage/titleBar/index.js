import React from 'react'
import { ClCard, ClLayout, ClTitleBar } from 'mp-colorui'

export default class TitleBar extends React.Component {
  config = {
    navigationBarTitleText: 'TitleBar 购物栏'
  }
  render() {
    return (
      <ClLayout>
        <ClTitleBar
          title='背景色&文字颜色'
          textColor='black'
          type='icon'
          subTitle='bgColor&textColor'
        />
        <ClCard>
          <ClTitleBar
            bgColor='green'
            title='标准背景色'
            textColor='white'
            borderColor='white'
          />
          <ClTitleBar
            bgColor='light-blue'
            title='浅色背景色'
            textColor='black'
            borderColor='blue'
          />
          <ClTitleBar
            bgColor='gradualBlue'
            title='渐变背景色'
            textColor='white'
            borderColor='white'
          />
        </ClCard>

        <ClTitleBar
          title='类型'
          textColor='black'
          type='icon'
          subTitle='type'
        />
        <ClCard>
          <ClTitleBar
            title='突出线'
            type='border-title'
            textColor='blue'
            borderColor='light-blue'
          />
        </ClCard>

        <ClCard>
          <ClTitleBar
            title='子标题'
            subTitle='childTitle'
            type='sub-title'
            textColor='blue'
            subTitleColor='red'
          />
        </ClCard>
        <ClCard>
          <ClTitleBar
            type='icon'
            title='标题带图标'
            icon='likefill'
            iconColor='red'
            textColor='blue'
          />
        </ClCard>
      </ClLayout>
    )
  }
}

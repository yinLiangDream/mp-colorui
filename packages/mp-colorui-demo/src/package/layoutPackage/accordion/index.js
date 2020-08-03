import React from 'react'
import { ClCard, ClAccordion, ClLayout, ClText, ClTitleBar } from 'mp-colorui'

export default class Accordion extends React.Component {
  static config = {
    navigationBarTitleText: 'Accordion 手风琴'
  }

  renderContent(card, animation, speed = 0.15, height = 0) {
    return (
      <ClLayout margin='normal' marginDirection='vertical'>
        <ClAccordion
          title='道德经'
          card={card}
          animation={animation}
          speed={speed}
          height={height}
        >
          <ClLayout padding='normal' paddingDirection='around'>
            <ClCard type='full'>
              <ClText
                text='道可道，非常道。名可名，非常名。无名天地之始。有名万物之母。'
                textColor='blue'
              />
            </ClCard>
            <ClCard type='full'>
              <ClText
                text='有无相生，难易相成，长短相形，高下相盈，音声相和，前后相随。恒也。'
                textColor='brown'
              />
            </ClCard>
            <ClCard type='full'>
              <ClText
                text='上善若水。水善利万物而不争，处众人之所恶，故几于道。'
                textColor='red'
              />
            </ClCard>
            <ClCard type='full'>
              <ClText text='道生一，一生二，二生三，三生万物。万物负阴而抱阳，冲气以为和。' />
            </ClCard>
          </ClLayout>
        </ClAccordion>
      </ClLayout>
    )
  }
  render() {
    return (
      <ClLayout>
        <ClTitleBar
          type='icon'
          title='普通模式'
          iconColor='red'
          textColor='black'
        />
        {this.renderContent(false, true)}
        <ClTitleBar
          type='icon'
          title='卡片模式'
          iconColor='red'
          textColor='black'
        />
        {this.renderContent(true, true)}
        <ClTitleBar
          type='icon'
          title='禁止动画'
          iconColor='red'
          textColor='black'
        />
        {this.renderContent(false, false)}
        <ClTitleBar
          type='icon'
          title='展开速度'
          iconColor='red'
          textColor='black'
        />
        {this.renderContent(false, true, 0.5)}
        <ClTitleBar
          type='icon'
          title='设置高度'
          iconColor='red'
          textColor='black'
        />
        {this.renderContent(true, true, undefined, 200)}
      </ClLayout>
    )
  }
}

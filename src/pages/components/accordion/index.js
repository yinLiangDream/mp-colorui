import Taro from '@tarojs/taro'
import { ClCard, ClAccordion, ClLayout, ClText, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import { cardCode, disabledAnimationCode, normalCode, speedCode } from './code'

export default function Accordion() {
  const renderContent = (card, animation, speed = 0.15) => {
    return (
      <ClLayout margin='normal' marginDirection='vertical'>
        <ClAccordion
          title='道德经'
          card={card}
          animation={animation}
          speed={speed}
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
  return (
    <ClLayout>
      <ClTitleBar
        type='icon'
        title='普通模式'
        iconColor='red'
        textColor='black'
      />
      {renderContent(false, true)}
      <ClLayout padding='normal' paddingDirection='vertical'>
        <GenerateCode code={normalCode} />
      </ClLayout>
      <ClTitleBar
        type='icon'
        title='卡片模式'
        iconColor='red'
        textColor='black'
      />
      {renderContent(true, true)}
      <ClLayout padding='normal' paddingDirection='vertical'>
        <GenerateCode code={cardCode} />
      </ClLayout>
      <ClTitleBar
        type='icon'
        title='禁止动画'
        iconColor='red'
        textColor='black'
      />
      {renderContent(false, false)}
      <ClLayout padding='normal' paddingDirection='vertical'>
        <GenerateCode code={disabledAnimationCode} />
      </ClLayout>
      <ClTitleBar
        type='icon'
        title='展开速度'
        iconColor='red'
        textColor='black'
      />
      {renderContent(false, true, 0.5)}
      <ClLayout padding='normal' paddingDirection='vertical'>
        <GenerateCode code={speedCode} />
      </ClLayout>
    </ClLayout>
  )
}

Accordion.config = {
  navigationBarTitleText: 'Accordion 手风琴'
}

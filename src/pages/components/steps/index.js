import Taro, { useState } from '@tarojs/taro'
import { ClButton, ClCard, ClLayout, ClStep, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import { customIconCode, positionCode, typeCode } from './code'

const steps = [
  {
    title: '第一步'
  }, {
    title: '第二步'
  }, {
    title: '第三步'
  }, {
    title: '第四步'
  }
]

const customSteps = [
  {
    title: '评审',
    icon: 'edit'
  }, {
    title: '开发',
    icon: 'musicfill'
  }, {
    title: '测试',
    icon: 'settingsfill'
  }, {
    title: '上线',
    icon: 'medalfill'
  }
]

export default function Steps () {
  const [stepShape, setStepShape] = useState(0)
  const next = () => {
    setStepShape(stepShape > 3 ? 0 : stepShape + 1)
  }
  return (
    <ClLayout>
      <ClTitleBar title='类型' textColor='black' type='icon' subTitle='type'/>
      <ClCard>
        <ClStep steps={steps} type='arrow' step={stepShape} activeColor='blue'/>
      </ClCard>
      <ClCard>
        <ClStep steps={steps} type='line' step={stepShape} activeColor='brown'/>
      </ClCard>
      <ClLayout padding='normal' paddingDirection='around'>
        <ClButton bgColor='light-blue' long onClick={next}>下一步</ClButton>
      </ClLayout>
      <GenerateCode code={typeCode}/>

      <ClTitleBar title='自定义图标' textColor='black' type='icon' subTitle='custom'/>
      <ClCard>
        <ClStep steps={customSteps} type='arrow' stepIconType='custom' step={stepShape} activeColor='blue'/>
      </ClCard>
      <ClCard>
        <ClStep steps={customSteps} type='line' stepIconType='custom' step={stepShape} activeColor='brown'/>
      </ClCard>
      <ClCard>
        <ClStep steps={customSteps} type='arrow' stepIconType='space' step={stepShape} activeColor='blue'/>
      </ClCard>
      <ClLayout padding='normal' paddingDirection='around'>
        <ClButton bgColor='light-blue' long onClick={next}>下一步</ClButton>
      </ClLayout>
      <GenerateCode code={customIconCode}/>

      <ClTitleBar title='文字位置' textColor='black' type='icon' subTitle='stepTitlePosition'/>
      <ClCard>
        <ClStep steps={customSteps} stepTitlePosition='bottom' type='line' stepIconType='custom' step={stepShape}
                activeColor='blue'/>
      </ClCard>
      <ClCard>
        <ClStep steps={customSteps} stepTitlePosition='top' type='line' stepIconType='custom' step={stepShape}
                activeColor='blue'/>
      </ClCard>
      <ClLayout padding='normal' paddingDirection='around'>
        <ClButton bgColor='light-blue' long onClick={next}>下一步</ClButton>
      </ClLayout>
      <GenerateCode code={positionCode}/>
    </ClLayout>
  )
}

Steps.config = {
  navigationBarTitleText: 'Steps 步骤条'
}

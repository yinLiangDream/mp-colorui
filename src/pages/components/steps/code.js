export const typeCode = `
\`\`\`
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

<ClStep steps={steps} type='arrow' step={stepShape} activeColor='blue' />

<ClStep steps={steps} type='line' step={stepShape} activeColor='brown' />
\`\`\`
`

export const customIconCode = `
\`\`\`
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

<ClStep steps={customSteps} type='arrow' stepIconType='custom' step={stepShape} activeColor='blue' />

<ClStep steps={customSteps} type='line' stepIconType='custom' step={stepShape} activeColor='brown' />

<ClStep steps={customSteps} type='arrow' stepIconType='space' step={stepShape} activeColor='blue' />
\`\`\`
`

export const positionCode = `
\`\`\`
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

<ClStep steps={customSteps} stepTitlePosition='bottom' type='line' stepIconType='custom' step={stepShape} activeColor='blue' />

<ClStep steps={customSteps} stepTitlePosition='top' type='line' stepIconType='custom' step={stepShape} activeColor='blue' />
\`\`\`
`

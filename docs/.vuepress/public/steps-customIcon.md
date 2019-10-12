
```jsx
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
```

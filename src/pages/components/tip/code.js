export const positionCode = `
\`\`\`
<ClTip message='我是上方提示' direction='top'>
  <ClButton text='上方' shape='round' />
</ClTip>

<ClTip message='我是右方提示' direction='right'>
  <ClButton text='右方' shape='round' />
</ClTip>

<ClTip message='我是左方提示' direction='left'>
  <ClButton text='左方' shape='round' />
</ClTip>

<ClTip message='我是下方提示' direction='bottom'>
  <ClButton text='下方' shape='round' />
</ClTip>
\`\`\`
`;

export const touchTypeCode = `
\`\`\`
<ClTip message='我是点击触发' direction='top' mode='click'>
  <ClButton text='点击触发' shape='round' />
</ClTip>

<ClTip message='我是触摸触发' direction='right'>
  <ClButton text='触摸触发' shape='round' />
</ClTip>
\`\`\`
`;

export const autoCode = `
\`\`\`
<ClTip message='我本应该左侧出现，但是自动检测到左侧距离不够，所以自动转换成右侧触发，上下亦是如此' direction='left'>
  <ClButton text='左侧出现' shape='round' />
</ClTip>

<ClTip message='我本应该右侧出现，但是自动检测到右侧距离不够，所以自动转换成左侧触发，上下亦是如此' direction='right'>
  <ClButton text='右侧出现' shape='round' />
</ClTip>
\`\`\`
`;

export const colorCode = `
\`\`\`
<ClTip message='我是上方提示' direction='top' bgColor='gradualBlue'>
  <ClButton text='上方' shape='round' />
</ClTip>

<ClTip message='我是右方提示' direction='right' bgColor='black'>
  <ClButton text='右方' shape='round' />
</ClTip>

<ClTip message='我是左方提示' direction='left' bgColor='gradualRed'>
  <ClButton text='左方' shape='round' />
</ClTip>

<ClTip message='我是下方提示' direction='bottom' bgColor='light-olive'>
  <ClButton text='下方' shape='round' />
</ClTip>
\`\`\`
`;

export const customCode = `
\`\`\`
const renderMessage = <View>...</View>

<ClTip renderMessage={renderMessage} direction='top' bgColor='gradualBlue' mode='click' width={350}>
  <ClButton text='渲染的内容' shape='round' />
</ClTip>
\`\`\`
`;

export const lengthCode = `
\`\`\`
<ClTip message='是时候表演真正的技术了' direction='right'>
  <ClButton text='默认长度' shape='round' />
</ClTip>

<ClTip message='是时候表演真正的技术了' direction='left' width={200}>
  <ClButton text='长度200' shape='round' />
</ClTip>
\`\`\`
`;

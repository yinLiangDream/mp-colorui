export const shapeCode = `
\`\`\`
<ClProgress shape='normal' percent={10} />

<ClProgress shape='radius' percent={20} />

<ClProgress shape='round' percent={40} />
\`\`\`
`

export const colorCode = `
\`\`\`
<ClProgress shape='round' percent={20} bgColor='red' />

<ClProgress shape='round' percent={40} bgColor='light-red' />

<ClProgress shape='round' percent={80} bgColor='gradualRed' />
\`\`\`
`

export const stripeCode = `
\`\`\`
<ClProgress shape="round" stripe percent={20} bgColor="red" />

<ClProgress shape="round" stripe percent={40} bgColor="light-red" />
\`\`\`
`

export const animationCode = `
\`\`\`
<ClProgress animation shape="round" stripe percent={20} bgColor="red" />

<ClProgress
  animation
  shape="round"
  stripe
  percent={40}
  bgColor="light-red"
/>
\`\`\`
`

export const sizeCode = `
\`\`\`
<ClProgress shape="round" size="xsmall" percent={20} bgColor="red" />

<ClProgress
  shape="round"
  size="small"
  percent={40}
  bgColor="light-red"
/>

<ClProgress
  shape="round"
  size="normal"
  percent={80}
  bgColor="gradualRed"
/>
\`\`\`
`

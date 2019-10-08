const xsmallCode = `
\`\`\`html
<ClText text='说明文本，标签等关注度低的文字' size='xsmall' />
\`\`\`
`

const smallCode = `
\`\`\`html
<ClText text='页面辅助信息，次级内容等' size='small' />
\`\`\`
`
const normalCode = `
\`\`\`html
<ClText text='页面默认字体' size='normal' />
\`\`\`
`
const largeCode = `
\`\`\`html
<ClText text='页面小标题，第一层级内容显示' size='large' />
\`\`\`
`

const xlargeCode = `
\`\`\`html
<ClText text='页面大标题，用于结果页的提示信息' size='xlarge' />
\`\`\`
`

const xxlargeCode = `
\`\`\`html
<ClText text='用于金额数字等' size='xxlarge' />
\`\`\`
`

const slargeCode = `
\`\`\`html
<ClText text='用于图标或者大数字' size='slarge' />
\`\`\`
`

const xslargeCode = `
\`\`\`html
<ClText text='用于特大提示' size='xslarge' />
\`\`\`
`

const colorCode = `
\`\`\`html
<ClText text='color' textColor={color} />
\`\`\`
`

const cutCode = `
\`\`\`html
<View style={{ width: pxTransform(300)}}>
  <ClText cut align='left'>泰国、新加坡、印度尼西亚~ </ClText>
</View>
\`\`\`
`

const leftCode = `
\`\`\`html
<ClText cut align='left'>泰国、新加坡、印度尼西亚~ </ClText>
\`\`\`
`

const middleCode = `
\`\`\`html
<ClText cut align='center'>泰国、新加坡、印度尼西亚~ </ClText>
\`\`\`
`

const rightCode = `
\`\`\`html
<ClText cut align='right'>泰国、新加坡、印度尼西亚~ </ClText>
\`\`\`
`

const firstUpperCode = `
\`\`\`html
<ClText align='center' special='firstUpper'>abc 首字母大写</ClText>
\`\`\`
`

const upperCode = `
\`\`\`html
<ClText align='center' special='upper'>abc 全部大写</ClText>
\`\`\`
`

const lowerCode = `
\`\`\`html
<ClText align='center' special='lower'>abc 全部小写</ClText>
\`\`\`
`

export default {
  xsmallCode,
  smallCode,
  normalCode,
  largeCode,
  xlargeCode,
  xxlargeCode,
  slargeCode,
  xslargeCode,
  colorCode,
  cutCode,
  leftCode,
  middleCode,
  rightCode,
  firstUpperCode,
  upperCode,
  lowerCode
}

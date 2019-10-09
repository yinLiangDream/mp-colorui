export const shapeCode = `
\`\`\`html
<ClButton shape='radius' bgColor='blue'>默认(radius)</ClButton>
<ClButton shape='round' bgColor='blue'>圆角(round)</ClButton>
\`\`\`
`

export const sizeCode = `
\`\`\`html
<ClButton shape='round' bgColor='blue' size='small'>small</ClButton>
<ClButton shape='round' bgColor='blue' size='normal'>normal</ClButton>
<ClButton shape='round' bgColor='blue' size='large'>large</ClButton>
\`\`\`
`

export const colorCode = `
\`\`\`html
<ClButton shape='round' bgColor={color} long>{color}</ClButton>
\`\`\`
`

export const linesCode = `
\`\`\`html
// showLines 代表边框是粗还是细
<ClButton long plain plainSize={showLines ? 'bold' : 'default'} shape='round' bgColor={color}>{color}</ClButton>
\`\`\`
`

export const longCode = `
\`\`\`html
<ClButton shape='round' bgColor='blue' long>块状按钮</ClButton>
\`\`\`
`

export const disabledCode = `
\`\`\`html
<ClButton shape='round' bgColor='blue' long disabled>禁止按钮</ClButton>
\`\`\`
`

export const loadingCode = `
\`\`\`html
<ClButton shape='round' bgColor='blue' long loading>加载中</ClButton>
\`\`\`
`

export const openTypeCode = `
\`\`\`html
<ClButton
  shape='round'
  bgColor='blue'
  long
  openType='getUserInfo'
  onGetUserInfo={(res) => {
    if (res.detail.userInfo) {
      Taro.showToast({
        title: res.detail.userInfo.nickName,
        icon: 'none'
      })
    }
  }}
>获取用户信息</ClButton>
\`\`\`
`

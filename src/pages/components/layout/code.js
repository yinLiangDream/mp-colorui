export const normalCode = `
\`\`\`
<ClLayout>
  <View className="bg-blue" style={{ height: "100%", width: "100%" }}>
    默认无任何修改
  </View>
</ClLayout>
\`\`\`
`
export const paddingCode = `
\`\`\`
<View className="bg-black">
  <ClLayout padding="normal" paddingDirection="around">
    <View className="bg-cyan" style={{ height: "100%", width: "100%" }}>
      上下左右黑色的内容是 padding 的距离
    </View>
  </ClLayout>
</View>
\`\`\`
`

export const marginCode = `
\`\`\`
<View className="bg-black">
  <ClLayout margin="normal" marginDirection="around">
    <View className="bg-red" style={{ height: "100%", width: "100%" }}>
      上下左右内容是 margin 的距离，由于没有
      padding，所以内部整体并没有撑开
    </View>
  </ClLayout>
</View>
\`\`\`
`

export const floatCode = `
\`\`\`
<ClLayout float="right">我是一块内容，我是右浮动</ClLayout>

<ClLayout float="left">我是一块内容，我是左浮动</ClLayout>
\`\`\`
`

export const leftCode = `
\`\`\`
<ClDrawer
  show={left}
  direction="left"
  onCancel={() => {
    setLeft(false);
  }}
>
  我是左侧抽屉
</ClDrawer>
\`\`\`
`

export const rightCode = `
\`\`\`
<ClDrawer
  show={right}
  direction="right"
  onCancel={() => {
    setRight(false);
  }}
>
  我是右侧抽屉
</ClDrawer>
\`\`\`
`

export const bottomCode = `
\`\`\`
<ClDrawer
  show={bottom}
  direction="bottom"
  onCancel={() => {
    setBottom(false);
  }}
>
  <ClCard type="full">
    <View style={{ height: pxTransform(300) }}>我是下侧抽屉</View>
  </ClCard>
</ClDrawer>
\`\`\`
`

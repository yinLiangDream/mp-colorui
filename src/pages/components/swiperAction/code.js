export const positionCode = `
\`\`\`
<ClSwiperAction direction="right" options={list}>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向左滑动
  </ClCard>
</ClSwiperAction>

<ClSwiperAction direction="left" options={list}>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向右滑动
  </ClCard>
</ClSwiperAction>
\`\`\`
`

export const openCode = `
\`\`\`
<ClSwiperAction direction="right" options={list} show>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向左滑动，默认开启
  </ClCard>
</ClSwiperAction>
\`\`\`
`

export const disabledCode = `
\`\`\`
<ClSwiperAction direction="right" options={list} disabled>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向左滑动，禁止滑动
  </ClCard>
</ClSwiperAction>
\`\`\`
`

export const autoCloseCode = `
\`\`\`
<ClSwiperAction direction="right" options={list} autoClose>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向左滑动，自动关闭
  </ClCard>
</ClSwiperAction>
\`\`\`
`

export const touchCode = `
\`\`\`
<ClSwiperAction
  direction="right"
  options={list}
  onClick={index => {
    Taro.showToast({
      title: \`您点击了第\${index + 1}个按钮\`,
      icon: "none"
    });
  }}
>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向左滑动，自动关闭
  </ClCard>
</ClSwiperAction>
\`\`\`
`

export const changeCode = `
\`\`\`
<ClSwiperAction
  direction="right"
  options={list}
  onOpened={() => {
    Taro.showToast({
      title: "打开",
      icon: "none"
    });
  }}
  onClose={() => {
    Taro.showToast({
      title: "关闭",
      icon: "none"
    });
  }}
>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向左滑动，自动关闭
  </ClCard>
</ClSwiperAction>
\`\`\`
`

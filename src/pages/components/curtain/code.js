export const positionCode = `
\`\`\`
// direction 包含有 top,top-left,top-right,bottom,bottom-left,bottom-right

<ClCurtain
  show={show}
  closeBtnPosition={direction}
  onClose={() => {
    setShow(false)
    setCloseWithShadow(false)
    setClick(false)
  }}
  closeWithShadow={closeWithShadow}
  onClick={() => {
    if (click) {
      Taro.showToast({
        icon: 'none',
        title: '宫廷玉液酒'
      })
    }
  }}
>
  <Image
    src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/v2/330.png'
    mode='aspectFit'
  />
</ClCurtain>
\`\`\`
`;

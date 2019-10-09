export const demoCode = `
\`\`\`
const mainPage =
  <ClCard>
    <ClButton shape='round' long onClick={() => {
      setShow(true)
    }}
    >点我打开全屏抽屉</ClButton>
  </ClCard>
 
const mainContent =
  <ClLayout>
    <ClCard>
      我是内容
    </ClCard>
  </ClLayout>
 
return (
  <ClScreenDrawer show={show} renderPage={mainPage} renderDrawer={mainContent} onHide={() => {
    setShow(false)
  }}
  />
)
\`\`\`
`;

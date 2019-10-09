export const valueCode = `
\`\`\`
<ClInput defaultValue="我是预先输入的内容" />
\`\`\`
`;

export const titleCode = `
\`\`\`
<ClInput title="姓名" placeholder="请输入姓名" />

<ClInput title="年龄" placeholder="请输入年龄" type="number" />
\`\`\`
`;

export const patternCode = `
<ClInput title="标准形式" placeholder="请输入姓名" />

<ClInput
  title="material 形式"
  placeholder="请输入年龄"
  type="number"
  pattern="material"
/>
`;

export const titleWidthCode = `
\`\`\`
<ClInput title="auto" placeholder="请输入姓名" />

<ClInput
  title="200宽度"
  placeholder="请输入年龄"
  type="number"
  titleWidth={200}
/>
\`\`\`
`;

export const placeholderCode = `
\`\`\`
<ClInput placeholder="我是提示内容" />
\`\`\`
`;

export const typeCode = `
\`\`\`
<ClInput placeholder="我可以输入任何文本" type="text" />

<ClInput placeholder="我可以输入数字" type="number" />

<ClInput placeholder="我可以输入密码" type="password" />

<ClInput placeholder="我可以输入浮点数" type="digit" />

<ClInput placeholder="我可以输入身份证" type="idcard" />
\`\`\`
`;

export const longCode = `
\`\`\`
<ClInput
  placeholder="我只能输入 10 个字符"
  type="text"
  maxLength={10}
/>
\`\`\`
`;

export const disabledCode = `
\`\`\`
<ClInput placeholder="我禁止输入" type="text" disabled />
\`\`\`
`;

export const autoPushCode = `
\`\`\`
<ClInput placeholder="我自动上推" type="text" adjustPosition />
\`\`\`
`;

export const contentCode = `
\`\`\`
<ClInput
  placeholder="我有图标"
  type="text"
  adjustPosition
  icon={{ iconName: "emoji" }}
  onIconClick={() => {
    Taro.showToast({
      title: "您点击了图标",
      icon: "none"
    });
  }}
/>

<ClInput
  onImageClick={() => {
    Taro.showToast({
      title: "您点击了图片",
      icon: "none"
    });
  }}
  placeholder="我有图片"
  type="text"
  adjustPosition
  image="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/330.jpg"
/>

<ClInput
  placeholder="我有按钮"
  type="text"
  adjustPosition
  button={{
    text: "按钮",
    bgColor: "light-blue",
    onClick() {
      Taro.showToast({
        title: "您点击了按钮",
        icon: "none"
      });
    }
  }}
/>
\`\`\`
`;

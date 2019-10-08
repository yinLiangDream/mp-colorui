export const typeCode = `
\`\`\`
const typeMenu = [
  {
    title: "第一项"
  },
  {
    title: "第二项"
  }
];

<ClMenuList card list={typeMenu} />

<ClMenuList list={typeMenu} />
\`\`\`
`

export const contentCode = `
\`\`\`
const arrowMenu = [
  {
    title: "我有箭头",
    arrow: true
  },
  {
    title: "我有图标",
    icon: {
      iconName: "emoji"
    }
  },
  {
    title: "我有图片",
    imgUrl: "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg"
  }
];

<ClMenuList card list={arrowMenu} />
\`\`\`
`

export const lineCode = `
\`\`\`
<ClMenuList list={typeMenu} shortBorder />

<ClMenuList list={typeMenu} />
\`\`\`
`

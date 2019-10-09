export const shapeCode = `
\`\`\`
const headerArray = [
   {
    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg'
  }, {
    bgColor: 'blue',
    text: 'M'
  }, {
    bgColor: 'blue',
    icon: 'emoji'
  }, {
    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
    tag: 'female',
    tagColor: 'light-pink'
  }
]

<ClAvatar headerArray={headerArray.slice(0, 1)} shape='radius' />

<ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' />
\`\`\`
`

export const sizeCode = `
\`\`\`
<ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='small' />

<ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='normal' />

<ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='large' />

<ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='xlarge' />
\`\`\`
`

export const shadowCode = `
\`\`\`
<ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='normal' shadow />
\`\`\`
`

export const typeCode = `
\`\`\`
// 具体 headArray 请查看形状属性的代码示意

<ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='normal' shadow />

<ClAvatar headerArray={headerArray.slice(1, 2)} shape='round' size='normal' shadow />

<ClAvatar headerArray={headerArray.slice(2, 3)} shape='round' size='normal' shadow />

<ClAvatar headerArray={headerArray.slice(3, 4)} shape='round' size='normal' shadow />
\`\`\`
`
export const headersCode = `
\`\`\`
<ClAvatar headerArray={headerArray} shape='round' size='normal' shadow />
\`\`\`
`

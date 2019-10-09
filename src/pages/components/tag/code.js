export const shapeCode = `
\`\`\`
const tags = [
  {
    text: '文明',
    color: 'light-blue'
  }, {
    text: '和谐',
    color: 'brown'
  }, {
    text: '民主',
    color: 'brown',
    plain: true
  }
]

<ClTag tags={tags.slice(0, 1)} shape='radius' />

<ClTag tags={tags.slice(0, 1)} shape='normal' />

<ClTag tags={tags.slice(0, 1)} shape='round' />
\`\`\`
`;

export const sizeCode = `
\`\`\`
<ClTag tags={tags.slice(0, 1)} shape='radius' size='small' />

<ClTag tags={tags.slice(0, 1)} shape='radius' size='normal' />
\`\`\`
`;

export const tagsCode = `
\`\`\`
<ClTag tags={tags} shape='round' size='normal' />
\`\`\`
`;

export const clickCode = `
\`\`\`
<ClTag
  tags={tags}
  shape='round'
  size='normal'
  onClick={(index) => {
    Taro.showToast({
      title: tags[index].text,
      icon: 'none'
    })
  }}
/>
\`\`\`
`;

export const resultCode = `
\`\`\`
<ClSearchBar
  shape='radius'
  bgColor='gradualBlue'
  showLoading={showLoading}
  placeholder='请输入省份或编码'
  searchType='none'
  onTouchResult={(index) => {
    Taro.showToast({
      title: \`您点击了\$\{filterResult[index].title\}省\`,
      icon: 'none'
    })
  }}
  onInput={value => {
    setShowLoading(true)
    if (timer) clearTimeout(timer)
    if (value === '') {
      clearTimeout(timer)
      setTimeout(() => {
        setShowLoading(false)
        setFilterResult([])
      })
      return
    }
    timer = setTimeout(() => {
      setShowLoading(false)
      setFilterResult(result.filter(item => item.title.includes(value) || item.desc.includes(value)))
    }, 1000)
  }}
  showResult
  result={filterResult}
/>
\`\`\`
`;

export const colorCode = `
\`\`\`
<ClSearchBar
  shape='radius'
  bgColor='grey'
  onSearch={value => {
    onSearch(value)
  }}
/>

<ClSearchBar
  shape='round'
  bgColor='light-blue'
  onSearch={value => {
    onSearch(value)
  }}
/>
\`\`\`
`;

export const placeholderCode = `
\`\`\`
<ClSearchBar
  shape='round'
  placeholder='请输入你想输入的内容'
  onSearch={value => {
    onSearch(value)
  }}
/>
\`\`\`
`;

export const actionsCode = `
\`\`\`
<ClSearchBar
  shape='round'
  rightButtonColor='black'
  rightTextColor='white'
  placeholder='请输入你想输入的内容'
  leftIcons={[
    'emoji'
  ]}
  onIconClick={(index) => {
    Taro.showToast({
      title: \`您点击了第\${index + 1}个图标\`,
      icon: 'none'
    })
  }}
  onSearch={value => {
    onSearch(value)
  }}
/>
\`\`\`
`;

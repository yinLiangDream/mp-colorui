export const typeCode = `
\`\`\`
<ClActionSheet
  options={list}
  isOpened={show}
  type={mode}
  showCancel={showCancel}
  onCancel={() => {
    setShow(false)
    setShowCancel(false)
  }}
  onClick={(index) => {
    onClick(index)
  }}
/>

<ClButton text='默认 full 模式' shape='round' onClick={() => {
  setList(baselist.map((item) => {
    item.bgColor = 'white'
    return item
  }))
  setShow(true)
  setMode('full')
}}
/>

<ClButton text='card 模式' shape='round' onClick={() => {
  setList(baselist.map((item) => {
    item.bgColor = 'white'
    return item
  }))
  setShow(true)
  setMode('card')
}}
/>
\`\`\`
`

export const colorCode = `
\`\`\`
<ClActionSheet
  options={list}
  isOpened={show}
  type={mode}
  showCancel={showCancel}
  onCancel={() => {
    setShow(false)
    setShowCancel(false)
  }}
  onClick={(index) => {
    onClick(index)
  }}
/>

<ClButton text='默认 full 模式，红色' shape='round' onClick={() => {
  setList(baselist.map((item, index) => {
    item.bgColor = index === 0 ? 'light-olive' : 'light-red'
    return item
  }))
  setShow(true)
  setMode('full')
}}
/>

<ClButton text='card 模式' shape='round' onClick={() => {
  setList(baselist.map((item, index) => {
    item.bgColor = index === 0 ? 'light-olive' : 'light-red'
    return item
  }))
  setShow(true)
  setMode('card')
}}
/>
\`\`\`
`

export const cancelCode = `
\`\`\`
<ClActionSheet
  options={list}
  isOpened={show}
  type={mode}
  showCancel={showCancel}
  onCancel={() => {
    setShow(false)
    setShowCancel(false)
  }}
  onClick={(index) => {
    onClick(index)
  }}
/>

<ClButton text='默认 full 模式，红色' shape='round' onClick={() => {
  setList(baselist.map((item, index) => {
    item.bgColor = index === 0 ? 'light-olive' : 'light-red'
    return item
  }))
  setShow(true)
  setMode('full')
  setShowCancel(true)
}}
/>

<ClButton text='card 模式' shape='round' onClick={() => {
  setList(baselist.map((item, index) => {
    item.bgColor = index === 0 ? 'light-olive' : 'light-red'
    return item
  }))
  setShow(true)
  setMode('card')
  setShowCancel(true)
}}
/>
\`\`\`
`

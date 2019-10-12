
```jsx
<ClSearchBar
  shape='radius'
  bgColor='gradualBlue'
  showLoading={showLoading}
  placeholder='请输入省份或编码'
  searchType='none'
  onTouchResult={(index) => {
    Taro.showToast({
      title: `您点击了${filterResult[index].title}省`,
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
```

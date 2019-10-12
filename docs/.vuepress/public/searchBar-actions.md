
```jsx
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
      title: `您点击了第${index + 1}个图标`,
      icon: 'none'
    })
  }}
  onSearch={value => {
    onSearch(value)
  }}
/>
```

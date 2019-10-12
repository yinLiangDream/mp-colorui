
```jsx
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
```

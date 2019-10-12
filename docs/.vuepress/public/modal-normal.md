
```jsx
<ClModal
  show={normal}
  closeWithShadow
  title='我是标题'
  close
  actions={[
    {
      text: '取消',
      color: 'red'
    },
    {
      text: '确认',
      color: 'blue'
    }
  ]}
  onCancel={() => {
    setNormal(false);
  }}
  onClose={() => {
    setNormal(false);
  }}
  onClick={index => {
    Taro.showToast({
      title: index === 0 ? '取消' : '确认',
      icon: 'none'
    });
  }}
>
  我是内容，我可以插入任何内容，点击阴影也可以关闭
</ClModal>
```


```jsx
<ClNavBar
  leftIcon={[
    {
      icon: "roundleftfill-copy",
      text: "返回上一页"
    }
  ]}
  bgColor="light-blue"
  title="我是标题"
  onClickLeftIcon={index => {
    Taro.navigateBack();
  }}
/>
```

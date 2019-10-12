
```jsx
<ClSwiperAction
  direction="right"
  options={list}
  onClick={index => {
    Taro.showToast({
      title: `您点击了第${index + 1}个按钮`,
      icon: "none"
    });
  }}
>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向左滑动，自动关闭
  </ClCard>
</ClSwiperAction>
```

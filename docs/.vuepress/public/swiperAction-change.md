
```jsx
<ClSwiperAction
  direction="right"
  options={list}
  onOpened={() => {
    Taro.showToast({
      title: "打开",
      icon: "none"
    });
  }}
  onClose={() => {
    Taro.showToast({
      title: "关闭",
      icon: "none"
    });
  }}
>
  <ClCard bgColor="black" type="full">
    我是内容嘤嘤嘤，向左滑动，自动关闭
  </ClCard>
</ClSwiperAction>
```


```jsx
<ClInput
  placeholder="我有图标"
  type="text"
  adjustPosition
  icon={{ iconName: "emoji" }}
  onIconClick={() => {
    Taro.showToast({
      title: "您点击了图标",
      icon: "none"
    });
  }}
/>

<ClInput
  onImageClick={() => {
    Taro.showToast({
      title: "您点击了图片",
      icon: "none"
    });
  }}
  placeholder="我有图片"
  type="text"
  adjustPosition
  image="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/330.jpg"
/>

<ClInput
  placeholder="我有按钮"
  type="text"
  adjustPosition
  button={{
    text: "按钮",
    bgColor: "light-blue",
    onClick() {
      Taro.showToast({
        title: "您点击了按钮",
        icon: "none"
      });
    }
  }}
/>
```

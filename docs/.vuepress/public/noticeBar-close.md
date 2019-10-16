```jsx
const close = () => {
  Taro.showToast({
    icon: "none",
    title: "您点击了关闭"
  });
};

<ClNoticeBar text={shortText} single close onClose={close} />
<ClNoticeBar text={longText} single close onClose={close} />
<ClNoticeBar text={longText} close onClose={close} />
<ClNoticeBar text={longText} single marquee close onClose={close} />
```

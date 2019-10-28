```jsx
const openTypes = [
  {
    icon: "friendfamous",
    title: "用户",
    moreAction: {
      openType: 'getUserInfo',
      onGetUserInfo: res => {
        if (res.detail.userInfo) {
          Taro.showToast({
            title: res.detail.userInfo.nickName,
            icon: "none"
          });
        }
      }
    }
  },
  {
    icon: "share",
    title: '分享',
    moreAction: {
      openType: 'share'
    }
  }
]

<ClShopBar
  onClickButton={index => {
    this.clickButton(index);
  }}
  bgColor="gradualGreen"
  tabs={openTypes}
  buttons={buttons}
/>
```

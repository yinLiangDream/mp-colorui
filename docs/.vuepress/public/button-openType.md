
```jsx
<ClButton
  shape='round'
  bgColor='blue'
  long
  openType='getUserInfo'
  onGetUserInfo={(res) => {
    if (res.detail.userInfo) {
      Taro.showToast({
        title: res.detail.userInfo.nickName,
        icon: 'none'
      })
    }
  }}
>获取用户信息</ClButton>
```

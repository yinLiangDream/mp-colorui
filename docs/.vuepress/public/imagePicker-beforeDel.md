
```jsx
<ClImagePicker
  chooseImgObj={{ count: 3 }}
  beforeDel={async () => {
    const res = await Taro.showModal({
      title: "您确认要删除吗"
    });
    console.log(res);
    if (res.confirm) return true;
    if (res.cancel) return false;
  }}
/>
```

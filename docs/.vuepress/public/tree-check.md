```jsx
const data = [
  {
    name: "中国",
    checked: true,
    children: [
      {
        name: "江苏"
      },
      {
        name: "浙江",
        children: [
          {
            name: "杭州"
          },
          {
            name: "台州"
          }
        ]
      }
    ]
  },
  {
    name: "美国",
    open: true,
    children: [
      {
        name: "旧金山",
        checked: true
      },
      {
        name: "洛杉矶"
      }
    ]
  }
];

<ClTree data={data} showCheck />

<ClTree
  data={data}
  onClickItem={item => {
    Taro.showToast({
      icon: "none",
      title: item.name
    });
  }}
/>
```

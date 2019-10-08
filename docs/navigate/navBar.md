****

## 使用说明

```jsx
import {ClNavBar} from 'mp-colorui'
```



## 一般用法

### 背景色

```jsx
<ClNavBar bgColor='blue' ></ClNavBar>
```

### 标题

```jsx
<ClNavBar title='我是标题' ></ClNavBar>
```

### 增加图标

```jsx
const leftIcon = [{
  icon: 'round',
  color: 'black',
  text: '圆形'
}]
const rightIcon = [{
  icon: 'round',
  color: 'blue'
}]

<ClNavBar leftIcon={leftIcon} rightIcon={rightIcon} ></ClNavBar>
```



## 参数说明

### NavBar 参数

| 参数      | 说明         | 类型        | 可选值                                | 默认值    |
| --------- | ------------ | ----------- | ------------------------------------- | --------- |
| bgColor   | *背景色*     | string      | 参考文档 [默认色](/home/color)        | *`white`* |
| title     | *中间标题*   | string      | -                                     | -         |
| leftIcon  | *左侧图标组* | leftIcon[]  | [详情](/navigate/navBar?id=lefticon)  | []        |
| rightIcon | *右侧图标组* | rightIcon[] | [详情](/navigate/navBar?id=rightIcon) | []        |

### leftIcon

| 参数  | 说明       | 类型   | 可选值                                             | 默认值 |
| ----- | ---------- | ------ | -------------------------------------------------- | ------ |
| icon  | *图标*     | string | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |
| color | *图标颜色* | string | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |
| text  | *左侧文字* | string | -                                                  | -      |



### rightIcon

| 参数  | 说明       | 类型   | 可选值                                             | 默认值 |
| ----- | ---------- | ------ | -------------------------------------------------- | ------ |
| icon  | *图标*     | string | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |
| color | *图标颜色* | string | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |



### NavBar 事件

| 事件名称         | 说明               | 参数返回 |
| ---------------- | ------------------ | -------- |
| onClickLeftIcon  | *点击左侧图标事件* | index    |
| onClickRightIcon | *点击右侧图标事件* | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/navBar/index" />

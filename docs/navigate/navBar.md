---

## 使用说明

```jsx
import { ClNavBar } from "mp-colorui";
```

## 一般用法

### 背景色

```jsx
<ClNavBar bgColor="blue" />
```

### 标题

```jsx
<ClNavBar title="我是标题" />
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
| bgColor   | _背景色_     | string      | 参考文档 [默认色](/home/color)        | _`white`_ |
| title     | _中间标题_   | string      | -                                     | -         |
| leftIcon  | _左侧图标组_ | leftIcon[]  | [详情](/navigate/navBar?id=lefticon)  | []        |
| rightIcon | _右侧图标组_ | rightIcon[] | [详情](/navigate/navBar?id=rightIcon) | []        |

### leftIcon

| 参数  | 说明       | 类型   | 可选值                                             | 默认值 |
| ----- | ---------- | ------ | -------------------------------------------------- | ------ |
| icon  | _图标_     | string | 参考文档 [Icon-_iconName_](/base/icon?id=iconname) | -      |
| color | _图标颜色_ | string | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |
| text  | _左侧文字_ | string | -                                                  | -      |

### rightIcon

| 参数  | 说明       | 类型   | 可选值                                             | 默认值 |
| ----- | ---------- | ------ | -------------------------------------------------- | ------ |
| icon  | _图标_     | string | 参考文档 [Icon-_iconName_](/base/icon?id=iconname) | -      |
| color | _图标颜色_ | string | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |

### NavBar 事件

| 事件名称         | 说明               | 参数返回 |
| ---------------- | ------------------ | -------- |
| onClickLeftIcon  | _点击左侧图标事件_ | index    |
| onClickRightIcon | _点击右侧图标事件_ | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/navBar/index" />

****

## 使用说明

```jsx
import {ClTabBar} from 'mp-colorui'
```



## 一般用法

### 背景色

```jsx
<ClTabBar bgColor='black' ></ClTabBar>
```

### 激活图标的颜色

```jsx
<ClTabBar activeColor='white' ></ClTabBar>
```

### 激活的索引

```jsx
<ClTabBar active={2} ></ClTabBar>
```



## 参数说明

### TabBar 参数

| 参数        | 说明              | 类型    | 可选值                                          | 默认值    |
| ----------- | ----------------- | ------- | ----------------------------------------------- | --------- |
| bgColor     | *背景色*          | string  | 参考文档 [默认色](/home/color)                  | *`white`* |
| activeColor | *激活的颜色*      | string  | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`blue`*  |
| active      | *激活的下标*      | number  | -                                               | 0         |
| fix         | *是否固定在底部*  | boolean | *`true`*,*`false`*                              | *`false`* |
| tabs        | *每一项 tab 内容* | tabs[]  | [详情](/navigate/tabBar?id=tabs)                | []        |

### tabs

| 参数   | 说明             | 类型           | 可选值                                             | 默认值    |
| ------ | ---------------- | -------------- | -------------------------------------------------- | --------- |
| badge  | *右上角提示*     | boolean/Number | -                                                  | *`false`* |
| icon   | *图标*           | string         | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -         |
| img    | *图片地址*       | string         | -                                                  | -         |
| title  | *标题*           | string         | -                                                  | -         |
| action | *是否为突出操作* | boolean        | *`true`*,*`false`*                                 | *`false`* |



### TabBar 事件

| 事件名称 | 说明       | 参数返回 |
| -------- | ---------- | -------- |
| onClick  | *点击事件* | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tabBar/index" />

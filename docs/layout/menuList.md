****

## 使用说明

```jsx
import {ClMenuList} from 'mp-colorui'
```



## 一般用法

### 卡片形式

```jsx
<ClMenuList card />
```

### 显示短分割线

```jsx
<ClMenuList shortBorder />
```



## 参数说明

### MenuList 参数

| 参数        | 说明             | 类型    | 可选值                           | 默认值    |
| ----------- | ---------------- | ------- | -------------------------------- | --------- |
| shortBorder | *是否为短分割线* | boolean | *`true`*,*`false`*               | *`false`* |
| card        | *是否是卡片形式* | boolean | *`true`*,*`false`*               | *`false`* |
| list        | *列表每一项*     | list[]  | [详情](/layout/menuList?id=list) | []        |

### list

| 参数       | 说明           | 类型    | 可选值                                               | 默认值    |
| ---------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| icon       | *列表图标*     | Object  | 参考文档 [Icon-*Icon* 参数](/base/icon?id=icon-参数) | {}        |
| titleColor | *标题颜色*     | string  | 参考文档 [默认色-标准色](/home/color?id=标准色)      | *`black`* |
| arrow      | *是否显示箭头* | boolean | *`true`*,*`false`*                                   | *`false`* |
| title      | *标题*         | string  | -                                                    | -         |
| imgUrl     | *图片地址*     | string  | -                                                    | -         |
| disabled   | *禁止点击*     | boolean | -                                                    | *`false`* |



### MenuList 事件

| 事件名称 | 说明       | 参数返回 |
| -------- | ---------- | -------- |
| onClick  | *点击事件* | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/menuList/index" />

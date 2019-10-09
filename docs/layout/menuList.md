---

## 使用说明

```jsx
import { ClMenuList } from "mp-colorui";
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
| shortBorder | _是否为短分割线_ | boolean | _`true`_,_`false`_               | _`false`_ |
| card        | _是否是卡片形式_ | boolean | _`true`_,_`false`_               | _`false`_ |
| list        | _列表每一项_     | list[]  | [详情](/layout/menuList?id=list) | []        |

### list

| 参数       | 说明           | 类型    | 可选值                                               | 默认值    |
| ---------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| icon       | _列表图标_     | Object  | 参考文档 [Icon-_Icon_ 参数](/base/icon?id=icon-参数) | {}        |
| titleColor | _标题颜色_     | string  | 参考文档 [默认色-标准色](/home/color?id=标准色)      | _`black`_ |
| arrow      | _是否显示箭头_ | boolean | _`true`_,_`false`_                                   | _`false`_ |
| title      | _标题_         | string  | -                                                    | -         |
| imgUrl     | _图片地址_     | string  | -                                                    | -         |
| disabled   | _禁止点击_     | boolean | -                                                    | _`false`_ |

### MenuList 事件

| 事件名称 | 说明       | 参数返回 |
| -------- | ---------- | -------- |
| onClick  | _点击事件_ | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/menuList/index" />

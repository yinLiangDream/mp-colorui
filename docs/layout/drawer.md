## 使用说明

```jsx
import { ClDrawer } from "mp-colorui";
```

## 一般用法

### 显示抽屉

```jsx
<ClDrawer show>内容</ClDrawer>
```

### 抽屉方向

```jsx
<ClDrawer direction="left">内容</ClDrawer>
```

### 点击阴影关闭

```jsx
<ClDrawer closeWithShadow>内容</ClDrawer>
```

## 参数说明

### Drawer 参数

| 参数            | 说明           | 类型    | 可选值                        | 默认值     |
| --------------- | -------------- | ------- | ----------------------------- | ---------- |
| show            | _是否显示_     | boolean | _`true`_,_`false`_            | _`false`_  |
| direction       | _抽屉方向_     | string  | _`bottom`_,_`left`_,_`right`_ | _`bottom`_ |
| closeWithShadow | _点击阴影关闭_ | boolean | _`true`_,_`false`_            | _`true`_   |

### Drawer 事件

| 事件名称 | 说明               | 参数返回 |
| -------- | ------------------ | -------- |
| onCancel | _点击阴影取消事件_ | -        |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/drawer/index" />

## 使用说明

```jsx
import { ClScreenDrawer } from "mp-colorui";
```

## 一般用法

### 显示全屏抽屉

```jsx
<ClScreenDrawer show>我是内容</ClScreenDrawer>
```

## 参数说明

### ScreenDrawer 参数

| 参数         | 说明                | 类型    | 可选值             | 默认值    |
| ------------ | ------------------- | ------- | ------------------ | --------- |
| show         | _显示 screenDrawer_ | boolean | _`true`_,_`false`_ | _`false`_ |
| renderPage   | 页面显示内容        | Element | -                  | -         |
| renderDrawer | 抽屉显示的内容      | Element | -                  | -         |

### ScreenDrawer 事件

| 事件名称 | 说明                 | 参数返回 |
| -------- | -------------------- | -------- |
| onHide   | _点击返回小箭头触发_ | -        |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/screenDrawer/index" />

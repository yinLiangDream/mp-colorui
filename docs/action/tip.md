## 使用说明

```jsx
import { ClTip } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='tip' />

## 参数说明

### Tip 参数

| 参数          | 说明       | 类型    | 可选值                         | 默认值    |
| ------------- | ---------- | ------- | ------------------------------ | --------- |
| show          | _是否显示_ | boolean | -                              | _`false`_ |
| bgColor       | _背景色_   | string  | 参考文档 [默认色](/home/color) | -         |
| message       | _消息文本_ | string  | -                              | -         |
| mode          | _触发方式_ | number  | `click`,`touch`                | `touch`   |
| width         | _宽度_     | boolean | -                              | _`150`_   |
| renderMessage | 自定义渲染 | Element | -                              | -         |

## Tip 事件

| 事件名称    | 说明                   | 参数 |
| ----------- | ---------------------- | ---- |
| **onClose** | 展示或者关闭展示时触发 | show |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tip/index" />

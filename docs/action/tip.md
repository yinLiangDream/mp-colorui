## 使用说明

```jsx
import {ClTip} from 'mp-colorui'
```

## 一般用法

### 方向

```jsx
<ClTip message='我是上方提示' direction='top'>
  ...
</ClTip>
<ClTip message='我是右方提示' direction='right'>
  ...
</ClTip>
<ClTip message='我是左方提示' direction='left'>
  ...
</ClTip>
<ClTip message='我是下方提示' direction='bottom'>
  ...
</ClTip>
```

### 触发方式

```jsx
 <ClTip message='我是点击触发' direction='top' mode='click'>
  ...
</ClTip>
<ClTip message='我是触摸触发' direction='right'>
  ...
</ClTip>
```



### 背景色

```jsx
<ClTip message='我是上方提示' direction='top' bgColor='gradualBlue'>
  ...
</ClTip>
```



### 自定义渲染

```jsx
const renderMessage = (
    <ClLayout>
      ...
    </ClLayout>
  )

<ClTip renderMessage={renderMessage} direction='top' bgColor='gradualBlue' mode='click' width={350}>
  ...
</ClTip>
```





## 参数说明

### Tip 参数

| 参数          | 说明       | 类型    | 可选值                         | 默认值    |
| ------------- | ---------- | ------- | ------------------------------ | --------- |
| show          | *是否显示* | boolean | -                              | *`false`* |
| bgColor       | *背景色*   | string  | 参考文档 [默认色](/home/color) | -         |
| message       | *消息文本* | string  | -                              | -         |
| mode          | *触发方式* | number  | `click`,`touch`                | `touch`   |
| width         | *宽度*     | boolean | -                              | *`150`*   |
| renderMessage | 自定义渲染 | Element | -                              | -         |



## Tip 事件

| 事件名称    | 说明                   | 参数 |
| ----------- | ---------------------- | ---- |
| **onClose** | 展示或者关闭展示时触发 | show |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tip/index" />

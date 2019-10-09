## 使用说明

```jsx
import { ClProgress } from "mp-colorui";
```

## 一般用法

### 进度条形状

```jsx
<ClProgress shape="round" />
```

### 进度条背景色

```jsx
<ClProgress bgColor="black" />
```

### 进度条动画

```jsx
<ClProgress animation />
```

### 进度条条纹

```jsx
<ClProgress stripe />
```

### 进度条百分比

```jsx
<ClProgress percent={60} />
```

## 参数说明

### Progress 参数

| 参数      | 说明                             | 类型    | 可选值                          | 默认值     |
| --------- | -------------------------------- | ------- | ------------------------------- | ---------- |
| shape     | _进度条形状_                     | string  | _`normal`_,_`radius`_,_`round`_ | _`normal`_ |
| bgColor   | _进度条背景色_                   | string  | 参考文档 [默认色](/home/color)  | _`blue`_   |
| size      | _进度条大小设置_                 | string  | _`normal`_,_`small`_,_`xsmall`_ | _`normal`_ |
| stripe    | _进度条条纹（渐变色无条纹效果）_ | string  | _`true`_,_`false`_              | _`false`_  |
| animation | _进度条动画_                     | boolean | _`true`_,_`false`_              | _`false`_  |
| percent   | _进度条百分比_                   | number  | 0-100                           | 0          |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/progress/index" />

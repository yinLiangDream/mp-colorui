****

## 使用说明

```jsx
import {ClTitleBar} from 'mp-colorui'
```



## 一般用法

### 背景色

```jsx
<ClTitleBar bgColor='black' />
```

### 文字颜色

```jsx
<ClTitleBar textColor='white' />
```

### 子标题类型

```jsx
<ClTitleBar type='border-title' />
```



## 参数说明

### TitleBar 参数

| 参数          | 说明                                     | 类型    | 可选值                                             | 默认值           |
| ------------- | ---------------------------------------- | ------- | -------------------------------------------------- | ---------------- |
| bgColor       | *标题栏背景色*                           | string  | 参考文档 [默认色](/home/color)                     | *`white`*        |
| textColor     | *文字颜色*                               | string  | 参考文档 [默认色-标准色](/home/color?id=标准色)    | *`green`*        |
| type          | *子标题类型*                             | string  | *`border-title`*,*`sub-title`*,*`icon`*            | *`border-title`* |
| subTitle      | *子标题，仅 type 为 sub-title时设置*     | string  | -                                                  | -                |
| subTitleColor | *子标题颜色*                             | string  | 参考文档 [默认色-标准色](/home/color?id=标准色)    |                  |
| borderColor   | *子边线，仅 type 为 border-title 时设置* | string  | 参考文档 [默认色](/home/color)                     | *`green`*        |
| borderLong    | *子边线长度*                             | number  | -                                                  | 20               |
| icon          | *仅 type 为 icon 时设置，图标*           | string  | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -                |
| iconColor     | *图标颜色*                               | string  | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | *`green`*        |
| title         | *标题*                                   | string  | -                                                  | -                |
| renderRight   | *标题栏右侧自定义渲染*                   | Element | -                                                  | -                |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/titleBar/index" />

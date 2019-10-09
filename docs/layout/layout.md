## 使用说明

```jsx
import { ClLayout } from "mp-colorui";
```

## 一般用法

### 浮动

```jsx
<ClLayout float="left" />
```

### 内边距

```jsx
<ClLayout padding="normal" paddingDirection="around" />
```

### 外边距

```jsx
<ClLayout margin="normal" marginDirection="round" />
```

## 参数说明

### Layout 参数

| 参数             | 说明                             | 类型   | 可选值                                                                  | 默认值     |
| ---------------- | -------------------------------- | ------ | ----------------------------------------------------------------------- | ---------- |
| float            | _浮动方向， 默认不浮动_          | string | _`left`_,_`right`_                                                      | -          |
| padding          | _padding 距离，默认没有 padding_ | string | _`xsmall`_,_`small`_,_`normal`_,<br />_`large`_,_`xlarge`_              | -          |
| paddingDirection | _padding 方向_                   | string | _`around`_,_`horizontal`_,_`vertical`_,<br />_`left`_,_`right`_,_`top`_ | _`around`_ |
| margin           | _margin 距离，默认没有 margin_   | string | _`xsmall`_,_`small`_,_`normal`_,<br />_`large`_,_`xlarge`_              | -          |
| marginDirection  | _margin 方向_                    | string | _`around`_,_`horizontal`_,_`vertical`_,<br />_`left`_,_`right`_,_`top`_ | _`around`_ |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/layout/index" />

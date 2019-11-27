## 使用指南

```js
// 按需引入需要在 app.scss 中引入对应样式 accordion.scss
import { ClAccordion } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='accordion' />

## 参数说明

### Accordion 参数

| 参数      | 说明               | 类型    | 可选值 | 默认值                |
| --------- | ------------------ | ------- | ------ | --------------------- |
| title     | _手风琴标题_       | string  | -      | -                     |
| open      | _是否展开_         | boolean | -      | _`false`_             |
| animation | _开启动画效果_     | boolean | -      | _`true`_              |
| card      | _是否使用卡片形式_ | boolean | -      | _`false`_             |
| speed     | _展开速度_         | number  | -      | _`0.15`_              |
| height    | _展开高度_         | number  | -      | `0`，0 即为不设置高度 |

### Accordion 事件

| 事件名称 | 说明           | 返回参数 |
| -------- | -------------- | -------- |
| onClick  | 点击手风琴事件 | boolean  |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/accordion/index" />

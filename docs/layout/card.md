## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 card.scss
import { ClCard } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='card' />

## 参数说明

### Card 参数

| 参数    | 说明               | 类型    | 可选值                           | 默认值   |
| ------- | ------------------ | ------- | -------------------------------- | -------- |
| type    | _卡片组件类型选择_ | string  | _`card`_,_`full`_                | _`card`_ |
| bgColor | _卡片背景色设置_   | string  | 参考文档 [默认色](/mp-colorui-doc/home/color)   | -        |
| shadow  | _卡片阴影设置_     | boolean | -                                | _`true`_ |
| title   | _卡片标题_         | Text    | 参考文档 [Text 组件](/mp-colorui-doc/base/text) | _`{}`_     |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/card/index" />

## 使用指南

```js
import { ClText } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='text' />

## 参数说明

### Text 参数

| 参数        | 说明             | 类型             | 可选值                                                                                              | 默认值     |
| ----------- | ---------------- | ---------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| size        | _文字大小_       | string           | _`xsmall`_,_`small`_,_`normal`_,<br />_`large`_,_`xlarge`_,_`xxlarge`_,<br />_`slarge`_,_`xslarge`_ | _`normal`_ |
| textColor   | _文字颜色_       | string           | 参考文档 [默认色-标准色](/home/color#标准色)                                                     | _`black`_  |
| bgColor     | _文字背景色_     | string           | 参考文档 [默认色](/home/color)                                                                      | -          |
| cut         | _是否显示省略号_ | boolean          | _`true`_,_`false`_                                                                                  | _`false`_  |
| align       | _文字对齐方式_   | string           | _`left`_,_`center`_,_`right`_                                                                       | _`left`_   |
| special     | _特殊需求_       | string           | _`firstUpper`_,_`upper`_,_`lower`_                                                                  | -          |
| text        | 文字内容         | string           | -                                                                                                   | -          |
| lineSpacing | 行间距           | string \| number | `none`,`small`,`normal`,`large`                                                                     | `none`     |
| fontSpacing | 字间距           | string \| number | `none`,`small`,`normal`,`large`                                                                     | `none`     |
| fontWeight  | 字体粗细         | string \| number | `normal`,`bold`,`bolder`,`lighter`                                                                  | `normal`   |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/text/index" />

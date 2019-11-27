## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 actionSheet.scss
import { ClActionSheet } from "mp-colorui";
```

## 一般用法

> 该组件为受控组件，isOpened 参数用来控制开启和关闭

<CodeShow componentName='actionSheet' />

## 参数说明

### ActionSheet 参数

| 参数            | 说明                   | 类型      | 可选值                                          | 默认值    |
| --------------- | ---------------------- | --------- | ----------------------------------------------- | --------- |
| isOpened        | _是否是显示_           | boolean   | -                                               | _`false`_ |
| type            | _类型_                 | string    | `full`, `card`                                  | _`full`_  |
| showCancel      | _是否显示取消按钮_     | boolean   | -                                               | _`false`_ |
| tip             | _提示文字_             | string    |                                                 | -         |
| closeWithShadow | _点击阴影关闭_         | boolean   | -                                               | _`true`_  |
| cancelText      | _取消按钮的文字_       | string    | -                                               | _`取消`_  |
| cancelBgColor   | _取消按钮背景色_       | string    | 参考文档 [默认色](/mp-colorui-doc/home/color)                  | _`white`_ |
| cancelFontColor | _取消按钮按钮文字颜色_ | string    | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | -         |
| options         | _展示的数组_           | options[] | -                                               | _`[]`_    |

### options

| 参数    | 说明         | 类型   | 可选值                         | 默认值    |
| ------- | ------------ | ------ | ------------------------------ | --------- |
| bgColor | _按钮背景色_ | string | 参考文档 [默认色](/mp-colorui-doc/home/color) | _`white`_ |
| text    | _文字内容_   | string |                                |           |

## ActionSheet 事件

| 事件名称     | 说明               | 参数  |
| ------------ | ------------------ | ----- |
| **onCancel** | 取消时触发         |       |
| **onClick**  | 点击选项按钮时触发 | index |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/actionSheet/index" />

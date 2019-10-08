## 使用说明

```jsx
import {ClActionSheet} from 'mp-colorui'
```

## 一般用法

> 该组件为受控组件，isOpened 参数用来控制开启和关闭

### 模式

```jsx
<ClActionSheet type="card" options={list}>
  ...
</ClActionSheet>
<ClActionSheet type="full" options={list}>
  ...
</ClActionSheet>
```

## 参数说明

### ActionSheet 参数

| 参数            | 说明                   | 类型      | 可选值                                          | 默认值    |
| --------------- | ---------------------- | --------- | ----------------------------------------------- | --------- |
| isOpened        | *是否是显示*           | boolean   | -                                               | *`false`* |
| type            | *类型*                 | string    | `full`, `card`                                  | *`full`*  |
| showCancel      | *是否显示取消按钮*     | boolean   | -                                               | *`false`* |
| tip             | *提示文字*             | string    |                                                 | -         |
| closeWithShadow | *点击阴影关闭*         | boolean   | -                                               | *`true`*  |
| cancelText      | *取消按钮的文字*       | string    | -                                               | *`取消`*  |
| cancelBgColor   | *取消按钮背景色*       | string    | 参考文档 [默认色](/home/color)                  | *`white`* |
| cancelFontColor | *取消按钮按钮文字颜色* | string    | 参考文档 [默认色-标准色](/home/color?id=标准色) | -         |
| options         | *展示的数组*           | options[] | -                                               | *`[]`*    |

### options

| 参数    | 说明         | 类型   | 可选值                         | 默认值    |
| ------- | ------------ | ------ | ------------------------------ | --------- |
| bgColor | *按钮背景色* | string | 参考文档 [默认色](/home/color) | *`white`* |
| text    | *文字内容*   | string |                                |           |

## ActionSheet 事件

| 事件名称     | 说明               | 参数  |
| ------------ | ------------------ | ----- |
| **onCancel** | 取消时触发         |       |
| **onClick**  | 点击选项按钮时触发 | index |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/actionSheet/index" />

## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 tree.scss
import { ClTree } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='tree' />

## 参数说明

### Tree 参数

| 参数      | 说明             | 类型    | 可选值                                        | 默认值    |
| --------- | ---------------- | ------- | --------------------------------------------- | --------- |
| data      | 数据，详细见下方 | data[]  |                                               | []        |
| showCheck | 显示复选框       | boolean | -                                             | `false`   |
| color     | _选中颜色_       | string  | 参考文档 [默认色](/mp-colorui-doc/home/color) | _`white`_ |

### data

| 参数     | 说明                | 类型    | 可选值 | 默认值  |
| -------- | ------------------- | ------- | ------ | ------- |
| name     | 节点名              | string  |        | -       |
| checked  | 是否选中            | boolean | -      | `false` |
| disabled | 是否禁用            | boolean | -      | `false` |
| children | 子节点，格式为 data | data[]  | -      | `[]`    |
| open     | 是否是展开状态      | boolean | -      | `false` |

### Tree 事件

| 事件名称        | 说明                   | 参数返回 |
| --------------- | ---------------------- | -------- |
| onCheckedChange | check 时发生改变       | item     |
| onOpenChange    | 展开或关闭节点发生改变 | item     |
| onClickItem     | 点击一项触发           | item     |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/formPackage/tree/index" />

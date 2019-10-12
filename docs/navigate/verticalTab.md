### 使用说明

```jsx
import { ClVerticalTab, ClVerticalTabCell } from "mp-colorui";
```

### 一般用法

### 用法

> 注：ClVerticalTab 内部元素必须由一层 View 包裹，且 id 必须和 tabs 一一对应。

<CodeShow componentName='verticalTab' />

## 参数说明

### VerticalTab 参数

| 参数    | 说明               | 类型    | 可选值 | 默认值    |
| ------- | ------------------ | ------- | ------ | --------- |
| height  | 高度               | number  | -      | -         |
| tabs    | 标签页数组         | tabs[]  | -      | []        |
| current | 默认激活的标签页   | string  | -      | -         |
| backTop | 点击标题回到最上方 | boolean | -      | _`false`_ |

### tabs

| 参数 | 说明       | 类型   | 可选值 | 默认值 |
| ---- | ---------- | ------ | ------ | ------ |
| id   | _Tab id_   | string | -      | -      |
| name | _Tab 名称_ | string | -      | -      |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/verticalTab/index" />

---

### 使用说明

```jsx
import { ClVerticalTab, ClVerticalTabCell } from "mp-colorui";
```

### 一般用法

### 用法

> 注：ClVerticalTab 内部元素必须由一层 View 包裹，且 id 必须和 tabs 一一对应。

```jsx
const tabs = [{
  name: '标签 1',
  id: 'id-1'
}, {
  name: '标签 2',
  id: 'id-2'
}]

<ClVerticalTab tabs={tabs} height={600}>
  <View id='id-1'>
    <ClVerticalTabCell>我是内容</ClVerticalTabCell>
  </View>
  <View id='id-2'>
    <ClVerticalTabCell>我是内容</ClVerticalTabCell>
  </View>
</ClVerticalTab>
```

### 默认激活的索引

```jsx
const tabs = [{
  name: '标签 1',
  id: 'id-1'
}, {
  name: '标签 2',
  id: 'id-2'
}]

<ClVerticalTab tabs={tabs} current={tabs[0].id} height={600}>
  <View id='id-1'>
    <ClVerticalTabCell>我是内容</ClVerticalTabCell>
  </View>
  <View id='id-2'>
    <ClVerticalTabCell>我是内容</ClVerticalTabCell>
  </View>
</ClVerticalTab>
```

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

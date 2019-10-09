### 使用说明

```jsx
import { ClTabs } from "mp-colorui";
```

### 一般用法

> 注：ClTabs 内部元素必须由一层 View 包裹，且 id 必须和 tabs 一一对应。

### 常用用法

```jsx
const verbTabs = [
  {
    text: '标签 1',
    id: 'verb-1'
  }, {
    text: '标签 2',
    id: 'verb-2'
  }, {
    text: '标签 3',
    id: 'verb-3'
  }
]

<ClTabs tabs={verbTabs} type='verb'>
  {
    verbTabs.map(item => (
    	<View key={item.id} id={item.id}>{item.text}</View>
    ))
	}
</ClTabs>
```

### tab 排列类型

```jsx
<ClTabs type="center">...</ClTabs>
```

### 背景色

```jsx
<ClTabs bgColor="black">...</ClTabs>
```

### 激活的颜色

```jsx
<ClTabs activeColor="white">...</ClTabs>
```

### 默认激活的索引

```jsx
<ClTabs active={0}>...</ClTabs>
```

## 参数说明

### Tabs 参数

| 参数        | 说明            | 类型    | 可选值                                          | 默认值      |
| ----------- | --------------- | ------- | ----------------------------------------------- | ----------- |
| type        | _tabs 类型选择_ | string  | _`default`_,_`center`_,_`verb`_                 | _`default`_ |
| bgColor     | _背景色_        | string  | 参考文档 [默认色](/home/color)                  | -           |
| activeColor | _激活的颜色_    | string  | 参考文档 [默认色-标准色](/home/color?id=标准色) | _`black`_   |
| active      | _激活的下标_    | number  | -                                               | 0           |
| tabs        | _tab 数组_      | tabs[]  | [详情](/navigate/tabs?id=tabs)                  | []          |
| touchMove   | _是否可拖动_    | boolean | -                                               | _`false`_   |

### tabs

| 参数 | 说明         | 类型   | 可选值                                             | 默认值 |
| ---- | ------------ | ------ | -------------------------------------------------- | ------ |
| text | _标题_       | string | -                                                  | -      |
| icon | _图标_       | string | 参考文档 [Icon-_iconName_](/base/icon?id=iconname) | -      |
| id   | _唯一标识符_ | string | -                                                  | -      |

### Tabs 事件

| 事件名称 | 说明       | 参数返回 |
| -------- | ---------- | -------- |
| onClick  | _点击事件_ | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tabs/index" />

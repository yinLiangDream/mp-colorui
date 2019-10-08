****

### 使用说明

```jsx
import {ClTabs} from 'mp-colorui'
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
<ClTabs type='center' >
	...
</ClTabs>
```

### 背景色

```jsx
<ClTabs bgColor='black' >
	...
</ClTabs>
```

### 激活的颜色

```jsx
<ClTabs activeColor='white' >
	...
</ClTabs>
```

### 默认激活的索引

```jsx
<ClTabs active={0} >
	...
</ClTabs>
```





## 参数说明

### Tabs 参数

| 参数        | 说明           | 类型    | 可选值                                          | 默认值      |
| ----------- | -------------- | ------- | ----------------------------------------------- | ----------- |
| type        | *tabs类型选择* | string  | *`default`*,*`center`*,*`verb`*                 | *`default`* |
| bgColor     | *背景色*       | string  | 参考文档 [默认色](/home/color)                  | -           |
| activeColor | *激活的颜色*   | string  | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`black`*   |
| active      | *激活的下标*   | number  | -                                               | 0           |
| tabs        | *tab 数组*     | tabs[]  | [详情](/navigate/tabs?id=tabs)                  | []          |
| touchMove   | *是否可拖动*   | boolean | -                                               | *`false`*   |



### tabs

| 参数 | 说明         | 类型   | 可选值                                             | 默认值 |
| ---- | ------------ | ------ | -------------------------------------------------- | ------ |
| text | *标题*       | string | -                                                  | -      |
| icon | *图标*       | string | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |
| id   | *唯一标识符* | string | -                                                  | -      |



### Tabs 事件

| 事件名称 | 说明       | 参数返回 |
| -------- | ---------- | -------- |
| onClick  | *点击事件* | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tabs/index" />

### 使用说明

```jsx
import { ClTabs } from "mp-colorui";
```

### 一般用法

> 注：ClTabs 内部元素必须由一层 View 包裹，且 id 必须和 tabs 一一对应。

<CodeShow componentName='tabs' />

## 参数说明

### Tabs 参数

| 参数        | 说明            | 类型    | 可选值                                          | 默认值      |
| ----------- | --------------- | ------- | ----------------------------------------------- | ----------- |
| type        | _tabs 类型选择_ | string  | _`default`_,_`center`_,_`verb`_                 | _`default`_ |
| bgColor     | _背景色_        | string  | 参考文档 [默认色](/mp-colorui-doc/home/color)                  | -           |
| activeColor | _激活的颜色_    | string  | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | _`black`_   |
| active      | _激活的下标_    | number  | -                                               | 0           |
| tabs        | _tab 数组_      | tabs[]  | [详情](/mp-colorui-doc/navigate/tabs#tabs)                  | []          |
| touchMove   | _是否可拖动_    | boolean | -                                               | _`false`_   |

### tabs

| 参数 | 说明         | 类型   | 可选值                                             | 默认值 |
| ---- | ------------ | ------ | -------------------------------------------------- | ------ |
| text | _标题_       | string | -                                                  | -      |
| icon | _图标_       | string | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -      |
| id   | _唯一标识符_ | string | -                                                  | -      |

### Tabs 事件

| 事件名称 | 说明       | 参数返回 |
| -------- | ---------- | -------- |
| onClick  | _点击事件_ | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tabs/index" />

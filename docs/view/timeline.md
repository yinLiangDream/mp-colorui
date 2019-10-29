## 使用说明

```jsx
import { ClTimeline } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='timeline' />

## 参数说明

### Timeline 参数

| 参数  | 说明         | 类型    | 可选值                          | 默认值 |
| ----- | ------------ | ------- | ------------------------------- | ------ |
| times | _时间轴数组_ | times[] | [详情](/mp-colorui-doc/view/timeline#times) | []     |

### times

| 参数      | 说明                           | 类型     | 可选值                                             | 默认值 |
| --------- | ------------------------------ | -------- | -------------------------------------------------- | ------ |
| content   | _包含的内容_                   | string[] | -                                                  | -      |
| bgColor   | _背景色_                       | string   | 参考文档 [默认色](/mp-colorui-doc/home/color)                     | -      |
| iconColor | _图标颜色_                     | string   | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色)    | -      |
| icon      | 节点图标                       | string   | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -      |
| title     | _标题_(左上角内容)             | string   | -                                                  | -      |
| node      | _节点(若存在则会忽略其他属性)_ | string   | -                                                  | -      |
| time      | 时间（右上角内容）             | string   | -                                                  | -      |

### Timeline 事件

| 事件名称 | 说明     | 返回参数          |
| -------- | -------- | ----------------- |
| onClick  | 点击事件 | index(第几个标签) |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/timeline/index" />

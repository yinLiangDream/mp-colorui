## 使用说明

```jsx
import { ClTag } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='tag' />

## 参数说明

### Tag 参数

| 参数         | 说明                                                   | 类型        | 可选值                          | 默认值        |
| ------------ | ------------------------------------------------------ | ----------- | ------------------------------- | ------------- |
| shape        | _tag 形状_                                             | string      | _`normal`_,_`round`_,_`radius`_ | _`normal`_    |
| size         | _tag 大小设置_                                         | string      | _`normal`_,_`small`_            | _`normal`_    |
| ~~canTouch~~ | ~~是否可以点击~~（属性已废弃，实际上也并没有产生效果） | ~~boolean~~ | ~~_`true`_,_`false`_~~          | ~~_`false`_~~ |
| badge        | _该标签是否显示为角标位置_                             | boolean     | _`true`_,_`false`_              | _`false`_     |
| tags         | _tag 数组_                                             | tags[]      | [详情](/view/tag#tags)       | []            |

### tags

| 参数     | 说明           | 类型    | 可选值                                               | 默认值    |
| -------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| color    | _标签颜色_     | string  | 参考文档 [默认色](/home/color)（镂空只能使用标准色） | -         |
| plain    | _是否镂空_     | boolean | _`true`_,_`false`_                                   | _`false`_ |
| icon     | _图标_         | string  | 参考文档 [Icon-_iconName_](/base/icon#iconname)   | -         |
| text     | 文字           | string  | -                                                    | -         |
| disabled | _是否禁止点击_ | boolean | _`true`_,_`false`_                                   | _`false`_ |

### Tag 事件

| 事件名称 | 说明     | 返回参数          |
| -------- | -------- | ----------------- |
| onClick  | 点击事件 | index(第几个标签) |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tag/index" />

****

## 使用说明

```jsx
import {ClTag} from 'mp-colorui'
```

## 一般用法

### 形状设置

```jsx
<ClTag shape='round' />
```

### 大小设置

```jsx
<ClTag size='small' />
```

### 角标设置

```jsx
<ClTag badge />
```

### tag 数组设置

```jsx
<ClTag tags={[]} />
```

## 参数说明

### Tag 参数

| 参数         | 说明                                                   | 类型        | 可选值                          | 默认值        |
| ------------ | ------------------------------------------------------ | ----------- | ------------------------------- | ------------- |
| shape        | *tag 形状*                                             | string      | *`normal`*,*`round`*,*`radius`* | *`normal`*    |
| size         | *tag 大小设置*                                         | string      | *`normal`*,*`small`*            | *`normal`*    |
| ~~canTouch~~ | ~~是否可以点击~~（属性已废弃，实际上也并没有产生效果） | ~~boolean~~ | ~~*`true`*,*`false`*~~          | ~~*`false`*~~ |
| badge        | *该标签是否显示为角标位置*                             | boolean     | *`true`*,*`false`*              | *`false`*     |
| tags         | *tag 数组*                                             | tags[]      | [详情](/view/tag?id=tags)       | []            |

### tags

| 参数     | 说明           | 类型    | 可选值                                               | 默认值    |
| -------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| color    | *标签颜色*     | string  | 参考文档 [默认色](/home/color)（镂空只能使用标准色） | -         |
| plain    | *是否镂空*     | boolean | *`true`*,*`false`*                                   | *`false`* |
| icon     | *图标*         | string  | 参考文档 [Icon-*iconName*](/base/icon?id=iconname)   | -         |
| text     | 文字           | string  | -                                                    | -         |
| disabled | *是否禁止点击* | boolean | *`true`*,*`false`*                                   | *`false`* |



### Tag 事件

| 事件名称 | 说明     | 返回参数          |
| -------- | -------- | ----------------- |
| onClick  | 点击事件 | index(第几个标签) |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tag/index" />

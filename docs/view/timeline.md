****

## 使用说明

```jsx
import {ClTimeline} from 'mp-colorui'
```



## 一般用法

###	 时间轴数组

```html
<ClTimeline times={[]} />
```



## 参数说明

### Timeline 参数

| 参数  | 说明         | 类型    | 可选值                          | 默认值 |
| ----- | ------------ | ------- | ------------------------------- | ------ |
| times | *时间轴数组* | times[] | [详情](/view/timeline?id=times) | []     |

### times

| 参数      | 说明                           | 类型     | 可选值                                             | 默认值 |
| --------- | ------------------------------ | -------- | -------------------------------------------------- | ------ |
| content   | *包含的内容*                   | string[] | -                                                  | -      |
| bgColor   | *背景色*                       | string   | 参考文档 [默认色](/home/color)                     | -      |
| iconColor | *图标颜色*                     | string   | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |
| icon      | 节点图标                       | string   | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |
| title     | *标题*(左上角内容)             | string   | -                                                  | -      |
| node      | *节点(若存在则会忽略其他属性)* | string   | -                                                  | -      |
| time      | 时间（右上角内容）             | string   | -                                                  | -      |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/timeline/index" />

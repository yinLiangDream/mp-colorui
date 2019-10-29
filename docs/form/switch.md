## 使用说明

```jsx
import { ClSwitch } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='switch' />

## 参数说明

### Switch 参数

| 参数    | 说明          | 类型    | 可选值                                          | 默认值     |
| ------- | ------------- | ------- | ----------------------------------------------- | ---------- |
| type    | _switch 类型_ | string  | _`normal`_,_`form`_                             | _`normal`_ |
| title   | _标题_        | string  | -                                               | -          |
| shape   | _形状_        | string  | _`normal`_,_`radius`_                           | _`normal`_ |
| color   | _选中颜色_    | string  | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | _`green`_  |
| checked | _是否选中_    | boolean | _`true`_,_`false`_                              | _`false`_  |

### Switch 事件

| 事件名称 | 说明                 | 参数返回       |
| -------- | -------------------- | -------------- |
| onChange | _改变选中状态时触发_ | flag，选中状态 |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/switch/index" />

****

## 使用说明

```jsx
import {ClSwitch} from 'mp-colorui'
```



## 一般用法

### Switch 表现形式

```jsx
<ClSwitch type='form' />
```



### Switch 形状

```jsx
<ClSwitch shape='radius' />
```



### 选中状态

```jsx
<ClSwitch checked />
```



## 参数说明

### Switch 参数

| 参数    | 说明          | 类型    | 可选值                                          | 默认值     |
| ------- | ------------- | ------- | ----------------------------------------------- | ---------- |
| type    | *switch 类型* | string  | *`normal`*,*`form`*                             | *`normal`* |
| title   | *标题*        | string  | -                                               | -          |
| shape   | *形状*        | string  | *`normal`*,*`radius`*                           | *`normal`* |
| color   | *选中颜色*    | string  | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`green`*  |
| checked | *是否选中*    | boolean | *`true`*,*`false`*                              | *`false`*  |



### Switch 事件

| 事件名称 | 说明                 | 参数返回       |
| -------- | -------------------- | -------------- |
| onChange | *改变选中状态时触发* | flag，选中状态 |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/switch/index" />

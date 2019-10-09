****

## 使用说明

```jsx
import {ClRadio} from 'mp-colorui'
```



## 一般用法

### 单选框表现形式

```jsx
<ClRadio type='form' />
```

### 单选框排列方向

```jsx
<ClRadio direction='vertical' />
```

### 单选框形状

```jsx
<ClRadio shape='radio' />
```

### 选中颜色

```jsx
<ClRadio color='black' />
```



## 参数说明

### Radio 参数

| 参数         | 说明                    | 类型         | 可选值                                          | 默认值       |
| ------------ | ----------------------- | ------------ | ----------------------------------------------- | ------------ |
| type         | *单选框类型*            | string       | *`normal`*,*`form`*,*`list`*                    | *`normal`*   |
| direction    | *单选框方向*            | string       | *`vertical`*,*`horizontal`*                     | *`vertical`* |
| shape        | *单选框形状*            | string       | *`normal`*,*`radio`*                            | *`normal`*   |
| title        | *type 为 form 时的标题* | string       | -                                               | -            |
| color        | *选中颜色*              | string       | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`green`*    |
| checkedValue | 选中的 Value 值         | string       | -                                               | -            |
| radioGroup   | *单选框组*              | radioGroup[] | [详情](/form/radio?id=radiogroup)               | []           |

### radioGroup

| 参数  | 说明                 | 类型   | 可选值 | 默认值 |
| ----- | -------------------- | ------ | ------ | ------ |
| key   | *选项框的显示标题*   | string | -      | -      |
| value | *选中的时的传递的值* | string | -      | -      |



### Radio 事件

| 事件名称 | 说明               | 参数返回 |
| -------- | ------------------ | -------- |
| onChange | *选项发生改变事件* | value    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/radio/index" />

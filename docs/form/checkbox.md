****

## 使用说明

```jsx
import {ClCheckbox} from 'mp-colorui'
```



## 一般用法

### 复选框类型

```jsx
<ClCheckbox type='form' />
```

### 复选框颜色

```jsx
<ClCheckbox color='blue' />
```

### 复选框排列方向

```jsx
<ClCheckbox direction='vertical' />
```





## 参数说明

### Checkbox 参数

| 参数          | 说明                          | 类型            | 可选值                                          | 默认值       |
| ------------- | ----------------------------- | --------------- | ----------------------------------------------- | ------------ |
| title         | *form 类型下，复选框标题设置* | string          | -                                               | -            |
| type          | *复选框类型选择*              | string          | *`normal`*,*`form`*                             | *`normal`*   |
| shape         | *复选框形状设置*              | string          | *`normal`*,*`round`*                            | *`normal`*   |
| color         | *复选框选中色设置*            | string          | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`green`*    |
| direction     | *复选框排列类型*              | string          | *`vertical`*,*`horizontal`*                     | *`vertical`* |
| checkboxGroup | *复选框每一项设置*            | checkboxGroup[] | [详情](/form/checkbox?id=checkboxgroup)         | []           |

### checkboxGroup

| 参数    | 说明                                        | 类型    | 可选值             | 默认值    |
| ------- | ------------------------------------------- | ------- | ------------------ | --------- |
| checked | *是否选中*                                  | boolean | *`true`*,*`false`* | *`false`* |
| key     | *复选框的 key 设置，显示于复选框外*         | string  | -                  | -         |
| value   | *复选框的 value 设置，该参数为选中时的参数* | string  | -                  | -         |



### Checkbox 事件

| 事件名称 | 说明             | 参数返回 |
| -------- | ---------------- | -------- |
| onChange | *选择改变时触发* | value[]  |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/checkbox/index" />


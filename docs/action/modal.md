****

## 使用说明

```jsx
import {ClModal} from 'mp-colorui'
```



## 注意

> `onClose`, `onCancel` 方法触发时，请再手动设置 `show` 的参数为 `false`，否则该 `props` 参数会一直为 `true`，并会随其他 `modal` 一起再次出现。

## 一般用法

### 显示模态框

```jsx
<ClModal show >我是内容</ClModal>
```

### 设置标题

```jsx
<ClModal title='我是标题' >我是内容</ClModal>
```

### 设置右上角关闭按钮

```jsx
<ClModal close >我是内容</ClModal>
```

### 设置点击遮罩层关闭

```jsx
<ClModal closeWithShadow >我是内容</ClModal>
```

### 自定义操作栏

```jsx
const action = <ClButton>点我</ClButton>

<ClModal renderAction={action} >我是内容</ClModal>
```

### 自定义标题栏

```jsx
const title = <View>我是标题</View>
      
<Clmodal renderTitle={title} >我是内容</Clmodal>
```



## 参数说明

### Modal 参数

| 参数            | 说明                   | 类型      | 可选值                                               | 默认值    |
| --------------- | ---------------------- | --------- | ---------------------------------------------------- | --------- |
| show            | *是否显示*             | boolean   | *`true`*,*`false`*                                   | *`false`* |
| title           | 标题                   | string    | -                                                    | -         |
| close           | *是否显示关闭按钮*     | boolean   | *`true`*,*`false`*                                   | *`true`*  |
| custom          | *是否自定义整个 modal* | boolean   | *`true`*,*`false`*                                   | *`false`* |
| closeWithShadow | *点击阴影关闭*         | boolean   | *`true`*,*`false`*                                   | *`false`* |
| titleBgColor    | *标题栏背景色*         | string    | 参考文档 [默认色](/home/color)                       | -         |
| actionColor     | *操作栏颜色*           | string    | 参考文档 [默认色](/home/color)                       | -         |
| padding         | *padding 距离*         | string    | *`xsmall`*,*`small`*,*`normal`*,*`large`*,*`xlarge`* | -         |
| actions         | *操作栏操作组*         | actions[] | [详情](/action/modal?id=actions)                     | []        |
| renderAction    | *自定义操作栏*         | Element   | -                                                    | -         |
| renderTitle     | *自定义标题栏*         | Element   | -                                                    | -         |

### actions

| 参数  | 说明          | 类型   | 可选值                                          | 默认值 |
| ----- | ------------- | ------ | ----------------------------------------------- | ------ |
| text  | *action 文字* | string | -                                               | -      |
| color | *action 颜色* | string | 参考文档 [默认色-标准色](/home/color?id=标准色) | -      |



### Modal 事件

| 事件名称 | 说明                 | 参数返回                   |
| -------- | -------------------- | -------------------------- |
| onClick  | *操作栏点击事件*     | index，index为操作栏第几个 |
| onCancel | *点击 阴影 关闭事件* | -                          |
| onClose  | *点击 关闭 关闭事件* | -                          |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/modal/index" />


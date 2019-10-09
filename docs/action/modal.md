## 使用说明

```jsx
import { ClModal } from "mp-colorui";
```

## 注意

> `onClose`, `onCancel` 方法触发时，请再手动设置 `show` 的参数为 `false`，否则该 `props` 参数会一直为 `true`，并会随其他 `modal` 一起再次出现。

## 一般用法

### 显示模态框

```jsx
<ClModal show>我是内容</ClModal>
```

### 设置标题

```jsx
<ClModal title="我是标题">我是内容</ClModal>
```

### 设置右上角关闭按钮

```jsx
<ClModal close>我是内容</ClModal>
```

### 设置点击遮罩层关闭

```jsx
<ClModal closeWithShadow>我是内容</ClModal>
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
| show            | _是否显示_             | boolean   | _`true`_,_`false`_                                   | _`false`_ |
| title           | 标题                   | string    | -                                                    | -         |
| close           | _是否显示关闭按钮_     | boolean   | _`true`_,_`false`_                                   | _`true`_  |
| custom          | _是否自定义整个 modal_ | boolean   | _`true`_,_`false`_                                   | _`false`_ |
| closeWithShadow | _点击阴影关闭_         | boolean   | _`true`_,_`false`_                                   | _`false`_ |
| titleBgColor    | _标题栏背景色_         | string    | 参考文档 [默认色](/home/color)                       | -         |
| actionColor     | _操作栏颜色_           | string    | 参考文档 [默认色](/home/color)                       | -         |
| padding         | _padding 距离_         | string    | _`xsmall`_,_`small`_,_`normal`_,_`large`_,_`xlarge`_ | -         |
| actions         | _操作栏操作组_         | actions[] | [详情](/action/modal?id=actions)                     | []        |
| renderAction    | _自定义操作栏_         | Element   | -                                                    | -         |
| renderTitle     | _自定义标题栏_         | Element   | -                                                    | -         |

### actions

| 参数  | 说明          | 类型   | 可选值                                          | 默认值 |
| ----- | ------------- | ------ | ----------------------------------------------- | ------ |
| text  | _action 文字_ | string | -                                               | -      |
| color | _action 颜色_ | string | 参考文档 [默认色-标准色](/home/color?id=标准色) | -      |

### Modal 事件

| 事件名称 | 说明                 | 参数返回                    |
| -------- | -------------------- | --------------------------- |
| onClick  | _操作栏点击事件_     | index，index 为操作栏第几个 |
| onCancel | _点击 阴影 关闭事件_ | -                           |
| onClose  | _点击 关闭 关闭事件_ | -                           |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/modal/index" />

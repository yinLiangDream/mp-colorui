## 使用说明

```jsx
import {ClSwiperAction} from 'mp-colorui'
```

## 一般用法

### 方向

```jsx
<ClSwiperAction direction="right" options={list}>
  ...
</ClSwiperAction>
<ClSwiperAction direction="left" options={list}>
  ...
</ClSwiperAction>
```

### 开启状态

```jsx
<ClSwiperAction direction="right" options={list} show>
  ...
</ClSwiperAction>
```

### 禁止滑动

```jsx
<ClSwiperAction direction="right" options={list} disabled>
  ...
</ClSwiperAction>
```

### 自动关闭

```jsx
<ClSwiperAction direction="right" options={list} autoClose>
  ...
</ClSwiperAction>
```

## 参数说明

### SwiperAction 参数

| 参数      | 说明                      | 类型      | 可选值         | 默认值    |
| --------- | ------------------------- | --------- | -------------- | --------- |
| show      | *是否是显示状态*          | boolean   | -              | *`false`* |
| disabled  | *是否禁止滑动*            | boolean   |                | *`false`* |
| autoClose | *点击选项时,是否自动关闭* | boolean   | -              | *`false`* |
| direction | *方向*                    | string    | `left`,`right` | `right`   |
| options   | *展示的选项数组*          | options[] | -              | *`[]`*    |

### options

| 参数    | 说明         | 类型   | 可选值                         | 默认值    |
| ------- | ------------ | ------ | ------------------------------ | --------- |
| bgColor | *按钮背景色* | string | 参考文档 [默认色](/home/color) | *`white`* |
| text    | *文字内容*   | string |                                |           |

## SwiperAction 事件

| 事件名称     | 说明           | 参数  |
| ------------ | -------------- | ----- |
| **onClose**  | 关闭时触发     |       |
| **onOpened** | 打开时触发     |       |
| **onClick**  | 点击按钮时触发 | index |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/swiperAction/index" />

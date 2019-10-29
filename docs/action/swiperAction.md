## 使用说明

```jsx
import { ClSwiperAction } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='swiperAction' />

## 参数说明

### SwiperAction 参数

| 参数      | 说明                      | 类型      | 可选值         | 默认值    |
| --------- | ------------------------- | --------- | -------------- | --------- |
| show      | _是否是显示状态_          | boolean   | -              | _`false`_ |
| disabled  | _是否禁止滑动_            | boolean   |                | _`false`_ |
| autoClose | _点击选项时,是否自动关闭_ | boolean   | -              | _`false`_ |
| direction | _方向_                    | string    | `left`,`right` | `right`   |
| options   | _展示的选项数组_          | options[] | -              | _`[]`_    |

### options

| 参数    | 说明         | 类型   | 可选值                         | 默认值    |
| ------- | ------------ | ------ | ------------------------------ | --------- |
| bgColor | _按钮背景色_ | string | 参考文档 [默认色](/mp-colorui-doc/home/color) | _`white`_ |
| text    | _文字内容_   | string |                                |           |

## SwiperAction 事件

| 事件名称     | 说明           | 参数  |
| ------------ | -------------- | ----- |
| **onClose**  | 关闭时触发     |       |
| **onOpened** | 打开时触发     |       |
| **onClick**  | 点击按钮时触发 | index |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/swiperAction/index" />

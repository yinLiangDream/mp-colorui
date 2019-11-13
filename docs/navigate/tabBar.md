## 使用说明

```jsx
import { ClTabBar } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='tabBar' />

## 参数说明

### TabBar 参数

| 参数        | 说明               | 类型    | 可选值                                                      | 默认值    |
| ----------- | ------------------ | ------- | ----------------------------------------------------------- | --------- |
| bgColor     | _背景色_           | string  | 参考文档 [默认色](/mp-colorui-doc/home/color)               | _`white`_ |
| activeColor | _激活的颜色_       | string  | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | _`blue`_  |
| active      | _激活的下标_       | number  | -                                                           | 0         |
| fix         | _是否固定在底部_   | boolean | _`true`_,_`false`_                                          | _`false`_ |
| tabs        | _每一项 tab 内容_  | tabs[]  | [详情](/mp-colorui-doc/navigate/tabBar#tabs)                | []        |
| safeArea    | _手机下方安全区域_ | boolean | -                                                           | _`true`_  |

### tabs

| 参数   | 说明             | 类型           | 可选值                                                         | 默认值    |
| ------ | ---------------- | -------------- | -------------------------------------------------------------- | --------- |
| badge  | _右上角提示_     | boolean/Number | -                                                              | _`false`_ |
| icon   | _图标_           | string         | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -         |
| img    | _图片地址_       | string         | -                                                              | -         |
| title  | _标题_           | string         | -                                                              | -         |
| action | _是否为突出操作_ | boolean        | _`true`_,_`false`_                                             | _`false`_ |

### TabBar 事件

| 事件名称 | 说明       | 参数返回 |
| -------- | ---------- | -------- |
| onClick  | _点击事件_ | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tabBar/index" />

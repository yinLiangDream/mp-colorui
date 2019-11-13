## 使用说明

```jsx
import { ClShopBar } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='shopBar' />

## 参数说明

### ShopBar 参数

| 参数     | 说明               | 类型      | 可选值                                        | 默认值    |
| -------- | ------------------ | --------- | --------------------------------------------- | --------- |
| bgColor  | _背景色_           | string    | 参考文档 [默认色](/mp-colorui-doc/home/color) | _`white`_ |
| fix      | _是否固定在底部_   | boolean   | _`true`_,_`false`_                            | _`false`_ |
| border   | _是否显示分割线_   | boolean   | _`true`_,_`false`_                            | _`false`_ |
| tabs     | _每一项 tab_       | tabs[]    | [详情](/mp-colorui-doc/view/shopBar#tabs)     | []        |
| buttons  | _右侧按钮组_       | buttons[] | [详情](/mp-colorui-doc/view/shopBar#buttons)  | []        |
| safeArea | _手机下方安全区域_ | boolean   | -                                             | _`true`_  |

### tabs

| 参数       | 说明                                 | 类型           | 可选值                                                         | 默认值   |
| ---------- | ------------------------------------ | -------------- | -------------------------------------------------------------- | -------- |
| badge      | _角标_                               | boolean/Number | -                                                              | _`true`_ |
| icon       | _图标_                               | string         | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -        |
| img        | 图片地址                             | string         | -                                                              | -        |
| title      | 标题                                 | string         | -                                                              | -        |
| moreAction | 更多操作，可传入 ClButton 的任何属性 | button         | 参考文档 [Button](/mp-colorui-doc/base/button)                 | {}       |

### buttons

| 参数    | 说明       | 类型   | 可选值                                        | 默认值 |
| ------- | ---------- | ------ | --------------------------------------------- | ------ |
| text    | _按钮文字_ | string | -                                             | -      |
| bgColor | _按钮颜色_ | string | 参考文档 [默认色](/mp-colorui-doc/home/color) | -      |

### ShopBar 事件

| 事件名称      | 说明                 | 参数返回                           |
| ------------- | -------------------- | ---------------------------------- |
| onClickTab    | _每个 tab 点击事件_  | index，_参数 index 为每一项的下标_ |
| onClickButton | _每个按钮的点击事件_ | index，_参数 index 为每一项的下标_ |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/shopBar/index" />

## 使用指南

```js
// 按需引入需要在 app.scss 中引入对应样式 curtain.scss
import { ClCurtain } from "mp-colorui";
```

## 一般用法

> Curtain 幕帘是受控组件，参数 show 来控制是否显示，请关闭时在 onClose 事件中，手动将其参数设置为 false

<CodeShow componentName='curtain' />

## 参数说明

### Curtain 参数

| 参数             | 说明               | 类型    | 可选值                                                                         | 默认值     |
| ---------------- | ------------------ | ------- | ------------------------------------------------------------------------------ | ---------- |
| show             | _是否显示_         | boolean |                                                                                | `false`    |
| closeWithShadow  | _是否点击阴影关闭_ | boolean |                                                                                | _`false`_  |
| closeBtnPosition | _关闭按钮位置_     | string  | _`top`_,_`top-ledt`_,_`top-right`_,_`bottom`_,_`bottom-left`_,_`bottom-right`_ | _`bottom`_ |

### Curtain 事件

| 事件名称 | 说明             | 返回参数 |
| -------- | ---------------- | -------- |
| onClick  | 点击幕帘事件     | -        |
| onClose  | 点击关闭按钮事件 | -        |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/viewPackage/curtain/index" />

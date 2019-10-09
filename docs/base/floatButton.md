## 使用指南

在 Taro 文件中引入组件

```js
import { ClFloatButton } from "mp-colorui";
```

## 一般用法

```html
<ClFloatButton shape="round" />
```

### 不同尺寸

```html
<ClFloatButton size="normal" /> <ClFloatButton size="small" />
```

### 可移动

```html
<ClFloatButton move />
```

## 参数说明

### FloatButton 参数

| 参数            | 说明           | 类型         | 可选值                                           | 默认值     |
| --------------- | -------------- | ------------ | ------------------------------------------------ | ---------- |
| shape           | _按钮形状设置_ | string       | _`round`_,_`radius`_                             | _`round`_  |
| closeWithShadow | 点击阴影关闭   | boolean      | -                                                | `false`    |
| size            | 按钮大小       | string       | `small`,`normal`,`large`,`xlarge`                | `normal`   |
| shadow          | 是否有阴影     | boolean      | -                                                | `true`     |
| move            | 是否可移动     | boolean      | -                                                | `false`    |
| open            | 是否可展开     | boolean      | -                                                | `true`     |
| icon            | 图标           | string       | 参考文档 [Icon-iconName](/base/icon?id=iconname) | `add`      |
| bgColor         | 背景色         | string       | 参考文档 [默认色](/home/color)                   | `blue`     |
| iconColor       | 图标色         | string       | 参考文档 [默认色-标准色](/home/color?id=标准色)  | -          |
| direction       | 展开方向       | string       | `vertical`,`horizontal`                          | `vertical` |
| actionList      | 展开按钮组     | actionList[] | -                                                | []         |

### actionList

| 参数      | 说明   | 类型   | 可选值                                           | 默认值 |
| --------- | ------ | ------ | ------------------------------------------------ | ------ |
| icon      | 图标   | string | 参考文档 [Icon-iconName](/base/icon?id=iconname) | -      |
| bgColor   | 背景色 | string | 参考文档 [默认色](/home/color)                   | -      |
| iconColor | 图标色 | string | 参考文档 [默认色-标准色](/home/color?id=标准色)  | -      |

### FloatButton 事件

| 事件名称      | 说明           | 返回参数   |     |
| ------------- | -------------- | ---------- | --- |
| onClick       | 点击按钮时触发 | event 对象 |     |
| onActionClick | 点击展开的按钮 | index 索引 |     |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/floatButton/index" />

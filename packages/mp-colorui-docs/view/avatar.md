## 使用指南

```js
// 按需引入需要在 app.scss 中引入对应样式 avatar.scss
import { ClAvatar } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='avatar' />

## 参数说明

### Avatar 参数

| 参数        | 说明                   | 类型           | 可选值                                                          | 默认值     |
| ----------- | ---------------------- | -------------- | --------------------------------------------------------------- | ---------- |
| shape       | _提供头像形状设置_     | string         | _`radius`_,_`round`_                                            | _`radius`_ |
| size        | _提供头像组件大小设置_ | string\|number | _`small`_,_`normal`_,_`large`_,_`xlarge`_                       | _`normal`_ |
| shadow      | _提供头像组件阴影设置_ | boolean        | _`true`_,_`false`_                                              | _`true`_   |
| headerArray | _头像组数组_           | headerArray[]  | 详细参数看 [这里](/mp-colorui-doc/view/avatar#headerarray) 查看 | []         |

### headerArray

| 参数     | 说明                                 | 类型   | 可选值                                                         | 默认值    |
| -------- | ------------------------------------ | ------ | -------------------------------------------------------------- | --------- |
| text     | _头像内置文字(只显示第一个字)_       | string | -                                                              | -         |
| tag      | _头像右上角小标签_                   | string | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -         |
| tagColor | _提供头像组件右上角小标签背景色设置_ | string | 参考文档 [默认色](/mp-colorui-doc/home/color)                  | -         |
| icon     | _头像内图标_                         | string | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -         |
| url      | _图片 url（仅能为网络地址）_         | string | -                                                              |           |
| bgColor  | _头像组件背景色设置_                 | string | 参考文档 [默认色](/mp-colorui-doc/home/color)                  | _`black`_ |

### Avatar 事件

| 事件名称 | 说明         | 返回参数 |
| -------- | ------------ | -------- |
| onClick  | 点击头像事件 | -        |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/viewPackage/avatar/index" />

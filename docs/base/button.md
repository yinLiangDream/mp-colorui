****

## 使用指南

在 Taro 文件中引入组件

```js
import { ClButton } from 'mp-colorui'
```

## 一般用法

```html
<ClButton>按钮文案</ClButton>
```

```html
<ClButton bgColor='block'>按钮文案</ClButton>
```

```html
<ClButton shape='round'>按钮文案</ClButton>
```

### 不同尺寸

```html
<ClButton size='normal'>按钮文案</ClButton>
<ClButton size='small'>按钮文案</ClButton>
```

### 带 loading icon

```html
<ClButton loading type='primary'>按钮文案</ClButton>
```

## 参数说明

### Button 参数



| 参数             | 说明                                                         | 类型    | 可选值                                                       | 默认值      |
| ---------------- | ------------------------------------------------------------ | ------- | ------------------------------------------------------------ | ----------- |
| shape            | *按钮形状设置*                                               | string  | *`round`*,*`radius`*                                         | *`radius`*  |
| size             | *按钮大小设置*                                               | string  | *`small`*,`normal`,*`large`*                                 | *`normal`*  |
| bgColor          | *按钮背景色设置*                                             | string  | *参考文档 [默认色](/home/color)*                             | *`blue`*    |
| plain            | *镂空设置*                                                   | boolean | *`true`*,*`false`*                                           | *`false`*   |
| plainSize        | *镂空边框粗细设置*                                           | string  | *`default`*,*`bold`*                                         | *`default`* |
| shadow           | *按钮阴影设置*                                               | boolean | *`true`*,*`false`*                                           | *`true`*    |
| disabled         | *是否禁用*                                                   | boolean | *`true`*,*`false`*                                           | *`false`*   |
| loading          | *显示加载图标*                                               | boolean | *`true`*,*`false`*                                           | *`false`*   |
| text             | *按钮文字(同直接在标签里写)*                                 | string  | -                                                            | -           |
| long             | *`是否为长按钮`*                                             | boolean | -                                                            | `false`     |
| openType         | *开放能力*                                                   | string  | *`contact`*,*`getUserInfo`*,<br />*`getPhoneNumber`*,<br />*`openSetting`*,*`feedback`*,<br />*`getRealnameAuthInfo`*,<br />*`share`*,*`launchApp`* | -           |
| sessionFrom      | 会话来源，生效时机：`open-type="contact"`                    | string  | -                                                            | -           |
| sendMessageTitle | 会话内消息卡片标题，生效时机：`open-type="contact"`          | string  | -                                                            | -           |
| sendMessagePath  | 会话内消息卡片点击跳转小程序路径，生效时机：`open-type="contact"` | string  | -                                                            | 当前标题    |
| sendMessageImg   | 会话内消息卡片图片，生效时机：`open-type="contact"`          | string  | -                                                            | 截图        |
| showMessageCard  | 显示会话内消息卡片，生效时机：`open-type="contact"`          | boolean | -                                                            | false       |
| scope            | 支付宝小程序scope，生效时机：`open-type="getAuthorize"`      | string  | `userInfo`,`phoneNumber`                                     | -           |
| lang             | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。生效时机: `open-type="getUserInfo"` | string  | `zh_CN`,`zh_TW`,`en`                                         | -           |

### Button 事件



| 事件名称              | 说明                                                         | 返回参数   |
| --------------------- | ------------------------------------------------------------ | ---------- |
| onClick               | 点击按钮时触发                                               | event 对象 |
| onGetUserInfo         | open-type 为 getUserInfo 时触发，参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onContact             | open-type 为 contact 时触发，参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onGetPhoneNumber      | open-type 为 getPhoneNumber 时触发，参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onError               | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onOpenSetting         | open-type 为 openSetting 时触发，参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onGetRealnameAuthInfo | open-type 为 getRealnameAuthInfo 时触发，参考参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onGetAuthorize        | 支付宝获取会员基础信息授权回调，生效时机：`open-type="getAuthorize"` |            |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/button/index" />

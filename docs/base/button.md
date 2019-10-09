## 使用指南

在 Taro 文件中引入组件

```js
import { ClButton } from "mp-colorui";
```

## 一般用法

```html
<ClButton>按钮文案</ClButton>
```

```html
<ClButton bgColor="block">按钮文案</ClButton>
```

```html
<ClButton shape="round">按钮文案</ClButton>
```

### 不同尺寸

```html
<ClButton size="normal">按钮文案</ClButton>
<ClButton size="small">按钮文案</ClButton>
```

### 带 loading icon

```html
<ClButton loading type="primary">按钮文案</ClButton>
```

## 参数说明

### Button 参数

| 参数             | 说明                                                                                                 | 类型    | 可选值                                                                                                                                              | 默认值      |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| shape            | _按钮形状设置_                                                                                       | string  | _`round`_,_`radius`_                                                                                                                                | _`radius`_  |
| size             | _按钮大小设置_                                                                                       | string  | _`small`_,`normal`,_`large`_                                                                                                                        | _`normal`_  |
| bgColor          | _按钮背景色设置_                                                                                     | string  | _参考文档 [默认色](/home/color)_                                                                                                                    | _`blue`_    |
| plain            | _镂空设置_                                                                                           | boolean | _`true`_,_`false`_                                                                                                                                  | _`false`_   |
| plainSize        | _镂空边框粗细设置_                                                                                   | string  | _`default`_,_`bold`_                                                                                                                                | _`default`_ |
| shadow           | _按钮阴影设置_                                                                                       | boolean | _`true`_,_`false`_                                                                                                                                  | _`true`_    |
| disabled         | _是否禁用_                                                                                           | boolean | _`true`_,_`false`_                                                                                                                                  | _`false`_   |
| loading          | _显示加载图标_                                                                                       | boolean | _`true`_,_`false`_                                                                                                                                  | _`false`_   |
| text             | _按钮文字(同直接在标签里写)_                                                                         | string  | -                                                                                                                                                   | -           |
| long             | _`是否为长按钮`_                                                                                     | boolean | -                                                                                                                                                   | `false`     |
| openType         | _开放能力_                                                                                           | string  | _`contact`_,_`getUserInfo`_,<br />_`getPhoneNumber`_,<br />_`openSetting`_,_`feedback`_,<br />_`getRealnameAuthInfo`_,<br />_`share`_,_`launchApp`_ | -           |
| sessionFrom      | 会话来源，生效时机：`open-type="contact"`                                                            | string  | -                                                                                                                                                   | -           |
| sendMessageTitle | 会话内消息卡片标题，生效时机：`open-type="contact"`                                                  | string  | -                                                                                                                                                   | -           |
| sendMessagePath  | 会话内消息卡片点击跳转小程序路径，生效时机：`open-type="contact"`                                    | string  | -                                                                                                                                                   | 当前标题    |
| sendMessageImg   | 会话内消息卡片图片，生效时机：`open-type="contact"`                                                  | string  | -                                                                                                                                                   | 截图        |
| showMessageCard  | 显示会话内消息卡片，生效时机：`open-type="contact"`                                                  | boolean | -                                                                                                                                                   | false       |
| scope            | 支付宝小程序 scope，生效时机：`open-type="getAuthorize"`                                             | string  | `userInfo`,`phoneNumber`                                                                                                                            | -           |
| lang             | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。生效时机: `open-type="getUserInfo"` | string  | `zh_CN`,`zh_TW`,`en`                                                                                                                                | -           |

### Button 事件

| 事件名称              | 说明                                                                                                                                        | 返回参数   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| onClick               | 点击按钮时触发                                                                                                                              | event 对象 |
| onGetUserInfo         | open-type 为 getUserInfo 时触发，参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)             | event 对象 |
| onContact             | open-type 为 contact 时触发，参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)                 | event 对象 |
| onGetPhoneNumber      | open-type 为 getPhoneNumber 时触发，参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)          | event 对象 |
| onError               | 参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)                                              | event 对象 |
| onOpenSetting         | open-type 为 openSetting 时触发，参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)             | event 对象 |
| onGetRealnameAuthInfo | open-type 为 getRealnameAuthInfo 时触发，参考参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onGetAuthorize        | 支付宝获取会员基础信息授权回调，生效时机：`open-type="getAuthorize"`                                                                        |            |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/button/index" />

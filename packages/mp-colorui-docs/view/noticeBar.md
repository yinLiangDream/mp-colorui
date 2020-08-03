## 使用说明

```js
// 按需引入需要在 app.scss 中引入对应样式 noticeBar.scss
import { ClNoticeBar } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='noticeBar' />

## 参数说明

### NoticeBar 参数说明

| 参数     | 说明               | 类型    | 可选值                                              | 默认值             |
| -------- | ------------------ | ------- | --------------------------------------------------- | ------------------ |
| bgColor  | _背景色_           | string  | 参考文档 [默认色](/mp-colorui-doc/home/color)       | _`yellow`_         |
| single   | _是否单行_         | boolean | -                                                   | `false`            |
| marquee  | _内容滚动_         | boolean | -                                                   | `false`            |
| speed    | _滚动速度_         | number  | -                                                   | `5`                |
| showMore | _显示查看详情按钮_ | boolean | -                                                   | `false`            |
| moreText | _查看详情文字_     | string  | -                                                   | `查看详情`         |
| icon     | _前置图标_         | string  | [Icon-iconName](/mp-colorui-doc/base/icon#iconname) | `notificationfill` |
| close    | _是否显示关闭按钮_ | boolean | -                                                   | `false`            |
| text     | _消息的内容_       | string  | -                                                   |                    |

### NoticeBar 事件说明

| 事件名称 | 说明           | 参数返回 |
| -------- | -------------- | -------- |
| onClose  | _点击关闭事件_ | -        |
| onMore   | _点击更多事件_ | -        |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/viewPackage/noticeBar/index" />

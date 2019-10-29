## 使用说明

```jsx
import { ClMessage } from "mp-colorui";
```

## 注意

> 若引用该组件后 duration 发生变化，请自己手动设置 duration，由于单一实例问题，会默认使用前一个状态的 duration。
>
> onClose 方法中请手动设置 show 为 false。

## 一般用法

<CodeShow componentName='message' />

## 参数说明

### Message 参数

| 参数     | 说明                             | 类型    | 可选值                                             | 默认值    |
| -------- | -------------------------------- | ------- | -------------------------------------------------- | --------- |
| type     | _类型，在 custom 下可自定义颜色_ | string  | _`success`_,_`error`_,_`warn`_,_`info`_,_`custom`_ | _`info`_  |
| bgColor  | _背景色_                         | string  | 参考文档 [默认色](/mp-colorui-doc/home/color)                     | -         |
| message  | _消息文本_                       | number  | -                                                  | 0         |
| duration | _持续时间_                       | number  | -                                                  | 3         |
| show     | _是否显示_                       | boolean | -                                                  | _`false`_ |

## Message 事件

| 事件名称    | 说明       | 参数 |
| ----------- | ---------- | ---- |
| **onClose** | 关闭时触发 | -    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/message/index" />

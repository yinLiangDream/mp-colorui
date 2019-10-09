

## 使用说明

```jsx
import {ClMessage} from 'mp-colorui'
```



## 注意

> 若引用该组件后 duration 发生变化，请自己手动设置 duration，由于单一实例问题，会默认使用前一个状态的 duration。
>
> onClose 方法中请手动设置 show 为 false。

## 一般用法

### 类型

```jsx
<ClMessage type='success' message='我是消息' />
```

### 持续时间

```jsx
<ClMessage duration={2} message='我是消息' />
```





## 参数说明

### Message 参数

| 参数     | 说明                             | 类型    | 可选值                                             | 默认值    |
| -------- | -------------------------------- | ------- | -------------------------------------------------- | --------- |
| type     | *类型，在 custom 下可自定义颜色* | string  | *`success`*,*`error`*,*`warn`*,*`info`*,*`custom`* | *`info`*  |
| bgColor  | *背景色*                         | string  | 参考文档 [默认色](/home/color)                     | -         |
| message  | *消息文本*                       | number  | -                                                  | 0         |
| duration | *持续时间*                       | number  | -                                                  | 3         |
| show     | *是否显示*                       | boolean | -                                                  | *`false`* |



## Message 事件

| 事件名称    | 说明       | 参数 |
| ----------- | ---------- | ---- |
| **onClose** | 关闭时触发 | -    |


<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/message/index" />


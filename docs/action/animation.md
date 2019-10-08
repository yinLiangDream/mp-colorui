

## 使用说明

```jsx
import {ClAnimation} from 'mp-colorui'
```



## 一般用法

### animation 类型

```jsx
<ClAnimation type='fade'>
	...
</ClAnimation>
```

### animation 动画翻转

```jsx
<ClAnimation type='fade' reserve>
	...
</ClAnimation>
```



## 参数说明

### Animation 参数

| 参数     | 说明       | 类型    | 可选值                                                                                                                            | 默认值    |
| -------- | ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| type     | *动画类型* | string  | *`fade`*, *`scale-up`*, *`scale-down`*, *`slide-top`*, <br />*`slide-bottom`*, *`slide-left`*, *`slide-right`*, *`shake`*，`none` | *`fade`*  |
| reserve  | *动画反转* | boolean | `true`, `false`                                                                                                                   | *`false`* |
| delay    | *延迟执行* | number  | -                                                                                                                                 | 0         |
| duration | 动画时间   | number  | -                                                                                                                                 | 0.5       |



## Animation 事件

| 事件名称         | 说明         | 参数 |
| ---------------- | ------------ | ---- |
| onAnimationStart | 动画开始触发 | -    |
| onAnimationEnd   | 动画结束触发 | -    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/animation/index" />

## 使用说明

```jsx
import { ClAnimation } from "mp-colorui";
```

## 一般用法

### animation 类型

```jsx
<ClAnimation type="fade">...</ClAnimation>
```

### animation 动画翻转

```jsx
<ClAnimation type="fade" reserve>
  ...
</ClAnimation>
```

## 参数说明

### Animation 参数

| 参数     | 说明       | 类型    | 可选值                                                                                                                            | 默认值    |
| -------- | ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| type     | _动画类型_ | string  | _`fade`_, _`scale-up`_, _`scale-down`_, _`slide-top`_, <br />_`slide-bottom`_, _`slide-left`_, _`slide-right`_, _`shake`_，`none` | _`fade`_  |
| reserve  | _动画反转_ | boolean | `true`, `false`                                                                                                                   | _`false`_ |
| delay    | _延迟执行_ | number  | -                                                                                                                                 | 0         |
| duration | 动画时间   | number  | -                                                                                                                                 | 0.5       |

## Animation 事件

| 事件名称         | 说明         | 参数 |
| ---------------- | ------------ | ---- |
| onAnimationStart | 动画开始触发 | -    |
| onAnimationEnd   | 动画结束触发 | -    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/animation/index" />

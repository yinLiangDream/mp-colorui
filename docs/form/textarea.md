## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 textarea.scss
import { ClTextarea } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='textarea' />

## 参数说明

### Textarea 参数

| 参数             | 说明                                                    | 类型    | 可选值                                        | 默认值    |
| ---------------- | ------------------------------------------------------- | ------- | --------------------------------------------- | --------- |
| shadow           | _显示阴影_                                              | boolean |                                               | _`false`_ |
| value            | _初始化的值_                                            | string  | -                                             | -         |
| maxLength        | _最大长度，0 即为不限制，默认为 0_                      | string  | -                                             | _`0`_     |
| bgColor          | _背景颜色_                                              | string  | 参考文档 [默认色](/mp-colorui-doc/home/color) | _`white`_ |
| placeholder      | _占位符_                                                | string  | -                                             | -         |
| disabled         | 是否禁用，默认 false                                    | boolean | -                                             | `false`   |
| autoFocus        | 自动聚焦，默认值 false                                  | boolean | -                                             | `false`   |
| focus            | 获取焦点，默认 false                                    | boolean | -                                             | `false`   |
| showConfirmBar   | 键盘显示完成按钮，默认 false                            | boolean | -                                             | `false`   |
| showLengthTip    | 右下角显示字数/最大长度，若无最大长度限制，则只显示字数 | boolean | -                                             | `false`   |
| height           | 输入框高度                                              | number  | -                                             | `300`     |
| overMaxForbidden | 超出最大长度不允许输入，默认 false                      | boolean | -                                             | `false`   |

### TextArea 事件

| 事件名称     | 说明             | 参数返回                                               |
| ------------ | ---------------- | ------------------------------------------------------ |
| onChange     | _输入变化时触发_ | value                                                  |
| onFocus      | 获取焦点触发     | value                                                  |
| onBlur       | 失去焦点触发     | value                                                  |
| onConfirm    | 点击完成触发     | value                                                  |
| onLineChange | 行数变换时触发   | {height: number; heightRpx: number; lineCount: number} |

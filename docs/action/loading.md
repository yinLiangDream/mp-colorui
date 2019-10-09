## 使用说明

```jsx
import { ClLoading } from "mp-colorui";
```

## 一般用法

### loading 类型

```jsx
<ClLoading type="line" />
```

### loading 背景色

```jsx
<ClLoading bgColor="black" />
```

## 参数说明

### Loading 参数

| 参数         | 说明                                  | 类型    | 可选值                             | 默认值    |
| ------------ | ------------------------------------- | ------- | ---------------------------------- | --------- |
| type         | _loading 类型_                        | string  | _`bar`_,_`modal`_,_`bar`_,_`line`_ | _`bar`_   |
| bgColor      | _背景色_                              | string  | 参考文档 [默认色](/home/color)     | _`blue`_  |
| modalText    | _type 为 modal 时显示的文字_          | string  | -                                  | -         |
| imgUrl       | _type 为 modal 或 image 时显示的图片_ | string  | -                                  | -         |
| show         | _是否显示_                            | boolean | _`true`_,_`false`_                 | _`false`_ |
| loadingError | _type 为 line 时设置，加载失败_       | boolean | _`true`_,_`false`_                 | _`false`_ |
| noMore       | _type 为 line 时设置，没有更多了_     | boolean | _`true`_,_`false`_                 | _`false`_ |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/loading/index" />

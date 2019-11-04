## 使用说明

```jsx
import { ClFlex } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='flex' />

## 参数说明

### Flex 参数

| 参数      | 说明               | 类型    | 可选值                                              | 默认值    |
| --------- | ------------------ | ------- | --------------------------------------------------- | --------- |
| justify   | _水平方向排列方式_ | string  | _`start`_,_`end`_,_`center`_,_`between`_,_`around`_ | _`start`_ |
| align     | _垂直方向排列方式_ | string  | _`start`_,_`end`_,_`center`_,_`stretch`_            | _`start`_ |
| wrap      | _换行_             | boolean | _`true`_,_`false`_                                  | _`false`_ |
| direction | 浮动方向           | string  | `row`,`row-reverse`,`column`,`column-reverse`       | `row`     |

### 子元素固定尺寸参数说明

用法：

```jsx
<ClFlex>
  <View className="basis-xs" />
</ClFlex>
```

| 参数     | 说明 |
| -------- | ---- |
| basis-xs | 20%  |
| basis-sm | 40%  |
| basis-df | 50%  |
| basis-lg | 60%  |
| basis-xl | 80%  |

### 子元素比例参数说明

用法：

```jsx
<ClFlex>
  <View className="flex-sub" />
  <View className="flex-twice" />
</ClFlex>
```

| 参数        | 说明 |
| ----------- | ---- |
| flex-sub    | 1    |
| flex-twice  | 2    |
| flex-treble | 3    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/flex/index" />

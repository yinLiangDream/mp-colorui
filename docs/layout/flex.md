## 使用说明

```jsx
import {ClFlex} from 'mp-colorui'
```



## 一般用法

### 水平方向排列方式

```jsx
<ClFlex justify='center' ></ClFlex>
```

### 垂直方向排列方式

```jsx
<ClFlex align='center' ></ClFlex>
```

### 换行

```jsx
<ClFlex wrap ></ClFlex>
```



## 参数说明

### Flex 参数

| 参数      | 说明               | 类型    | 可选值                                              | 默认值    |
| --------- | ------------------ | ------- | --------------------------------------------------- | --------- |
| justify   | *水平方向排列方式* | string  | *`start`*,*`end`*,*`center`*,*`between`*,*`around`* | *`start`* |
| align     | *垂直方向排列方式* | string  | *`start`*,*`end`*,*`center`*                        | *`start`* |
| wrap      | *换行*             | boolean | *`true`*,*`false`*                                  | *`false`* |
| direction | 浮动方向           | string  | `row`,`row-reverse`,`column`,`column-reverse`       | `row`     |

### 子元素固定尺寸参数说明

用法：

```jsx
<ClFlex>
	<View className="basis-xs"></View>
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
	<View className="flex-sub"></View>
  <View className="flex-twice"></View>
</ClFlex>
```

| 参数        | 说明 |
| ----------- | ---- |
| flex-sub    | 1    |
| flex-twice  | 2    |
| flex-treble | 3    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/flex/index" />


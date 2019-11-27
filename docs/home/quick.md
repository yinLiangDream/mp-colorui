## 使用前准备

在使用之前，推荐学习 `Taro` 和 `ES2015`，并正确配置 `Node.js` v8.x 或以上版本

## 如何使用

#### 引入所需组件

在代码中 `import` 需要的组件并按照文档说明使用

```js
// page.js
import { ClButton } from "mp-colorui";
```

**引入组件样式**

**全局引入（CSS 中）：** 在 `app.scss` 样式文件中 `import` 组件样式并按照文档说明使用

```scss
@import "~mp-colorui/dist/style/index.scss"; // 引入组件样式
```

如果你不是使用的 `scss` 文件，用下面一种引用方式，在 `app.js/jsx/tsx` 里引入

```js
import "mp-colorui/dist/style/index.scss"; // 引入组件样式，仅需引入一次即可
```

**按需引入**

> 说明：因为 `Taro` 会将所有引入的文件进行打包，所以会造成重复的样式代码，从而浪费空间，按需引入请遵循以下引入规则。

> 按需引入请将样式文件引入到统一一个文件中，例如 `app.js` 或者 `app.scss` 中

```scss
// app.scss
@import "~mp-colorui/dist/style/components/avatar.scss";
```

```js
// app.js
import "mp-colorui/dist/style/components/avatar.scss";
```

## 示例

在 `/myApp/src/pages/index/index.tsx` 文件添加以下代码

```tsx
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClButton } from 'mp-colorui'
import './index.scss'
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
         <ClButton shape='round'>按钮文案</AtButton>
      </View>
    )
  }
}
```

在 `/myApp/src/app.scss` 文件中添加如下代码

```scss
@import "~mp-colorui/dist/style/index.scss"; // 引入组件样式，仅需引入一次即可
```

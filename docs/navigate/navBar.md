## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 navBar.scss
import { ClNavBar } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='navBar' />

## 参数说明

### NavBar 参数

| 参数      | 说明         | 类型        | 可选值                                            | 默认值    |
| --------- | ------------ | ----------- | ------------------------------------------------- | --------- |
| bgColor   | _背景色_     | string      | 参考文档 [默认色](/mp-colorui-doc/home/color)     | _`white`_ |
| title     | _中间标题_   | string      | -                                                 | -         |
| leftIcon  | _左侧图标组_ | leftIcon[]  | [详情](/mp-colorui-doc/navigate/navBar#lefticon)  | []        |
| rightIcon | _右侧图标组_ | rightIcon[] | [详情](/mp-colorui-doc/navigate/navBar#rightIcon) | []        |

### leftIcon

| 参数  | 说明       | 类型   | 可选值                                                         | 默认值 |
| ----- | ---------- | ------ | -------------------------------------------------------------- | ------ |
| icon  | _图标_     | string | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -      |
| color | _图标颜色_ | string | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色)    | -      |
| text  | _左侧文字_ | string | -                                                              | -      |

### rightIcon

| 参数  | 说明       | 类型   | 可选值                                                         | 默认值 |
| ----- | ---------- | ------ | -------------------------------------------------------------- | ------ |
| icon  | _图标_     | string | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -      |
| color | _图标颜色_ | string | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色)    | -      |

### NavBar 事件

| 事件名称         | 说明               | 参数返回 |
| ---------------- | ------------------ | -------- |
| onClickLeftIcon  | _点击左侧图标事件_ | index    |
| onClickRightIcon | _点击右侧图标事件_ | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/navigatePackage/navBar/index" />

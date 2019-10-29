## 使用说明

```jsx
import { ClSearchBar } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='searchBar' />

## 参数说明

### SearchBar 参数

| 参数             | 说明                            | 类型     | 可选值                                             | 默认值     |
| ---------------- | ------------------------------- | -------- | -------------------------------------------------- | ---------- |
| shape            | _搜索栏的形状_                  | string   | _`radius`_,_`round`_                               | _`radius`_ |
| placeholder      | _占位内容_                      | string   | -                                                  | -          |
| fix              | _是否固定最上端_                | string   | _`true`_,_`false`_                                 | _`false`_  |
| searchType       | _搜索框右边显示的内容的类型_    | string   | _`button`_,_`text`_,_`none`_,_`list`_              | _`button`_ |
| leftIcons        | _左边的图标组_                  | icon[]   | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | []         |
| bgColor          | _背景色_                        | string   | 参考文档 [默认色](/mp-colorui-doc/home/color)                     | -          |
| rightButtonColor | _右侧按钮颜色_                  | string   | 参考文档 [默认色](/mp-colorui-doc/home/color)                     | _`white`_  |
| rightTextColor   | _type 为 text 时，右侧文字颜色_ | string   | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色)    | _`black`_  |
| showResult       | 是否显示搜索结果                | boolean  | -                                                  | `false`    |
| showLoading      | 是否显示搜索结果加载页面        | Boolean  | -                                                  | `false`    |
| result           | 搜索结果列表                    | result[] | 参考下方 result 参数                               | []         |

### result 参数

| 参数  | 说明             | 类型   | 可选值 | 默认值 |
| ----- | ---------------- | ------ | ------ | ------ |
| title | 搜索结果标题     | string | -      | -      |
| desc  | 搜索结果详细内容 | string | -      | -      |

### SearchBar 事件

| 事件名称      | 说明             | 参数返回                           |
| ------------- | ---------------- | ---------------------------------- |
| onIconClick   | _图标点击事件_   | index，_参数 index 为第几个图标_   |
| onSearch      | _搜索事件_       | value，_参数 value 为输入的数内容_ |
| onInput       | _键盘输入事件_   | value，_参数 value 为输入的数内容_ |
| onTouchResult | 搜索结果点击事件 | index，参数 index 为结果下标       |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/searchBar/index" />

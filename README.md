# MP-COLORUI 是基于 Taro 框架的组件库

## 特色

 - 全部采用 TypeScript 编写，类型声明一目了然
 - 丰富的配色方案，极具色彩表现力
 - 丰富的组件库，应有尽有，不够提 [issue](https://github.com/yinLiangDream/mp-colorui/issues) 再加

## 使用方式

> 安装：`npm i mp-colorui`， `yarn add mp-colorui`
> 具体文档请查看：[MP-ColorUI 文档](https://yinliangdream.github.io/mp-colorui-doc/#/)

## *注意*

> *由于该组件库还未开发完成，后期 API 可能会变动，请慎用在商业环境！*

## 投票及建议

[![建议及投票](https://feathub.com/yinLiangDream/mp-colorui?format=svg)](https://feathub.com/yinLiangDream/mp-colorui)

## 小程序演示

![MP ColorUI](https://md-1255362963.cos.ap-chengdu.myqcloud.com/coloruiqrcode.png)

## 使用案例

### 引入 `CSS` 文件

引入 `CSS` 需要在 `src` 目录下 `app.scss` 中引入样式

```js
@import "~mp-colorui/dist/style/index.scss";
```

### 引入组件

```jsx
import { ClAvatar } from 'mp-colorui'

<ClAvatar shadow shape='round' size='large'/>
```

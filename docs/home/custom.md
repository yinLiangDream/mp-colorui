`MP-ColorUI`目前只有一套默认的配色，为满足业务和品牌上多样化的视觉需求，UI 库支持一定程度的样式定制（请确保微信基础库版本在 v2.2.3 以上）。

## SCSS 主题变量覆盖

`MP-ColorUI` 的组件样式是使用 SCSS 编写的，如果你的项目中也使用了 SCSS，那么可以直接在项目中改变 `MP-ColorUI` 的样式变量。

新建一个主题样式文件，例如 `custom-variables.scss`，并写入以下内容：

```scss
/* 改变主题变量，具体变量名可查看 默认色 页面 */
$grey: #eeeeee;
/* 引入 Taro UI 默认样式 */
@import "~mp-colorui/dist/style/index.scss";
```

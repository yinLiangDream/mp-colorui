## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 steps.scss
import { ClStep } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='steps' />

## 参数说明

### Step 参数说明

| 参数              | 说明                     | 类型    | 可选值                                                      | 默认值     |
| ----------------- | ------------------------ | ------- | ----------------------------------------------------------- | ---------- |
| type              | _步骤条形状_             | string  | _`arrow`_,_`line`_                                          | _`line`_   |
| activeColor       | _激活的颜色_             | string  | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | _`blue`_   |
| step              | _默认激活第几步_         | number  | -                                                           | 0          |
| stepIconType      | _每一步的样式，可自定义_ | string  | _`number`_,_`space`_,_`custom`_                             | _`number`_ |
| stepTitlePosition | _每一步提示文字位置_     | string  | _`top`_,_`bottom`_                                          | _`bottom`_ |
| steps             | \*每一步的内容           | steps[] | [详情](/mp-colorui-doc/view/steps#steps)                    | -          |

### steps

| 参数  | 说明                                                                                                                                   | 类型   | 可选值 | 默认值 |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| title | 每一步提示文字                                                                                                                         | string | -      | -      |
| icon  | _每一步的图标，可选类型请查看 参考文档 <br />[Icon-iconName](/mp-colorui-doc/base/icon#iconname)_(仅在`stepIconType === custom`时有效) | string | -      | -      |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/viewPackage/steps/index" />

## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 form.scss
import { ClForm, ClFormItem } from "mp-colorui";
```

## 一般用法

> 由于小程序的 view 没有失焦事件，目前组件库只能做到 model 里面的数据更新就会进行校验，如果想做到失焦校验请手动在 Input 组件下绑定 onBlur 事件，在此事件里面进行数据更新。

> Form 组件必须和 FormItem 配合使用。

<CodeShow componentName='form' />

### 内置函数

> rules 里面的校验函数第一个参数 rule 是传入的内置函数，以简化部分校验规则的手动实现，具体函数请查看[内置工具](/mp-colorui-doc/util/rule)

### 整体校验

> 在 Form 组件上加入 ref，使用 ref 下的 validate 函数，此函数接受一个回调函数，回调函数会传入一个 boolean 值作为全局校验的最终结果，具体使用方法请查看上方示例。
>
> ```jsx
> this.ref.validate(success => {
>   if (success) {
>     // 校验成功
>   } else {
>     // 校验失败
>   }
> });
> ```

## 参数说明

### Form 参数

| 参数  | 说明                                                                                                                                      | 类型   | 可选值 | 默认值 |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| model | _数据模型_                                                                                                                                | object | -      | {}     |
| rules | _校验规则(rules 里面的 key 必须和 model 对应，以校验对应 model 的值，且函数必须返回 boolean 值告诉组件库校验成功或者失败，具体看上方示例_ | object | -      | {}     |

### FormItem 参数

| 参数     | 说明                                                                | 类型    | 可选值 | 默认值    |
| -------- | ------------------------------------------------------------------- | ------- | ------ | --------- |
| prop     | _prop 必须和 model 里的 key 值对应_                                 | string  | -      | -         |
| required | _添加为必输项（此功能仅仅作为界面红点，具体校验请写在 rules 里面）_ | boolean | -      | _`false`_ |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/formPackage/form/index" />

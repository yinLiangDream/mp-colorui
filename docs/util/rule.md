## 使用指南
```js
import { ClUtils } from 'mp-colorui'

// 使用

ClUtils.rule.phone('1888888888')
```

## 内置函数


| 函数名       | 说明               | 传入参数                                |
| ------------ | ------------------ | --------------------------------------- |
| **phone**    | *手机号码正则校验* | ClUtils.rule.phone(`value`)             |
| **email**    | *email 地址校验*   | ClUtils.rule.email(`value`)             |
| **range**    | *数值范围校验*     | ClUtils.rule.range(`min`,`max`,`value`) |
| **required** | *是否为空*         | ClUtils.rule.required(`value`)          |
| **en**       | *是否为纯英文*     | ClUtils.rule.en(`value`)                |
| **cn**       | *是否为纯中文*     | ClUtils.rule.zn(`value`)                |
| **money**    | *是否为金钱数字*   | ClUtils.rule.money(`value`)             |
| **code**     | *是否字母数字组合* | ClUtils.rule.code(`value`)              |
| **number**   | *是否为纯数字*     | ClUtils.rule.number(`value`)            |
| **ip**       | *是否为 ip 地址*   | ClUtils.rule.ip(`value`)                |
| **url**      | *是否为合法 url*   | ClUtils.rule.url(`value`)               |
| **idCard**   | *是否为合法身份证* | ClUtils.rule.idCard(`value`)            |



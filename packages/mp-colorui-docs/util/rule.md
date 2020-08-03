## 使用指南

```js
import { ClUtils } from "mp-colorui/dist/weapp/lib";

// 使用

ClUtils.rule.phone("1888888888");
```

## 内置函数

| 函数名       | 说明               | 传入参数                                |
| ------------ | ------------------ | --------------------------------------- |
| **phone**    | _手机号码正则校验_ | ClUtils.rule.phone(`value`)             |
| **email**    | _email 地址校验_   | ClUtils.rule.email(`value`)             |
| **range**    | _数值范围校验_     | ClUtils.rule.range(`min`,`max`,`value`) |
| **required** | _是否为空_         | ClUtils.rule.required(`value`)          |
| **en**       | _是否为纯英文_     | ClUtils.rule.en(`value`)                |
| **cn**       | _是否为纯中文_     | ClUtils.rule.zn(`value`)                |
| **money**    | _是否为金钱数字_   | ClUtils.rule.money(`value`)             |
| **code**     | _是否字母数字组合_ | ClUtils.rule.code(`value`)              |
| **number**   | _是否为纯数字_     | ClUtils.rule.number(`value`)            |
| **ip**       | _是否为 ip 地址_   | ClUtils.rule.ip(`value`)                |
| **url**      | _是否为合法 url_   | ClUtils.rule.url(`value`)               |
| **idCard**   | _是否为合法身份证_ | ClUtils.rule.idCard(`value`)            |

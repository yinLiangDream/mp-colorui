## 使用说明

```jsx
import { ClSelect } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='select' />

## 参数说明

### Select 参数

| 参数          | 说明                           | 类型    | 可选值                                                            | 默认值       |
| ------------- | ------------------------------ | ------- | ----------------------------------------------------------------- | ------------ |
| title         | _标题_                         | string  | -                                                                 | -            |
| disabled      | _是否禁止选择_                 | boolean | _`true`_,_`false`_                                                | _`false`_    |
| mode          | _选择类型_，                   | string  | _`selector`_,_`multiSelector`_,<br />_`time`_,_`date`_,_`region`_ | _`selector`_ |
| selector      | _mode 为 selector 时设置_      | Object  | [详情](/form/select#selector)                                  | {}           |
| multiSelector | _mode 为 multiSelector 时设置_ | Object  | [详情](/form/select#multiSelector)                             | {}           |
| time          | _mode 为 time 时设置_          | Object  | [详情](/form/select#time)                                      | {}           |
| date          | _mode 为 date 时设置_          | Object  | [详情](/form/select#date)                                      | {}           |
| region        | _mode 为 region 时设置_        | Object  | [详情](/form/select#region)                                    | {}           |

### selector

| 参数     | 说明                                                            | 类型            | 可选值 | 默认值 |
| -------- | --------------------------------------------------------------- | --------------- | ------ | ------ |
| range    | _每一项_                                                        | Object/string[] | -      | []     |
| rangeKey | _若 range 每一项为 Object 类型，则此属性为对应要显示内容的 key_ | string          | -      | -      |
| value    | _默认选中的位置_                                                | number          | -      | 0      |

### multiSelector

| 参数     | 说明                                                            | 类型            | 可选值 | 默认值 |
| -------- | --------------------------------------------------------------- | --------------- | ------ | ------ |
| range    | _每一项_                                                        | Object/string[] | -      | []     |
| rangeKey | _若 range 每一项为 Object 类型，则此属性为对应要显示内容的 key_ | string          | -      | -      |
| value    | _默认选中的位置_                                                | number[]        | -      | [0, 0] |

### time

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| value | _选中的值_ | string | -      | 00:00  |
| start | _开始时间_ | string | -      | 00:00  |
| end   | _结束时间_ | string | -      | 23:59  |

### date

| 参数   | 说明           | 类型   | 可选值                     | 默认值  |
| ------ | -------------- | ------ | -------------------------- | ------- |
| value  | _选中的值_     | string | -                          | -       |
| start  | _开始日期_     | string | -                          | -       |
| end    | _结束日期_     | string | -                          | -       |
| fields | _日期选择精度_ | string | _`year`_,_`month`_,_`day`_ | _`day`_ |

### region

| 参数  | 说明                                                                                                                           | 类型     | 可选值 | 默认值 |
| ----- | ------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ------ |
| value | _初始化选中的值（具体 key,value 请查看[地区编码](https://yinliangdream.github.io/area/)）（[示例](/form/select#地区选择)）_ | region[] | -      | []     |

#### region 参数

| 参数  | 说明         | 类型   |
| ----- | ------------ | ------ |
| key   | 该地区的编码 | number |
| value | 该地区的名字 | string |

### Select 事件

| 事件名称       | 说明             | 参数返回   |
| -------------- | ---------------- | ---------- |
| onChange       | _选项改变时触发_ | Event 对象 |
| onCancel       | _取消选择时触发_ | Event 对象 |
| onColumnChange | _多列改变时触发_ | Event 对象 |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/select/index" />

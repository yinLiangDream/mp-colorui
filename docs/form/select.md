****

## 使用说明

```jsx
import {ClSelect} from 'mp-colorui'
```



## 一般用法

### 多列选择

```jsx
<ClSelect mode='mutiSelector' />
```

### 标题

```jsx
<ClSelect title='选择器' />
```

### 禁止选择

```jsx
<ClSelect disabled />
```

### 地区选择

```jsx
const value = [{
  key: 110000,
  value: '北京市'
}, {
  key: 110100,
  value: '市辖区'
}, {
  key: 110101,
  value: '东城区'
}]

<ClSelect mode='region' value={value} />
```



## 参数说明

### Select 参数

| 参数          | 说明                           | 类型    | 可选值                                                            | 默认值       |
| ------------- | ------------------------------ | ------- | ----------------------------------------------------------------- | ------------ |
| title         | *标题*                         | string  | -                                                                 | -            |
| disabled      | *是否禁止选择*                 | boolean | *`true`*,*`false`*                                                | *`false`*    |
| mode          | *选择类型*，                   | string  | *`selector`*,*`multiSelector`*,<br />*`time`*,*`date`*,*`region`* | *`selector`* |
| selector      | *mode 为 selector 时设置*      | Object  | [详情](/form/select?id=selector)                                  | {}           |
| multiSelector | *mode 为 multiSelector 时设置* | Object  | [详情](/form/select?id=multiSelector)                             | {}           |
| time          | *mode 为 time 时设置*          | Object  | [详情](/form/select?id=time)                                      | {}           |
| date          | *mode 为 date 时设置*          | Object  | [详情](/form/select?id=date)                                      | {}           |
| region        | *mode 为 region 时设置*        | Object  | [详情](/form/select?id=region)                                    | {}           |



### selector

| 参数     | 说明                                                            | 类型            | 可选值 | 默认值 |
| -------- | --------------------------------------------------------------- | --------------- | ------ | ------ |
| range    | *每一项*                                                        | Object/string[] | -      | []     |
| rangeKey | *若 range 每一项为 Object 类型，则此属性为对应要显示内容的 key* | string          | -      | -      |
| value    | *默认选中的位置*                                                | number          | -      | 0      |



### multiSelector

| 参数     | 说明                                                            | 类型            | 可选值 | 默认值 |
| -------- | --------------------------------------------------------------- | --------------- | ------ | ------ |
| range    | *每一项*                                                        | Object/string[] | -      | []     |
| rangeKey | *若 range 每一项为 Object 类型，则此属性为对应要显示内容的 key* | string          | -      | -      |
| value    | *默认选中的位置*                                                | number[]        | -      | [0, 0] |



### time

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| value | *选中的值* | string | -      | 00:00  |
| start | *开始时间* | string | -      | 00:00  |
| end   | *结束时间* | string | -      | 23:59  |



### date

| 参数   | 说明           | 类型   | 可选值                     | 默认值  |
| ------ | -------------- | ------ | -------------------------- | ------- |
| value  | *选中的值*     | string | -                          | -       |
| start  | *开始日期*     | string | -                          | -       |
| end    | *结束日期*     | string | -                          | -       |
| fields | *日期选择精度* | string | *`year`*,*`month`*,*`day`* | *`day`* |



### region

| 参数  | 说明                                                                                                                          | 类型     | 可选值 | 默认值 |
| ----- | ----------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------ |
| value | *初始化选中的值（具体 key,value请查看[地区编码](https://yinliangdream.github.io/area/)）（[示例](/form/select?id=地区选择)）* | region[] | -      | []     |

#### region 参数

| 参数  | 说明         | 类型   |
| ----- | ------------ | ------ |
| key   | 该地区的编码 | number |
| value | 该地区的名字 | string |



### Select 事件

| 事件名称       | 说明             | 参数返回   |
| -------------- | ---------------- | ---------- |
| onChange       | *选项改变时触发* | Event 对象 |
| onCancel       | *取消选择时触发* | Event 对象 |
| onColumnChange | *多列改变时触发* | Event 对象 |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/select/index" />


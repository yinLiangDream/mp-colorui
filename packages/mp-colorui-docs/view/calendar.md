## 使用指南

> 该组件编译 H5 端的适配仍有些许问题，正在努力攻克，目前仅支持小程序端

```js
// 按需引入需要在 app.scss 中引入对应样式 calendar.scss
import { ClCalendar } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='calendar' />

## 参数说明

### Clendar 参数

| 参数                  | 说明                                                                                                                                                                                                                            | 类型                   | 可选值                                                      | 默认值  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------- | ------- |
| calendarType          | 显示周/月                                                                                                                                                                                                                       | string                 | `week`, `month`                                             | month   |
| showType              | 显示模式，卡片或者全铺                                                                                                                                                                                                          | string                 | `card`, `full`                                              | card    |
| activeColor           | 选中日期的颜色                                                                                                                                                                                                                  | string                 | 参考文档 [默认色](/mp-colorui-doc/home/color)               | `blue`  |
| backToToday           | 是否显示回到今天                                                                                                                                                                                                                | boolean                | -                                                           | `true`  |
| highlightWeekend      | 高亮周末                                                                                                                                                                                                                        | boolean                | -                                                           | `false` |
| highlightWeekendColor | 高亮周末的颜色                                                                                                                                                                                                                  | string                 | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | `blue`  |
| specialDay            | 特殊的日期特殊的颜色，string[]格式为 YYYY-MM-DD                                                                                                                                                                                 | string[]\|specialDay[] | specialDay 见下方详细说明                                   | -       |
| disabledDay           | 禁止的日期，日期格式 YYYY-MM-DD。<br /><br />若为 YYYY-MM-DD 日期之前全部禁止，则需要写法如下 [,YYYY-MM-DD]，同理某日期之后禁止，写法为[YYYY-MM-DD,]<br /><br />若想某段时间段禁止，则为 [YYYY-MM-DD, YYYY-MM-DD]，日期前小后大 | string \| string[][]   | -                                                           | `[]`    |
| tipDay                | 某些日期提示信息，日期格式 YYYY-MM-DD                                                                                                                                                                                           | tipDay[]               | 见下方详细说明                                              | `[]`    |
| badge                 | 日期角标，格式 YYYY-MM-DD 或者 {date: YYYY-MM-DD, color: 'red', num: '10'}                                                                                                                                                      | string[] \| badge[]    | badge 见下方详细说明                                        | `[]`    |

### specialDay

| 参数  | 说明                    | 类型   | 可选值                                        | 默认值 |
| ----- | ----------------------- | ------ | --------------------------------------------- | ------ |
| color | 颜色                    | string | 参考文档 [默认色](/mp-colorui-doc/home/color) | -      |
| date  | 日期，格式为 YYYY-MM-DD | string | -                                             | -      |

### tipDay

| 参数           | 说明                     | 类型   | 可选值                                                      | 默认值 |
| -------------- | ------------------------ | ------ | ----------------------------------------------------------- | ------ |
| date           | 日期，格式为 YYYY-MM-DD  | string | -                                                           | -      |
| tipTop         | 日期上方提示内容         | string | -                                                           | -      |
| tipBottom      | 日期下方提示内容         | string | -                                                           | -      |
| tipTopColor    | 日期上方提示内容文字颜色 | string | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | -      |
| tipBottomColor | 日期下方提示内容文字颜色 | string | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | -      |

### badge

| 参数  | 说明                              | 类型   | 可选值                                                      | 默认值 |
| ----- | --------------------------------- | ------ | ----------------------------------------------------------- | ------ |
| date  | 日期，格式为 YYYY-MM-DD           | string | -                                                           | -      |
| color | 颜色                              | string | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | -      |
| num   | 角标显示的数量，为 0 则为一个小点 | num    | -                                                           | -      |

### Calendar 事件

| 事件名称 | 说明                          | 返回参数   |
| -------- | ----------------------------- | ---------- |
| onClick  | 点击日期事件                  | YYYY-MM-DD |
| onChange | 切换 周/月 时触发（左右滑动） | YYYY-MM    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/viewPackage/calendar/index" />

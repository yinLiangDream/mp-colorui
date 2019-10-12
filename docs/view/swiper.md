## 使用说明

```jsx
import { ClSwiper } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='swiper' />

## 参数说明

### Swiper 参数

| 参数                 | 说明                   | 类型    | 可选值                       | 默认值     |
| -------------------- | ---------------------- | ------- | ---------------------------- | ---------- |
| type                 | _轮播图类型_           | string  | _`card`_,_`screen`_          | _`card`_   |
| dot                  | _每个点的形状_         | string  | _`square`_,_`round`_         | _`square`_ |
| duration             | _滑动动画时长_         | number  | _0-2000_                     | _500_      |
| list                 | _每一项_               | list[]  | [详情](/view/swiper#list) | []         |
| indicatorDots        | _是否显示面板指示点_   | boolean | _`true`_,_`false`_           | _`false`_  |
| indicatorColor       | _指示点颜色_           | string  | -                            | -          |
| indicatorActiveColor | _当前选中的指示点颜色_ | string  | -                            | -          |
| interval             | _自动切换时间间隔_     | boolean |                              | 5000       |
| circular             | _是否采用衔接滑动_     | boolean | _`true`_,_`false`_           | _`false`_  |
| autoplay             | _是否自动轮播_         | boolean | -                            | `false`    |

### list

| 参数        | 说明                                                                  | 类型    | 可选值              | 默认值    |
| ----------- | --------------------------------------------------------------------- | ------- | ------------------- | --------- |
| type        | _类型_                                                                | string  | _`image`_,_`video`_ | _`image`_ |
| url         | _图片/视频的地址_                                                     | string  | -                   | -         |
| autoplay    | _是否自动播放（video 有效）_                                          | boolean | _`true`_,_`false`_  | _`false`_ |
| loop        | _循环播放（video 有效）_                                              | boolean | _`true`_,_`false`_  | _`false`_ |
| muted       | _是否静音播放（video 有效）_                                          | boolean | _`true`_,_`false`_  | _`false`_ |
| showPlayBtn | _是否显示视频底部控制栏的播放按钮（video 有效）_                      | boolean | _`true`_,_`false`_  | _`false`_ |
| controls    | _是否显示默认播放控件（播放/暂停按钮、播放进度、时间）（video 有效）_ | boolean | _`true`_,_`false`_  | _`false`_ |
| title       | _视频的标题，全屏时在顶部展示（video 有效）_                          | string  | -                   | -         |
| poster      | _视频封面的图片网络资源地址或云文件 ID（video 有效）_                 | string  | -                   | -         |

### Swiper 事件

| 事件名称 | 说明         | 参数返回             |
| -------- | ------------ | -------------------- |
| onChange | _滑动时触发_ | index，第几个 swiper |
| onClick  | _点击事件_   | index，第几个 swiper |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/swiper/index" />

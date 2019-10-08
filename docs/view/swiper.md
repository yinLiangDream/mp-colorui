****

## 使用说明

```jsx
import {ClSwiper} from 'mp-colorui'
```



## 一般用法

### 轮播图类型

```jsx
<ClSwiper type='card' />
```

### 每个节点的形状

```jsx
<ClSwiper dot='round' />
```

### 采用衔接滑动

```jsx
<ClSwiper circular />
```



## 参数说明

### Swiper 参数

| 参数                 | 说明                   | 类型    | 可选值                       | 默认值     |
| -------------------- | ---------------------- | ------- | ---------------------------- | ---------- |
| type                 | *轮播图类型*           | string  | *`card`*,*`screen`*          | *`card`*   |
| dot                  | *每个点的形状*         | string  | *`square`*,*`round`*         | *`square`* |
| duration             | *滑动动画时长*         | number  | *0-2000*                     | *500*      |
| list                 | *每一项*               | list[]  | [详情](/view/swiper?id=list) | []         |
| indicatorDots        | *是否显示面板指示点*   | boolean | *`true`*,*`false`*           | *`false`*  |
| indicatorColor       | *指示点颜色*           | string  | -                            | -          |
| indicatorActiveColor | *当前选中的指示点颜色* | string  | -                            | -          |
| interval             | *自动切换时间间隔*     | boolean |                              | 5000       |
| circular             | *是否采用衔接滑动*     | boolean | *`true`*,*`false`*           | *`false`*  |
| autoplay             | *是否自动轮播*         | boolean | -                            | `false`    |

### list

| 参数        | 说明                                                                  | 类型    | 可选值              | 默认值    |
| ----------- | --------------------------------------------------------------------- | ------- | ------------------- | --------- |
| type        | *类型*                                                                | string  | *`image`*,*`video`* | *`image`* |
| url         | *图片/视频的地址*                                                     | string  | -                   | -         |
| autoplay    | *是否自动播放（video 有效）*                                          | boolean | *`true`*,*`false`*  | *`false`* |
| loop        | *循环播放（video 有效）*                                              | boolean | *`true`*,*`false`*  | *`false`* |
| muted       | *是否静音播放（video 有效）*                                          | boolean | *`true`*,*`false`*  | *`false`* |
| showPlayBtn | *是否显示视频底部控制栏的播放按钮（video 有效）*                      | boolean | *`true`*,*`false`*  | *`false`* |
| controls    | *是否显示默认播放控件（播放/暂停按钮、播放进度、时间）（video 有效）* | boolean | *`true`*,*`false`*  | *`false`* |
| title       | *视频的标题，全屏时在顶部展示（video 有效）*                          | string  | -                   | -         |
| poster      | *视频封面的图片网络资源地址或云文件ID（video 有效）*                  | string  | -                   | -         |



### Swiper 事件

| 事件名称 | 说明         | 参数返回             |
| -------- | ------------ | -------------------- |
| onChange | *滑动时触发* | index，第几个 swiper |
| onClick  | *点击事件*   | index，第几个 swiper |


<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/swiper/index" />

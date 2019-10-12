
```jsx
const videoList = [{
  url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/spyuzaoqian.mp4',
  type: 'video',
  controls: true,
  autoplay: true,
  showPlayBtn: true,
  title: '烬天玉藻前',
  muted: true
}, {
  url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/CGkaichang.mp4',
  type: 'video',
  controls: true,
  autoplay: false,
  showPlayBtn: true,
  title: 'CG'
}]

<ClSwiper
  type='screen'
  list={videoList}
  circular
  dot='round'
  indicatorDots
  indicatorColor='#8799a3'
  indicatorActiveColor='#0081ff'
  onClick={(index) => {
    console.log(index)
  }}
/>
```

import Taro from '@tarojs/taro'
import { ClLayout, ClSwiper, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import { cardCode, dotCode, fullCode, videoCode } from './code'

export default function SwiperView () {
  const fileList = [{
    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper1.jpg',
    type: 'image'
  }, {
    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper2.jpg',
    type: 'image'
  }]

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

  return (
    <ClLayout>
      <ClTitleBar title='类型' textColor='black' type='icon' subTitle='type'/>
      <ClSwiper type='card' list={fileList} circular/>
      <ClLayout margin='normal' marginDirection='vertical'>
        <GenerateCode code={cardCode}/>
      </ClLayout>
      <ClSwiper type='screen' list={fileList} circular/>
      <ClLayout margin='normal' marginDirection='vertical'>
        <GenerateCode code={fullCode}/>
      </ClLayout>

      <ClTitleBar title='指示点' textColor='black' type='icon' subTitle='dot'/>
      <ClSwiper
        type='screen'
        list={fileList}
        circular
        dot='round'
        indicatorDots
        indicatorColor='#8799a3'
        indicatorActiveColor='#0081ff'
      />
      <ClLayout margin='normal' marginDirection='vertical'>
        <GenerateCode code={dotCode}/>
      </ClLayout>

      <ClTitleBar title='视频' textColor='black' type='icon' subTitle='dot'/>
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
      <ClLayout margin='normal' marginDirection='vertical'>
        <GenerateCode code={videoCode}/>
      </ClLayout>
    </ClLayout>
  )
}

SwiperView.config = {
  navigationBarTitleText: 'Swiper 滑动视图'
}


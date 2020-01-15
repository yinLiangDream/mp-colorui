import Taro, { pxTransform } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClSwiper, ClTitleBar } from "../../../index";

export default function SwiperView() {
  const fileList = [
    {
      url:
        "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper1.jpg",
      type: "image"
    },
    {
      url:
        "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper2.jpg",
      type: "image"
    }
  ];

  const videoList = [
    {
      url:
        "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/spyuzaoqian.mp4",
      type: "video",
      controls: true,
      autoplay: true,
      showPlayBtn: true,
      title: "烬天玉藻前",
      muted: true
    },
    {
      url:
        "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/CGkaichang.mp4",
      type: "video",
      controls: true,
      autoplay: false,
      showPlayBtn: true,
      title: "CG"
    }
  ];

  return (
    <View>
      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type" />
      <ClSwiper type="card" list={fileList} circular />
      <ClSwiper type="screen" list={fileList} circular />

      <ClTitleBar title="指示点" textColor="black" type="icon" subTitle="dot" />
      <ClSwiper
        type="screen"
        list={fileList}
        circular
        dot="round"
        indicatorDots
        indicatorColor="#8799a3"
        indicatorActiveColor="#0081ff"
      />

      <ClTitleBar title="视频" textColor="black" type="icon" subTitle="dot" />
      <ClSwiper
        type="screen"
        list={videoList}
        circular
        dot="round"
        indicatorDots
        indicatorColor="#8799a3"
        indicatorActiveColor="#0081ff"
        style={{
          height: pxTransform(450)
        }}
      />
    </View>
  );
}

SwiperView.config = {
  navigationBarTitleText: "Swiper 滑动视图"
};

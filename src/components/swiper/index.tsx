import { Image, Swiper, SwiperItem, Video, View } from "@tarojs/components";
import Taro, { useState, useEffect, pxTransform } from "@tarojs/taro";
import { IProps, TList } from "../../../@types/swiper";
import { classNames, generateId, isAliPay, screenPercent } from "../utils";

import "./index.scss";

export default function ClSwiper(props: IProps) {
  const [listState, setListState] = useState(props.list || []);
  useEffect(() => {
    const list = props.list || [];
    setListState(
      list.map((item: any) => {
        item.cu_swiper_id = generateId();
        return item;
      })
    );
  }, [props.list]);
  const swiperTypeClassName = type =>
    type ? `${type}-swiper` : "screen-swiper";
  const dotClassName = type =>
    type === "round" ? `${type}-dot` : "square-dot";
  const duration = props.duration || 500;
  const interval = props.interval || 5000;
  const indicatorDots = !!props.indicatorDots;
  const indicatorColor = props.indicatorColor || "#000";
  const indicatorActiveColor = props.indicatorActiveColor || "#FFF";
  const circular = !!props.circular;
  const autoplay = autoplayData => !!autoplayData;
  const loop = loopData => !!loopData;
  const muted = mutedData => !!mutedData;
  const showPlayBtn = showPlayBtnData => !!showPlayBtnData;
  const controls = controlsData => !!controlsData;
  const title = titleData => titleData;
  const poster = posterData => posterData;
  const list = listState || [];
  const autoplaySwiper = props.autoplay;

  const [cur, setCur] = useState(0);
  const onChange = e => {
    const current = e.detail.current;
    setCur(current);
    props.onChange && props.onChange(current);
  };
  const onClick = (index: number) => {
    props.onClick && props.onClick(index);
  };
  // const onTouchMove = e => {}
  // const onTouchStart = e => {}
  // const onTouchEnd = e => {}
  const renderImg = (item: TList) => (
    <Image src={item.url || ""} mode="aspectFill" />
  );
  const renderVideo = (item: TList) => (
    <Video
      onClick={() => {
        console.log("click");
      }}
      src={item.url || ""}
      autoplay={autoplay(item.autoplay)}
      loop={loop(item.loop)}
      muted={muted(item.muted)}
      showPlayBtn={showPlayBtn(item.showPlayBtn)}
      controls={controls(item.controls)}
      objectFit="cover"
      title={title(item.title)}
      poster={poster(item.poster)}
    />
  );
  const screenComponent = (
    <Swiper
      className={classNames(
        `${dotClassName(props.dot)} ${swiperTypeClassName(props.type)}`,
        props.className
      )}
      style={Object.assign({}, props.style)}
      circular={circular}
      indicatorDots={indicatorDots}
      indicatorColor={indicatorColor}
      indicatorActiveColor={indicatorActiveColor}
      interval={interval}
      duration={duration}
      onChange={onChange}
      autoplay={autoplaySwiper}
    >
      {list.map((item: any, index: number) => (
        <SwiperItem
          key={index}
          onClick={() => {
            onClick(index);
          }}
        >
          {item.type !== "video" ? renderImg(item) : ""}
          {item.type === "video" ? renderVideo(item) : ""}
        </SwiperItem>
      ))}
    </Swiper>
  );
  const cardComponent = (
    <Swiper
      className={classNames(
        `${dotClassName(props.dot)} ${swiperTypeClassName(props.type)}`,
        props.className
      )}
      style={Object.assign({}, props.style)}
      circular={circular}
      indicatorDots={indicatorDots}
      indicatorColor={indicatorColor}
      indicatorActiveColor={indicatorActiveColor}
      interval={interval}
      duration={duration}
      onChange={onChange}
      autoplay={autoplaySwiper}
      nextMargin={pxTransform(isAliPay ? 70 * screenPercent : 70)}
      previousMargin={pxTransform(isAliPay ? 70 * screenPercent : 70)}
    >
      {list.map((item: any, index: number) => (
        <SwiperItem
          key={index}
          className={`${cur === index ? "cur" : ""}`}
          onClick={() => {
            onClick(index);
          }}
        >
          <View className="swiper-item">
            {item.type === "image" ? renderImg(item) : ""}
            {item.type === "video" ? renderVideo(item) : ""}
          </View>
        </SwiperItem>
      ))}
    </Swiper>
  );
  // const towerComponent = (
  //   <View className={swiperTypeClassName(props.type)} onTouchMove={onTouchMove} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
  //     <View className={`tower-item ${}`}></View>
  //   </View>
  // );
  return props.type === "card" ? cardComponent : screenComponent;
}

ClSwiper.options = {
  addGlobalClass: true
};

ClSwiper.defaultProps = {
  autoplay: false,
  type: "screen",
  list: [],
  dot: "square",
  duration: 500,
  onClick: () => {},
  indicatorDots: false,
  indicatorColor: "#000",
  indicatorActiveColor: "#FFF",
  interval: 5000,
  circular: false,
  onChange: () => {}
} as IProps;

import { Image, Swiper, SwiperItem, Video, View } from '@tarojs/components';
import Taro, { useState } from '@tarojs/taro';
import { IProps, TList } from './types';



export default function ClSwiper(props: IProps) {
  const swiperTypeClassName = type =>
    type ? `${type}-swiper` : 'screen-swiper';
  const dotClassName = type =>
    type === 'round' ? `${type}-dot` : 'square-dot';
  const duration = props.duration || 500;
  const interval = props.interval || 5000;
  const indicatorDots = !!props.indicatorDots;
  const indicatorColor = props.indicatorColor || '#000';
  const indicatorActiveColor = props.indicatorActiveColor || '#FFF';
  const circular = !!props.circular;
  const autoplay = autoplay => !!autoplay;
  const loop = loop => !!loop;
  const muted = muted => !!muted;
  const showPlayBtn = showPlayBtn => !!showPlayBtn;
  const controls = controls => !!controls;
  const title = title => title;
  const poster = poster => poster;
  const list = props.list || [];

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
    <Image src={item.url || ''} mode='aspectFill' />
  );
  const renderVideo = (item: TList) => (
    <Video
      src={item.url || ''}
      autoplay={autoplay(item.autoplay)}
      loop={loop(item.loop)}
      muted={muted(item.muted)}
      showPlayBtn={showPlayBtn(item.showPlayBtn)}
      controls={controls(item.controls)}
      objectFit='cover'
      title={title(item.title)}
      poster={poster(item.poster)}
    />
  );
  const screenComponent = (
    <Swiper
      className={`${dotClassName(props.dot)} ${swiperTypeClassName(
        props.type
      )}`}
      circular={circular}
      indicatorDots={indicatorDots}
      indicatorColor={indicatorColor}
      indicatorActiveColor={indicatorActiveColor}
      interval={interval}
      duration={duration}
      onChange={onChange}
    >
      {list.map((item, index) => (
        <SwiperItem
          key={index + Math.random()}
          onClick={() => {
            onClick(index);
          }}
        >
          {item.type === 'image' ? renderImg(item) : ''}
          {item.type === 'video' ? renderVideo(item) : ''}
        </SwiperItem>
      ))}
    </Swiper>
  );
  const cardComponent = (
    <Swiper
      className={`${dotClassName(props.dot)} ${swiperTypeClassName(
        props.type
      )}`}
      circular={circular}
      indicatorDots={indicatorDots}
      indicatorColor={indicatorColor}
      indicatorActiveColor={indicatorActiveColor}
      interval={interval}
      duration={duration}
      onChange={onChange}
    >
      {list.map((item, index) => (
        <SwiperItem
          key={index + Math.random()}
          className={`${cur === index ? 'cur' : ''}`}
          onClick={() => {
            onClick(index);
          }}
        >
          <View className='swiper-item'>
            {item.type === 'image' ? renderImg(item) : ''}
            {item.type === 'video' ? renderVideo(item) : ''}
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
  return props.type === 'card' ? cardComponent : screenComponent;
}

ClSwiper.options = {
  addGlobalClass: true
};

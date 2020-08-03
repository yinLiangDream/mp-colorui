import { Image, Swiper, SwiperItem, Video, View } from '@tarojs/components';
import React, { useState, useEffect } from 'react';
import { pxTransform } from '@tarojs/taro';
import { classNames, generateId, isAliPay, screenPercent } from '../../lib';
import './index.scss';

export default function ClSwiper(props) {
    const [listState, setListState] = useState(props.list || []);
    useEffect(() => {
        const list = props.list || [];
        setListState(list.map((item) => {
            item.cu_swiper_id = generateId();
            return item;
        }));
    }, [props.list]);
    const swiperTypeClassName = type => type ? `${type}-swiper` : 'screen-swiper';
    const dotClassName = type => (type === 'round' ? `${type}-dot` : 'square-dot');
    const duration = props.duration || 500;
    const interval = props.interval || 5000;
    const indicatorDots = !!props.indicatorDots;
    const indicatorColor = props.indicatorColor || '#000';
    const indicatorActiveColor = props.indicatorActiveColor || '#FFF';
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
    const onClick = (index) => {
        props.onClick && props.onClick(index);
    };
    // const onTouchMove = e => {}
    // const onTouchStart = e => {}
    // const onTouchEnd = e => {}
    const renderImg = (item) => (React.createElement(Image, { src: item.url || '', mode: 'aspectFill' }));
    const renderVideo = (item) => (React.createElement(Video, { src: item.url || '', autoplay: autoplay(item.autoplay), loop: loop(item.loop), muted: muted(item.muted), showPlayBtn: showPlayBtn(item.showPlayBtn), controls: controls(item.controls), objectFit: 'cover', title: title(item.title), poster: poster(item.poster) }));
    const screenComponent = (React.createElement(Swiper, { className: classNames(`${dotClassName(props.dot)} ${swiperTypeClassName(props.type)}`, props.className), style: Object.assign({}, props.style), circular: circular, indicatorDots: indicatorDots, indicatorColor: indicatorColor, indicatorActiveColor: indicatorActiveColor, interval: interval, duration: duration, onChange: onChange, autoplay: autoplaySwiper }, list.map((item, index) => (React.createElement(SwiperItem, { key: 'key-' + index, onClick: () => {
            onClick(index);
        } },
        item.type !== 'video' ? renderImg(item) : '',
        item.type === 'video' ? renderVideo(item) : '')))));
    const cardComponent = (React.createElement(Swiper, { className: classNames(`${dotClassName(props.dot)} ${swiperTypeClassName(props.type)}`, props.className), style: Object.assign({}, props.style), circular: circular, indicatorDots: indicatorDots, indicatorColor: indicatorColor, indicatorActiveColor: indicatorActiveColor, interval: interval, duration: duration, onChange: onChange, autoplay: autoplaySwiper, nextMargin: pxTransform(isAliPay ? 70 * screenPercent : 70), previousMargin: pxTransform(isAliPay ? 70 * screenPercent : 70) }, list.map((item, index) => (React.createElement(SwiperItem, { key: 'key-' + index, className: `${cur === index ? 'cur' : ''}`, onClick: () => {
            onClick(index);
        } },
        React.createElement(View, { className: 'swiper-item' },
            item.type === 'image' ? renderImg(item) : '',
            item.type === 'video' ? renderVideo(item) : ''))))));
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
ClSwiper.defaultProps = {
    autoplay: false,
    type: 'screen',
    list: [],
    dot: 'square',
    duration: 500,
    onClick: () => { },
    indicatorDots: false,
    indicatorColor: '#000',
    indicatorActiveColor: '#FFF',
    interval: 5000,
    circular: false,
    onChange: () => { }
};
//# sourceMappingURL=index.js.map
import { Image, Text, View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import { pxTransform } from '@tarojs/taro';
import { BG_COLOR_LIST } from '../../lib/model';
import { classNames } from '../../lib';
import ClText from '../../components/text';

export default function ClLoading(props) {
    const [loadProgress, setLoadProgress] = useState(0);
    const loadProgressFn = () => {
        setLoadProgress(100);
    };
    const contentViewStyle = { position: props.content ? 'relative' : 'inherit' };
    const contentLoadingStyle = {
        display: props.show ? 'flex' : 'none',
        flexDirection: 'column',
        position: props.content ? 'absolute' : 'fixed',
        width: props.content ? '100%' : '100vw',
        height: props.content ? '100%' : '100vh'
    };
    useEffect(() => {
        if (props.show) {
            loadProgressFn();
        }
    }, []);
    useEffect(() => {
        if (props.show)
            loadProgressFn();
        else {
            setLoadProgress(0);
        }
    }, [props.show]);
    const bgColorClassName = () => props.bgColor ? BG_COLOR_LIST[props.bgColor] : 'bg-blue';
    const commonComponent = (React.createElement(View, { style: Object.assign(contentViewStyle) },
        props.children,
        React.createElement(View, { className: 'cu-load load-image', style: Object.assign(contentLoadingStyle), onClick: e => {
                e.stopPropagation();
            } },
            React.createElement(View, { style: {
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear',
                    animationDuration: '0.5s',
                    animationName: 'rotate-0-360'
                } },
                React.createElement(Text, { className: classNames([
                        'cuIcon-loading1',
                        'text-white',
                        'text-xxl'
                    ]), style: {
                        fontSize: pxTransform(44)
                    } })),
            React.createElement(ClText, { textColor: 'white', text: props.commonText, size: 'xsmall' }))));
    const modalComponent = (React.createElement(View, { className: 'cu-load load-modal', onClick: e => {
            e.stopPropagation();
        } },
        React.createElement(Image, { src: props.imgUrl || '', mode: 'aspectFit' }),
        React.createElement(Text, { className: 'text-gray' }, props.modalText)));
    const imageComponent = (React.createElement(View, { style: Object.assign(contentViewStyle) },
        React.createElement(View, { className: 'cu-load load-image', style: Object.assign(contentLoadingStyle) },
            React.createElement(Image, { src: props.imgUrl || '', mode: 'widthFix', style: {
                    width: props.imgWidth ? pxTransform(props.imgWidth) : ''
                } })),
        props.children));
    const lineComponent = (React.createElement(View, { className: `cu-load ${props.loadingError ? 'bg-red erro' : bgColorClassName()} ${props.noMore || props.loadingError ? 'over' : 'loading'}` }));
    const barComponent = (React.createElement(View, { style: Object.assign(contentViewStyle) },
        React.createElement(View, { className: classNames(`load-progress ${props.show ? 'show' : 'hide'}`, props.className), style: Object.assign({ top: '0' }, contentLoadingStyle, props.style) },
            React.createElement(View, { className: `load-progress-bar ${bgColorClassName()}`, style: {
                    transform: `translate3d(-${100 - loadProgress}%, 0px, 0px)`,
                    transition: 'all 5s ease 0s'
                } }),
            React.createElement(View, { className: `load-progress-spinner text-${props.bgColor}` })),
        props.children));
    return props.content || props.show ? (props.type === 'bar' ? (barComponent) : props.type === 'line' ? (lineComponent) : props.type === 'modal' ? (modalComponent) : props.type === 'image' ? (imageComponent) : (commonComponent)) : (React.createElement(View, null));
}
ClLoading.options = {
    addGlobalClass: true
};
ClLoading.defaultProps = {
    type: 'bar',
    bgColor: 'blue',
    modalText: '加载中...',
    loadingError: false,
    noMore: false,
    show: false
};
//# sourceMappingURL=index.js.map
import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { classNames, screenPercent } from '../../lib';
import ClText from '../text';
import ClTip_H5 from './h5';
import './index.scss';
import { BG_COLOR_LIST } from '../../lib/model';

export default function ClTip(props) {
    const [showTip, setShowTip] = useState(props.show);
    const [distance, setDistance] = useState({
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        transform: '',
        arrowTransform: ''
    });
    const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;
    const resver2Zero = (params) => {
        distance.top = 'auto';
        distance.left = 'auto';
        distance.right = 'auto';
        distance.bottom = 'auto';
        params.forEach(item => {
            distance[item.direction] = `${item.long}px`;
        });
        return distance;
    };
    useEffect(() => {
        setShowTip(props.show);
    }, [props.show]);
    useEffect(() => {
        function reRender() {
            if (Taro.ENV_TYPE.WEB === Taro.getEnv())
                return;
            const query = Taro.createSelectorQuery().in(this.$scope);
            new Promise(resolve => {
                query
                    .select(`#content`)
                    .boundingClientRect()
                    .exec(res => {
                    resolve(res[0]);
                });
            }).then((res) => {
                query
                    .select('#message')
                    .boundingClientRect()
                    .exec(data => {
                    const messageData = data[0];
                    const contentWidth = props.width || 100;
                    const screenWidth = 750 * screenPercent;
                    let customDirection = [];
                    const systemInfo = Taro.getSystemInfoSync();
                    const bottomDistance = systemInfo.windowHeight - res.top - res.height;
                    const leftDistance = screenWidth - res.left - res.width;
                    const sqrt = Math.sqrt(Math.pow(20 * screenPercent, 2) * 2) / 2;
                    if (props.direction === 'top') {
                        if (res.top < bottomDistance && res.top < messageData.height)
                            props.direction = 'bottom';
                        customDirection = [{ direction: 'bottom', long: 0 }];
                        console.log(res);
                        let translateX = (res.width - contentWidth) / 2;
                        if (res.left < res.right && res.left < screenWidth / 2) {
                            if (Math.abs(translateX) > res.left)
                                translateX = -res.left;
                            distance.transform = `translateX(${translateX}px) translateY(-${res.height + 10}px)`;
                            distance.arrowTransform = `translateX(${Math.abs(translateX) + res.width / 2 - sqrt}px) rotate(45deg) translateY(0)`;
                        }
                        else {
                            const maxRight = screenWidth - res.left;
                            if (maxRight < contentWidth)
                                translateX = contentWidth - maxRight;
                            distance.transform = `translateX(-${translateX}px) translateY(-${res.height + 10}px)`;
                            distance.arrowTransform = `translateX(${Math.abs(translateX) + res.width / 2 - sqrt}px) rotate(45deg) translateY(30%)`;
                        }
                    }
                    else if (props.direction === 'bottom') {
                        if (res.top > bottomDistance &&
                            bottomDistance < messageData.height)
                            props.direction = 'bottom';
                        customDirection = [{ direction: 'left', long: 0 }];
                        let translateX = (res.width - contentWidth) / 2;
                        if (res.left < res.right && res.left < screenWidth / 2) {
                            if (Math.abs(translateX) > res.left)
                                translateX = -res.left;
                            distance.transform = `translateX(${translateX}px) translateY(${res.height + 10}px)`;
                            distance.arrowTransform = `translateX(${Math.abs(translateX) + res.width / 2 - sqrt}px) rotate(45deg) translateY(0)`;
                        }
                        else {
                            const maxRight = screenWidth - res.left;
                            if (maxRight < contentWidth)
                                translateX = contentWidth - maxRight;
                            distance.transform = `translateX(-${translateX}px) translateY(${res.height + 10}px)`;
                            distance.arrowTransform = `translateX(${Math.abs(translateX) + res.width / 2 - sqrt}px) rotate(45deg) translateY(-30%)`;
                        }
                    }
                    else if (props.direction === `left`) {
                        const diffHeight = messageData.height - res.height;
                        if (res.left < contentWidth + 10 && leftDistance > res.left)
                            props.direction = 'right';
                        customDirection = [
                            {
                                direction: 'right',
                                long: 0
                            }
                        ];
                        let moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
                        let moveBottom = res.top - (messageData.height / 2 - res.height / 2);
                        if (moveTop > 0)
                            moveTop = 0;
                        if (moveBottom > 0)
                            moveBottom = 0;
                        distance.arrowTransform = `translateY(${messageData.height / 2 - moveTop + moveBottom - sqrt}px) translateX(30%) rotate(45deg)`;
                        distance.transform = `translateX(${-res.width - 10}px) translateY(${-diffHeight / 2 + moveTop - moveBottom}px)`;
                    }
                    else if (props.direction === 'right') {
                        if (leftDistance - 10 < contentWidth && leftDistance < res.left)
                            props.direction = 'left';
                        const diffHeight = messageData.height - res.height;
                        if (res.left < contentWidth + 10)
                            props.direction = 'right';
                        customDirection = [
                            {
                                direction: 'left',
                                long: 0
                            }
                        ];
                        let moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
                        let moveBottom = res.top - (messageData.height / 2 - res.height / 2);
                        if (moveTop > 0)
                            moveTop = 0;
                        if (moveBottom > 0)
                            moveBottom = 0;
                        distance.arrowTransform = `translateY(${messageData.height / 2 - moveTop + moveBottom - sqrt}px) translateX(-30%) rotate(45deg)`;
                        distance.transform = `translateX(${res.width + 10}px) translateY(${-diffHeight / 2 + moveTop - moveBottom}px)`;
                    }
                    Object.assign(distance, resver2Zero(customDirection));
                    setDistance(distance);
                });
            });
        }
        reRender.call(this);
    }, [props.width, props.direction, showTip]);
    const ClTip = (React.createElement(View, { id: 'content', onClick: () => {
            if (props.mode === 'click') {
                const show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, onTouchStart: () => {
            if (props.mode === 'touch') {
                const show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, onTouchEnd: () => {
            if (props.mode === 'touch') {
                const show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, className: `cl-tip ${showTip ? 'cl-tip__showZindex' : ''}`, style: { position: 'relative', display: 'inline-block' } },
        React.createElement(View, { id: 'message', className: `cl-tip__content  shadow ${showTip ? 'show' : 'hide'}`, style: {
                width: `${showTip ? props.width : 0}px`,
                left: distance.left,
                right: distance.right,
                top: distance.top,
                bottom: distance.bottom,
                transform: distance.transform
            } },
            React.createElement(View, { className: `cl-tip__arrow ${props.direction} ${BG_COLOR_LIST[props.bgColor || 'white']} ${showTip ? 'showArrow' : 'hideArrow'}`, style: {
                    left: distance.left,
                    right: distance.right,
                    top: distance.top,
                    bottom: distance.bottom,
                    transform: distance.arrowTransform
                } }),
            React.createElement(View, { className: `cl-tip__message ${BG_COLOR_LIST[props.bgColor || 'white']}` },
                React.createElement(View, { style: { width: `${props.width}px`, padding: '10px' } },
                    React.createElement(ClText, { text: props.message }),
                    React.createElement(View, { onClick: (e) => {
                            e.stopPropagation();
                        } }, this.props.renderMessage)))),
        this.props.children));
    return (React.createElement(View, { className: classNames(props.className), style: Object.assign({}, props.style) }, isH5 ? React.createElement(ClTip_H5, Object.assign({}, props)) : ClTip));
}
ClTip.defaultProps = {
    show: false,
    direction: 'bottom',
    bgColor: 'white',
    mode: 'touch',
    width: 150
};
ClTip.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
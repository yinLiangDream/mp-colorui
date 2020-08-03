import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { screenPercent } from '../../../lib';
import ClText from '../../text';
import './index.scss';
import { BG_COLOR_LIST } from '../../../lib/model';

export default function ClTip_H5(props) {
    const [showTip, setShowTip] = useState(props.show);
    const [distance, setDistance] = useState({
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        transform: '',
        arrowTransform: ''
    });
    const [id] = useState(() => `cl-tip-content-${Math.random().toString().replace('.', '')}`);
    const [idMessage] = useState(() => `cl-tip-message-${Math.random().toString().replace('.', '')}`);
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
        const idContentQuery = document.querySelector(`#${id}`);
        const idMessageQuery = document.querySelector(`#${idMessage}`);
        const systemInfo = Taro.getSystemInfoSync();
        const res = {
            width: idContentQuery.clientWidth,
            height: idContentQuery.clientHeight,
            left: idContentQuery.offsetLeft,
            top: idContentQuery.offsetTop,
            bottom: systemInfo.windowHeight -
                idContentQuery.clientHeight -
                idContentQuery.offsetTop,
            right: systemInfo.windowWidth -
                idContentQuery.clientWidth -
                idContentQuery.offsetLeft
        };
        const messageData = {
            width: idMessageQuery.clientWidth,
            height: idMessageQuery.clientHeight
        };
        const contentWidth = props.width || 100;
        const screenWidth = 750 * screenPercent;
        let customDirection = [];
        const bottomDistance = res.bottom;
        const leftDistance = res.right;
        const sqrt = Math.sqrt(Math.pow(20 * screenPercent, 2) * 2) / 2;
        if (props.direction === 'top') {
            if (res.top < bottomDistance && res.top < messageData.height)
                props.direction = 'bottom';
            customDirection = [{ direction: 'bottom', long: 0 }];
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
            console.log(res, messageData);
            if (res.top > bottomDistance && bottomDistance < messageData.height)
                props.direction = 'bottom';
            customDirection = [{ direction: 'left', long: 0 }];
            let translateX = (res.width - contentWidth) / 2;
            if (res.left < res.right && res.left < screenWidth / 2) {
                if (Math.abs(translateX) > res.left)
                    translateX = -res.left;
                distance.transform = `translateX(${translateX}px) translateY(${res.height + 10}px)`;
                distance.arrowTransform = `translateX(${Math.abs(translateX) + res.width / 2 - 10}px) rotate(45deg) translateY(0)`;
            }
            else {
                const maxRight = screenWidth - res.left;
                if (maxRight < contentWidth)
                    translateX = contentWidth - maxRight;
                distance.transform = `translateX(-${translateX}px) translateY(${res.height + 10}px)`;
                distance.arrowTransform = `translateX(${Math.abs(translateX) + res.width / 2 - 10}px) rotate(45deg) translateY(-30%)`;
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
    }, [props.width, props.direction, showTip]);
    return (React.createElement(View, { id: id, onClick: () => {
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
        React.createElement(View, { id: idMessage, className: `cl-tip__content  shadow ${showTip ? 'show' : 'hide'} ${showTip ? 'true' : 'false'}`, style: {
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
}
ClTip_H5.defaultProps = {
    show: false,
    direction: 'bottom',
    bgColor: 'white',
    mode: 'touch',
    width: 150
};
ClTip_H5.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
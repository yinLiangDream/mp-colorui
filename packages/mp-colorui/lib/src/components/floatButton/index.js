import React, { useState, useEffect } from 'react';
import { pxTransform } from '@tarojs/taro';
import { View } from '@tarojs/components';
import utils, { classNames, generateId } from '../../lib/index';
import ClIcon from '../icon';
import './index.scss';
import ClAnimation from '../animation';
import ClLayout from '../layout';

let tempPageX = 0;
let tempPageY = 0;
let pageX = 25;
let pageY = 100;
export default function ClFloatButton(props) {
    const [show, setShow] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [animation, setAnimation] = useState({});
    const [actionListState, setActionListState] = useState(props.actionList);
    const { move, open, icon, bgColor, iconColor, direction, shadow, shape, size, actionList, onClick, onActionClick, closeWithShadow } = props;
    useEffect(() => {
        const list = actionList || [];
        setActionListState(list.map((item) => {
            item.cu_float_button_id = generateId();
            return item;
        }));
    }, [props.actionList]);
    const dealSize = utils.model.SIZE[size || 'normal'];
    const dealBgColor = utils.model.BG_COLOR_LIST[bgColor || 'blue'];
    const dealShadow = shadow ? 'shadow' : '';
    const dealIconColor = iconColor || '';
    let dealActionList = actionListState || [];
    const len = dealActionList.length;
    const type = () => {
        if (direction === 'vertical') {
            return show ? 'slide-bottom' : 'slide-top';
        }
        else {
            return show ? 'slide-right' : 'slide-left';
        }
    };
    const actionListComponent = dealActionList.map((item, index) => (React.createElement(View, { key: item.cu_float_button_id, style: { position: show ? 'relative' : 'absolute' } },
        React.createElement(ClAnimation, { type: type(), delay: show ? (len - index - 1) / 10 : 0, duration: 0.2 },
            React.createElement(ClLayout, { padding: 'small', paddingDirection: direction === 'vertical' ? 'bottom' : 'right' },
                React.createElement(View, { className: `cu-avatar ${shape} ${dealSize} ${item.bgColor
                        ? utils.model.BG_COLOR_LIST[item.bgColor]
                        : dealBgColor} ${dealShadow}`, onClick: e => {
                        e.stopPropagation();
                        clickButton();
                        onActionClick && onActionClick(index);
                    } },
                    React.createElement(View, { className: `${item.iconColor || dealIconColor}` },
                        React.createElement(ClIcon, { iconName: item.icon, size: size }))))))));
    const directionClass = direction === 'vertical' ? '' : 'flex';
    const clickButton = () => {
        open && setShow(!show);
        open && setRotate(rotate ? 0 : 45);
    };
    const position = props.position || {
        top: 'auto',
        right: 50,
        bottom: 200,
        left: 'auto'
    };
    return (React.createElement(View, { className: classNames(`${show ? 'float_button__mask' : ''}`, props.className), style: Object.assign({}, props.style), onClick: () => {
            closeWithShadow && clickButton();
        } },
        React.createElement(View, { className: 'float_button__fixed', style: {
                top: position.top && position.top !== 'auto'
                    ? pxTransform(position.top)
                    : 'auto',
                right: position.right && position.right !== 'auto'
                    ? pxTransform(position.right)
                    : 'auto',
                bottom: position.bottom && position.bottom !== 'auto'
                    ? pxTransform(position.bottom)
                    : 'auto',
                left: position.left && position.left !== 'auto'
                    ? pxTransform(position.left)
                    : 'auto'
            }, animation: animation, onTouchStart: e => {
                if (!move)
                    return;
                const touchs = e.touches[0];
                tempPageX = touchs.pageX;
                tempPageY = touchs.pageY;
            }, onTouchMove: e => {
                e.stopPropagation();
                if (!move)
                    return;
                const touchs = e.touches[0];
                let newAnimation = Taro.createAnimation(animation);
                pageX = pageX - (touchs.pageX - tempPageX);
                pageY = pageY - (touchs.pageY - tempPageY);
                const length = Math.sqrt(Math.pow(pageX, 2) + Math.pow(pageY, 2));
                newAnimation.right(pageX);
                newAnimation.bottom(pageY).step({
                    duration: (13 * length) / 100
                });
                setAnimation(newAnimation.export());
                tempPageX = touchs.pageX;
                tempPageY = touchs.pageY;
            }, onTouchCancel: e => {
                e.stopPropagation();
            } },
            React.createElement(View, { className: `float_button__content ${directionClass}` },
                actionListComponent,
                React.createElement(View, { className: `cu-avatar ${shape} ${dealSize} ${dealBgColor} ${dealShadow}`, onClick: e => {
                        e.stopPropagation();
                        clickButton();
                        onClick && onClick();
                    } },
                    React.createElement(View, { className: `${dealIconColor}`, style: {
                            transform: `rotate(${rotate}deg)`,
                            transition: 'all 0.15s linear'
                        } },
                        React.createElement(ClIcon, { iconName: icon, size: size })))))));
}
ClFloatButton.options = {
    addGlobalClass: true
};
ClFloatButton.defaultProps = {
    move: false,
    open: true,
    icon: 'add',
    bgColor: 'blue',
    iconColor: undefined,
    direction: 'vertical',
    onClick: () => { },
    shadow: true,
    onActionClick: () => { },
    actionList: [],
    size: 'normal',
    shape: 'round',
    closeWithShadow: false,
    position: {
        top: 'auto',
        right: 50,
        bottom: 200,
        left: 'auto'
    }
};
//# sourceMappingURL=index.js.map
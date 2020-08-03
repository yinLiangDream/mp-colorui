import { View } from '@tarojs/components';
import React, { useState, useMemo } from 'react';
import { classNames, generateId } from '../../lib';
import { BG_COLOR_LIST } from '../../lib/model';
import ClButton from '../button';
import './index.scss';

export default function ClShopBar(props) {
    const [tabs, setTabs] = useState(props.tabs || []);
    const [buttons, setButtons] = useState(props.buttons || []);
    const onClickTab = (index) => {
        props.onClickTab && props.onClickTab(index);
    };
    const onClickButton = (index) => {
        props.onClickButton && props.onClickButton(index);
    };
    const bgColorClassName = BG_COLOR_LIST[props.bgColor || 'white'];
    useMemo(() => {
        const initTabs = props.tabs || [];
        const tabs = initTabs.map(item => (Object.assign({ id: generateId() }, item)));
        setTabs(tabs);
    }, [props.tabs]);
    useMemo(() => {
        const initButtons = props.buttons || [];
        const buttons = initButtons.map(item => (Object.assign({ id: generateId() }, item)));
        setButtons(buttons);
    }, [props.buttons]);
    const tabsComponent = tabs.map((item, index) => (React.createElement(View, { key: item.id, className: 'ClShopBar__tab' },
        React.createElement(ClButton, Object.assign({ bgColor: props.bgColor, shadow: false }, item.moreAction, { onClick: () => {
                onClickTab(index);
            } }),
            React.createElement(View, { className: 'action', style: {
                    background: 'transparent'
                } },
                React.createElement(View, { className: `${item.icon ? 'cuIcon-' + item.icon : ''}` }, item.badge !== false ? (React.createElement(View, { className: 'cu-tag badge' }, item.badge === true ? '' : item.badge)) : ('')),
                React.createElement(View, null, item.title))))));
    const buttonsComponent = buttons.map((item, index) => (React.createElement(View, { key: item.id, className: `${BG_COLOR_LIST[item.bgColor || 'red']} submit`, onClick: () => {
            onClickButton(index);
        } }, item.text)));
    return (React.createElement(View, { className: classNames(`cu-bar ${bgColorClassName} tabbar ${props.safeArea ? 'safe-area' : ''} shop ${props.border ? 'border' : ''}`, props.className), style: Object.assign(props.fix
            ? { position: 'fixed', bottom: '0', width: '100vw', zIndex: '10' }
            : {}, props.style) },
        tabsComponent,
        buttonsComponent));
}
ClShopBar.options = {
    addGlobalClass: true
};
ClShopBar.defaultProps = {
    bgColor: 'white',
    tabs: [],
    buttons: [],
    border: false,
    onClickButton: () => { },
    onClickTab: () => { },
    safeArea: true
};
//# sourceMappingURL=index.js.map
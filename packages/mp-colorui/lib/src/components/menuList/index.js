import { Image, Text, View } from '@tarojs/components';
import React from 'react';
import ClIcon from '../icon/index';
import { TEXT_COLOR_LIST } from '../../lib/model';
import { classNames } from '../../lib';
export default function ClMenuList(props) {
    const shortLineClassName = props.shortBorder ? 'sm-border' : '';
    const cardClassName = props.card ? 'card-menu' : '';
    const list = props.list || [];
    const click = (index) => {
        props.onClick && props.onClick(index);
    };
    const itemComponent = list.map((item, index) => (React.createElement(View, { key: item.title, className: classNames([
            'cu-item',
            {
                arrow: !!item.arrow,
                disabled: item.disabled
            }
        ]), onClick: () => {
            !item.disabled && click(index);
        } },
        React.createElement(View, { className: 'content flex justify-between' },
            React.createElement(View, { className: 'content flex align-center' },
                item.icon && item.icon.iconName ? (React.createElement(View, { className: 'margin-right-xs flex align-center' },
                    React.createElement(ClIcon, Object.assign({}, item.icon)))) : (''),
                item.imgUrl ? (React.createElement(Image, { src: item.imgUrl, className: 'png margin-right-xs', mode: 'aspectFit' })) : (''),
                React.createElement(Text, { className: `${TEXT_COLOR_LIST[item.titleColor || 'black']}` }, item.title)),
            React.createElement(View, { className: 'flex align-center' }, item.value)))));
    return (React.createElement(View, { className: classNames(`cu-list menu ${shortLineClassName} ${cardClassName}`, props.className), style: Object.assign({}, props.style) }, itemComponent));
}
ClMenuList.defaultProps = {
    shortBorder: false,
    card: false,
    list: []
};
ClMenuList.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
import React from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../../lib/model';
import ClFlex from '../flex';
import { classNames, generateId } from '../../lib';
export default function ClTimeline(props) {
    const times = props.times || [];
    const iconColorClassName = color => (color ? TEXT_COLOR_LIST[color] : '');
    const iconClassName = icon => (icon ? `cuIcon-${icon}` : '');
    const bgColorClassName = color => (color ? BG_COLOR_LIST[color] : '');
    const onClick = (index) => {
        props.onClick && props.onClick(index);
    };
    const items = times.map((item, index) => item.node ? (React.createElement(View, { className: 'cu-time', key: generateId(), onClick: () => {
            onClick(index);
        } }, item.node)) : (React.createElement(View, { className: `cu-item ${iconColorClassName(item.iconColor)} ${iconClassName(item.icon)}`, key: generateId(), onClick: () => {
            onClick(index);
        } },
        React.createElement(View, { className: `${bgColorClassName(item.bgColor)} content` },
            React.createElement(ClFlex, { justify: 'between', align: 'end' },
                React.createElement(View, { style: { fontSize: pxTransform(36) } }, item.title),
                React.createElement(View, null, item.time)),
            item.content
                ? item.content.map((desc, index) => (React.createElement(View, { key: 'key-' + index }, desc)))
                : ''))));
    return (React.createElement(View, { className: classNames('cu-timeline', props.className), style: Object.assign({}, props.style) }, items));
}
ClTimeline.options = {
    addGlobalClass: true
};
ClTimeline.defaultProps = {
    times: [],
    onClick: () => { }
};
//# sourceMappingURL=index.js.map
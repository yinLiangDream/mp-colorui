import { View } from '@tarojs/components';
import React from 'react';
import { TEXT_COLOR_LIST, SIZE } from '../../lib/model';
import ClLayout from '../layout';
import { classNames } from '../../lib';
export default function ClDivider(props) {
    const { color, size } = props;
    const colorClassName = TEXT_COLOR_LIST[color || 'grey'];
    const sizeClassName = `text-${SIZE[size || 'normal']}`;
    return (React.createElement(View, { className: classNames(props.className), style: Object.assign({}, props.style) },
        React.createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
            React.createElement(View, { className: `${colorClassName} ${sizeClassName} cu-divider` }, props.children))));
}
ClDivider.options = {
    addGlobalClass: true
};
ClDivider.defaultProps = {
    color: 'grey',
    size: 'normal'
};
//# sourceMappingURL=index.js.map
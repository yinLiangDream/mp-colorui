import { View } from '@tarojs/components';
import React from 'react';
import { classNames } from '../../lib';
export default function ClGrid(props) {
    const colClassName = `col-${props.col}`;
    const squareClassName = props.mode === 'square' ? 'grid-square' : '';
    const gridComponent = (React.createElement(View, { className: classNames(`grid ${colClassName} ${squareClassName}`, props.className), style: Object.assign({}, props.style) }, props.children));
    return gridComponent;
}
ClGrid.options = {
    addGlobalClass: true
};
ClGrid.defaultProps = {
    col: 3,
    mode: 'normal'
};
//# sourceMappingURL=index.js.map
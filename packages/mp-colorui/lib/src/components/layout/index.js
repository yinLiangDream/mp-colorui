import { View } from '@tarojs/components';
import React from 'react';
import { classNames } from '../../lib';
import { SIZE } from '../../lib/model';
/**
 * 基础比例
 * basis-xs, basis-df, basis-lg, basis-xl
 */
export default function ClLayout(props) {
    const floatClassName = () => {
        if (props.float === 'left')
            return 'fl';
        if (props.float === 'right')
            return 'fr';
        return '';
    };
    const dealDirection = (direction) => {
        let dr;
        switch (direction) {
            case 'around': {
                dr = '';
                break;
            }
            case 'horizontal': {
                dr = '-lr';
                break;
            }
            case 'vertical': {
                dr = '-tb';
                break;
            }
            default: {
                dr = direction ? `-${direction}` : '';
            }
        }
        return dr;
    };
    const dealSize = (size) => {
        if (!size || size === 'normal')
            return '';
        else
            return `-${SIZE[size]}`;
    };
    const paddingClassName = () => {
        const paddingDirection = props.paddingDirection;
        const size = props.padding;
        return `${(size ? 'padding' : '') + dealDirection(paddingDirection) + dealSize(size)}`;
    };
    const marginClassName = () => {
        const marginDirection = props.marginDirection;
        const size = props.margin;
        return `${(size ? 'margin' : '') + dealDirection(marginDirection) + dealSize(size)}`;
    };
    const normalComponent = (React.createElement(View, { className: classNames(`${floatClassName()} ${props.padding ? paddingClassName() : ''} ${props.margin ? marginClassName() : ''}`, props.className), style: Object.assign({}, props.style) }, props.children));
    return normalComponent;
}
ClLayout.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
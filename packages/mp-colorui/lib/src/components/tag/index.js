import { View, Text } from '@tarojs/components';
import React, { Component } from 'react';
import { pxTransform } from '@tarojs/taro';
import { BG_COLOR_LIST } from '../../lib/model';
import { classNames } from '../../lib';
import ClIcon from '../icon';

export default class ClTag extends Component {
    onClick(index) {
        this.props.onClick && this.props.onClick(index);
    }
    render() {
        const shapeClassName = this.props.shape
            ? this.props.shape === 'normal'
                ? ''
                : this.props.shape
            : '';
        const colorClassName = (color) => {
            return BG_COLOR_LIST[color || 'blue'];
        };
        const plainClassName = (color) => {
            return `line-${color}`;
        };
        const sizeClassName = () => {
            if (this.props.size === 'normal')
                return '';
            else
                return 'sm';
        };
        const badgeClassName = (badge) => badge ? 'badge' : '';
        let normalComponent;
        let capsuleComponent;
        if (this.props.tags.length > 0) {
            const tag = this.props.tags[0];
            normalComponent = (React.createElement(View, { className: classNames(`cu-tag ${shapeClassName} ${tag.plain ? plainClassName(tag.color) : colorClassName(tag.color)} ${sizeClassName()} ${badgeClassName(this.props.badge)}`, this.props.className), style: Object.assign({ overflow: 'hidden' }, this.props.style) },
                tag.icon ? (React.createElement(ClIcon, { iconName: tag.icon, size: 'inherit', style: {
                        paddingRight: pxTransform(8)
                    } })) : (''),
                React.createElement(Text, { style: {
                        height: 'inherit',
                        lineHeight: pxTransform(this.props.size === 'normal' ? 48 : 40)
                    } }, tag.text)));
            this.props.tags.length > 1 &&
                (capsuleComponent = (React.createElement(View, { className: classNames(`cu-capsule ${shapeClassName}  ${sizeClassName()}`, this.props.className), style: Object.assign({ overflow: 'hidden' }, this.props.style) }, this.props.tags.map((tag, index) => (React.createElement(View, { key: tag.text, className: `cu-tag ${tag.plain
                        ? plainClassName(tag.color)
                        : colorClassName(tag.color)}`, onClick: this.onClick.bind(this, index) },
                    tag.icon ? (React.createElement(ClIcon, { iconName: tag.icon, size: 'inherit', style: {
                            paddingRight: pxTransform(8)
                        } })) : (''),
                    React.createElement(Text, { style: {
                            height: 'inherit',
                            lineHeight: pxTransform(this.props.size === 'normal' ? 48 : 40)
                        } }, tag.text)))))));
        }
        return this.props.tags.length > 1 ? capsuleComponent : normalComponent;
    }
}
ClTag.options = {
    addGlobalClass: true
};
ClTag.defaultProps = {
    shape: 'normal',
    size: 'normal',
    tags: []
};
//# sourceMappingURL=index.js.map
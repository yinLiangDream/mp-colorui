import React, { Component } from 'react';
import { Text, View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
import { classNames } from '../../lib';
import { BG_COLOR_LIST } from '../../lib/model';

export default class ClTitleBar extends Component {
    render() {
        const textColorClassName = this.props.textColor
            ? `text-${this.props.textColor}`
            : ``;
        const borderColorClassName = this.props.borderColor
            ? BG_COLOR_LIST[this.props.borderColor]
            : 'bg-green';
        const bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : `bg-white`;
        const iconClassName = this.props.icon ? `cuIcon-${this.props.icon}` : ``;
        const iconColorClassName = this.props.iconColor
            ? `text-${this.props.iconColor}`
            : ``;
        const borderComponent = (React.createElement(View, { className: 'action border-title justify-between' },
            React.createElement(View, null,
                React.createElement(Text, { className: `${textColorClassName} text-bold text-xl` }, this.props.title),
                React.createElement(Text, { className: `${borderColorClassName}`, style: { width: `${pxTransform(this.props.borderLong || 20)}` } })),
            React.createElement(View, null, this.props.renderRight)));
        const subComponent = (React.createElement(View, { className: 'action sub-title justify-between' },
            React.createElement(View, null,
                React.createElement(Text, { className: `text-xl text-bold ${textColorClassName}` }, this.props.title),
                this.props.subTitle ? (React.createElement(Text, { className: `text-${this.props.subTitleColor}` }, this.props.subTitle)) : (React.createElement(Text, { className: `${borderColorClassName}` }))),
            React.createElement(View, null, this.props.renderRight)));
        const iconComponent = (React.createElement(View, { className: 'action justify-between' },
            React.createElement(View, null,
                React.createElement(Text, { className: `${iconClassName} ${iconColorClassName}` }),
                React.createElement(Text, { className: `text-xl text-bold ${textColorClassName}` }, this.props.title)),
            React.createElement(View, null, this.props.renderRight)));
        return (React.createElement(View, { className: classNames(`${bgColorClassName} cu-bar`, this.props.className), style: Object.assign({}, this.props.style) },
            this.props.type === 'border-title' ? borderComponent : '',
            this.props.type === 'sub-title' ? subComponent : '',
            this.props.type === 'icon' ? iconComponent : ''));
    }
}
ClTitleBar.options = {
    addGlobalClass: true
};
ClTitleBar.defaultProps = {
    bgColor: 'white',
    textColor: 'green',
    type: 'border-title',
    borderLong: 20,
    borderColor: 'green',
    icon: 'title',
    iconColor: 'green',
    title: '',
    subTitle: '',
    subTitleColor: 'gray'
};
//# sourceMappingURL=index.js.map
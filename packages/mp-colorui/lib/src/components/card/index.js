import React from 'react';
import { View } from '@tarojs/components';
import { BG_COLOR_LIST } from '../../lib/model';
import ClText from '../text';
import { classNames } from '../../lib';
import './index.scss';

export default function ClCard(props) {
    const typeClassName = props.type === 'full' ? 'no-card' : '';
    const colorClassName = props.bgColor
        ? BG_COLOR_LIST[props.bgColor]
        : 'bg-white';
    return (React.createElement(View, { className: classNames([`cu-card case ${typeClassName}`], props.className), style: Object.assign({}, props.style) },
        React.createElement(View, { className: classNames([
                'cu-item',
                {
                    shadow: props.shadow
                },
                colorClassName,
                {
                    cu_card_active: props.active
                }
            ]) },
            props.title && props.title.text ? (React.createElement(View, { className: 'cu_card__title-line padding' },
                React.createElement(ClText, Object.assign({}, props.title)))) : (''),
            this.props.renderTitle,
            React.createElement(View, { className: 'padding' }, props.children))));
}
ClCard.options = {
    addGlobalClass: true
};
ClCard.defaultProps = {
    type: 'card',
    bgColor: 'white',
    shadow: true,
    active: false,
    title: {}
};
//# sourceMappingURL=index.js.map
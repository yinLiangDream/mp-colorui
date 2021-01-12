import { Block, Text, View } from '@tarojs/components';
import React from 'React';
import { classNames } from '../../lib';
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../../lib/model';
export default class ClNavBar extends React.Component {
    onClickLeftIcon(index) {
        this.props.onClickLeftIcon && this.props.onClickLeftIcon(index);
    }
    onClickRightIcon(index) {
        this.props.onClickRightIcon && this.props.onClickRightIcon(index);
    }
    render() {
        const bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : 'bg-white';
        const leftComponent = this.props.leftIcon &&
            this.props.leftIcon.map((item, index) => (React.createElement(Block, { key: index },
                React.createElement(Text, { className: `${item.icon ? 'cuIcon-' + item.icon : ''} ${item.color ? TEXT_COLOR_LIST[item.color] : ''}`, onClick: this.onClickLeftIcon.bind(this, index) }),
                React.createElement(Text, { className: `${item.color ? TEXT_COLOR_LIST[item.color] : ''}`, onClick: this.onClickLeftIcon.bind(this, index) }, item.text))));
        const rightComponent = this.props.rightIcon &&
            this.props.rightIcon.map((item, index) => (React.createElement(Block, { key: index },
                React.createElement(Text, { className: `${item.icon ? 'cuIcon-' + item.icon : ''} ${item.color ? TEXT_COLOR_LIST[item.color] : ''}`, onClick: this.onClickRightIcon.bind(this, index) }))));
        return (React.createElement(View, { className: classNames(`cu-bar ${bgColorClassName}`, this.props.className), style: Object.assign({}, this.props.style) },
            React.createElement(View, { className: 'action' }, leftComponent),
            React.createElement(View, { className: 'content text-bold' }, this.props.title),
            React.createElement(View, { className: 'action' }, rightComponent)));
    }
}
ClNavBar.options = {
    addGlobalClass: true
};
ClNavBar.defaultProps = {
    title: '',
    leftIcon: [],
    rightIcon: [],
    bgColor: 'white'
};
//# sourceMappingURL=index.js.map
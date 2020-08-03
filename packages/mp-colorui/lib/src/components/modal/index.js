import { Text, View } from '@tarojs/components';
import React, { Component } from 'react';
import { BG_COLOR_LIST, SIZE, TEXT_COLOR_LIST } from '../../lib/model';
import { classNames } from '../../lib';

export default class ClModal extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            showModal: this.props.show
        };
    }
    componentWillReceiveProps(nextProps) {
        const show = nextProps.show;
        if (show !== this.state.showModal) {
            this.setState({
                showModal: show
            });
        }
    }
    render() {
        const titleBgColorClassName = this.props.titleBgColor
            ? BG_COLOR_LIST[this.props.titleBgColor]
            : '';
        const actionColor = this.props.actionColor
            ? BG_COLOR_LIST[this.props.actionColor]
            : '';
        const title = this.props.title;
        const actions = this.props.actions || [];
        const onClick = (index) => {
            this.props.onClick && this.props.onClick(index);
        };
        const actionsComponent = actions.map((item, index) => (React.createElement(View, { className: `${index > 0 ? 'solid-left' : ''} action margin-0 flex-sub`, key: 'key-' + item.text, onClick: () => {
                onClick(index);
            } },
            React.createElement(Text, { className: `${item.color ? TEXT_COLOR_LIST[item.color] : ''}` }, item.text))));
        const dealSize = (size) => {
            if (!size || size === 'normal')
                return '';
            else
                return `-${SIZE[size]}`;
        };
        return (React.createElement(View, { className: classNames(`cu-modal ${this.state.showModal ? 'show' : ''}`, this.props.className), style: Object.assign({}, this.props.style), onClick: () => {
                this.props.closeWithShadow &&
                    this.setState({
                        showModal: false
                    });
                this.props.onCancel && this.props.onCancel();
            } },
            React.createElement(View, { className: 'cu-dialog', onClick: e => {
                    e.stopPropagation();
                } },
                this.props.custom ? (this.props.renderTitle) : (React.createElement(View, { className: `cu-bar justify-end ${titleBgColorClassName}` },
                    React.createElement(View, { className: 'content' }, title),
                    this.props.close ? (React.createElement(View, { className: 'action', onClick: () => {
                            this.setState({
                                showModal: false
                            });
                            this.props.onClose && this.props.onClose();
                        } },
                        React.createElement(Text, { className: 'cuIcon-close text-black' }))) : (''))),
                React.createElement(View, { className: `padding${dealSize(this.props.padding)}` }, this.props.children),
                this.props.custom ? (this.props.renderAction) : (React.createElement(View, { className: `cu-bar ${actionColor}` }, actionsComponent)))));
    }
}
ClModal.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
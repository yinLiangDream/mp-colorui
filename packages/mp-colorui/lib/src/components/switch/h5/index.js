import { View } from '@tarojs/components';
import React, { Component } from 'react';
import { classNames } from '../../../lib';

export default class ClSwitch_h5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedSwitch: !!this.props.checked
        };
    }
    onChange(flag) {
        this.props.onChange && this.props.onChange(flag);
    }
    render() {
        const title = this.props.title;
        const color = this.props.color || 'green';
        const shapeClassName = this.props.shape !== 'radius' ? '' : 'radius';
        const type = this.props.type === 'form' ? 'form' : 'normal';
        const { checkedSwitch } = this.state;
        const switchComponent = (React.createElement(View, { className: classNames([
                'h5-switch',
                color,
                {
                    checked: checkedSwitch,
                    disabled: this.props.disabled
                },
                this.props.className
            ]), style: Object.assign({}, this.props.style), onClick: () => {
                if (!this.props.disabled) {
                    const currentCheck = !checkedSwitch;
                    this.setState({
                        checkedSwitch: currentCheck
                    });
                    this.onChange(currentCheck);
                }
            } },
            React.createElement(View, { className: `h5-switch-input sm ${shapeClassName}` })));
        const formSwitchComponent = (React.createElement(View, { className: classNames('cu-form-group', this.props.className), style: Object.assign({}, this.props.style) },
            React.createElement(View, { className: 'title' }, title),
            switchComponent));
        return type === 'form' ? formSwitchComponent : switchComponent;
    }
}
ClSwitch_h5.options = {
    addGlobalClass: true
};
ClSwitch_h5.defaultProps = {
    title: '',
    color: 'green',
    shape: 'normal',
    type: 'normal',
    checked: false,
    onChange: () => { }
};
//# sourceMappingURL=index.js.map
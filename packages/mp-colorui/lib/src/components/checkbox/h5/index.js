import { View, Text } from '@tarojs/components';
import React, { Component } from 'react';
import { pxTransform } from '@tarojs/taro';
import { classNames } from '../../../lib';

class ClCheckboxH5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.checkboxGroup !== this.props.checkboxGroup) {
            const currentCheckBox = this.props.checkboxGroup || [];
            this.setState({
                list: currentCheckBox.map(checkbox => {
                    const hasExit = this.state.list.find(item => item.key === checkbox.key);
                    return hasExit ? Object.assign(hasExit, checkbox) : checkbox;
                })
            });
        }
    }
    componentDidMount() {
        this.setState({
            list: this.props.checkboxGroup || []
        });
    }
    change() {
        const arr = this.state.list
            .filter(item => item.checked)
            .map(item => item.value || '');
        this.props.onChange && this.props.onChange(arr);
    }
    render() {
        const colorClassName = this.props.color || 'green';
        const type = this.props.type === 'form' ? 'form' : '';
        const directionClassName = this.props.direction === 'horizontal' ? 'flex' : '';
        const title = this.props.title;
        const checkboxComponent = this.state.list.map(item => (React.createElement(View, { className: 'padding-xs', key: item.value },
            item.key ? (React.createElement(Text, { className: 'padding-right-sm', style: {
                    lineHeight: `${pxTransform(46)}`,
                    display: 'inline-block',
                    verticalAlign: 'text-bottom'
                } }, item.key)) : (''),
            React.createElement(View, { className: classNames([
                    'h5-checkbox-input',
                    {
                        round: this.props.shape,
                        checked: item.checked,
                        disabled: item.disabled,
                        more: this.props.more
                    }
                ]), onClick: () => {
                    if (!item.disabled) {
                        const checkItem = this.state.list &&
                            this.state.list.find(has => has.value === item.value);
                        if (checkItem)
                            checkItem.checked = !item.checked;
                        this.setState({
                            list: [...this.state.list]
                        });
                        this.change();
                    }
                } }))));
        const formComponent = (React.createElement(View, { className: 'cu-form-group' },
            React.createElement(View, { className: 'title' }, title),
            React.createElement(View, { className: directionClassName }, checkboxComponent)));
        return (React.createElement(View, { className: `h5-checkbox ${colorClassName}` }, type === 'form' ? formComponent : checkboxComponent));
    }
}
ClCheckboxH5.options = {
    addGlobalClass: true
};
ClCheckboxH5.defaultProps = {
    color: 'green',
    type: 'normal',
    shape: 'normal',
    direction: 'vertical',
    checkboxGroup: [],
    title: ''
};
export default ClCheckboxH5;
//# sourceMappingURL=index.js.map
import React, { Component } from 'react';
import { PickerView, PickerViewColumn, View } from '@tarojs/components';
import { classNames } from '../../../../lib';
import ClDrawer from '../../../../components/drawer';
import ClLayout from '../../../../components/layout';
import ClFlex from '../../../../components/flex';
import ClText from '../../../../components/text';
class AlipayMutiSelect extends Component {
    constructor(props) {
        super(props);
    }
    updateData() {
        const { multiSelector } = this.props;
        const range = (multiSelector && multiSelector.range) || [];
        const rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        const value = (multiSelector && multiSelector.value) || [];
        if (value.length) {
            const selected = range.map((list, index) => list[value[index]]);
            this.setState({
                selectedValue: selected
                    .map(item => (typeof item === 'string' ? item : item[rangeKey]))
                    .join(',')
            });
        }
        else {
            this.setState({
                selectedValue: range
                    .map(item => item[0])
                    .map(item => (typeof item === 'string' ? item : item[rangeKey]))
                    .join(',')
            });
        }
        this.setState({
            lastSelected: value.length ? value : range.map(() => 0)
        });
    }
    componentDidMount() {
        this.updateData();
    }
    onClick() {
        this.setState({
            show: true
        });
    }
    onConfirm() {
        const { multiSelector } = this.props;
        const range = (multiSelector && multiSelector.range) || [];
        const rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        const current = range.map(item => typeof item[0] === 'string' ? item : item[rangeKey]);
        this.props.onChange && this.props.onChange(this.state.tempSelected);
        this.setState({
            show: false,
            selectedValue: this.state.tempSelected
                .map((num, index) => current[index][num])
                .join(','),
            lastSelected: this.state.tempSelected
        });
    }
    onCancel() {
        this.props.onCancel && this.props.onCancel(this.state.lastSelected);
        this.setState({
            show: false,
            tempSelected: this.state.lastSelected
        });
    }
    tempChangeValue(e) {
        const value = e.detail.value;
        this.props.onColumnChange && this.props.onColumnChange(value);
        this.setState({
            tempSelected: value
        });
    }
    render() {
        const { multiSelector } = this.props;
        const range = (multiSelector && multiSelector.range) || [];
        const rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        const value = (multiSelector && multiSelector.value) || [];
        return (React.createElement(View, { className: classNames(['cu-form-picker']), onClick: this.onClick.bind(this) },
            React.createElement(View, { className: 'picker' }, this.state.selectedValue),
            React.createElement(ClDrawer, { closeWithShadow: true, show: this.state.show, onCancel: () => {
                    this.setState({
                        show: false
                    });
                } },
                React.createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
                    React.createElement(ClLayout, { padding: 'large', paddingDirection: 'horizontal' },
                        React.createElement(ClFlex, { justify: 'between' },
                            React.createElement(View, { onClick: this.onCancel.bind(this) },
                                React.createElement(ClText, { text: '\u53D6\u6D88', textColor: 'green' })),
                            React.createElement(View, { onClick: this.onConfirm.bind(this) },
                                React.createElement(ClText, { text: '\u786E\u5B9A', textColor: 'green' }))))),
                React.createElement(PickerView, { value: value, onChange: this.tempChangeValue.bind(this) }, range.map((itemList, index) => {
                    return (React.createElement(PickerViewColumn, { key: 'key-' + index }, itemList.map((item, index) => {
                        let name = typeof item !== 'string' ? item[rangeKey] : item;
                        return React.createElement(View, { key: 'key-' + index }, name);
                    })));
                })))));
    }
}
AlipayMutiSelect.options = {
    addGlobalClass: true
};
AlipayMutiSelect.state = {
    show: false,
    selectedValue: '',
    tempSelected: [],
    lastSelected: []
};
export default AlipayMutiSelect;
//# sourceMappingURL=mutiSelector.js.map
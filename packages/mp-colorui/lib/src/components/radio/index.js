import { Radio, RadioGroup, Text, View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import H5Radio from './h5';
import ListRadio from './components/ListRadio';
import { classNames, isWeApp } from '../../lib';
export default function ClRadio(props) {
    const type = props.type || 'normal';
    const shapeClassName = () => props.shape || 'normal';
    const title = props.title || '';
    const colorClassName = () => props.color || 'green';
    const directionClassName = props.direction === 'horizontal' ? 'flex' : '';
    const list = props.radioGroup || [];
    const [checkedValue, setCheckedValue] = useState(props.checkedValue);
    useEffect(() => {
        setCheckedValue(checkedValue);
    }, [props.checkedValue]);
    const changeRadio = e => {
        props.onChange && props.onChange(e.detail.value);
    };
    const radioComponent = list.map(item => (React.createElement(View, { className: 'padding-xs', key: 'radio-' + item.value, onClick: () => {
            !props.disabled && setCheckedValue(item.value);
        } },
        React.createElement(Text, { className: 'padding-right-sm' }, item.key),
        React.createElement(Radio, { className: `${colorClassName()} ${shapeClassName()}`, checked: item.value === checkedValue, value: item.value || '', disabled: props.disabled }))));
    const formRadioComponent = (React.createElement(View, { className: 'cu-form-group' },
        React.createElement(View, { className: 'title' }, title),
        React.createElement(View, { className: directionClassName }, radioComponent)));
    const renderListComponent = () => (React.createElement(ListRadio, { onChange: value => {
            changeRadio({ detail: { value } });
        }, list: list, checkedValue: props.checkedValue, disabled: props.disabled }));
    const formOrNormalComponent = (React.createElement(RadioGroup, { onChange: changeRadio, className: `${type === 'form' ? 'block' : ''}` }, type === 'form' ? (formRadioComponent) : (React.createElement(View, { className: directionClassName }, radioComponent))));
    const weappComponent = type === 'list' ? renderListComponent() : formOrNormalComponent;
    const RadioComponent = !isWeApp ? React.createElement(H5Radio, Object.assign({}, props)) : weappComponent;
    return (React.createElement(View, { className: classNames(props.className), style: Object.assign({}, props.style) }, RadioComponent));
}
ClRadio.defaultProps = {
    type: 'normal',
    shape: 'normal',
    title: '',
    colorClassName: 'green',
    directionClassName: '',
    radioGroup: []
};
ClRadio.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
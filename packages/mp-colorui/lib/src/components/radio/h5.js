import React, { useEffect, useState } from 'react';
import { Text, View } from '@tarojs/components';
import ListRadio from './components/ListRadio';
import { classNames } from '../../lib';
export default function RadioH5(props) {
    const type = props.type || 'normal';
    const shapeClassName = props.shape || 'normal';
    const title = props.title || '';
    const colorClassName = props.color || 'green';
    const directionClassName = props.direction === 'horizontal' ? 'flex' : '';
    const list = props.radioGroup || [];
    const [activeValue, setActiveValue] = useState(props.checkedValue);
    const clickRadio = name => {
        setActiveValue(name);
    };
    useEffect(() => {
        props.onChange && props.onChange(activeValue);
    }, [activeValue]);
    const radioComponent = list.map(item => (React.createElement(View, { className: 'padding-xs', key: item.value },
        React.createElement(Text, { className: 'padding-right-sm' }, item.key),
        React.createElement(View, { onClick: () => {
                if (!props.disabled) {
                    clickRadio(item.value);
                }
            }, className: classNames([
                'h5-radio',
                colorClassName,
                shapeClassName,
                {
                    checked: activeValue === item.value,
                    disabled: props.disabled
                }
            ]) },
            React.createElement(View, { className: 'h5-radio-wrapper' },
                React.createElement(View, { className: 'h5-radio-input h5-radio-input-checked' }))))));
    const formRadioComponent = (React.createElement(View, { className: 'cu-form-group' },
        React.createElement(View, { className: 'title' }, title),
        React.createElement(View, { className: directionClassName }, radioComponent)));
    const renderListComponent = () => (React.createElement(ListRadio, { onChange: value => {
            setActiveValue(value);
        }, list: list, checkedValue: activeValue, disabled: props.disabled }));
    const formOrNormalComponent = (React.createElement(View, { className: 'h5-radio-group' }, type === 'form' ? (formRadioComponent) : (React.createElement(View, { className: directionClassName }, radioComponent))));
    const weappComponent = type === 'list' ? renderListComponent() : formOrNormalComponent;
    return React.createElement(View, null, weappComponent);
}
RadioH5.defaultProps = {
    type: 'normal',
    shape: 'normal',
    title: '',
    colorClassName: 'green',
    directionClassName: '',
    radioGroup: []
};
RadioH5.options = {
    addGlobalClass: true
};
//# sourceMappingURL=h5.js.map
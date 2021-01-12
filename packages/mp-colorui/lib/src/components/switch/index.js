import { Switch, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React from 'react';
import { classNames } from '../../lib';
import ClSwitch_h5 from './h5';
export default function ClSwitch(props) {
    const title = props.title;
    const color = props.color || 'green';
    const shapeClassName = props.shape !== 'radius' ? '' : 'radius';
    const type = props.type === 'form' ? 'form' : 'normal';
    const checked = !!props.checked;
    const hasChecked = checked ? 'checked' : '';
    const onChange = e => {
        props.onChange && props.onChange(e.detail.value);
    };
    const switchComponent = (React.createElement(Switch, { className: classNames(`${color} ${hasChecked} ${shapeClassName} sm`, props.className), style: Object.assign({}, props.style), checked: checked, onChange: onChange, disabled: props.disabled }));
    const formSwitchComponent = (React.createElement(View, { className: classNames('cu-form-group', props.className), style: Object.assign({}, props.style) },
        React.createElement(View, { className: 'title' }, title),
        switchComponent));
    return Taro.getEnv() === Taro.ENV_TYPE.WEB ? (React.createElement(ClSwitch_h5, Object.assign({}, this.props))) : type === 'form' ? (formSwitchComponent) : (switchComponent);
}
ClSwitch.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
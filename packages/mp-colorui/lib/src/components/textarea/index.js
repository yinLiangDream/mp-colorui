import React, { useState, useEffect } from 'react';
import { pxTransform } from '@tarojs/taro';
import { Textarea, View } from '@tarojs/components';
import ClFlex from '../../components/flex';
import ClText from '../../components/text';
import ClLayout from '../../components/layout';
import { classNames } from '../../lib';
import './index.scss';
import { BG_COLOR_LIST } from '../../lib/model';
export default function ClTextarea(props) {
    const { value, autoFocus, focus, placeholder, maxLength, disabled, showConfirmBar, showLengthTip, bgColor, shadow, height, overMaxForbidden, onChange, onFocus, onBlur, onConfirm, onLineChange } = props;
    const [tempValue, setTempValue] = useState('');
    const tip = (React.createElement(View, { className: 'tip' },
        React.createElement(ClLayout, { padding: 'small', paddingDirection: 'right' },
            React.createElement(ClFlex, null,
                React.createElement(ClText, { text: `${tempValue.length}`, size: 'small', textColor: maxLength && !overMaxForbidden && maxLength < tempValue.length
                        ? 'red'
                        : undefined }),
                React.createElement(View, null,
                    React.createElement(ClText, { text: `/${maxLength}`, size: 'small', textColor: maxLength && !overMaxForbidden && maxLength < tempValue.length
                            ? 'red'
                            : undefined }))))));
    useEffect(() => {
        setTempValue(value || '');
    }, [value]);
    return (React.createElement(View, { className: classNames(['cu-textarea']) },
        React.createElement(View, { className: classNames([
                'bg',
                { shadow },
                BG_COLOR_LIST[bgColor || 'white']
            ]) },
            React.createElement(Textarea, { style: {
                    height: `${height ? pxTransform(height) : pxTransform(300)}`,
                    padding: `${pxTransform(10)} ${pxTransform(14)} ${pxTransform(40)}`,
                    width: '100%',
                    border: 'none'
                }, className: classNames([BG_COLOR_LIST[bgColor || 'white']]), value: value || '', autoFocus: autoFocus, focus: focus, placeholder: placeholder, maxlength: overMaxForbidden ? maxLength : undefined, disabled: disabled, showConfirmBar: showConfirmBar, onLineChange: e => {
                    onLineChange && onLineChange(e.detail);
                }, onConfirm: e => {
                    onConfirm && onConfirm(e.detail.value);
                }, onInput: e => {
                    setTempValue(e.detail.value);
                    onChange && onChange(e.detail.value);
                }, onFocus: e => {
                    onFocus && onFocus(e.detail.value);
                }, onBlur: e => {
                    onBlur && onBlur(e.detail.value);
                } }),
            showLengthTip ? tip : '')));
}
ClTextarea.options = {
    addGlobalClass: true
};
ClTextarea.defaultProps = {
    value: '',
    autoFocus: false,
    focus: false,
    placeholder: '',
    maxLength: 0,
    disabled: false,
    showConfirmBar: false,
    showLengthTip: false,
    height: 0,
    overMaxForbidden: false,
    bgColor: 'white',
    shadow: false,
    onChange: () => { },
    onFocus: () => { },
    onBlur: () => { },
    onConfirm: () => { },
    onLineChange: () => { }
};
//# sourceMappingURL=index.js.map
import { Image, Input, View, ScrollView } from '@tarojs/components';
import React, { useState, useEffect, useMemo } from 'react';
import Taro, { pxTransform } from '@tarojs/taro';
import ClButton from '../button';
import ClIcon from '../icon/index';
import './index.scss';
import { classNames, screenPercent } from '../../lib';
import ClSearchResult from '../searchBar/searchResult/index';
import ClCard from '../card';

function ClInput(props) {
    const [focus, setFocus] = useState(false);
    const [normalType, setNormalType] = useState();
    const [tempInput, setTempInput] = useState('');
    const [initValue, setInitValue] = useState(props.value);
    const [inputId] = useState(`cl-input-${+new Date()}`);
    const [materialWidth, setMaterialWidth] = useState('0px');
    const [defaultValue, setDefaultValue] = useState(props.defaultValue);
    const [showComplete, setShowComplete] = useState(false);
    const [firstInit, setFirstInit] = useState(true);
    useMemo(() => {
        if (props.defaultValue !== '' && defaultValue === '') {
            setDefaultValue(defaultValue);
        }
    }, [props.defaultValue]);
    const isH5 = Taro.ENV_TYPE.WEB === Taro.getEnv();
    const onChange = (event) => {
        setFirstInit(false);
        let input = event.detail.value;
        setInitValue(input);
        props.autoComplete && setShowComplete(true);
        if (props.type === 'number') {
            if (Taro.ENV_TYPE.WEB === Taro.getEnv()) {
                if (!isNaN(event.data - 0)) {
                    if (event.data === null) {
                        input = tempInput.slice(0, tempInput.length - 1);
                    }
                    else {
                        input = tempInput + parseInt(`${event.data - 0}`);
                    }
                }
                else {
                    input = tempInput;
                }
                setTempInput(input);
                setTimeout(() => {
                    setInitValue(input);
                });
            }
            else {
                input = !isNaN(event.detail.value - 0) ? event.detail.value : null;
                if (input !== null) {
                    setTempInput(input);
                    setInitValue(input);
                }
                else {
                    setTimeout(() => {
                        setInitValue(tempInput);
                    });
                }
            }
        }
        else if (props.type === 'digit') {
            if (Taro.ENV_TYPE.WEB === Taro.getEnv()) {
                if (!isNaN(event.data - 0)) {
                    if (event.data === null) {
                        input = tempInput.slice(0, tempInput.length - 1);
                    }
                    else {
                        input = tempInput + parseInt(`${event.data - 0}`);
                    }
                }
                else {
                    input =
                        event.data === '.' && tempInput.indexOf('.') === -1
                            ? tempInput + event.data
                            : tempInput;
                }
                setTempInput(input);
                setTimeout(() => {
                    setInitValue(input);
                });
            }
            else {
                input = !isNaN(event.detail.value - 0) ? event.detail.value : null;
                if (input !== null) {
                    setTempInput(input);
                    setInitValue(input);
                }
                else {
                    setTimeout(() => {
                        setInitValue(tempInput);
                    });
                }
            }
        }
        else {
            setInitValue(input);
        }
        props.onChange && props.onChange(input);
    };
    const onBlur = (event) => {
        setFocus(false);
        props.onBlur && props.onBlur(event.detail.value);
    };
    const onFocus = (event) => {
        setFocus(true);
        props.onFocus && props.onFocus(event.detail.value);
    };
    const onIconClick = (event) => {
        props.onIconClick && props.onIconClick(event);
    };
    const onImageClick = (event) => {
        props.onImageClick && props.onImageClick(event);
    };
    if (props.type !== 'password') {
        if (props.type !== normalType) {
            setNormalType(props.type);
        }
    }
    const iconComponent = props.icon ? (React.createElement(View, { onClick: onIconClick },
        React.createElement(ClIcon, Object.assign({}, props.icon)))) : ('');
    const buttonComponent = props.button ? React.createElement(ClButton, Object.assign({}, props.button)) : '';
    const imageComponent = props.image ? (React.createElement(View, { onClick: onImageClick, style: {} },
        React.createElement(Image, { src: props.image || '', mode: 'aspectFit', style: {
                maxWidth: Taro.pxTransform(100),
                maxHeight: Taro.pxTransform(100)
            } }))) : ('');
    const autoCompleteComponent = props.autoComplete ? (React.createElement(View, { style: {
            position: 'absolute',
            top: pxTransform(100),
            left: pxTransform(0),
            width: `100%`,
            display: showComplete ? '' : 'none'
        } },
        React.createElement(ClCard, { shadow: false, bgColor: this.props.bgColor, type: 'full' },
            React.createElement(ScrollView, { scrollY: true, style: { maxHeight: '300px' } },
                React.createElement(ClSearchResult, { showLoading: props.completeLoading, result: props.completes
                        ? props.completes.map(str => ({
                            title: str
                        }))
                        : [], onTouchResult: index => {
                        if (props.completes) {
                            setInitValue(props.completes[index]);
                            setTempInput(props.completes[index]);
                            props.onTouchResult &&
                                props.onTouchResult(props.completes[index], index);
                        }
                        setShowComplete(false);
                    } }))))) : ('');
    let { title, placeholder, value, adjustPosition, type, maxLength, disabled, renderCustomRight, autoFocus } = props;
    let titleWidth = props.titleWidth === 'auto'
        ? {}
        : {
            width: pxTransform(props.titleWidth || 200)
        };
    useMemo(() => {
        setInitValue(value);
    }, [props.value]);
    useEffect(() => {
        if (props.pattern === 'material') {
            if (isH5) {
                const content = document.querySelector(`#${inputId}`);
                const width = content.clientWidth;
                setMaterialWidth(pxTransform(width / screenPercent));
            }
            else {
                const query = Taro.createSelectorQuery().in(this.$scope);
                const view = query.select('#cl-input');
                view.boundingClientRect().exec(res => {
                    const data = res[0];
                    setMaterialWidth(pxTransform(data.width / screenPercent));
                });
            }
        }
    }, [props.title]);
    const renderMaterialTitle = (React.createElement(View, { className: `${focus || initValue ? 'materialFocus' : 'materialBlur'}`, style: titleWidth, id: 'cl-input' }, title));
    const renderMaterialTitle_H5 = (React.createElement(View, { className: `${focus || initValue ? 'materialFocus' : 'materialBlur'}`, style: titleWidth, id: inputId }, title));
    const normalTitle = (React.createElement(View, { className: 'title', style: titleWidth }, title));
    return (React.createElement(View, { className: classNames(`cu-form-group ${focus ? 'focus' : 'blur'}`, props.className), style: Object.assign({ position: 'relative' }, props.style) },
        title && props.pattern === 'normal' ? normalTitle : '',
        title && props.pattern === 'material'
            ? isH5
                ? renderMaterialTitle_H5
                : renderMaterialTitle
            : '',
        React.createElement(View, { style: {
                position: 'relative',
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                flex: 1
            } },
            React.createElement(Input, { autoFocus: autoFocus, placeholder: placeholder, value: firstInit && defaultValue ? defaultValue : initValue, onInput: onChange, onBlur: onBlur, onFocus: onFocus, adjustPosition: adjustPosition, type: normalType, password: type === 'password', maxlength: maxLength || -1, disabled: disabled, style: {
                    textAlign: props.align === 'none' ? undefined : props.align,
                    flex: '1 0 auto',
                    paddingLeft: `${props.pattern === 'material' && !(focus || initValue)
                        ? materialWidth
                        : 0}`,
                    paddingRight: props.clear ? pxTransform(60) : ''
                } }),
            React.createElement(View, { style: {
                    position: 'absolute',
                    right: 0,
                    display: props.clear && initValue !== '' && !firstInit
                        ? 'relative'
                        : 'none'
                }, onClick: e => {
                    e.stopPropagation();
                    setInitValue('');
                } },
                React.createElement(ClIcon, { iconName: 'roundclosefill', size: 'xsmall', color: 'gray' }))),
        iconComponent,
        buttonComponent,
        imageComponent,
        renderCustomRight,
        autoCompleteComponent));
}
ClInput.options = {
    addGlobalClass: true
};
ClInput.defaultProps = {
    autoFocus: false,
    titleWidth: 'auto',
    align: 'left',
    pattern: 'normal',
    value: undefined,
    placeholder: '',
    type: 'text',
    adjustPosition: true,
    defaultValue: '',
    completeLoading: false,
    completes: [],
    autoComplete: false,
    onTouchResult: () => { }
};
export default ClInput;
//# sourceMappingURL=index.js.map
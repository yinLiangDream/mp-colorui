import { Button, Input, ScrollView, Text, View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
import React, { Component } from 'react';
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../../lib/model';
import ClCard from '../card';
import ClSearchResult from './searchResult';
import { classNames } from '../../lib';
import ClIcon from '../icon';

export default class ClSearchBar extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            showSearch: false,
            value: ''
        };
    }
    onIconClick(index) {
        this.props.onIconClick && this.props.onIconClick(index);
    }
    onSearch(e) {
        e.stopPropagation();
        this.props.onSearch && this.props.onSearch(this.state.value || '');
    }
    onFocus(e) {
        this.props.onFocus && this.props.onFocus(this.state.value || '');
        this.setState({
            showSearch: true,
            value: e.detail.value
        });
    }
    onBlur(e) {
        this.props.onBlur && this.props.onBlur(this.state.value || '');
        this.setState({
            showSearch: false,
            value: e.detail.value
        });
    }
    onInput(e) {
        this.setState({
            value: e.detail.value
        });
        this.props.onInput && this.props.onInput(e.detail.value);
    }
    static onPreventProp(e) {
        e.stopPropagation();
    }
    render() {
        const { bgColor, rightButtonColor, rightTextColor, leftIcons, shape, placeholder, clear, fix, className, style, searchType, showResult, result, showLoading, onScrollToLower, onScrollToUpper, onTouchResult } = this.props;
        const { showSearch, value } = this.state;
        const bgColorClassName = bgColor ? BG_COLOR_LIST[bgColor] : '';
        const buttonColorClassName = rightButtonColor
            ? BG_COLOR_LIST[rightButtonColor]
            : '';
        const textColorClassName = rightTextColor
            ? TEXT_COLOR_LIST[rightTextColor]
            : '';
        const leftIconComponent = leftIcons
            ? leftIcons.map((item, index) => (React.createElement(View, { key: 'key-' + index, className: `cu-avatar round cuIcon-${item}`, onClick: this.onIconClick.bind(this, index) })))
            : '';
        const searchComponent = (React.createElement(View, { className: `search-form ${shape}` },
            React.createElement(Text, { className: 'cuIcon-search' }),
            React.createElement(Input, { placeholder: placeholder, confirmType: 'search', type: 'text', onFocus: this.onFocus, onBlur: this.onBlur, focus: showSearch, adjustPosition: true, autoFocus: this.props.autoFocus, value: value, onConfirm: this.onSearch.bind(this), onInput: this.onInput.bind(this) }),
            clear && value ? (React.createElement(View, { onClick: e => {
                    const { onClear } = this.props;
                    e.stopPropagation();
                    this.setState({
                        value: ''
                    });
                    onClear && onClear();
                } },
                React.createElement(ClIcon, { iconName: 'close', size: 32, style: {
                        display: 'flex',
                        alignItems: 'center'
                    } }))) : ('')));
        const buttonComponent = (React.createElement(View, { className: 'action', onClick: ClSearchBar.onPreventProp.bind(this) },
            React.createElement(Button, { className: `cu-btn shadow-blur ${shape} ${buttonColorClassName} ${textColorClassName}`, onClick: this.onSearch.bind(this) }, "\u641C\u7D22")));
        const textComponent = (React.createElement(View, { className: 'action', onClick: ClSearchBar.onPreventProp.bind(this) },
            React.createElement(Text, { className: `${textColorClassName}`, onClick: this.onSearch.bind(this) }, "\u641C\u7D22")));
        return (React.createElement(View, { style: fix ? { position: 'fixed', top: '0', width: '100vw', zIndex: 10 } : '' },
            React.createElement(View, { className: classNames(`cu-bar ${bgColorClassName}`, className), style: Object.assign({ position: 'relative' }, style) },
                leftIconComponent,
                searchComponent,
                searchType === 'text'
                    ? textComponent
                    : searchType === 'none'
                        ? ''
                        : buttonComponent,
                showResult ? (React.createElement(View, { style: {
                        position: 'absolute',
                        width: '100%',
                        zIndex: 11,
                        top: pxTransform(100)
                    } }, (result && result.length) || showLoading ? (React.createElement(ClCard, { shadow: false, bgColor: bgColor },
                    React.createElement(ScrollView, { scrollY: true, style: { maxHeight: '300px' }, onScrollToLower: () => {
                            onScrollToLower && onScrollToLower();
                        }, onScrollToUpper: () => {
                            onScrollToUpper && onScrollToUpper();
                        } },
                        React.createElement(ClSearchResult, { result: result, showLoading: showLoading, onTouchResult: index => {
                                onTouchResult && onTouchResult(index);
                            } })))) : (''))) : (''))));
    }
}
ClSearchBar.options = {
    addGlobalClass: true
};
ClSearchBar.defaultProps = {
    shape: 'radius',
    fix: false,
    searchType: 'button',
    leftIcons: [],
    bgColor: undefined,
    rightButtonColor: 'white',
    rightTextColor: 'black',
    placeholder: '请搜索',
    showLoading: false,
    showResult: false,
    result: [],
    autoFocus: false,
    clear: false,
    onClear: () => { },
    onTouchResult: () => { },
    onScrollToUpper: () => { },
    onScrollToLower: () => { },
    onBlur: () => { },
    onFocus: () => { }
};
//# sourceMappingURL=index.js.map
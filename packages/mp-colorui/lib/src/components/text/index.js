import React from 'react';
import { View, Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
import { BG_COLOR_LIST, pxMap, TEXT_COLOR_LIST } from '../../lib/model';
import './index.scss';
import { classNames, isNumber, screenPercent } from '../../lib';

const SPECIAL_CLASS = {
    firstUpper: 'text-Abc',
    upper: 'text-ABC',
    lower: 'text-abc'
};
const LINE_SPACING = {
    small: 95 * screenPercent,
    normal: 115 * screenPercent,
    large: 155 * screenPercent
};
const FONT_SPACING = {
    small: 5,
    normal: 10,
    large: 20
};
export default function ClText(props) {
    const lineSpacing = props.lineSpacing || 'none';
    const fontSpacing = props.fontSpacing || 'none';
    const size = isNumber(props.size) ? props.size : props.size || 'normal';
    const fontSize = isNumber(size)
        ? pxTransform(size)
        : pxTransform(pxMap[size || 'normal'] * screenPercent);
    // const sizeClassName = `text-${SIZE[size === "normal" ? "df" : size]}`;
    const textColorClassName = props.textColor
        ? TEXT_COLOR_LIST[props.textColor || 'black']
        : '';
    const bgColorClassName = props.bgColor
        ? BG_COLOR_LIST[props.bgColor || 'white']
        : '';
    const cutClassName = props.cut ? 'text-cut' : '';
    const alignClassName = props.align ? `text-${props.align}` : 'text-left';
    const specialClassName = props.special ? SPECIAL_CLASS[props.special] : '';
    return (React.createElement(View, { className: classNames(`${textColorClassName} ${bgColorClassName} ${cutClassName} ${alignClassName}`, props.className), style: Object.assign({
            lineHeight: lineSpacing === 'none'
                ? 'normal'
                : pxTransform(isNumber(lineSpacing)
                    ? lineSpacing
                    : LINE_SPACING[lineSpacing]),
            letterSpacing: fontSpacing === 'none'
                ? 'normal'
                : pxTransform(isNumber(fontSpacing)
                    ? fontSpacing
                    : FONT_SPACING[fontSpacing]),
            fontWeight: props.fontWeight,
            fontSize
        }, props.style) },
        React.createElement(Text, { className: classNames([
                {
                    'cl-text__wrap': props.wrap || !cutClassName
                },
                {
                    'cl-text__nowrap': !props.wrap || cutClassName
                }
            ], `${specialClassName}`) },
            props.text,
            props.children)));
}
ClText.options = {
    addGlobalClass: true
};
ClText.defaultProps = {
    size: 'normal',
    textColor: undefined,
    bgColor: undefined,
    cut: false,
    align: 'left',
    special: undefined,
    text: '',
    lineSpacing: 'none',
    fontSpacing: 'none',
    fontWeight: 'normal',
    wrap: true
};
//# sourceMappingURL=index.js.map
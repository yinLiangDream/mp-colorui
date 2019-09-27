import { View } from '@tarojs/components';
import Taro, { Component, pxTransform } from '@tarojs/taro';
import { BG_COLOR_LIST, SIZE, TEXT_COLOR_LIST } from '../utils/model';
import { IProps } from '../../../@types/text';

import './index.scss';
import { isNumber, screenPercent } from '../utils/index';

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
}

export default function ClText(props: IProps) {
  const lineSpacing = props.lineSpacing || 'none';
  const fontSpacing = props.fontSpacing || 'none';
  const size = props.size || 'normal';
  const sizeClassName = `text-${SIZE[size === 'normal' ? 'df' : size]}`;
  const textColorClassName = props.textColor
    ? TEXT_COLOR_LIST[props.textColor || 'black']
    : '';
  const bgColorClassName = props.bgColor
    ? BG_COLOR_LIST[props.bgColor || 'white']
    : '';
  const cutClassName = props.cut ? 'text-cut' : '';
  const alignClassName = props.align ? `text-${props.align}` : 'text-left';
  const specialClassName = props.special ? SPECIAL_CLASS[props.special] : '';
  return (
    <View
      className={`${sizeClassName} ${textColorClassName} ${bgColorClassName} ${cutClassName} ${alignClassName}`}
    >
      <View
        className={`${specialClassName} ${cutClassName ? '' : 'cl-text__wrap'}`}
        style={{
          lineHeight:
            lineSpacing === 'none'
              ? 'normal'
              : pxTransform(
                  isNumber(lineSpacing) ? lineSpacing : LINE_SPACING[lineSpacing]
                ),
          letterSpacing:
            fontSpacing === 'none'
              ? 'normal'
              : pxTransform(
                  isNumber(fontSpacing) ? fontSpacing : FONT_SPACING[fontSpacing]
                )
        }}
      >
        {props.text}
        {this.props.children}
      </View>
    </View>
  );
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
  lineSpecing: 'none',
  fontSpecing: 'none'
} as IProps;

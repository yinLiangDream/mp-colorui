import Taro, { Component } from '@tarojs/taro';
import { SIZE, TEXT_COLOR_LIST, BG_COLOR_LIST } from '../utils/model';
import {
  extendSizeType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType
} from '../utils/types';
import { View, Text } from '@tarojs/components';

interface IProps {
  size?: extendSizeType;
  textColor?: bgColorType;
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  cut?: boolean;
  align?: 'left' | 'center' | 'right';
  special?: 'firstUpper' | 'upper' | 'lower';
  text?: string;
}

interface IState {}

const SPECIAL_CLASS = {
  firstUpper: 'text-Abc',
  upper: 'text-ABC',
  lower: 'text-abc'
};

export default class ClText extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    size: 'normal',
    textColor: undefined,
    bgColor: undefined,
    cut: false,
    align: 'left',
    special: undefined,
    text: ''
  } as IProps;
  render() {
    const size = this.props.size || 'normal';
    const sizeClassName = `text-${SIZE[size === 'normal' ? 'df' : size]}`;
    const textColorClassName = this.props.textColor
      ? TEXT_COLOR_LIST[this.props.textColor || 'black']
      : '';
    const bgColorClassName = this.props.bgColor
      ? BG_COLOR_LIST[this.props.bgColor || 'white']
      : '';
    const cutClassName = this.props.cut ? 'text-cut' : '';
    const alignClassName = this.props.align
      ? `text-${this.props.align}`
      : 'text-left';
    const specialClassName = this.props.special
      ? SPECIAL_CLASS[this.props.special]
      : '';
    return (
      <View
        className={`${sizeClassName} ${textColorClassName} ${bgColorClassName} ${cutClassName} ${alignClassName}`}
      >
        <Text className={specialClassName}>{this.props.text}</Text>
        {this.props.children}
      </View>
    );
  }
}

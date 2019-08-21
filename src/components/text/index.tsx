import { Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { BG_COLOR_LIST, SIZE, TEXT_COLOR_LIST } from '../utils/model';
import { IProps } from '../../../@types/text';
import './index.scss'

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
        <Text className={`${specialClassName} ${cutClassName ? '' : 'cl-text__wrap'}`} >
          {this.props.text}
          {this.props.children}
        </Text>
      </View>
    );
  }
}

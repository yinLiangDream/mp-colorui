import Taro, { Component } from '@tarojs/taro';
import { bgColorType, bgColorMoreType, lightBgColorType } from '../utils/types';
import { BG_COLOR_LIST, SIZE } from '../utils/model';
import { View } from '@tarojs/components';

interface IProps {
  shape?: 'normal' | 'radius' | 'round';
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  size?: 'small' | 'normal' | 'xsmall';
  stripe?: boolean;
  animation?: boolean;
  percent?: number;
}

interface IState {}

export default class ClProgress extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    shape: 'normal',
    bgColor: 'blue',
    size: 'normal',
    stripe: false,
    animation: false,
    percent: 0
  } as IProps;
  render() {
    const shapeClassName = () =>
      this.props.shape
        ? this.props.shape === 'normal'
          ? ''
          : this.props.shape
        : '';
    const bgColorClassName = () =>
      this.props.bgColor ? BG_COLOR_LIST[this.props.bgColor] : 'bg-blue';
    const sizeClassName = () => (this.props.size ? SIZE[this.props.size] : '');
    const stripeClassName = () => this.props.stripe ? 'striped' : '';
    const animationClassName = () => this.props.animation ? 'active' : '';
    return (
      <View className={`cu-progress ${shapeClassName()} ${sizeClassName()} ${stripeClassName()} ${animationClassName()}`}>
        <View className={`${bgColorClassName()}`} style={{ width: `${this.props.percent}%` }}></View>
      </View>
    )
  }
}

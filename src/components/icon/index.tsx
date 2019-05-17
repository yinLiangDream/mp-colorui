import { Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { isNumber } from 'util';
import { IProps } from './types';



interface IState {}

const pxMap = {
  xsmall: '20rpx',
  small: '24rpx',
  normal: '28rpx',
  large: '32rpx',
  xlarge: '36rpx',
  xxlarge: '44rpx',
  slarge: '80rpx',
  xslarge: '120rpx'
};
export default class ClIcon extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    size: 'normal',
    bgColor: undefined,
    iconName: undefined
  } as IProps;
  render() {
    const sizeClassName = this.props.size || 'normal';
    const bgColorClassName = this.props.color ? `text-${this.props.color}` : '';
    const iconClassName = this.props.iconName
      ? `cuIcon-${this.props.iconName}`
      : '';
    return (
      <Text
        className={`${bgColorClassName} ${iconClassName}`}
        style={{ fontSize: `${isNumber(sizeClassName) ? sizeClassName + 'rpx' : pxMap[sizeClassName]}` }}
      />
    );
  }
}

import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import { iconType, bgColorType, extendSizeType } from '../utils/types';
import { isNumber } from 'util';

export interface IProps {
  size?: extendSizeType | number;
  color?: bgColorType;
  iconName?: iconType;
}

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
      ? `icon-${this.props.iconName}`
      : '';
    return (
      <Text
        className={`${bgColorClassName} ${iconClassName}`}
        style={{ fontSize: `${isNumber(sizeClassName) ? sizeClassName + 'rpx' : pxMap[sizeClassName]}` }}
      />
    );
  }
}

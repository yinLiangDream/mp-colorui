import { Text } from '@tarojs/components';
import Taro, { Component, pxTransform } from '@tarojs/taro';
import {isNumber} from '../utils'
import { IProps } from '../../../@types/icon';

interface IState {}

const pxMap = {
  xsmall: 40,
  small: 48,
  normal: 56,
  large: 64,
  xlarge: 72,
  xxlarge: 88,
  slarge: 160,
  xslarge: 240
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
    const iconName = this.props.iconName || ''
    let iconNameClass = `cuIcon-${this.props.iconName}`
    if (this.props.other) {
      iconNameClass = iconName
    }
    const sizeClassName = this.props.size || 'normal';
    const bgColorClassName = this.props.color ? `text-${this.props.color}` : '';
    return (
      <Text
        className={`${bgColorClassName} ${iconNameClass}`}
        style={{
          fontSize: `${
            isNumber(sizeClassName)
              ? pxTransform(sizeClassName)
              : pxTransform(pxMap[sizeClassName])
          }`
        }}
      />
    );
  }
}

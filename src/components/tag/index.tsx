import Taro, { Component } from '@tarojs/taro';
import { bgColorType, lightBgColorType, bgColorMoreType } from '../utils/types';
import { BG_COLOR_LIST } from '../utils/model';
import { View } from '@tarojs/components';

interface IProps {
  shape?: 'normal' | 'round' | 'radius';
  size?: 'small' | 'normal';
  color?: bgColorType | lightBgColorType | bgColorMoreType;
  plain?: boolean;
  plainColor?: bgColorType;
  type?: 'capsule' | 'normal';
  badge?: boolean;
  renderLeft?: any;
  renderRight?: any;
}

interface IState {}

export default class ClTag extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    shape: 'normal',
    size: 'normal',
    color: 'blue',
    plain: false,
    plainColor: 'blue',
    type: 'normal',
    badge: false
  } as IProps;
  render() {
    const shapeClassName = this.props.shape
      ? this.props.shape === 'normal'
        ? ''
        : this.props.shape
      : '';
    const colorClassName = () => {
      return BG_COLOR_LIST[this.props.color || 'blue'];
    };
    const plainClassName = () => {
      return `line-${this.props.plainColor}`;
    };
    const sizeClassName = () => {
      if (this.props.size === 'normal') return '';
      else return 'sm';
    };
    const badgeClassName = this.props.badge ? 'badge' : '';
    const normalComponent = (
      <View
        className={`cu-tag ${shapeClassName} ${this.props.plain ? plainClassName() : colorClassName()} ${sizeClassName()} ${badgeClassName}`}
      >
        {this.props.children}
      </View>
    );
    const capsuleComponent = (
      <View
        className={`cu-capsule ${shapeClassName}  ${sizeClassName()}`}
      >
        <View className={`cu-tag ${colorClassName()}`}>{this.props.renderLeft}</View>
        <View className={`cu-tag ${plainClassName()}`}>{this.props.renderRight}</View>
      </View>
    );
    return this.props.type === 'capsule' ? capsuleComponent : normalComponent
  }
}

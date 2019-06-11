import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { SIZE } from '../utils/model';
import { IProps } from '../../../@types/layout';

/**
 * 基础比例
 * basis-xs, basis-df, basis-lg, basis-xl
 */

interface IState {}

export default class ClLayout extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {} as IProps;
  render() {
    const floatClassName = () => {
      if (this.props.float === 'left') return 'fl';
      if (this.props.float === 'right') return 'fr';
      return '';
    };
    const dealDirection = (direction): string => {
      let dr: string;
      switch (direction) {
        case 'around': {
          dr = '';
          break;
        }
        case 'horizontal': {
          dr = '-lr';
          break;
        }
        case 'vertical': {
          dr = '-tb';
          break;
        }
        default: {
          dr = direction ? `-${direction}` : '';
        }
      }
      return dr;
    };
    const dealSize = (size: any) => {
      if (!size || size === 'normal') return '';
      else return `-${SIZE[size]}`;
    };
    const paddingClassName = () => {
      const paddingDirection = this.props.paddingDirection;
      const size = this.props.padding;

      return `${(size ? 'padding' : '') +
        dealDirection(paddingDirection) +
        dealSize(size)}`;
    };
    const marginClassName = () => {
      const marginDirection = this.props.marginDirection;
      const size = this.props.margin;

      return `${(size ? 'margin' : '') +
        dealDirection(marginDirection) +
        dealSize(size)}`;
    };
    const normalComponent = (
      <View
        className={`${floatClassName()} ${
          this.props.padding ? paddingClassName() : ''
        } ${this.props.margin ? marginClassName() : ''}`}
      >
        {this.props.children}
      </View>
    );
    return normalComponent;
  }
}

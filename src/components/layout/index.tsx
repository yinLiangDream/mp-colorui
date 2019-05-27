import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { SIZE } from '../utils/model';
import { IProps } from '../../../@types/layout';


/**
 * flex 问题
 * 浮动比例
 * flex-sub==>1, flex-twice==>2, flex-treble==>3
 * 基础比例
 * basis-xs, basis-df, basis-lg, basis-xl
 */

interface IState {}

export default class ClLayout extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    type: 'normal',
    flexSelection: {
      justify: 'start',
      align: 'start',
      warp: false
    }
  } as IProps;
  render() {
    const warpClassName =
      this.props.flexSelection && this.props.flexSelection.warp
        ? 'flex-wrap'
        : '';
    const justifyClassName =
      this.props.flexSelection && this.props.flexSelection.justify
        ? `justify-${this.props.flexSelection.justify}`
        : '';
    const alignClassName =
      this.props.flexSelection && this.props.flexSelection.align
        ? `align-${this.props.flexSelection.align}`
        : '';
    const flexComponent = (
      <View
        className={`flex ${warpClassName} ${justifyClassName} ${alignClassName}`}
      >
        {this.props.children}
      </View>
    );

    const colClassName =
      this.props.gridSelection && `col-${this.props.gridSelection.col}`;
    const squareClassName =
      this.props.gridSelection && this.props.gridSelection.mode === 'square'
        ? 'grid-square'
        : '';
    const gridComponent = (
      <View className={`grid ${colClassName} ${squareClassName}`}>
        {this.props.children}
      </View>
    );
    const floatClassName = () => {
      if (this.props.baseSelection && this.props.baseSelection.float === 'left')
        return 'fl';
      if (
        this.props.baseSelection &&
        this.props.baseSelection.float === 'right'
      )
        return 'fr';
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
      const paddingDirection =
        this.props.baseSelection && this.props.baseSelection.paddingDirection;
      const size = this.props.baseSelection && this.props.baseSelection.padding;

      return `${(size ? 'padding' : '') +
        dealDirection(paddingDirection) +
        dealSize(size)}`;
    };
    const marginClassName = () => {
      const marginDirection =
        this.props.baseSelection && this.props.baseSelection.marginDirection;
      const size = this.props.baseSelection && this.props.baseSelection.margin;

      return `${(size ? 'margin' : '') +
        dealDirection(marginDirection) +
        dealSize(size)}`;
    };
    const normalComponent = (
      <View
        className={`${floatClassName()} ${
          this.props.baseSelection && this.props.baseSelection.padding
            ? paddingClassName()
            : ''
        } ${
          this.props.baseSelection && this.props.baseSelection.margin
            ? marginClassName()
            : ''
        }`}
      >
        {this.props.children}
      </View>
    );
    return this.props.type === 'normal'
      ? normalComponent
      : this.props.type === 'grid'
      ? gridComponent
      : this.props.type === 'flex'
      ? flexComponent
      : normalComponent;
  }
}

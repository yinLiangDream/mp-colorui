import Taro, { Component } from '@tarojs/taro';
import { bgColorType, iconType } from '../utils/types';
import { BG_COLOR_LIST } from '../utils/model';
import { View } from '@tarojs/components';

export interface IProps {
  shape?: 'normal' | 'round' | 'radius';
  size?: 'small' | 'normal';
  canTouch?: boolean;
  onClick?: (index: number) => void;
  badge?: boolean;
  tags: {
    color?: bgColorType;
    plain?: boolean;
    icon?: iconType;
    text?: string;
    disabled?: boolean;
  }[];
}

interface IState {}

export default class ClTag extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    shape: 'normal',
    size: 'normal',
    canTouch: false,
    tags: []
  } as IProps;
  onClick(index: number) {
    this.props.onClick && this.props.onClick(index);
  }
  render() {
    const shapeClassName = this.props.shape
      ? this.props.shape === 'normal'
        ? ''
        : this.props.shape
      : '';
    const colorClassName = (color: bgColorType | undefined) => {
      return BG_COLOR_LIST[color || 'blue'];
    };
    const plainClassName = (color: bgColorType | undefined) => {
      return `line-${color}`;
    };
    const sizeClassName = () => {
      if (this.props.size === 'normal') return '';
      else return 'sm';
    };
    const badgeClassName = (badge: boolean | undefined) =>
      badge ? 'badge' : '';
    let normalComponent;
    let capsuleComponent;
    if (this.props.tags.length > 0) {
      const tag = this.props.tags[0];
      normalComponent = (
        <View
          className={`cu-tag ${shapeClassName} ${
            tag.plain ? plainClassName(tag.color) : colorClassName(tag.color)
          } ${sizeClassName()} ${badgeClassName(this.props.badge)}`}
          style={{ overflow: 'hidden' }}
        >
          {tag.text}
        </View>
      );
      this.props.tags.length > 1 &&
        (capsuleComponent = (
          <View
            className={`cu-capsule ${shapeClassName}  ${sizeClassName()}`}
            style={{ overflow: 'hidden' }}
          >
            {this.props.tags.map((tag, index) => (
              <View
                key={tag.text}
                className={`cu-tag ${
                  tag.plain
                    ? plainClassName(tag.color)
                    : colorClassName(tag.color)
                }`}
                onClick={this.onClick.bind(this, index)}
              >
                {tag.text}
              </View>
            ))}
          </View>
        ));
    }
    return this.props.tags.length > 1 ? capsuleComponent : normalComponent;
  }
}

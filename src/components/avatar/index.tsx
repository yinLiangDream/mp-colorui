import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import utils from '../utils/index';

import {
  iconType,
  bgColorType,
  normalSizeType,
  bgColorMoreType,
  lightBgColorType
} from '../utils/types';

interface IProps {
  onClick?(index?: number): void;
  readonly shape?: 'radius' | 'round';
  readonly size?: normalSizeType;
  readonly url?: string;
  readonly text?: string;
  readonly type?: 'normal' | 'array';
  readonly tag?: iconType;
  readonly tagColor?: bgColorType | bgColorMoreType | lightBgColorType;
  readonly icon?: iconType;
  readonly bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  readonly headerArray?: {
    readonly text?: string;
    readonly tag?: iconType;
    readonly icon?: iconType;
    readonly url?: string;
    readonly bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    readonly tagColor?: bgColorType | bgColorMoreType | lightBgColorType;
  }[];
}

interface IState {}

export default class Avatar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  static options = {
    addGlobalClass: true
  };
  state = {};
  static defaultProps = {
    size: 'normal',
    shape: 'radius',
    url: '',
    bgColor: 'black',
    type: 'normal',
    text: '',
    tagColor: 'black',
    headerArray: []
  } as IProps;
  componentWillMount() {}
  click(index = undefined) {
    index === null
      ? this.props.onClick && this.props.onClick(index)
      : this.props.onClick && this.props.onClick(index);
  }
  render() {
    const avatar = (
      <View
        onClick={this.click.bind(this, null)}
        className={`${this.props.shape} ${
          utils.model.SIZE[this.props.size || 'normal']
        } ${
          utils.model.BG_COLOR_LIST[this.props.bgColor || 'black']
        } cu-avatar`}
        style={
          this.props.url
            ? {
                backgroundImage: `${this.props.url}`
              }
            : ''
        }
      >
        <Text className={`icon-${this.props.icon}`}>{this.props.text}</Text>
        {this.props.tag ? (
          <View
            className={`cu-tag badge icon-${this.props.tag} bg-${
              this.props.tagColor
            }`}
          />
        ) : (
          ''
        )}
      </View>
    );
    const avatarArray =
      this.props.headerArray &&
      this.props.headerArray.map((item, index) => {
        return (
          <View
            key={index}
            onClick={this.click.bind(this, index)}
            className={`${this.props.shape} ${
              utils.model.SIZE[this.props.size || 'normal']
            } ${utils.model.BG_COLOR_LIST[item.bgColor || 'black']} cu-avatar`}
            style={item.url ? { backgroundImage: `url(${item.url})` } : ''}
          >
            <Text className={`icon-${item.icon}`}>{item.text}</Text>
            {item.tag ? (
              <View
                className={`cu-tag badge icon-${item.tag} bg-${item.tagColor}`}
              />
            ) : (
              ''
            )}
          </View>
        );
      });
    return (
      <View
        className={`${this.props.type === 'array' ? 'cu-avatar-group' : ''}`}
      >
        {this.props.type === 'array' ? avatarArray : avatar}
      </View>
    );
  }
}

import { Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { BG_COLOR_LIST } from '../utils/model';
import { IProps } from '../../../@types/titleBar';

interface IState {}

export default class ClTitleBar extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };

  static defaultProps: IProps = {
    barColor: 'white',
    textColor: 'green',
    type: 'border-title',
    borderLong: 20,
    borderColor: 'green',
    icon: 'title',
    iconColor: 'green',
    title: '',
    subTitle: '',
    subTitleColor: 'gray'
  };

  render() {
    const textColorClassName = this.props.textColor
      ? `text-${this.props.textColor}`
      : ``;
    const borderColorClassName = this.props.borderColor
      ? BG_COLOR_LIST[this.props.borderColor]
      : 'bg-green';
    const barColorClassName = this.props.barColor
      ? BG_COLOR_LIST[this.props.barColor]
      : `bg-white`;
    const iconClassName = this.props.icon ? `cuIcon-${this.props.icon}` : ``;
    const iconColorClassName = this.props.iconColor
      ? `text-${this.props.iconColor}`
      : ``;
    const borderComponent = (
      <View className='action border-title'>
        <Text className={`${textColorClassName} text-bold text-xl`}>
          {this.props.title}
        </Text>
        <Text
          className={`${borderColorClassName}`}
          style={{ width: `${this.props.borderLong}rpx` }}
        />
      </View>
    );
    const subComponent = (
      <View className='action sub-title'>
        <Text className={`text-xl text-bold ${textColorClassName}`}>
          {this.props.title}
        </Text>
        {this.props.subTitle ? (
          <Text className={`text-${this.props.subTitleColor}`}>
            {this.props.subTitle}
          </Text>
        ) : (
          <Text className={`${borderColorClassName}`}>{}</Text>
        )}
      </View>
    );
    const iconComponent = (
      <View className='action'>
        <Text className={`${iconClassName} ${iconColorClassName}`} />
        <Text className={`text-xl text-bold ${textColorClassName}`}>
          {this.props.title}
        </Text>
      </View>
    );
    return (
      <View className={`${barColorClassName} cu-bar`}>
        {this.props.type === 'border-title' ? borderComponent : ''}
        {this.props.type === 'sub-title' ? subComponent : ''}
        {this.props.type === 'icon' ? iconComponent : ''}
      </View>
    );
  }
}

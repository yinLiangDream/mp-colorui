import Taro, {Component} from '@tarojs/taro'
import {View, Text, Block} from '@tarojs/components'
import {bgColorMoreType, bgColorType, iconType, lightBgColorType} from "../utils/types";
import {BG_COLOR_LIST, TEXT_COLOR_LIST} from "../utils/model";

interface IProps {
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  leftIcon: {
    icon?: iconType;
    color?: bgColorType;
    leftText?: string;
  }[];
  title?: string;
  rightIcon?: {
    icon?: iconType;
    color?: bgColorType;
  }[];
  onClickLeftIcon?: (index: number) => void;
  onClickRightIcon?: (index: number) => void;
}

interface IState {

}

export default class ClNavBar extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps: IProps = {
    title: '',
    leftIcon: [],
    rightIcon: [],
    bgColor: "white"
  };

  onClickLeftIcon(index: number) {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon(index)
  };

  onClickRightIcon(index: number) {
    this.props.onClickRightIcon && this.props.onClickRightIcon(index)
  };

  render(): any {
    const bgColorClassName = this.props.bgColor ? BG_COLOR_LIST[this.props.bgColor] : 'bg-white';
    const leftComponent = this.props.leftIcon && this.props.leftIcon.map((item, index) =>
      <Block key={index}>
        <Text className={`${item.icon ? 'icon-' + item.icon : ''} ${item.color ? TEXT_COLOR_LIST[item.color] : ''}`}
              onClick={this.onClickLeftIcon.bind(this, index)}/>
        <Text className={`${item.color ? TEXT_COLOR_LIST[item.color] : ''}`}
              onClick={this.onClickLeftIcon.bind(this, index)}>{item.leftText}</Text>
      </Block>
    );
    const rightComponent = this.props.rightIcon && this.props.rightIcon.map((item, index) =>
      <Block key={index}>
        <Text className={`${item.icon ? 'icon-' + item.icon : ''} ${item.color ? TEXT_COLOR_LIST[item.color] : ''}`}
              onClick={this.onClickRightIcon.bind(this, index)}/>
      </Block>
    );
    return (
      <View className={`cu-bar ${bgColorClassName}`}>
        <View className='action'>{leftComponent}</View>
        <View className='content text-bold'>{this.props.title}</View>
        <View className='action'>{rightComponent}</View>
      </View>
    )
  }
}

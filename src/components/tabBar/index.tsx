import Taro, { Component } from '@tarojs/taro';
import {
  bgColorType,
  bgColorMoreType,
  lightBgColorType,
  iconType
} from '../utils/types';
import { View } from '@tarojs/components';
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../utils/model';
import { isNumber } from 'util';

interface IProps {
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  activeColor?: bgColorType;
  active?: number;
  fix?: boolean;
  tabs: {
    badge?: number | boolean;
    icon?: iconType;
    img?: string;
    title?: string;
    action?: boolean;
  }[];
  onClick?: (index: number) => void;
}

interface IState {
  activeIndex: number;
}

export default class ClTabBar extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps: IProps = {
    bgColor: 'white',
    activeColor: 'blue',
    active: 0,
    tabs: []
  };
  state: IState = {
    activeIndex: 0
  };
  click(index: number) {
    this.setState({
      activeIndex: index
    });
    this.props.onClick && this.props.onClick(index);
  }
  componentDidMount() {
    this.setState({
      activeIndex: this.props.active || 0
    });
  }
  render() {
    const colorClassName = this.props.bgColor
      ? BG_COLOR_LIST[this.props.bgColor]
      : 'bg-white';
    const activeColorClassName = this.props.activeColor
      ? TEXT_COLOR_LIST[this.props.activeColor]
      : 'text-blue';
    const barComponent = this.props.tabs.map((item, index) => (
      <View
        onClick={this.click.bind(this, index)}
        key={item.icon}
        className={`action ${item.action ? 'add-action' : ''} ${
          this.state.activeIndex === index ? activeColorClassName : ''
        }`}
      >
        <View
          className={`${
            item.img ? 'icon-cu-image' : item.icon ? 'icon-' + item.icon : ''
          }`}
        >
          {item.badge !== false ? (
            <View className='cu-tag badge'>
              {isNumber(item.badge) ? item.badge : ''}
            </View>
          ) : (
            ''
          )}
        </View>
        <View>{item.title}</View>
      </View>
    ));
    return (
      <View
        className={`cu-bar tabbar ${colorClassName}`}
        style={
          this.props.fix
            ? { position: 'fixed', width: '100vw', bottom: '0', zIndex: 10 }
            : ''
        }
      >
        {barComponent}
      </View>
    );
  }
}

import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { BG_COLOR_LIST } from "../utils/model";
import { IProps } from './types';



interface IState {
}

export default class ClShopBar extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };

  static defaultProps: IProps = {
    bgColor: 'white',
    tabs: [],
    buttons: [],
    border: false,
    onClickButton: () => {},
    onClickTab: () => {}
  };
  onClickTab(index: number) {
    this.props.onClickTab && this.props.onClickTab(index)
  }
  onClickButton(index: number) {
    this.props.onClickButton && this.props.onClickButton(index)
  }
  render() {
    const bgColorClassName = BG_COLOR_LIST[this.props.bgColor || 'white'];
    const tabsComponent = this.props.tabs && this.props.tabs.map((item, index) =>
      <View key={index} className='action' onClick={this.onClickTab.bind(this, index)}>
        <View className={`${item.icon ? 'icon-' + item.icon : ''}`}>
          {item.badge !== false ? <View className='cu-tag badge'>{item.badge === true ? '' : item.badge}</View> : ''}
        </View>
        <View>{item.title}</View>
      </View>);
    const buttonsComponent = this.props.buttons && this.props.buttons.map((item, index) =>
      <View key={index} className={`${BG_COLOR_LIST[item.bgColor || 'red']} submit`} onClick={this.onClickButton.bind(this, index)}>{item.text}</View>);
    return (<View className={`cu-bar ${bgColorClassName} tabbar shop ${this.props.border ? 'border' : ''}`}>
      {tabsComponent}
      {buttonsComponent}
    </View>)
  }
}

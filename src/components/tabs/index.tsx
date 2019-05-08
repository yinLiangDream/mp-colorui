import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView, Text } from '@tarojs/components';
import {
  bgColorMoreType,
  bgColorType,
  iconType,
  lightBgColorType
} from '../utils/types';
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../utils/model';

interface IProps {
  type?: 'center' | 'verb' | 'default';
  bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  activeColor?: bgColorType;
  active?: number;
  tabs: {
    text?: string;
    icon?: iconType;
  }[];
  onClick?: (index: number) => void;
}

interface IState {
  activeTab: number;
}

export default class ClTabs extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    type: 'default',
    bgColor: 'white',
    activeColor: 'black',
    active: 0,
    tabs: []
  };
  state: IState = {
    activeTab: 0
  };

  componentDidMount(): void {
    this.setState({
      activeTab: this.props.active || 0
    });
  }

  onClickTab(index: number) {
    this.setState({
      activeTab: index
    });
    this.props.onClick && this.props.onClick(index);
  }

  render(): any {
    const bgColorClassName = this.props.bgColor
      ? BG_COLOR_LIST[this.props.bgColor]
      : '';
    const activeColor = this.props.activeColor
      ? TEXT_COLOR_LIST[this.props.activeColor]
      : '';
    const defaultComponent = (
      <ScrollView scrollX className={`${bgColorClassName} nav`}>
        {this.props.tabs.map((item, index) => (
          <View
            key={index}
            className={`cu-item ${
              this.state.activeTab === index ? `${activeColor} cur` : ''
            }`}
            onClick={this.onClickTab.bind(this, index)}
          >
            <Text className={`icon-${item.icon}`} />
            <Text className='margin-left-xs'>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    );
    const verbComponent = (
      <ScrollView scrollX className={`${bgColorClassName} nav`}>
        <View className='flex text-center'>
          {this.props.tabs.map((item, index) => (
            <View
              key={index}
              className={`cu-item flex-sub ${
                this.state.activeTab === index ? `${activeColor} cur` : ''
              }`}
              onClick={this.onClickTab.bind(this, index)}
            >
              <Text className={`icon-${item.icon}`} />
              <Text className='margin-left-xs'>{item.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
    const centerComponent = (
      <ScrollView scrollX className={`${bgColorClassName} nav text-center`}>
        {this.props.tabs.map((item, index) => (
          <View
            key={index}
            className={`cu-item ${
              this.state.activeTab === index ? `${activeColor} cur` : ''
            }`}
            onClick={this.onClickTab.bind(this, index)}
          >
            <Text className={`icon-${item.icon}`} />
            <Text className='margin-left-xs'>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    );
    return this.props.type === 'default' ? (
      defaultComponent
    ) : this.props.type === 'verb' ? (
      verbComponent
    ) : this.props.type === 'center' ? (
      centerComponent
    ) : '';
  }
}

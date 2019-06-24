import {ScrollView, Text, View} from '@tarojs/components';
import Taro, {Component} from '@tarojs/taro';
import {BG_COLOR_LIST, TEXT_COLOR_LIST} from '../utils/model';
import {IProps} from '../../../@types/tabs';

interface IState {
  activeTab: number;
  scrollLeft: number;
}

export default class ClTabs extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    type: 'default',
    bgColor: '',
    activeColor: 'black',
    active: 0,
    tabs: []
  };
  state: IState = {
    activeTab: 0,
    scrollLeft: 0
  };

  componentDidMount(): void {
    this.setState({
      activeTab: this.props.active || 0
    });
  }

  onClickTab(index: number) {
    this.setState({
      activeTab: index,
      scrollLeft: (index - 1) * 60
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
      <ScrollView scrollX className={`${bgColorClassName} nav`} scrollWithAnimation scrollLeft={this.state.scrollLeft}>
        {this.props.tabs.map((item, index) => (
          <View
            key={index}
            className={`cu-item ${
              this.state.activeTab === index ? `${activeColor} cur` : ''
              }`}
            onClick={this.onClickTab.bind(this, index)}
          >
            {item.icon ? (
              <Text className={`cuIcon-${item.icon} margin-right-xs`} />
            ) : (
              ''
            )}
            <Text>{item.text}</Text>
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
              {item.icon ? (
                <Text className={`cuIcon-${item.icon} margin-right-xs`} />
              ) : (
                ''
              )}
              <Text>{item.text}</Text>
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
            {item.icon ? (
              <Text className={`cuIcon-${item.icon} margin-right-xs`} />
            ) : (
              ''
            )}
            <Text>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    );
    return this.props.type === 'default'
      ? defaultComponent
      : this.props.type === 'verb'
        ? verbComponent
        : this.props.type === 'center'
          ? centerComponent
          : '';
  }
}

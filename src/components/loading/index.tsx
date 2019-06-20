import { Image, Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { BG_COLOR_LIST } from '../utils/model';
import { IProps } from '../../../@types/loading';

interface IState {
  loadProgress: number;
}

let timer;
export default class ClLoading extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    type: 'bar',
    bgColor: 'blue',
    modalText: '加载中...',
    loadingError: false,
    noMore: false,
    show: false
  } as IProps;

  state = {
    loadProgress: 0
  } as IState;
  loadProgress() {
    this.setState({
      loadProgress: this.state.loadProgress + 3
    });
    if (this.state.loadProgress < 100) {
      timer = setTimeout(this.loadProgress.bind(this), 100);
    } else {
      this.setState({
        loadProgress: 100
      });
    }
  }
  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.show) this.loadProgress();
    else {
      clearTimeout(timer);
      this.setState({
        loadProgress: 0
      });
    }
  }

  componentDidMount() {
    if (this.props.show) this.loadProgress();
  }
  render() {
    const bgColorClassName = () =>
      this.props.bgColor ? BG_COLOR_LIST[this.props.bgColor] : 'bg-blue';
    const modalComponent = (
      <View className='cu-load load-modal'>
        <Image src={this.props.imgUrl || ''} mode='aspectFit' />
        <Text className='text-gray'>{this.props.modalText}</Text>
      </View>
    );
    const imageComponent = (
      <View className='cu-load load-image'>
        <Image src={this.props.imgUrl || ''} mode='aspectFit' />
      </View>
    );
    const lineComponent = (
      <View
        className={`cu-load ${
          this.props.loadingError ? 'bg-red erro' : bgColorClassName()
        } ${this.props.noMore || this.props.loadingError ? 'over' : 'loading'}`}
      />
    );
    const long = 100 - this.state.loadProgress;
    const barComponent = (
      <View
        className={`load-progress ${this.props.show ? 'show' : 'hide'}`}
        style={{ top: '0' }}
      >
        <View
          className={`load-progress-bar ${bgColorClassName()}`}
          style={{
            transform: `translate3d(-${long}%, 0px, 0px)`
          }}
        />
        <View className={`load-progress-spinner text-${this.props.bgColor}`} />
      </View>
    );
    const show = this.props.show;
    return show ? (
      this.props.type === 'bar' ? (
        barComponent
      ) : this.props.type === 'line' ? (
        lineComponent
      ) : this.props.type === 'modal' ? (
        modalComponent
      ) : this.props.type === 'image' ? (
        imageComponent
      ) : (
        barComponent
      )
    ) : (
      <View />
    );
  }
}

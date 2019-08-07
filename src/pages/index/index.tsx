import Taro, { useRef, useState, render } from '@tarojs/taro';
import ClLayout from '../../components/layout';
import ClTitleBar from '../../components/titleBar';
import ClSwiper from '../../components/swiper';

export default class Index extends Taro.Component {
  state = {
    list: []
  };
  componentDidMount() {
    const fileList = [
      'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper1.jpg',
      'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper2.jpg'
    ];
    const list = fileList.map(item => ({
      url: item,
      type: 'image'
    }));
    this.setState({
      list
    });
  }
  render() {
    return (
      <ClLayout>
        <ClTitleBar
          title='类型'
          textColor='black'
          type='icon'
          subTitle='type'
        />
        <ClSwiper type='card' list={this.state.list} circular />
        <ClSwiper type='screen' list={this.state.list} circular />

        <ClTitleBar
          title='指示点'
          textColor='black'
          type='icon'
          subTitle='dot'
        />
        <ClSwiper
          type='screen'
          list={this.state.list}
          circular
          dot='round'
          indicatorDots
          indicatorColor='#8799a3'
          indicatorActiveColor='#0081ff'
        />
      </ClLayout>
    );
  }
}

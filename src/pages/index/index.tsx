import { View } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';
import ClRadio from "../../components/radio";

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };

  state = {
    show: false,
    step: 0
  };

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <ClRadio type={"list"} title={'666'} checkedValue={'222'} radioGroup={[
          {
            key: '123',
            value: '222'
          }, {
            key: 'aaa',
            value: 'bbbb'
          }
        ]}/>
      </View>
    );
  }
}

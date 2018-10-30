import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import Timer from '../../components/timer/timer'

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
  }

  state = {
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 20000
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  tickHandler (time) {
    console.log(time)
  }

  timeupHandler () {
    console.log('timeup')
  }

  render () {
    const { startTime, endTime } = this.state

    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Timer startTime={startTime} endTime={endTime} onTick={this.tickHandler} onTimeup={this.timeupHandler} />
      </View>
    )
  }
}


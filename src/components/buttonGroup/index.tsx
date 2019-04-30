import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

interface IProps {

}

interface IState {

}

export default class ClButtonGroup extends Component<IProps, IState> {
  render(): any {
    return <View className='cu-bar btn-group'>{this.props.children}</View>
  }
}

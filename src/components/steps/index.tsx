import { Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { TEXT_COLOR_LIST } from "../utils/model";
import { IProps } from '../../../@types/steps';



interface IState {
}

export default class ClStep extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps: IProps = {
    steps: [],
    type: 'line',
    activeColor: "blue",
    step: 0,
    stepIconType: "number",
    stepTitlePosition: "bottom"
  };
  state: IState = {
  };

  render(): any {
    const stepTypeClassName = this.props.type === 'arrow' ? 'steps-arrow' : '';
    const activeColorClassName = this.props.activeColor ? TEXT_COLOR_LIST[this.props.activeColor] : '';
    const tabsComponents = this.props.steps.map((item, index) =>
      <View className={`cu-item ${(this.props.step || 0) > index ? activeColorClassName : ''}`} key={index}>
        {this.props.stepTitlePosition === 'top' ? item.title : ''}
        {<Text
          className={`${this.props.stepIconType === 'number' ? 'num' : ''} ${this.props.stepIconType === 'custom' ? 'cuIcon-' + item.icon : ''}`}
        >{index + 1}</Text>}
        {this.props.stepTitlePosition === 'bottom' ? item.title : ''}
      </View>);
    return (
      <View className={`cu-steps ${stepTypeClassName}`}>
        {tabsComponents}
      </View>
    )
  }
}

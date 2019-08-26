import { Text } from '@tarojs/components'
import Taro, { Component, pxTransform } from '@tarojs/taro'
import { isNumber } from '../utils'
import { pxMap } from '../utils/model'
import { IProps } from '../../../@types/icon'

interface IState {}

export default class ClIcon extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    size: 'normal',
    bgColor: undefined,
    iconName: undefined
  } as IProps

  render () {
    const iconName = this.props.iconName || ''
    let iconNameClass = `cuIcon-${this.props.iconName}`
    if (this.props.other) {
      iconNameClass = iconName
    }
    const sizeClassName = this.props.size || 'normal'
    const bgColorClassName = this.props.color ? `text-${this.props.color}` : ''
    return (
      <Text
        className={`${bgColorClassName} ${iconNameClass}`}
        style={{
          fontSize: `${
            isNumber(sizeClassName)
            ? pxTransform(sizeClassName)
            : pxTransform(pxMap[sizeClassName])
          }`
        }}
      />
    )
  }
}

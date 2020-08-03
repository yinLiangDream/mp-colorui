import React from 'react'
import { View } from '@tarojs/components'
import { IProps } from '../../../@types/card.d'
import { BG_COLOR_LIST } from '../../lib/model'
import ClText from '../text'

import { classNames } from '../../lib'
import './index.scss'

export default function ClCard(props: IProps) {
  const typeClassName = props.type === 'full' ? 'no-card' : ''
  const colorClassName = props.bgColor
    ? BG_COLOR_LIST[props.bgColor]
    : 'bg-white'
  return (
    <View
      className={classNames([`cu-card case ${typeClassName}`], props.className)}
      style={Object.assign({}, props.style)}
    >
      <View
        className={classNames([
          'cu-item',
          {
            shadow: props.shadow
          },
          colorClassName,
          {
            cu_card_active: props.active
          }
        ])}
      >
        {props.title && props.title.text ? (
          <View className='cu_card__title-line padding'>
            <ClText {...props.title} />
          </View>
        ) : (
          ''
        )}
        {this.props.renderTitle}
        <View className='padding'>{props.children}</View>
      </View>
    </View>
  )
}

ClCard.options = {
  addGlobalClass: true
}

ClCard.defaultProps = {
  type: 'card',
  bgColor: 'white',
  shadow: true,
  active: false,
  title: {}
} as IProps

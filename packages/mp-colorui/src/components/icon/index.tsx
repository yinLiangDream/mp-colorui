import { Text } from '@tarojs/components'
import React from 'react'
import { pxTransform } from '@tarojs/taro'
import { classNames, isNumber } from '../../lib'
import { pxMap } from '../../lib/model'
import { IProps } from '../../../@types/icon'

export default function ClIcon(props: IProps) {
  const iconName = props.iconName || ''
  let iconNameClass = `cuIcon-${props.iconName}`
  if (props.other) {
    iconNameClass = iconName
  }
  const sizeClassName = props.size || 'normal'
  const bgColorClassName = props.color ? `text-${props.color}` : ''
  return (
    <Text
      className={classNames(
        `${bgColorClassName} ${iconNameClass}`,
        props.className
      )}
      style={Object.assign(
        {
          fontSize: `${
            isNumber(sizeClassName)
              ? pxTransform(sizeClassName as number)
              : pxTransform(pxMap[sizeClassName])
          }`
        },
        props.style
      )}
    />
  )
}

ClIcon.options = {
  addGlobalClass: true
}

import { View } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { IProps } from '../../../@types/curtain'
import ClIcon from '../icon'

import './index.scss'
import { classNames } from '../../lib'

export default function ClCurtain(props: IProps) {
  const { show = false, closeWithShadow = false, closeBtnPosition = 'bottom' } = props
  const [showImage, setShowImage] = useState(show)
  useEffect(() => {
    setShowImage(show)
  }, [show])
  const renderImage = () => {
    const commonComponent = <View
      className={classNames('cu-load load-image', props.className)}
      style={Object.assign({}, props.style)}
      onClick={e => {
        e.stopPropagation()
        if (closeWithShadow) {
          setShowImage(false)
          props.onClose && props.onClose()
        }
      }}
    >
      <View
        className='cu-curtain__content'
        onClick={() => {
          props.onClick && props.onClick()
        }}
      >
        {props.children}
        <View
          className={closeBtnPosition}
          onClick={e => {
            e.stopPropagation()
            setShowImage(false)
            props.onClose && props.onClose()
          }}
        >
          <ClIcon iconName='close' color='white' />
        </View>
      </View>
    </View>
    return showImage && commonComponent;
  }
  return renderImage()
}

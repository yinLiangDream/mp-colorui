import { View } from '@tarojs/components';
import Taro, { useMemo, useState } from '@tarojs/taro';
import { IProps } from '../../../@types/curtain';
import ClIcon from '../icon';

import './index.scss'

export default function ClCurtain(props: IProps) {
  const { show, closeWithShadow, closeBtnPosition } = props;
  const [ showImage, setShowImage ] = useState(show)
  useMemo(() => {
    setShowImage(show)
  }, [show])
  return (
    showImage ?
    <View className='cu-load load-image' onClick={e => {
      e.stopPropagation()
      if (closeWithShadow) {
        setShowImage(false)
        props.onClose && props.onClose()
      }
    }}>
      <View className='cu-curtain__content' onClick={() => {
        props.onClick && props.onClick()
      }}>
        {this.props.children}
        <View className={closeBtnPosition} onClick={(e) => {
          e.stopPropagation()
          setShowImage(false)
          props.onClose && props.onClose()
        }}>
          <ClIcon iconName='close' color='white' />
        </View>
      </View>
    </View> : <View />
  )
}


ClCurtain.options = {
  addGlobalClass: true
}

ClCurtain.defaultProps = {
  show: false,
  closeWithShadow: false,
  closeBtnPosition: 'bottom',
  onClose: () => { },
  onClick: () => { },
  imgUrl: ''
} as IProps;

import { Text, View } from '@tarojs/components'
import Taro, { pxTransform, useEffect, useState } from '@tarojs/taro'
import { isNumber, generateId } from '../utils'
import { BG_COLOR_LIST } from '../utils/model'
import { IProps, THeaderArray } from '../../../@types/avatar'

function ClAvatar(props: IProps) {
  const [headList, setHeadList] = useState(props.headerArray)
  useEffect(() => {
    const list = props.headerArray || []
    setHeadList(list.map((item: any) => {
      item.cu_avatar_id = generateId()
      return item
    }))
  }, [props.headerArray])
  const onClick = () => {
    props.onClick && props.onClick()
  }
  const customSize = {
    'small': 48,
    'normal': 64,
    'large': 96,
    'xlarge': 128
  }
  const width = isNumber(props.size) ? pxTransform(props.size) : pxTransform(customSize[props.size || 'normal'])
  const height = isNumber(props.size) ? pxTransform(props.size) : pxTransform(customSize[props.size || 'normal'])
  const em = isNumber(props.size) ? props.size / 48 : customSize[props.size || 'normal'] / 48
  const avatarArray = headList ? (
    headList.map(((item: any) => (
      <View
        key={item.cu_avatar_id}
        className={`${props.shape}  ${BG_COLOR_LIST[item.bgColor || 'black']} ${
          props.shadow ? 'shadow' : ''
          } cu-avatar`}
        style={item.url ? {
          backgroundImage: `url(${item.url})`,
          width,
          height,
          fontSize: `${em}em`
        } : { width, height, fontSize: `${em}em` }}
      >
        <Text className={`cuIcon-${item.icon}`}>
          {item.text ? item.text.slice(0, 1) : ''}
        </Text>
        {item.tag ? (
          <View
            className={`cu-tag badge cuIcon-${item.tag} ${
              item.tagColor ? BG_COLOR_LIST[item.tagColor] : ''
              }`}
          />
        ) : (
            ''
          )}
      </View>
    ))
    ) : (
      <View />
    )
  const avatarArrayComponent = (
    <View
      className='cu-avatar-group'
      onClick={() => {
        onClick()
      }}
    >
      {avatarArray}
    </View>
  )
  return props.headerArray && props.headerArray.length > 1 ? (
    avatarArrayComponent
  ) : (
      <View
        onClick={() => {
          onClick()
        }}
      >
        {avatarArray}
      </View>
    )
}

ClAvatar.options = {
  addGlobalClass: true
}

ClAvatar.defaultProps = {
  size: 'normal',
  shape: 'radius',
  type: 'normal',
  headerArray: [],
  shadow: true
} as IProps

export default ClAvatar

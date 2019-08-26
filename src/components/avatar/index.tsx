import { Text, View } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'
import { isNumber } from '../utils'
import { BG_COLOR_LIST } from '../utils/model'
import { IProps, THeaderArray } from '../../../@types/avatar'

function ClAvatar (props: IProps) {
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
  const avatarArray = props.headerArray ? (
    props.headerArray.map((item: THeaderArray, index: number) => (
      <View
        key={index}
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
                        <View/>
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

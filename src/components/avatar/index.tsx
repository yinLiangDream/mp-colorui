import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import utils from '../utils/index';
import { BG_COLOR_LIST } from '../utils/model';
import { IProps, THeaderArray } from './types';



function ClAvatar(props: IProps) {
  const onClick = (index = undefined) => {
    props.onClick && props.onClick(index);
  };
  const avatarArray = props.headerArray ? (
    props.headerArray.map((item: THeaderArray, index: number) => (
      <View
        key={index + Math.random()}
        onClick={onClick.bind(this, index)}
        className={`${props.shape} ${
          utils.model.SIZE[props.size || 'normal']
        } ${BG_COLOR_LIST[item.bgColor || 'black']} ${
          props.shadow ? 'shadow' : ''
        } cu-avatar`}
        style={item.url ? { backgroundImage: `url(${item.url})` } : ''}
      >
        <Text className={`icon-${item.icon}`}>{item.text}</Text>
        {item.tag ? (
          <View
            className={`cu-tag badge icon-${item.tag} ${
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
  );
  const avatarArrayComponent = (
    <View className='cu-avatar-group'>{avatarArray}</View>
  );
  return props.headerArray && props.headerArray.length > 1 ? (
    avatarArrayComponent
  ) : (
    <View>{avatarArray}</View>
  );
}

ClAvatar.options = {
  addGlobalClass: true
};

ClAvatar.defaultProps = {
  size: 'normal',
  shape: 'radius',
  url: '',
  bgColor: 'blue',
  type: 'normal',
  text: '',
  tagColor: 'blue',
  headerArray: [],
  shadow: true
} as IProps;

export default ClAvatar;

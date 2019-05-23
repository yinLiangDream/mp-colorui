import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import utils from '../utils/index';
import { BG_COLOR_LIST } from '../utils/model';
import { IProps, THeaderArray } from '../../../@types/avatar';

function ClAvatar(props: IProps) {
  const onClick = () => {
    props.onClick && props.onClick();
  };
  const avatarArray = props.headerArray ? (
    props.headerArray.map((item: THeaderArray, index: number) => (
      <View
        key={index + Math.random()}
        className={`${props.shape} ${
          utils.model.SIZE[props.size || 'normal']
        } ${BG_COLOR_LIST[item.bgColor || 'black']} ${
          props.shadow ? 'shadow' : ''
        } cu-avatar`}
        style={item.url ? { backgroundImage: `url(${item.url})` } : ''}
      >
        <Text className={`cuIcon-${item.icon}`}>{item.text}</Text>
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
  );
  const avatarArrayComponent = (
    <View
      className='cu-avatar-group'
      onClick={() => {
        onClick();
      }}
    >
      {avatarArray}
    </View>
  );
  return props.headerArray && props.headerArray.length > 1 ? (
    avatarArrayComponent
  ) : (
    <View
      onClick={() => {
        onClick();
      }}
    >
      {avatarArray}
    </View>
  );
}

ClAvatar.options = {
  addGlobalClass: true
};

ClAvatar.defaultProps = {
  size: 'normal',
  shape: 'radius',
  type: 'normal',
  headerArray: [],
  shadow: true
} as IProps;

export default ClAvatar;

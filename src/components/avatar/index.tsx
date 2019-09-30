import { Text, View, Image } from '@tarojs/components';
import Taro, { pxTransform, useEffect, useState } from '@tarojs/taro';
import { isNumber, generateId } from '../utils';
import { BG_COLOR_LIST } from '../utils/model';
import { IProps, THeaderArray } from '../../../@types/avatar';

function ClAvatar(props: IProps) {
  const [headList, setHeadList] = useState(props.headerArray);
  useEffect(() => {
    const list = props.headerArray || [];
    setHeadList(
      list.map((item: any) => {
        item.cu_avatar_id = generateId();
        return item;
      })
    );
  }, [props.headerArray]);
  const onClick = () => {
    props.onClick && props.onClick();
  };
  const customSize = {
    small: 48,
    normal: 64,
    large: 96,
    xlarge: 128
  };
  const width = isNumber(props.size)
    ? pxTransform(props.size as number)
    : pxTransform(customSize[props.size || 'normal']);
  const height = isNumber(props.size)
    ? pxTransform(props.size as number)
    : pxTransform(customSize[props.size || 'normal']);
  const em = isNumber(props.size)
    ? (props.size as number) / 48
    : customSize[props.size || 'normal'] / 48;
  const avatarArray = (headList as THeaderArray[]).map((item: any) => (
    <View
      key={item.cu_avatar_id}
      className={`${props.shape} ${BG_COLOR_LIST[item.bgColor || 'black']} ${
        props.shadow ? 'shadow' : ''
      } cu-avatar`}
      style={{
        width,
        height,
        fontSize: `${em}em`
      }}
    >
      <Image
        className={`${props.shape}`}
        src={item.url}
        style={{
          width,
          height,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
        mode='aspectFill'
      />
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
  ));
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

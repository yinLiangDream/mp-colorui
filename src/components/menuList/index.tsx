import { Text, View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import ClIcon from '../icon/index';
import { TEXT_COLOR_LIST } from '../utils/model';
import { TCard, TShortLine, TTist, TOnClick } from './types';

interface IProps {
  shortBorder?: TShortLine;
  card?: TCard;
  list?: TTist;
  onClick?: TOnClick;
}

export default function ClMenuList(props: IProps) {
  const shortLineClassName = props.shortBorder ? 'sm-border' : '';
  const arrowClassName = (arrow: boolean) => (arrow ? 'arrow' : '');
  const cardClassName = props.card ? 'card-menu' : '';
  const list = props.list || [];
  
  const click = (index: number) => {
    props.onClick && props.onClick(index);
  }
  const itemComponent = list.map((item, index) => (
    <View
      key={item.title}
      className={`cu-item ${arrowClassName(!!item.arrow)}`}
      onClick={() => click(index)}
    >
      <View className='content'>
        {item.icon && item.icon.iconName ? <ClIcon {...item.icon} /> : ''}
        {item.imgUrl ? (
          <Image src={item.imgUrl} className='png' mode='aspectFit' />
        ) : (
          ''
        )}
        <Text className={`${TEXT_COLOR_LIST[item.titleColor || 'black']}`}>
          {item.title}
        </Text>
      </View>
    </View>
  ));
  return (
    <View
      className={`cu-list menu ${shortLineClassName} ${arrowClassName} ${cardClassName}`}
    >
      {itemComponent}
    </View>
  );
}

ClMenuList.options = {
  addGlobalClass: true
};

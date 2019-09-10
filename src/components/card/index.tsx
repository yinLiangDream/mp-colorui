import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { IProps } from '../../../@types/card.d';
import { BG_COLOR_LIST } from '../utils/model';

export default function ClCard(props: IProps) {
  const typeClassName = props.type === 'full' ? 'no-card' : '';
  const colorClassName = props.bgColor ? BG_COLOR_LIST[props.bgColor] : 'bg-white';
  return (
    <View className={classnames([`cu-card case ${typeClassName}`])}>
      <View
        className={classnames([
          'cu-item',
          'padding',
          {
            shadow: props.shadow
          },
          colorClassName,
          {
            cu_card_active: props.active
          }
        ])}
      >
        {this.props.children}
      </View>
    </View>
  );
}

ClCard.options = {
  addGlobalClass: true
};

ClCard.defaultProps = {
  type: 'card',
  bgColor: 'white',
  shadow: true,
  active: false
} as IProps;

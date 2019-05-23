import { Text, View } from '@tarojs/components';
import Taro, { useState } from '@tarojs/taro';
import { BG_COLOR_LIST } from '../utils/model';
import { IProps } from '../../../@types/modal';



export default function ClModal(props: IProps) {
  const [showModal, setShowModal] = useState(() => !!props.show);

  const titleBgColorClassName = props.titleBgColor
    ? BG_COLOR_LIST[props.titleBgColor]
    : '';
  const actionColor = props.actionColor ? BG_COLOR_LIST[props.actionColor] : '';

  const hideModal = () => {
    setShowModal(false);
  };
  const title = props.title;
  const actions = props.actions || [];
  const onClick = (index: number) => {
    props.onClick && props.onClick(index);
  };
  const actionsComponent = actions.map((item, index) => (
    <View
      className={`${index > 0 ? 'solid-left' : ''} action margin-0 flex-sub`}
      key={item.text}
      onClick={() => {
        onClick(index);
      }}
    >
      <Text>{item.text}</Text>
    </View>
  ));
  return (
    <View
      className={`cu-modal ${showModal ? 'show' : ''}`}
      onClick={() => {
        props.closeWithShadow && hideModal();
      }}
    >
      <View className='cu-dialog'>
        {props.custom ? (
          this.props.renderTitle
        ) : (
          <View className={`cu-bar justify-end ${titleBgColorClassName}`}>
            <View className='content'>{title}</View>
            {props.close ? (
              <View className='action' onClick={hideModal}>
                <Text className='cuIcon-close text-black' />
              </View>
            ) : (
              ''
            )}
          </View>
        )}

        <View className='padding-xl'>{this.props.children}</View>
        {props.custom ? (
          this.props.renderAction
        ) : (
          <View className={`cu-bar ${actionColor}`}>{actionsComponent}</View>
        )}
      </View>
    </View>
  );
}

ClModal.options = {
  addGlobalClass: true
};

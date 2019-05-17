import { View } from '@tarojs/components';
import Taro, { useState } from '@tarojs/taro';
import { IProps } from './types';



export default function ClDrawer(props: IProps) {
  const [showDrawer, setShowDrawer] = useState(() => !!props.show);

  const hideModal = () => {
    setShowDrawer(false);
  };
  const leftComponent = (
    <View
      className={`cu-modal drawer-modal justify-start ${
        showDrawer ? 'show' : ''
      }`}
      onClick={e => {
        hideModal();
        e.stopPropagation();
      }}
    >
      <View
        className='cu-dialog basis-lg'
        onClick={e => {
          e.stopPropagation();
        }}
        style={{ height: '100vh' }}
      >
        {this.props.children}
      </View>
    </View>
  );
  const rightComponent = (
    <View
      className={`cu-modal drawer-modal justify-end ${
        showDrawer ? 'show' : ''
      }`}
      onClick={e => {
        hideModal();
        e.stopPropagation();
      }}
    >
      <View
        className='cu-dialog basis-lg'
        onClick={e => {
          e.stopPropagation();
        }}
        style={{ height: '100vh' }}
      >
        {this.props.children}
      </View>
    </View>
  );
  const bottomComponent = (
    <View
      className={`cu-modal bottom-modal ${showDrawer ? 'show' : ''}`}
      onClick={e => {
        hideModal();
        e.stopPropagation();
      }}
    >
      <View className='cu-dialog'>{this.props.children}</View>
    </View>
  );
  return props.direction === 'left'
    ? leftComponent
    : props.direction === 'right'
    ? rightComponent
    : bottomComponent;
}

ClDrawer.options = {
  addGlobalClass: true
};

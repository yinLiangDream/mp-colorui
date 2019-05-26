import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { IProps } from '../../../@types/drawer';

export default function ClDrawer(props: IProps) {
  const hideModal = () => {
    props.onClickShadow && props.onClickShadow();
  };
  const leftComponent = (
    <View
      className={`cu-modal drawer-modal justify-start ${
        props.show ? 'show' : ''
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
        props.show ? 'show' : ''
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
      className={`cu-modal bottom-modal ${props.show ? 'show' : ''}`}
      onClick={e => {
        hideModal();
        e.stopPropagation();
      }}
    >
      <View
        className='cu-dialog'
        style={{ maxHeight: '70vh' }}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {this.props.children}
      </View>
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

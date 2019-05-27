import Taro from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import { IProps } from '../../../@types/screenDrawer';

export default function ClScreenDrawer(props: IProps) {
  const hideModal = () => {
    props.onHide && props.onHide();
  };
  return (
    <View>
      <View
        className={`DrawerClose ${props.show ? 'show' : ''}`}
        onClick={hideModal}
      >
        <Text className='cuIcon-pullright' />
      </View>
      <ScrollView
        scrollY
        className={`DrawerWindow ${props.show ? 'show' : ''}`}
      >
        {this.props.children}
      </ScrollView>
    </View>
  );
}

ClScreenDrawer.options = {
  addGlobalClass: true
}
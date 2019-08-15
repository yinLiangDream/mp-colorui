import Taro, { useRef, useState, render } from '@tarojs/taro';
import { View } from '@tarojs/components';
import ClSelect from '../../components/select';

export default class Index extends Taro.Component {
  render() {
    return (
      <View>
        <ClSelect mode="region" />
        <ClSelect mode="date" />
      </View>
    );
  }
}

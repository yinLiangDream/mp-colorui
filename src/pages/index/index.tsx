import Taro, {useRef, useState} from '@tarojs/taro';
import ClVerticalTab from '../../components/verticalTab';
import { View } from '@tarojs/components';
import ClVerticalTabCell from '../../components/verticalTab/verticalTabCell';


export default class Index extends Taro.Component {
  render() {
    const tabs = [...Array(50)].map((key, index) => ({name: 'tab-' + index, id: 'id-' + index}))
    return (
      <ClVerticalTab tabs={tabs} height={1000}>
        <View>
          {tabs.map((item) => (
            <View id={item.id} key={item.name}>
              <ClVerticalTabCell>{item.name}</ClVerticalTabCell>
            </View>
          ))}
        </View>
      </ClVerticalTab>
    )
  }
}

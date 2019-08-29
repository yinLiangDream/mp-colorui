import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import ClLayout from '../../components/layout';
import ClAccordion from '../../components/accordion';
import ClCard from '../../components/card';
import ClText from '../../components/text';
import ClTitleBar from '../../components/titleBar';
import ClFlex from '../../components/flex';
import ClButton from '../../components/button';
import ClTip from '../../components/tip';
import ClIcon from '../../components/icon'
import ClForm from '../../components/form'
import ClFormItem from '../../components/form/formItem'
import ClInput from '../../components/input'
import ClCheckbox from '../../components/checkbox';
import ClVerticalTabCell from '../../components/verticalTab/verticalTabCell';
import ClVerticalTab from '../../components/verticalTab';

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
    );
  }
}

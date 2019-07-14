import { View } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';
import ClAccordion from '../../components/accordion';
import ClCard from "../../components/card";
import ClLayout from "../../components/layout";
import ClText from "../../components/text";

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };

  state = {
    show: false,
    step: 0
  };

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <ClAccordion title='道德经'>
          <ClLayout padding='normal' paddingDirection='around'>
            <ClCard type='full'>
              <ClText text='道可道，非常道。名可名，非常名。无名天地之始。有名万物之母。' textColor='blue'/>
            </ClCard>
            <ClCard type='full'>
              <ClText text='有无相生，难易相成，长短相形，高下相盈，音声相和，前后相随。恒也。' textColor='brown'/>
            </ClCard>
            <ClCard type='full'>
              <ClText text='上善若水。水善利万物而不争，处众人之所恶，故几于道。' textColor='red'/>
            </ClCard>
            <ClCard type='full'>
              <ClText text='道生一，一生二，二生三，三生万物。万物负阴而抱阳，冲气以为和。'/>
            </ClCard>
          </ClLayout>
        </ClAccordion>
      </View>
    );
  }
}

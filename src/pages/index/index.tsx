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
import ClImagePicker from '../../components/imagePicker';

export default class Index extends Taro.Component {
  state = {
    imgList: []
  }
  success(list = []) {
    this.setState({
      imgList: list
    })
  }
  render() {
    // const tabs = [...Array(50)].map((key, index) => ({name: 'tab-' + index, id: 'id-' + index}))
    return (
      <View>
        <ClImagePicker
          chooseImgObj={{
            success: this.success.bind(this)
          }}
          imgList={this.state.imgList} />
        <ClButton shape='round' onClick={() => {
          console.log(this.state)
          this.setState({
            imgList: this.state.imgList.map((item: any) => {
              item.status = 'loading'
              return item
            })
          })
          this.state.imgList.forEach((item: any, index: number) => {
            item.status = 'loading'
            setTimeout(() => {
              item.status = 'success'
              if (index === 1) item.status = 'fail'
              this.setState({
                imgList: this.state.imgList
              })
            }, (index + 1) * 1000)
          })
        }}>开始上传</ClButton>
      </View>
    );
  }
}

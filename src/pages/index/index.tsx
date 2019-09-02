import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import ClLayout from '../../components/layout'
import ClAccordion from '../../components/accordion'
import ClCard from '../../components/card'
import ClText from '../../components/text'
import ClTitleBar from '../../components/titleBar'
import ClFlex from '../../components/flex'
import ClButton from '../../components/button'
import ClTip from '../../components/tip'
import ClIcon from '../../components/icon'
import ClForm from '../../components/form'
import ClFormItem from '../../components/form/formItem'
import ClInput from '../../components/input'
import ClCheckbox from '../../components/checkbox'
import ClVerticalTabCell from '../../components/verticalTab/verticalTabCell'
import ClVerticalTab from '../../components/verticalTab'
import ClImagePicker from '../../components/imagePicker'
import ClSearchBar from '../../components/searchBar'
import { provinceArr, getAreaData } from '../../components/utils/area'
import ClMenuList from '../../components/menuList';

let timer: any = undefined
export default class Index extends Taro.Component {
  state = {
    imgList: [],
    result: provinceArr.map((item) => ({
      title: `${item[1]}(${item[0]})`,
      desc: getAreaData({
        key: item[0],
        value: item[1]
      }).district.join('|')
    })),
    filterResult: [],
    showLoading: false,
    value: '123'
  }

  success(list = []) {
    this.setState({
      imgList: list
    })
  }

  onSearch(value) {
    console.log(value)
    this.setState({
      value: '222'
    })
  }

  render() {
    const { filterResult, result, showLoading } = this.state
    return (
      <View>
        <ClMenuList shortBorder list={[
          {
            title: '123'
          },
          {
            title: '234'
          }
        ]} />
        <ClInput value={this.state.value} title='aaaaa' pattern='material' />
        <ClLayout padding='normal' paddingDirection='around'>
          <ClFlex justify='between'>
            <ClTip message='我是上方提示' direction='top'>
              <ClButton text='上方' shape='round' />
            </ClTip>
            <ClTip message='我是右方提示' direction='right'>
              <ClButton text='右方' shape='round' />
            </ClTip>
            <ClTip message='我是左方提示' direction='left'>
              <ClButton text='左方' shape='round' />
            </ClTip>
            <ClTip message='我是下方提示' direction='bottom'>
              <ClButton text='下方' shape='round' />
            </ClTip>
          </ClFlex>
        </ClLayout>
        <ClSearchBar
          shape='radius'
          bgColor='gradualBlue'
          showLoading={showLoading}
          onSearch={value => {
            this.onSearch(value)
          }}
          onTouchResult={(index) => {
            Taro.showToast({
              title: `您点击了${filterResult[index].title}省`,
              icon: 'none'
            })
          }}
          onInput={value => {
            this.setState({
              showLoading: true
            })
            if (timer) clearTimeout(timer)
            if (value === '') {
              clearTimeout(timer)
              setTimeout(() => {
                this.setState({
                  showLoading: false,
                  filterResult: []
                })
              })
              return
            }
            timer = setTimeout(() => {
              this.setState({
                showLoading: false,
                filterResult: result.filter(item => item.title.includes(value) || item.desc.includes(value))
              })
            }, 1000)
          }}
          showResult
          result={filterResult}
        />
        <ClImagePicker
          chooseImgObj={{
            success: this.success.bind(this)
          }}
          imgList={this.state.imgList}
        />
        <ClLayout padding='normal' paddingDirection='around'>
          <ClButton
            shape='round'
            long
            onClick={() => {
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
            }}
          >开始上传</ClButton>
        </ClLayout>
      </View>
    )
  }
}

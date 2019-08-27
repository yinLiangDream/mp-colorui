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

export default class Index extends Taro.Component {
  static config = {
    navigationBarTitleText: 'Form 表单'
  };
  ref = null;
  refFunc = node => {
    this.ref = node;
  };
  handleSubmit() {
  }
  state = {
    model: {
      name: '我是名字',
      phone: '188',
      hobby: []
    },
    message: '',
    showMessage: false,
    messageType: 'info'
  };
  render() {
    const rules = {
      name(rule, value, callback) {
        if (!rule.required(value)) {
          callback('姓名不能为空');
          return false;
        }
        if (value.length > 5) {
          callback('姓名长度不能超过 5');
          return false;
        }
        return true;
      },
      phone(rule, value, callback) {
        if (!rule.required(value)) {
          callback('手机号码不能为空');
          return false;
        }
        if (!rule.phone(value)) {
          callback('手机号码不正确');
          return false;
        }
        return true;
      },
      hobby(rule, value, callback) {
        if (value.length < 2) {
          callback('至少选择 2 项')
          return false
        }
        return true
      }
    };
    const { model } = this.state;
    return (
      <ClLayout>
        <ClTitleBar title='方向' type='icon' />
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
        <ClForm rules={rules} model={model}>
          <ClFormItem prop='hobby'>
            <ClCheckbox type='form' shape='round' title='选择爱好' checkboxGroup={[
              {
                key: '下棋',
                value: 'xiaqi'
              },
              {
                key: '画画',
                value: 'huahua'
              },
              {
                key: '唱歌',
                value: 'singsong'
              }
            ]}
              onChange={value => {
                console.log(value)
                this.setState({
                  model: {
                    ...model,
                    hobby: value
                  }
                })
              }}
            />
          </ClFormItem>
        </ClForm>
        <ClCard>
          <ClInput title='标准形式' placeholder='请输入姓名' />
          <ClInput title='material 形式' placeholder='请输入年龄' type='number' pattern='material' />
        </ClCard>
      </ClLayout>
    );
  }
}

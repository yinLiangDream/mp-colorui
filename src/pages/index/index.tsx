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
        <ClCard>
          <ClInput title='标准形式' placeholder='请输入姓名' />
          <ClInput title='material 形式' placeholder='请输入年龄' type='idcard' pattern='material' />
        </ClCard>
      </ClLayout>
    );
  }
}

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
        <ClTitleBar title='实时校验&&失焦校验' textColor='black' type='icon' />
        <ClCard>
          <ClForm ref={this.refFunc} model={model} rules={rules}>
            <ClFormItem prop='name' required>
              <ClInput
                title='姓名（失焦）'
                titleWidth={200}
                value={model.name}
                onBlur={value => {
                  this.setState({
                    model: {
                      ...this.state.model,
                      name: value
                    }
                  });
                }}
              />
            </ClFormItem>
            <ClFormItem prop='phone' required>
              <ClInput
                pattern='material'
                title='手机号码（实时）'
                value={model.phone}
                onChange={value => {
                  this.setState({
                    model: {
                      ...this.state.model,
                      phone: value
                    }
                  });
                }}
              />
            </ClFormItem>
          </ClForm>
        </ClCard>
        <ClButton text='校验' shape='round' long disabled onClick={this.handleSubmit.bind(this)} />
      </ClLayout>
    );
  }
}

import Taro, {useRef, useState} from '@tarojs/taro';
import {Input, View} from '@tarojs/components'
import ClLayout from '../../components/layout';
import ClTitleBar from '../../components/titleBar';
import ClTimeline from '../../components/timeline';
import ClDivider from '../../components/divider';
import ClForm from '../../components/form';
import ClFormItem from "../../components/form/formItem";
import ClInput from '../../components/input'
import ClButton from '../../components/button'


export default class Index extends Taro.Component {
  constructor(props) {
    super(props);
  }
  state = {
    model: {
      name: 'aaa',
      phone: '1888888888'
    },
    rules: {
      name(rule, value, callback) {
        // rule.phone
        // rule.email
        // rule.range
        // rule.required
        // rule.en
        // rule.money
        // rule.code
        // rule.number
        // rule.cn
        // rule.ip
        // rule.url
        // rule.idCard
        if (!rule.required(value)) {
          callback('姓名不能为空');
          return false
        }
          if (value.length > 5) {
          callback('姓名长度不能超过 5');
          return false
        }
        return true
      },
      phone(rule, value, callback) {
        if (!rule.required(value)) {
          callback('手机号码不能为空')
          return false
        }
        if (!rule.phone(value)) {
          callback('手机号码长度不正确')
          return false
        }
        return true
      }
    }
  }
  ref = null;
  refFunc = (node) => {
    this.ref = node
  };
  handleSubmit() {
    this.ref.validate((success) => {
      console.log(success)
    })
  }
  render() {
    const { model, rules } = this.state;
    return (
      <ClLayout>
        <ClForm ref={this.refFunc} model={model} rules={rules}>
          <ClFormItem prop='name' required>
            <ClInput title='姓名' value={model.name} onChange={(value) => {
              this.setState({
                model: {
                  ...this.state.model,
                  name: value
                }
              })
            }}
            />
          </ClFormItem>
          <ClFormItem prop='phone' required>
            <ClInput title='手机号码' value={model.phone} onChange={(value) => {
              this.setState({
                model: {
                  ...this.state.model,
                  phone: value
                }
              })
            }}
            />
          </ClFormItem>
        </ClForm>
        <ClButton text={'校验'} onClick={this.handleSubmit.bind(this)} />
        <ClDivider color='blue' size='xxlarge'>我是分割线</ClDivider>
        <ClTitleBar title='时间轴' textColor='black' type='icon' subTitle='timeline' />
        <ClTimeline times={[
          {
            node: '2019'
          },
          {
            content: ['我是内容，默认背景']
          }, {
            content: ['我是内容，有背景'],
            bgColor: 'light-blue'
          }, {
            content: ['我是里程碑，我有图标'],
            bgColor: 'light-red',
            icon: 'emoji'
          }, {
            content: ['我是里程碑，我有图标，我图标有颜色'],
            bgColor: 'red',
            icon: 'emoji',
            iconColor: 'red'
          }
        ]}
        />
      </ClLayout>
    )
  }
}

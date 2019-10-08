****

## 使用说明

```jsx
import {ClForm, ClFormItem} from 'mp-colorui'
```

## 一般用法

> 由于小程序的 view 没有失焦事件，目前组件库只能做到 model 里面的数据更新就会进行校验，如果想做到失焦校验请手动在 Input 组件下绑定 onBlur 事件，在此事件里面进行数据更新。

> Form 组件必须和 FormItem 配合使用。

### 小程序代码示例

```jsx
import Taro from '@tarojs/taro';
import {
  ClLayout,
  ClForm,
  ClFormItem,
  ClInput,
  ClButton,
  ClTitleBar,
  ClCard,
  ClMessage, ClCheckbox
} from 'mp-colorui'

export default class Cl_Form extends Taro.Component {
  static config = {
    navigationBarTitleText: 'Form 表单'
  };
  ref = null;
  refFunc = node => {
    this.ref = node;
  };
  handleSubmit() {
    this.ref.validate(success => {
      this.setState({
        message: `数据校验${success ? '通过' : '未通过' }`,
        messageType: success ? 'success' : 'error',
        showMessage: true
      })
    });
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
    const { model, showMessage, message, messageType } = this.state;
    return (
      <ClLayout>
        <ClMessage message={message} show={showMessage} type={messageType} onClose={this.setState({
          showMessage: false
        })}
        />
        <ClTitleBar title='实时校验&&失焦校验' textColor='black' type='icon' />
        <ClCard>
          由于小程序的 view 没有失焦事件，目前组件库只能做到 model 里面的数据更新就会进行校验，如果想做到失焦校验请手动在 Input 组件下绑定 onBlur 事件，在此事件里面进行数据更新。
          具体用法请看文档。
        </ClCard>
        <ClCard>
          <ClForm ref={this.refFunc} model={model} rules={rules}>
            <ClFormItem prop='name' required>
              <ClInput
                title='姓名（失焦）'
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
        </ClCard>
        <ClButton text='校验' shape='round' long onClick={this.handleSubmit.bind(this)} />
      </ClLayout>
    );
  }
}

```

### 内置函数

> rules 里面的校验函数第一个参数 rule 是传入的内置函数，以简化部分校验规则的手动实现，具体函数请查看[内置工具](/util/rule)



### 整体校验

> 在 Form 组件上加入 ref，使用 ref 下的 validate 函数，此函数接受一个回调函数，回调函数会传入一个 boolean 值作为全局校验的最终结果，具体使用方法请查看上方示例。
>
> ```jsx
> this.ref.validate(success => {
>   if (success) {
>     // 校验成功
>   } else {
>     // 校验失败
>   }
> })
> ```
>

## 参数说明

### Form 参数

| 参数  | 说明                                                                                                                                      | 类型   | 可选值 | 默认值 |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| model | *数据模型*                                                                                                                                | object | -      | {}     |
| rules | *校验规则(rules 里面的 key 必须和 model 对应，以校验对应 model 的值，且函数必须返回 boolean 值告诉组件库校验成功或者失败，具体看上方示例* | object | -      | {}     |

### FormItem 参数

| 参数     | 说明                                                                | 类型    | 可选值 | 默认值    |
| -------- | ------------------------------------------------------------------- | ------- | ------ | --------- |
| prop     | *prop 必须和 model 里的 key 值对应*                                 | string  | -      | -         |
| required | *添加为必输项（此功能仅仅作为界面红点，具体校验请写在 rules 里面）* | boolean | -      | *`false`* |


<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/form/index" />

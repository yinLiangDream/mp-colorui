import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { IProps } from '../../../../@types/formItem'
// import { FormContext } from '../index'
import defaultRules from '../../utils/rules'
import context from '../context'

import './index.scss'

export default class ClFormItem extends Taro.Component<IProps> {
  // static contextType = FormContext
  static defaultProps: IProps = {
    prop: '',
    required: false
  }
  render() {
    const [tip, setTip] = useState('')
    const [err, setErr] = useState(false)
    const { prop, required } = this.props
    // const { model, rules } = useContext(FormContext)
    // console.log(model, rules, FormContext)
    // const modelData = model || {}
    const modelData = context.inject('model') || {};
    // const rulesData = rules || {}
    const rulesData = context.inject('rules') || {}
    const value = modelData[prop || ''] || ''
    const ruleFunc = rulesData[prop || ''] || function () {}
    let message = ''
    const callback = (str: string = '') => {
      message = str
    };
    const flag = ruleFunc(defaultRules, value, callback);
    useEffect(() => {
      setErr(!flag)
    }, [flag])
    useEffect(() => {
      setTip(message)
    }, [message])
    return (
      <View className={err ? 'cu-formItem-err' : 'cu-formItem'}>
        {this.props.children}
        {
          err ? <View className='cu-formItem-err-tip'>
            {tip}
          </View> : ''
        }
        {
          required ? <View className='cu-formItem-required' /> : ''
        }
      </View>
    )
  }
}

import Taro, {useContext} from '@tarojs/taro'
import { IProps } from '../../../@types/form'
import {View} from "@tarojs/components";
import defaultRules from '../utils/rules'
import context from './context'

type init = {
  model?: {},
  rules?: {}
}

const date: init = {};
export const FormContext = Taro.createContext(date);
export default class ClForm extends Taro.Component<IProps> {
  static contextType = FormContext
  static defaultProps: IProps = {
    model: {},
    rules: {}
  }
  static options = {
    addGlobalClass: true
  }
  validate(fn) {
    let flag = true;
    const { model, rules } = this.props;
    const modelData = model || {};
    const rulesData = rules || {};
    const ruleKeys = Object.keys(rules || {}) || [];
    ruleKeys.forEach((key) => {
      const ruleFunc = rulesData[key];
      const value = modelData[key];
      flag = flag && ruleFunc(defaultRules, value, () => {})
    });
    return fn(flag);
  };
  render (): any {
    const { model, rules } = this.props;
    context.provider = {
      model,
      rules
    }
    return (
      <View>
        <FormContext.Provider value={{ model, rules }}>
          {this.props.children}
        </FormContext.Provider>
      </View>
    )
  }
}

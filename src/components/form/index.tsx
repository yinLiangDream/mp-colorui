import Taro from "@tarojs/taro";
import { Component, createContext } from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../lib";
import { IProps } from "../../../@types/form";
import defaultRules from "../../lib/rules";
import context from "./context";

type init = {
  model?: {};
  rules?: {};
};

const date: init = {};
export const FormContext = createContext(date);
export default class ClForm extends Component<IProps> {
  static contextType = FormContext;
  static defaultProps: IProps = {
    model: {},
    rules: {}
  };
  static options = {
    addGlobalClass: true
  };
  validate(fn) {
    let flag = true;
    const { model, rules } = this.props;
    const modelData = model || {};
    const rulesData = rules || {};
    const ruleKeys = Object.keys(rules || {}) || [];
    ruleKeys.forEach(key => {
      const ruleFunc = rulesData[key];
      const value = modelData[key];
      flag = flag && ruleFunc(defaultRules, value, () => {});
    });
    return fn(flag);
  }
  render(): any {
    const { model, rules } = this.props;
    context.provider = {
      model,
      rules
    };
    return (
      <View
        className={classNames(this.props.className)}
        style={Object.assign({}, this.props.style)}
      >
        <FormContext.Provider value={{ model, rules }}>
          {this.props.children}
        </FormContext.Provider>
      </View>
    );
  }
}

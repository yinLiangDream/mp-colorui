import React from 'react';
import { View } from '@tarojs/components';
import { classNames } from '../../lib';
import defaultRules from '../../lib/rules';
import context from './context';

const date = {};
export const FormContext = React.createContext(date);
export default class ClForm extends React.Component {
    validate(fn) {
        let flag = true;
        const { model, rules } = this.props;
        const modelData = model || {};
        const rulesData = rules || {};
        const ruleKeys = Object.keys(rules || {}) || [];
        ruleKeys.forEach(key => {
            const ruleFunc = rulesData[key];
            const value = modelData[key];
            flag = flag && ruleFunc(defaultRules, value, () => { });
        });
        return fn(flag);
    }
    render() {
        const { model, rules } = this.props;
        context.provider = {
            model,
            rules
        };
        return (React.createElement(View, { className: classNames(this.props.className), style: Object.assign({}, this.props.style) },
            React.createElement(FormContext.Provider, { value: { model, rules } }, this.props.children)));
    }
}
ClForm.contextType = FormContext;
ClForm.defaultProps = {
    model: {},
    rules: {}
};
ClForm.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
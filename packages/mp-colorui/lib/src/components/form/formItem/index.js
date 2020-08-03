import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { classNames } from '../../../lib';
import defaultRules from '../../../lib/rules';
import context from '../context';
import './index.scss';

export default function ClFormItem(props = {
    prop: '',
    required: false
}) {
    const [tip, setTip] = useState('');
    const [err, setErr] = useState(false);
    const [firstInit, setFirstInit] = useState(true);
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState('');
    const [beforeModelData, setBeforeModelData] = useState({});
    const { prop, required } = props;
    const modelData = context.inject('model') || {};
    const rulesData = context.inject('rules') || {};
    const value = modelData[prop || ''] || '';
    const ruleFunc = rulesData[prop || ''] ||
        function () {
            return true;
        };
    // let message = ''
    const callback = (str = '') => {
        setMessage(str);
        // message = str
    };
    // let flag = true;
    useEffect(() => {
        if (firstInit)
            setFirstInit(false);
    }, []);
    useEffect(() => {
        if (firstInit) {
            setBeforeModelData(modelData);
        }
        else {
            Object.keys(modelData).forEach(key => {
                if (beforeModelData[key] !== modelData[key] && prop === key) {
                    setFlag(ruleFunc(defaultRules, value, callback));
                }
            });
            setBeforeModelData(modelData);
        }
    }, [modelData]);
    useEffect(() => {
        setErr(!flag);
    }, [flag]);
    useEffect(() => {
        setTip(message);
    }, [message]);
    return (React.createElement(View, { className: classNames(err ? 'cu-formItem-err' : 'cu-formItem', props.className), style: Object.assign({}, props.style) },
        props.children,
        err ? React.createElement(View, { className: 'cu-formItem-err-tip' }, tip) : '',
        required ? React.createElement(View, { className: 'cu-formItem-required' }) : ''));
}
//# sourceMappingURL=index.js.map
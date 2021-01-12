import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import ClFlex from '../../flex';
import ClText from '../../text';
import ClLayout from '../../layout';
import ClIcon from '../../icon';
import { classNames, generateId } from '../../../lib';
import './index.scss';
export default function ClSearchResult(props) {
    const [resultState, setResultState] = useState(props.result || []);
    useEffect(() => {
        const list = props.result || [];
        setResultState(list.map((item) => {
            item.cu_search_bar_result_id = generateId();
            return item;
        }));
    }, [props.result]);
    const result = resultState || [];
    const showLoading = props.showLoading;
    const onTouchResult = props.onTouchResult;
    const resultComponent = result.map((item, index) => (React.createElement(View, { key: 'key-' + index, className: 'cl_search_result solid-bottom', onClick: () => {
            onTouchResult(index);
        } },
        React.createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
            React.createElement(ClText, { text: item.title, size: 'large' }),
            React.createElement(ClText, { text: item.desc, size: 'xsmall', cut: true })))));
    const loadingComponent = (React.createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
        React.createElement(View, { className: 'cl_search_loading' },
            React.createElement(ClIcon, { iconName: 'loading2' }))));
    return (React.createElement(View, { className: classNames(props.className), style: Object.assign({ width: '100%' }, props.style) },
        React.createElement(ClFlex, { direction: 'column', align: 'center', justify: 'center' }, showLoading ? loadingComponent : resultComponent)));
}
ClSearchResult.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map
import React, { useState, useEffect } from 'react';
import { Text, View } from '@tarojs/components';
import { classNames, generateId } from '../../../lib';

export default function ListRadio(props) {
    const [listState, setListState] = useState(props.list || []);
    useEffect(() => {
        const list = props.list || [];
        setListState(list.map((item) => {
            item.cu_radio_list_id = generateId();
            return item;
        }));
    }, [props.list]);
    const list = listState || [];
    const checkedValue = props.checkedValue;
    const [checked, setChecked] = useState(checkedValue);
    const listComponent = list.map((item) => (React.createElement(View, { key: item.cu_radio_list_id, className: classNames([
            'cu-item',
            {
                checked: checked === item.value,
                disabled: props.disabled
            }
        ]), onClick: () => {
            if (!props.disabled) {
                setChecked(item.value || '');
                props.onChange && props.onChange(item.value);
            }
        } },
        React.createElement(View, { className: 'content flex align-center' },
            React.createElement(Text, null, item.key)))));
    return React.createElement(View, { className: `cu-list menu` }, listComponent);
}
ListRadio.defaultProps = {
    list: [],
    checkedValue: '',
    onChange: () => { },
    disabled: false
};
ListRadio.options = {
    addGlobalClass: true
};
//# sourceMappingURL=ListRadio.js.map